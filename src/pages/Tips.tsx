import { Lightbulb } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { tips } from '@/lib/tipsData';
import { cn } from '@/lib/utils';

const Tips = () => {
  const { t, language } = useLanguage();

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      feeding: 'bg-primary/10 border-primary/20',
      nutrition: 'bg-warning/10 border-warning/20',
      hygiene: 'bg-blue-500/10 border-blue-500/20',
      care: 'bg-accent/10 border-accent/20',
    };
    return colors[category] || 'bg-secondary';
  };

  return (
    <div className="page-transition p-4">
      <div className="flex items-center gap-3 mb-2">
        <Lightbulb className="w-6 h-6 text-warning" />
        <h1 className="text-title text-foreground">{t.dailyTips}</h1>
      </div>
      <p className="text-muted-foreground mb-6">{t.tipsSubtitle}</p>

      <div className="grid gap-4">
        {tips.map((tip, index) => (
          <div
            key={tip.id}
            className={cn(
              'rounded-xl p-4 border shadow-soft animate-slide-up',
              getCategoryColor(tip.category)
            )}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-start gap-3">
              <span className="text-3xl">{tip.emoji}</span>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {tip.title[language]}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tip.content[language]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tips;
