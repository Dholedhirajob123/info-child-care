import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Play, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/contexts/LanguageContext';
import { sectionA, sectionB, tL, type SurveyQuestion, type SurveySection } from '@/lib/surveyData';
import { surveyStrings } from '@/lib/surveyI18n';
import { ParentInfoModal, type ParentInfo } from '@/components/ParentInfoModal';
import { ParentInfoBar } from '@/components/ParentInfoBar';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

type Answer = { value: string | string[]; other?: string };
type Answers = Record<string, Answer>;

const isAnswered = (q: SurveyQuestion, a?: Answer): boolean => {
  if (!a) return false;
  if (q.multiple) {
    const arr = Array.isArray(a.value) ? a.value : [];
    if (arr.length === 0) return false;
    if (arr.includes('Others') && q.allowOther && !a.other?.trim()) return false;
    return true;
  }
  if (typeof a.value !== 'string' || !a.value) return false;
  if (a.value === 'Others' && q.allowOther && !a.other?.trim()) return false;
  return true;
};

// Values are stored as English canonical text (option.en) so admin analytics remain consistent.
const answerToText = (q: SurveyQuestion, a: Answer): string => {
  if (q.multiple && Array.isArray(a.value)) {
    return a.value.map((v) => (v === 'Others' && a.other ? `Others: ${a.other}` : v)).join(', ');
  }
  const v = a.value as string;
  return v === 'Others' && a.other ? `Others: ${a.other}` : v;
};

const Quiz = () => {
  const { t, language } = useLanguage();
  const s = surveyStrings[language];
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [parentInfo, setParentInfo] = useState<ParentInfo | null>(null);
  const [step, setStep] = useState<'A' | 'B' | 'done'>('A');
  const [answers, setAnswers] = useState<Answers>({});
  const [submitting, setSubmitting] = useState(false);
  const [surveyId, setSurveyId] = useState<string | null>(null);
  const [showErrors, setShowErrors] = useState(false);

  const currentSection: SurveySection = step === 'A' ? sectionA : sectionB;

  const setSingle = (qid: string, value: string) =>
    setAnswers((prev) => ({ ...prev, [qid]: { ...prev[qid], value } }));
  const setOther = (qid: string, other: string) =>
    setAnswers((prev) => ({ ...prev, [qid]: { ...prev[qid], value: prev[qid]?.value ?? '', other } }));
  const toggleMulti = (qid: string, option: string) =>
    setAnswers((prev) => {
      const cur = Array.isArray(prev[qid]?.value) ? (prev[qid].value as string[]) : [];
      const next = cur.includes(option) ? cur.filter((v) => v !== option) : [...cur, option];
      return { ...prev, [qid]: { ...prev[qid], value: next } };
    });

  const allAnswered = (sec: SurveySection) => sec.questions.every((q) => isAnswered(q, answers[q.id]));

  const handleNext = () => {
    if (!allAnswered(sectionA)) { setShowErrors(true); return; }
    setShowErrors(false);
    setStep('B');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async () => {
    if (!allAnswered(sectionB)) { setShowErrors(true); return; }
    if (!parentInfo) return;
    setSubmitting(true);
    const all = [...sectionA.questions, ...sectionB.questions].map((q) => ({
      questionId: q.id,
      question: q.question.en,
      selectedText: answerToText(q, answers[q.id]),
    }));
    const newId = (typeof crypto !== 'undefined' && 'randomUUID' in crypto) ? crypto.randomUUID() : `${Date.now()}`;
    const { error } = await supabase
      .from('surveys')
      .insert({
        id: newId,
        parent_name: parentInfo.parentName,
        parent_email: parentInfo.parentEmail,
        gender: parentInfo.gender,
        answers: all as unknown as never,
        score: 0,
        total: sectionB.questions.length,
      });
    setSubmitting(false);
    if (error) {
      toast({ title: s.couldNotSubmit, description: error.message, variant: 'destructive' });
      return;
    }
    setSurveyId(newId);
    setStep('done');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRestart = () => {
    setParentInfo(null);
    setAnswers({});
    setStep('A');
    setSurveyId(null);
    setShowErrors(false);
  };

  // START SCREEN
  if (!parentInfo) {
    return (
      <div className="page-transition p-4">
        <div className="max-w-md mx-auto text-center py-12">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-title text-foreground mb-2">{s.healthSurvey}</h1>
          <p className="text-muted-foreground mb-2">{s.healthSurveyDesc}</p>
          <p className="text-xs text-muted-foreground mb-8">{s.healthSurveyFlow}</p>
          <Button size="lg" className="gap-2" onClick={() => setModalOpen(true)}>
            <Play className="w-4 h-4" /> {s.startQuizBtn}
          </Button>
          {/* <div className="mt-6">
            <Button variant="outline" size="sm" onClick={() => navigate('/admin/login')}>
              {s.adminLoginBtn}
            </Button>
          </div> */}
        </div>
        <ParentInfoModal open={modalOpen} onOpenChange={setModalOpen} onStart={(info) => { setParentInfo(info); setModalOpen(false); }} />
      </div>
    );
  }

  // THANK YOU SCREEN
  if (step === 'done') {
    return (
      <div className="page-transition p-4 max-w-md mx-auto text-center py-16">
        <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-12 h-12 text-success" />
        </div>
        <h1 className="text-title text-foreground mb-2">{s.thankYou}</h1>
        <p className="text-muted-foreground mb-6">{s.thankYouMsg}</p>
        {/* {surveyId && (
          <p className="text-xs text-muted-foreground mb-6">
            {s.surveyIdLabel}: <span className="font-mono">{surveyId}</span>
          </p>
        )} */}
        <div className="flex flex-col gap-3">
          <Button onClick={handleRestart}>{s.submitAnother}</Button>
          <Button variant="outline" onClick={() => navigate('/topics')}>{t.exploreTopics}</Button>
        </div>
      </div>
    );
  }

  // SECTION A or B
  return (
    <div className="page-transition p-4 max-w-2xl mx-auto pb-24">
      <ParentInfoBar info={parentInfo} />

      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="w-6 h-6 text-primary" />
          <h1 className="text-title text-foreground">{tL(currentSection.title, language)}</h1>
        </div>
        <p className="text-sm text-muted-foreground">{tL(currentSection.subtitle, language)}</p>
        <div className="mt-4 flex gap-2 text-xs">
          <span className={`px-2.5 py-1 rounded-full ${step === 'A' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>{tL(sectionA.title, language)}</span>
          <span className={`px-2.5 py-1 rounded-full ${step === 'B' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'}`}>{tL(sectionB.title, language)}</span>
        </div>
      </div>

      <div className="space-y-4">
        {currentSection.questions.map((q, idx) => {
          const a = answers[q.id];
          const invalid = showErrors && !isAnswered(q, a);
          return (
            <div key={q.id} className={`bg-card border rounded-xl p-4 shadow-soft ${invalid ? 'border-destructive' : 'border-border'}`}>
              <p className="font-medium text-foreground mb-3">
                <span className="text-muted-foreground mr-1.5">{idx + 1}.</span>{tL(q.question, language)}
              </p>

              {q.multiple ? (
                <div className="space-y-2">
                  {q.options.map((opt) => {
                    const value = opt.en;
                    const checked = Array.isArray(a?.value) && a.value.includes(value);
                    return (
                      <div key={value} className="flex items-center gap-2">
                        <Checkbox id={`${q.id}-${value}`} checked={checked} onCheckedChange={() => toggleMulti(q.id, value)} />
                        <Label htmlFor={`${q.id}-${value}`} className="cursor-pointer font-normal">{tL(opt, language)}</Label>
                      </div>
                    );
                  })}
                  {q.allowOther && Array.isArray(a?.value) && a.value.includes('Others') && (
                    <Input placeholder={s.pleaseSpecify} value={a?.other ?? ''} onChange={(e) => setOther(q.id, e.target.value)} className="mt-2" />
                  )}
                </div>
              ) : (
                <>
                  <RadioGroup value={(a?.value as string) ?? ''} onValueChange={(v) => setSingle(q.id, v)} className="space-y-2">
                    {q.options.map((opt) => {
                      const value = opt.en;
                      return (
                        <div key={value} className="flex items-center gap-2">
                          <RadioGroupItem value={value} id={`${q.id}-${value}`} />
                          <Label htmlFor={`${q.id}-${value}`} className="cursor-pointer font-normal">{tL(opt, language)}</Label>
                        </div>
                      );
                    })}
                  </RadioGroup>
                  {q.allowOther && a?.value === 'Others' && (
                    <Input placeholder={s.pleaseSpecify} value={a?.other ?? ''} onChange={(e) => setOther(q.id, e.target.value)} className="mt-2" />
                  )}
                </>
              )}

              {invalid && <p className="text-xs text-destructive mt-2">{s.questionRequired}</p>}
            </div>
          );
        })}
      </div>

      {showErrors && !allAnswered(currentSection) && (
        <p className="text-sm text-destructive mt-4 text-center">{s.answerAllFirst}</p>
      )}

      <div className="mt-6 flex gap-3">
        {step === 'B' && (
          <Button variant="outline" onClick={() => { setStep('A'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex-1">
            {s.back}
          </Button>
        )}
        {step === 'A' ? (
          <Button onClick={handleNext} size="lg" className="flex-1">{s.nextSectionB}</Button>
        ) : (
          <Button onClick={handleSubmit} size="lg" className="flex-1" disabled={submitting}>
            {submitting ? s.submitting : s.submit}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
