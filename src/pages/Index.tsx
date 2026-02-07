import { useNavigate } from 'react-router-dom';
import { ArrowRight, Download, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { usePWA } from '@/hooks/usePWA';

const Index = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { isInstallable, isInstalled, installApp } = usePWA();

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
          
          <p className="text-lg text-muted-foreground mb-4 max-w-md mx-auto">
            {t.welcomeSubtitle}
          </p>

          <p className="text-lg text-foreground font-semibold mb-4 max-w-md mx-auto">
            {t.Presentedby}
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
    </div>
  );
};

export default Index;
