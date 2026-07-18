import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, CheckCircle2, XCircle, ArrowRight, RotateCcw, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { quizQuestions } from '@/lib/quizData';
import { cn } from '@/lib/utils';
import { ParentInfoModal, type ParentInfo } from '@/components/ParentInfoModal';
import { ParentInfoBar } from '@/components/ParentInfoBar';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

interface AnswerRecord {
  questionId: string;
  question: string;
  options: string[];
  selectedIndex: number;
  selectedText: string;
  correctIndex: number;
  correct: boolean;
}

const Quiz = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [parentInfo, setParentInfo] = useState<ParentInfo | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);
  const [surveyId, setSurveyId] = useState<string | null>(null);

  const totalQuestions = quizQuestions.length;
  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleStart = (info: ParentInfo) => {
    setParentInfo(info);
    setModalOpen(false);
  };

  const handleAnswerSelect = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
    const isCorrect = index === currentQuestion.correctIndex;
    if (isCorrect) setScore((s) => s + 1);
    setAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        question: currentQuestion.question[language],
        options: currentQuestion.options[language],
        selectedIndex: index,
        selectedText: currentQuestion.options[language][index],
        correctIndex: currentQuestion.correctIndex,
        correct: isCorrect,
      },
    ]);
  };

  const saveSubmission = async (finalScore: number, finalAnswers: AnswerRecord[]) => {
    if (!parentInfo) return;
    const { data, error } = await supabase
      .from('surveys')
      .insert({
        parent_name: parentInfo.parentName,
        parent_email: parentInfo.parentEmail,
        gender: parentInfo.gender,
        answers: finalAnswers as unknown as never,
        score: finalScore,
        total: totalQuestions,
      })
      .select('id')
      .single();
    if (error) {
      toast({ title: 'Could not save submission', description: error.message, variant: 'destructive' });
      return;
    }
    setSurveyId(data.id);
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
      void saveSubmission(score, answers);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
    setAnswers([]);
    setSurveyId(null);
    setParentInfo(null);
  };

  // ============ START SCREEN ============
  if (!parentInfo) {
    return (
      <div className="page-transition p-4">
        <div className="max-w-md mx-auto text-center py-12">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-title text-foreground mb-2">{t.quiz}</h1>
          <p className="text-muted-foreground mb-8">
            Test your knowledge with {totalQuestions} questions on child nutrition and baby care.
          </p>
          <Button size="lg" className="gap-2" onClick={() => setModalOpen(true)}>
            <Play className="w-4 h-4" /> Start Quiz
          </Button>
        </div>
        <ParentInfoModal open={modalOpen} onOpenChange={setModalOpen} onStart={handleStart} />
      </div>
    );
  }

  // ============ RESULT SCREEN ============
  if (quizComplete) {
    const percentage = Math.round((score / totalQuestions) * 100);
    const circumference = 2 * Math.PI * 54;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="page-transition p-4 max-w-2xl mx-auto">
        {/* Parent Info header */}
        <div className="bg-card border border-border rounded-xl p-4 mb-6 shadow-soft">
          <h3 className="font-semibold text-foreground mb-2">Parent Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-sm">
            <div><span className="text-muted-foreground">Parent Name: </span>{parentInfo.parentName}</div>
            <div className="truncate"><span className="text-muted-foreground">Parent Email: </span>{parentInfo.parentEmail}</div>
            <div><span className="text-muted-foreground">Gender: </span>{parentInfo.gender}</div>
            {surveyId && <div className="truncate"><span className="text-muted-foreground">Survey ID: </span><span className="font-mono text-xs">{surveyId}</span></div>}
          </div>
        </div>

        <div className="text-center py-6">
          <div className="relative w-36 h-36 mx-auto mb-6">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="54" fill="none" stroke="hsl(var(--secondary))" strokeWidth="8" />
              <circle cx="60" cy="60" r="54" fill="none" stroke="hsl(var(--primary))" strokeWidth="8"
                strokeLinecap="round" strokeDasharray={circumference} strokeDashoffset={strokeDashoffset}
                className="transition-all duration-1000 ease-out" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-primary">{percentage}%</span>
              <span className="text-xs text-muted-foreground">{score}/{totalQuestions}</span>
            </div>
          </div>
          <h2 className="text-title text-foreground mb-2">{t.yourScore}</h2>
          <p className="text-muted-foreground mb-6">
            {percentage >= 80 ? '🌟 Excellent!' : percentage >= 50 ? '👍 Good effort!' : '📚 Keep learning!'}
          </p>
        </div>

        {/* Question Review */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-foreground mb-4">Question Review</h3>
          <div className="space-y-3">
            {answers.map((a, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-4 shadow-soft">
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-xs font-medium text-muted-foreground mt-1">Q{i + 1}</span>
                  <p className="font-medium text-foreground flex-1">{a.question}</p>
                  {a.correct
                    ? <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                    : <XCircle className="w-5 h-5 text-destructive shrink-0" />}
                </div>
                <div className="text-sm pl-6">
                  <p><span className="text-muted-foreground">Parent Answer: </span><span className="font-medium">{a.selectedText}</span></p>
                  {!a.correct && (
                    <p className="mt-1"><span className="text-muted-foreground">Correct: </span><span className="font-medium text-success">{a.options[a.correctIndex]}</span></p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 max-w-xs mx-auto">
          <Button onClick={handleRestart} className="gap-2">
            <RotateCcw className="w-4 h-4" /> {t.tryAgain}
          </Button>
          <Button variant="outline" onClick={() => navigate('/topics')}>{t.exploreTopics}</Button>
        </div>
      </div>
    );
  }

  // ============ QUESTION SCREEN ============
  return (
    <div className="page-transition p-4">
      <ParentInfoBar info={parentInfo} />

      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <BookOpen className="w-6 h-6 text-primary" />
          <h1 className="text-title text-foreground">{t.quiz}</h1>
        </div>
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>{t.question} {currentQuestionIndex + 1}/{totalQuestions}</span>
          <span>Score: {score}</span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-card rounded-xl p-6 mb-4 shadow-soft">
        <h2 className="text-lg font-semibold text-foreground leading-relaxed">
          {currentQuestion.question[language]}
        </h2>
      </div>

      <div className="space-y-3 mb-6">
        {currentQuestion.options[language].map((option, index) => {
          const isCorrect = index === currentQuestion.correctIndex;
          const isSelected = index === selectedAnswer;
          return (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showResult}
              className={cn(
                'w-full p-4 rounded-xl text-left transition-all flex items-center gap-3',
                showResult
                  ? isCorrect
                    ? 'bg-success/10 border-2 border-success'
                    : isSelected
                    ? 'bg-destructive/10 border-2 border-destructive'
                    : 'bg-card border-2 border-transparent opacity-50'
                  : 'bg-card border-2 border-transparent hover:border-primary/30 shadow-soft'
              )}
            >
              <div className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium',
                showResult && isCorrect
                  ? 'bg-success text-success-foreground'
                  : showResult && isSelected
                  ? 'bg-destructive text-destructive-foreground'
                  : 'bg-secondary text-secondary-foreground'
              )}>
                {showResult && isCorrect ? <CheckCircle2 className="w-5 h-5" />
                  : showResult && isSelected ? <XCircle className="w-5 h-5" />
                  : String.fromCharCode(65 + index)}
              </div>
              <span className="text-foreground">{option}</span>
            </button>
          );
        })}
      </div>

      {showResult && (
        <div className={cn(
          'p-4 rounded-xl mb-6 animate-slide-up',
          selectedAnswer === currentQuestion.correctIndex
            ? 'bg-success/10 border border-success/30'
            : 'bg-destructive/10 border border-destructive/30'
        )}>
          <p className="font-medium mb-1">
            {selectedAnswer === currentQuestion.correctIndex ? t.correct : t.incorrect}
          </p>
          <p className="text-sm text-muted-foreground">
            {currentQuestion.explanation[language]}
          </p>
        </div>
      )}

      {showResult && (
        <Button onClick={handleNext} className="w-full gap-2" size="lg">
          {currentQuestionIndex < totalQuestions - 1 ? t.nextQuestion : t.finishQuiz}
          <ArrowRight className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
};

export default Quiz;
