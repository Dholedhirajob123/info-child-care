import { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { type SurveyRow, type AnswerRecord } from '@/lib/adminExport';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { sectionA, sectionB, tL, type LocalizedText } from '@/lib/surveyData';
import { useLanguage } from '@/contexts/LanguageContext';
import { surveyStrings } from '@/lib/surveyI18n';

const ALL_Q = [...sectionA.questions, ...sectionB.questions];

const AdminSurvey = () => {
  const { id } = useParams();
  const { language } = useLanguage();
  const s = surveyStrings[language];
  const [row, setRow] = useState<SurveyRow | null>(null);
  const [allRows, setAllRows] = useState<SurveyRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    (async () => {
      const [{ data: one }, { data: all }] = await Promise.all([
        supabase.from('surveys').select('*').eq('id', id).maybeSingle(),
        supabase.from('surveys').select('*'),
      ]);
      setRow(one as unknown as SurveyRow | null);
      setAllRows((all as unknown as SurveyRow[]) ?? []);
      setLoading(false);
    })();
  }, [id]);

  const answers = useMemo(() => (row?.answers ?? []) as AnswerRecord[], [row]);

  // Distribution matches on canonical English option value, renders localized label
  const distributionFor = (qid: string, options: LocalizedText[]) => {
    const counts = new Map<string, number>();
    options.forEach((o) => counts.set(o.en, 0));
    allRows.forEach((r) => {
      const ans = ((r.answers ?? []) as AnswerRecord[]).find((a) => a.questionId === qid);
      if (!ans) return;
      const txt = (ans.selectedText || '').split(',').map((v) => v.trim().replace(/^Others:.*/, 'Others'));
      txt.forEach((t) => {
        if (counts.has(t)) counts.set(t, (counts.get(t) || 0) + 1);
      });
    });
    return options.map((o) => {
      const label = tL(o, language);
      return {
        name: label.length > 22 ? label.slice(0, 20) + '…' : label,
        full: label,
        canonical: o.en,
        count: counts.get(o.en) || 0,
      };
    });
  };

  // Localize a stored English selectedText for display
  const localizeSelected = (qid: string, stored: string): string => {
    const meta = ALL_Q.find((q) => q.id === qid);
    if (!meta || !stored) return stored;
    return stored
      .split(',')
      .map((raw) => {
        const v = raw.trim();
        const m = v.match(/^Others:\s*(.+)$/);
        if (m) {
          const other = ALL_Q.find((q) => q.id === qid)?.options.find((o) => o.en === 'Others');
          return `${other ? tL(other, language) : 'Others'}: ${m[1]}`;
        }
        const opt = meta.options.find((o) => o.en === v);
        return opt ? tL(opt, language) : v;
      })
      .join(', ');
  };

  if (loading) return <div className="p-8 text-center text-muted-foreground">{s.loadingText}</div>;
  if (!row) return <div className="p-8 text-center text-muted-foreground">{s.surveyNotFound}</div>;

  return (
    <div className="page-transition p-4 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
        <Button asChild variant="outline" size="sm" className="gap-1.5">
          <Link to="/admin/dashboard">
            <ArrowLeft className="w-4 h-4" /> {s.backBtn}
          </Link>
        </Button>
      </div>

      {/* Parent Information - Removed Survey ID, Reviewed, and Submission Date */}
      <div className="bg-card border border-border rounded-xl p-5 mb-4 shadow-soft">
        <h2 className="font-semibold text-foreground mb-3">{s.parentInformation}</h2>
        <dl className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 text-sm">
          <dt className="text-muted-foreground">{s.parentNameCol}</dt>
          <dd>{row.parent_name}</dd>
          <dt className="text-muted-foreground">{s.parentEmailLabel.replace(' *', '')}</dt>
          <dd className="break-all">{row.parent_email}</dd>
          <dt className="text-muted-foreground">{s.gender}</dt>
          <dd>{row.gender}</dd>
        </dl>
      </div>

      {/* Survey Answers & Response Distribution */}
      <div className="bg-card border border-border rounded-xl p-5 shadow-soft">
        <h2 className="font-semibold text-foreground mb-4">{s.surveyAnswersDist}</h2>
        <div className="space-y-6">
          {answers.map((a, i) => {
            const meta = ALL_Q.find((q) => q.id === a.questionId);
            const options = meta?.options ?? [];
            const data = distributionFor(a.questionId, options);
            const questionText = meta ? tL(meta.question, language) : a.question;
            const selectedRaw = a.selectedText || '';
            const selectedLocalized = localizeSelected(a.questionId, selectedRaw);
            return (
              <div key={a.questionId + i} className="border border-border rounded-lg p-4">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <p className="font-medium text-foreground">Q{i + 1}. {questionText}</p>
                </div>
                <p className="text-sm mb-3">
                  <span className="text-muted-foreground">{s.parentAnswerLabel}</span>
                  <span className="font-semibold text-primary">{selectedLocalized || '—'}</span>
                </p>
                {options.length > 0 && (
                  <div className="h-48 -ml-2">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 40 }}>
                        <XAxis dataKey="name" tick={{ fontSize: 11 }} angle={-20} textAnchor="end" interval={0} />
                        <YAxis allowDecimals={false} tick={{ fontSize: 11 }} />
                        <Tooltip formatter={(v: number) => [`${v}`, 'Count']} labelFormatter={(_, p) => (p?.[0]?.payload as { full: string })?.full ?? ''} />
                        <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                          {data.map((d, idx) => (
                            <Cell key={idx} fill={selectedRaw.split(',').map((x) => x.trim().replace(/^Others:.*/, 'Others')).includes(d.canonical) ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground) / 0.4)'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                )}
                <p className="text-[11px] text-muted-foreground mt-1">{s.chartFootnote(allRows.length)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminSurvey;