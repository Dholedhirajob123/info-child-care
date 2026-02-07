import { Syringe, Check, Info } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { vaccinationSchedule } from '@/lib/vaccinationData';
import { cn } from '@/lib/utils';
import vaccinationHeroImg from '@/assets/vaccination/vaccination-hero.jpg';

const Vaccination = () => {
  const { t, language } = useLanguage();

  return (
    <div className="page-transition p-4">
      {/* Hero Image */}
      <div className="w-full h-40 rounded-2xl overflow-hidden mb-4 shadow-soft">
        <img 
          src={vaccinationHeroImg} 
          alt="Vaccination" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex items-center gap-3 mb-2">
        <Syringe className="w-6 h-6 text-primary" />
        <h1 className="text-title text-foreground">{t.vaccinationSchedule}</h1>
      </div>
      <p className="text-muted-foreground mb-6">{t.vaccinationSubtitle}</p>

      <div className="space-y-4">
        {vaccinationSchedule.map((month, index) => (
          <div
            key={month.month}
            className="bg-card rounded-xl p-4 shadow-soft animate-slide-up"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl">
                {month.emoji}
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{month.title[language]}</h3>
                {month.month === 0 && (
                  <span className="text-xs text-primary font-medium">{t.atBirth}</span>
                )}
              </div>
            </div>

            {/* Vaccines */}
            {month.vaccines.length > 0 ? (
              <div className="mb-3">
                <p className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                  {t.vaccines}
                </p>
                <ul className="space-y-1.5">
                  {month.vaccines.map((vaccine, vIndex) => (
                    <li
                      key={vIndex}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <div className="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-success" />
                      </div>
                      {vaccine.name}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            {/* Purpose */}
            <div className={cn(
              'p-3 rounded-lg',
              month.vaccines.length > 0 ? 'bg-secondary/50' : 'bg-accent/10'
            )}>
              <p className="text-sm text-foreground">
                <span className="font-medium">{month.vaccines.length > 0 ? t.purpose : t.careNote}: </span>
                {month.vaccines.length > 0 ? month.purpose[language] : month.careNote?.[language] || month.purpose[language]}
              </p>
            </div>

            {/* Care Note (if both vaccine and care note exist) */}
            {month.vaccines.length > 0 && month.careNote && (
              <div className="mt-2 p-3 bg-accent/10 rounded-lg flex items-start gap-2">
                <Info className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-accent">
                  {month.careNote[language]}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-6 p-4 bg-secondary/30 rounded-xl text-center">
        <p className="text-sm text-muted-foreground">
          📌 {language === 'en' 
            ? 'Always consult your pediatrician for the latest vaccination schedule'
            : language === 'hi'
            ? 'नवीनतम टीकाकरण अनुसूची के लिए हमेशा अपने बाल रोग विशेषज्ञ से परामर्श करें'
            : 'नवीनतम लसीकरण वेळापत्रकासाठी नेहमी आपल्या बालरोगतज्ञांचा सल्ला घ्या'
          }
        </p>
      </div>
    </div>
  );
};

export default Vaccination;
