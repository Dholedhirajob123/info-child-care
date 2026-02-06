import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { quizQuestions, QuizQuestion } from '@/lib/quizData';
import { topics, TopicCategory } from '@/lib/topicsData';
import { cn } from '@/lib/utils';

const Quiz = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<TopicCategory | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const categories: { id: TopicCategory; label: string; emoji: string }[] = [
    { id: 'breastfeeding', label: t.breastfeeding, emoji: '🤱' },
    { id: 'complementary', label: t.complementary, emoji: '🥣' },
    { id: 'hygiene', label: t.hygiene, emoji: '🛁' },
    { id: 'nutrition', label: t.nutrition, emoji: '🥗' },
  ];

  const filteredQuestions = selectedCategory
    ? quizQuestions.filter((q) => q.category === selectedCategory)
    : [];

  const currentQuestion = filteredQuestions[currentQuestionIndex];

  const handleCategorySelect = (category: TopicCategory) => {
    setSelectedCategory(category);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
  };

  const handleAnswerSelect = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
    setShowResult(true);
    if (index === currentQuestion.correctIndex) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setSelectedCategory(null);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
  };

  // Category Selection Screen
  if (!selectedCategory) {
    return (
      <div className="page-transition p-4">
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="w-6 h-6 text-primary" />
          <h1 className="text-title text-foreground">{t.quiz}</h1>
        </div>
        <p className="text-muted-foreground mb-6">{t.selectTopic}</p>

        <div className="grid gap-3">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              className="bg-card rounded-xl p-4 flex items-center gap-4 shadow-soft hover:shadow-medium transition-all animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-3xl">
                {category.emoji}
              </div>
              <div className="flex-1 text-left">
                <h3 className="font-semibold text-foreground">{category.label}</h3>
                <p className="text-sm text-muted-foreground">
                  {quizQuestions.filter((q) => q.category === category.id).length} questions
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground" />
            </button>
          ))}
        </div>
      </div>
    );
  }

  // Quiz Complete Screen
  if (quizComplete) {
    const percentage = Math.round((score / filteredQuestions.length) * 100);
    return (
      <div className="page-transition p-4 text-center">
        <div className="py-12">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Trophy className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-title text-foreground mb-2">{t.yourScore}</h2>
          <p className="text-4xl font-bold text-primary mb-2">
            {score}/{filteredQuestions.length}
          </p>
          <p className="text-muted-foreground mb-8">{percentage}%</p>

          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            <Button onClick={handleRestart} className="gap-2">
              <RotateCcw className="w-4 h-4" />
              {t.tryAgain}
            </Button>
            <Button variant="outline" onClick={() => navigate('/topics')}>
              {t.exploreTopics}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Quiz Question Screen
  return (
    <div className="page-transition p-4">
      {/* Progress */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>{t.question} {currentQuestionIndex + 1}/{filteredQuestions.length}</span>
          <span>Score: {score}</span>
        </div>
        <div className="h-2 bg-secondary rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${((currentQuestionIndex + 1) / filteredQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="bg-card rounded-xl p-6 mb-4 shadow-soft">
        <h2 className="text-lg font-semibold text-foreground leading-relaxed">
          {currentQuestion.question[language]}
        </h2>
      </div>

      {/* Options */}
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
                {showResult && isCorrect ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : showResult && isSelected ? (
                  <XCircle className="w-5 h-5" />
                ) : (
                  String.fromCharCode(65 + index)
                )}
              </div>
              <span className="text-foreground">{option}</span>
            </button>
          );
        })}
      </div>

      {/* Explanation */}
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

      {/* Next Button */}
      {showResult && (
        <Button onClick={handleNext} className="w-full gap-2" size="lg">
          {currentQuestionIndex < filteredQuestions.length - 1 ? t.nextQuestion : t.finishQuiz}
          <ArrowRight className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
};

export default Quiz;
