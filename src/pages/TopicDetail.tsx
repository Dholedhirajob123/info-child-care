import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useLanguage } from '@/contexts/LanguageContext';
import { topics, getCategoryColor } from '@/lib/topicsData';
import { cn } from '@/lib/utils';

const TopicDetail = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();
  const { t, language } = useLanguage();

  const topic = topics.find((t) => t.id === topicId);

  if (!topic) {
    return (
      <div className="p-4 text-center">
        <p className="text-muted-foreground">Topic not found</p>
        <Button variant="link" onClick={() => navigate('/topics')}>
          {t.backToTopics}
        </Button>
      </div>
    );
  }

  return (
    <div className="page-transition">
      {/* Back Button */}
      <div className="p-4 pb-0">
        <Button
          variant="ghost"
          size="sm"
          className="gap-1 -ml-2 text-muted-foreground hover:text-foreground"
          onClick={() => navigate('/topics')}
        >
          <ArrowLeft className="w-4 h-4" />
          {t.backToTopics}
        </Button>
      </div>

      {/* Header */}
      <div className="p-4 pt-2">
        <div className="flex items-center gap-3 mb-4">
          <div className={cn(
            'w-14 h-14 rounded-xl flex items-center justify-center text-3xl',
            getCategoryColor(topic.category)
          )}>
            {topic.emoji}
          </div>
          <h1 className="text-title text-foreground">{topic.title[language]}</h1>
        </div>
      </div>

      {/* Description */}
      <div className="hero-section mx-4 rounded-xl p-4 mb-4">
        <p className="text-foreground leading-relaxed">{topic.description[language]}</p>
      </div>

      {/* Do's and Don'ts */}
      <div className="px-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Do's */}
          <div className="dos-card bg-card rounded-xl p-4">
            <h3 className="font-semibold text-success flex items-center gap-2 mb-3">
              <Check className="w-5 h-5" />
              {t.dos}
            </h3>
            <ul className="space-y-2">
              {topic.dos[language].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Don'ts */}
          <div className="donts-card bg-card rounded-xl p-4">
            <h3 className="font-semibold text-destructive flex items-center gap-2 mb-3">
              <X className="w-5 h-5" />
              {t.donts}
            </h3>
            <ul className="space-y-2">
              {topic.donts[language].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-foreground">
                  <X className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* FAQs */}
      {topic.faqs.length > 0 && (
        <div className="px-4 pb-8">
          <h3 className="font-semibold text-foreground mb-3">{t.faq}</h3>
          <Accordion type="single" collapsible className="bg-card rounded-xl overflow-hidden">
            {topic.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border-border">
                <AccordionTrigger className="px-4 text-left text-sm font-medium">
                  {faq.question[language]}
                </AccordionTrigger>
                <AccordionContent className="px-4 text-sm text-muted-foreground">
                  {faq.answer[language]}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>


       <div className="p-4 pb-0 flex justify-center">
  <Button
    variant="ghost"
    size="sm"
    className="gap-1 text-muted-foreground hover:text-foreground"
    onClick={() => navigate("/topics")}
  >
    <ArrowLeft className="w-4 h-4" />
    {t.backToTopics}
  </Button>
</div>


        </div>



      )}
    </div>

    
  );
};

export default TopicDetail;
