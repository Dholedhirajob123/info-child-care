import { useNavigate } from 'react-router-dom';
import { ArrowRight, Download, BookOpen, Shield, Globe, Wifi } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePWA } from '@/hooks/usePWA';

const Index = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { isInstallable, isInstalled, installApp } = usePWA();

  const benefits = [
    {
      icon: Shield,
      title: t.expertGuidance,
      description: t.expertGuidanceDesc,
    },
    {
      icon: Globe,
      title: t.multilingualSupport,
      description: t.multilingualSupportDesc,
    },
    {
      icon: Wifi,
      title: t.offlineAccess,
      description: t.offlineAccessDesc,
    },
    {
      icon: BookOpen,
      title: t.evidenceBased,
      description: t.evidenceBasedDesc,
    },
  ];

  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="hero-section py-12 px-4">
        <div className="container max-w-lg mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-soft">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">{t.appTagline}</span>
          </div>
          
          <h1 className="text-display text-foreground mb-4">
            {t.welcome}
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
            {t.welcomeSubtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              size="lg" 
              className="gap-2 shadow-medium"
              onClick={() => navigate('/topics')}
            >
              {t.exploreTopics}
              <ArrowRight className="w-4 h-4" />
            </Button>
            
            {isInstallable && !isInstalled && (
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2"
                onClick={installApp}
              >
                <Download className="w-4 h-4" />
                {t.installApp}
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-10 px-4 bg-secondary/30">
        <div className="container max-w-lg mx-auto">
          <h2 className="text-title text-center text-foreground mb-8">
            {t.keyBenefits}
          </h2>
          
          <div className="grid gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-4 shadow-soft flex items-start gap-4 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-8 px-4 text-center">
        <p className="text-sm text-muted-foreground">
          {t.supportedBy}
        </p>
        <div className="flex items-center justify-center gap-4 mt-4 opacity-60">
          <span className="text-xl">🏥</span>
          <span className="text-xl">🦄</span>
        </div>
      </section>
    </div>
  );
};

export default Index;
