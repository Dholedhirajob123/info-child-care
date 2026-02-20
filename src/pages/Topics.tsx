import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { topics, TopicCategory, getCategoryColor } from '@/lib/topicsData';
import { cn } from '@/lib/utils';

// Category images
import breastfeedingImg from '@/assets/topics/breastfeeding.jpg';
import complementaryImg from '@/assets/topics/complementary.jpg';
import hygieneImg from '@/assets/topics/hygiene.jpg';
import nutritionImg from '@/assets/topics/nutrition.jpg';

const categoryImages: Record<TopicCategory, string> = {
  breastfeeding: breastfeedingImg,
  complementary: complementaryImg,
  hygiene: hygieneImg,
  nutrition: nutritionImg,
};

const Topics = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<TopicCategory | 'all'>('all');

  const categories: { id: TopicCategory | 'all'; label: string; emoji?: string }[] = [
    { id: 'all', label: t.all },
    { id: 'breastfeeding', label: t.breastfeeding, emoji: '🤱' },
    { id: 'complementary', label: t.complementary, emoji: '🥣' },
    { id: 'hygiene', label: t.hygiene, emoji: '🛁' },
    { id: 'nutrition', label: t.nutrition, emoji: '🥗' },
  ];

  const filteredTopics = topics.filter((topic) => {
    const matchesCategory = selectedCategory === 'all' || topic.category === selectedCategory;
    const matchesSearch = topic.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      topic.summary[language].toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="page-transition">
      <div className="p-4 pb-6">
        <h1 className="text-title text-foreground mb-2">{t.topics}</h1>
        <p className="text-muted-foreground mb-6">{t.learnAbout}</p>

        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder={t.searchTopics}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-card border-border"
          />
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 -mx-4 px-4 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                'flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all',
                selectedCategory === category.id
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : category.id !== 'all'
                  ? getCategoryColor(category.id as TopicCategory)
                  : 'bg-secondary text-secondary-foreground'
              )}
            >
              {category.emoji && <span>{category.emoji}</span>}
              {category.label}
            </button>
          ))}
        </div>

        {/* Topics List */}
        <div className="space-y-3">
          {filteredTopics.map((topic, index) => (
            <button
              key={topic.id}
              onClick={() => navigate(`/topics/${topic.id}`)}
              className="topic-card w-full bg-card rounded-xl p-4 flex items-center gap-4 text-left shadow-soft animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0">
                <img 
                  src={categoryImages[topic.category]} 
                  alt={topic.title[language]}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground mb-0.5">{topic.title[language]}</h3>
                <p className="text-sm text-muted-foreground line-clamp-1">{topic.summary[language]}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            </button>
          ))}
        </div>

        {filteredTopics.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <p>No topics found</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Topics;
