import { useState, useEffect, useCallback } from 'react';
import { Plus, Trash2, Edit2, Milk, Apple, Calendar, Clock, Utensils, Activity, Heart, Brain, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

interface FeedingEntry {
  id: string;
  babyName: string;
  gender: 'male' | 'female';
  date: string;
  time: string;
  feedingType: 'breastmilk' | 'formula' | 'solid';
  foodName: string;
  quantity: number;
  unit: 'ml' | 'spoons';
  notes?: string;
}

interface MilestoneDomain {
  key: string;
  label: string;
  icon: React.ElementType;
  color: string;
  milestones: string[];
}

const CircularProgress = ({ percentage, size = 64, strokeWidth = 5, color = 'hsl(var(--primary))' }: { percentage: number; size?: number; strokeWidth?: number; color?: string }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="hsl(var(--muted))" strokeWidth={strokeWidth} />
      <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke={color} strokeWidth={strokeWidth} strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" className="transition-all duration-700 ease-out" />
      <text x={size / 2} y={size / 2} textAnchor="middle" dominantBaseline="central" className="fill-foreground text-xs font-bold" transform={`rotate(90, ${size / 2}, ${size / 2})`}>
        {percentage}%
      </text>
    </svg>
  );
};

const Tracker = () => {
  const { t, language } = useLanguage();
  const [babyAge, setBabyAge] = useState(0);
  const [entries, setEntries] = useState<FeedingEntry[]>([]);
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingEntry, setEditingEntry] = useState<FeedingEntry | null>(null);
  const [checkedMilestones, setCheckedMilestones] = useState<Record<string, boolean>>({});

  const milestoneDomains: MilestoneDomain[] = [
    {
      key: 'movement',
      label: 'Movement / Physical',
      icon: Activity,
      color: 'hsl(var(--accent))',
      milestones: ['Bring hands near face', 'Head control while on tummy', 'Smooth arm & leg movements', 'Pushes down with legs on flat surface'],
    },
    {
      key: 'social',
      label: 'Social / Emotional',
      icon: Heart,
      color: 'hsl(340, 75%, 55%)',
      milestones: ['Begins to smile at people', 'Can briefly calm self', 'Tries to look at parent'],
    },
    {
      key: 'cognitive',
      label: 'Cognitive',
      icon: Brain,
      color: 'hsl(260, 60%, 55%)',
      milestones: ['Pays attention to faces', 'Begins to follow things with eyes', 'Can see things 8-12 inches away', 'Can recognize your smell'],
    },
    {
      key: 'communication',
      label: 'Communication / Language',
      icon: MessageCircle,
      color: 'hsl(170, 60%, 40%)',
      milestones: ['Makes sounds other than crying', 'Reacts to loud sounds', 'Turns head toward sounds'],
    },
  ];

  const getDomainProgress = useCallback((domain: MilestoneDomain) => {
    const checked = domain.milestones.filter((_, i) => checkedMilestones[`${domain.key}-${i}`]).length;
    return Math.round((checked / domain.milestones.length) * 100);
  }, [checkedMilestones]);

  const getOverallProgress = useCallback(() => {
    const total = milestoneDomains.reduce((sum, d) => sum + d.milestones.length, 0);
    const checked = Object.values(checkedMilestones).filter(Boolean).length;
    return total > 0 ? Math.round((checked / total) * 100) : 0;
  }, [checkedMilestones]);

  const toggleMilestone = (domainKey: string, index: number) => {
    const key = `${domainKey}-${index}`;
    setCheckedMilestones(prev => {
      const updated = { ...prev, [key]: !prev[key] };
      localStorage.setItem('milestone-checks', JSON.stringify(updated));
      return updated;
    });
  };
  const [formData, setFormData] = useState<Partial<FeedingEntry>>({
    babyName: '',
    gender: 'male',
    date: new Date().toISOString().split('T')[0],
    time: new Date().toTimeString().slice(0, 5),
    feedingType: 'breastmilk',
    foodName: '',
    quantity: 0,
    unit: 'ml',
    notes: '',
  });

  // Load data from localStorage
  useEffect(() => {
    const savedEntries = localStorage.getItem('feeding-entries');
    const savedAge = localStorage.getItem('baby-age');
    
    if (savedEntries) setEntries(JSON.parse(savedEntries));
    if (savedAge) setBabyAge(parseInt(savedAge));
    const savedMilestones = localStorage.getItem('milestone-checks');
    if (savedMilestones) setCheckedMilestones(JSON.parse(savedMilestones));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('feeding-entries', JSON.stringify(entries));
  }, [entries]);

  useEffect(() => {
    localStorage.setItem('baby-age', babyAge.toString());
  }, [babyAge]);


  const getFeedingGuidance = () => {
    if (babyAge < 6) return t.breastMilkOnly;
    if (babyAge < 8) return t.milkPlusTwoMeals;
    if (babyAge < 10) return t.milkPlusThreeMeals;
    return t.milkPlusFamilyFood;
  };

  const getTotalMilk = () => {
    return entries
      .filter((e) => (e.feedingType === 'breastmilk' || e.feedingType === 'formula') && e.unit === 'ml')
      .reduce((sum, e) => sum + e.quantity, 0);
  };

  const getTotalSolidMeals = () => {
    return entries.filter((e) => e.feedingType === 'solid').length;
  };

  const handleSubmit = () => {
    if (!formData.babyName || !formData.foodName || !formData.quantity) return;

    const entry: FeedingEntry = {
      id: editingEntry?.id || Date.now().toString(),
      babyName: formData.babyName!,
      gender: formData.gender as 'male' | 'female',
      date: formData.date!,
      time: formData.time!,
      feedingType: formData.feedingType as 'breastmilk' | 'formula' | 'solid',
      foodName: formData.foodName!,
      quantity: formData.quantity!,
      unit: formData.unit as 'ml' | 'spoons',
      notes: formData.notes,
    };

    if (editingEntry) {
      setEntries(entries.map((e) => (e.id === editingEntry.id ? entry : e)));
    } else {
      setEntries([entry, ...entries]);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      babyName: '',
      gender: 'male',
      date: new Date().toISOString().split('T')[0],
      time: new Date().toTimeString().slice(0, 5),
      feedingType: 'breastmilk',
      foodName: '',
      quantity: 0,
      unit: 'ml',
      notes: '',
    });
    setEditingEntry(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (entry: FeedingEntry) => {
    setFormData(entry);
    setEditingEntry(entry);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setEntries(entries.filter((e) => e.id !== id));
  };

  return (
    <div className="page-transition p-4">
      <h1 className="text-title text-foreground mb-6">{t.tracker}</h1>

      {/* Baby Age Selector */}
      <div className="bg-card rounded-xl p-4 mb-4 shadow-soft">
        <Label className="text-foreground font-medium mb-2 block">{t.babyAge}</Label>
        <Select value={babyAge.toString()} onValueChange={(v) => setBabyAge(parseInt(v))}>
          <SelectTrigger className="bg-background border-border">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-card border-border z-50">
            {Array.from({ length: 13 }, (_, i) => (
              <SelectItem key={i} value={i.toString()}>
                {i} {t.months}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <div className="mt-3 p-3 bg-accent/20 rounded-lg">
          <p className="text-sm font-medium text-accent">
            {t.feedingGuidance}: {getFeedingGuidance()}
          </p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="tracker-card-milk rounded-xl p-4 text-center">
          <Milk className="w-6 h-6 mx-auto mb-2 text-accent" />
          <p className="text-2xl font-bold text-accent">{getTotalMilk()}ml</p>
          <p className="text-xs text-accent/80">{t.totalMilkIntake}</p>
        </div>
        <div className="tracker-card-solid rounded-xl p-4 text-center">
          <Apple className="w-6 h-6 mx-auto mb-2 text-primary" />
          <p className="text-2xl font-bold text-primary">{getTotalSolidMeals()}</p>
          <p className="text-xs text-primary/80">{t.totalSolidMeals}</p>
        </div>
      </div>

      {/* Overall Progress Section */}
      <div className="bg-card rounded-xl p-5 mb-4 shadow-soft">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-lg font-bold text-foreground">Overall Progress</h2>
            <p className="text-2xl font-bold text-primary">{getOverallProgress()}%</p>
          </div>
          <CircularProgress percentage={getOverallProgress()} size={72} strokeWidth={6} color="hsl(var(--primary))" />
        </div>
        <div className="border-t border-border pt-3 space-y-2">
          {milestoneDomains.map((domain) => {
            const Icon = domain.icon;
            const progress = getDomainProgress(domain);
            return (
              <div key={domain.key} className="flex items-center gap-2">
                <Icon className="w-4 h-4 shrink-0" style={{ color: domain.color }} />
                <span className="text-sm text-foreground min-w-[100px]">{domain.label}</span>
                <span className="text-xs font-semibold min-w-[32px]" style={{ color: domain.color }}>{progress}%</span>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full rounded-full transition-all duration-500" style={{ width: `${progress}%`, backgroundColor: domain.color }} />
                </div>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
          Developmental milestones are key indicators of a child's overall progress, covering four primary domains that act as checkpoints for healthy development: movement/physical, social/emotional, cognitive, and communication/language. These skills typically build upon each other, with significant brain development occurring by age three.
        </p>
      </div>

      {/* Milestone Domains */}
      {milestoneDomains.map((domain) => {
        const Icon = domain.icon;
        const progress = getDomainProgress(domain);
        const checkedCount = domain.milestones.filter((_, i) => checkedMilestones[`${domain.key}-${i}`]).length;
        return (
          <div key={domain.key} className="mb-4">
            <div className="rounded-xl p-4 mb-2" style={{ backgroundColor: `${domain.color}15` }}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-foreground flex items-center gap-2">
                    <Icon className="w-5 h-5" style={{ color: domain.color }} />
                    {domain.label}
                  </h3>
                  <p className="text-sm text-muted-foreground">{checkedCount}/{domain.milestones.length} Milestone Reached</p>
                </div>
                <CircularProgress percentage={progress} size={56} strokeWidth={4} color={domain.color} />
              </div>
            </div>
            <div className="space-y-2">
              {domain.milestones.map((milestone, i) => {
                const isChecked = !!checkedMilestones[`${domain.key}-${i}`];
                return (
                  <div
                    key={i}
                    onClick={() => toggleMilestone(domain.key, i)}
                    className={cn(
                      'bg-card rounded-xl p-4 shadow-soft flex items-center justify-between cursor-pointer transition-all',
                      isChecked && 'ring-1 ring-primary/30'
                    )}
                  >
                    <span className="text-sm text-foreground">{milestone}</span>
                    <div className={cn(
                      'w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all shrink-0 ml-3',
                      isChecked ? 'border-primary bg-primary text-primary-foreground' : 'border-muted-foreground/30'
                    )}>
                      {isChecked && <span className="text-xs">✓</span>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Add Entry Button */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogTrigger asChild>
          <Button className="w-full mb-6 gap-2" size="lg">
            <Plus className="w-5 h-5" />
            {t.addEntry}
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-card border-border max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{editingEntry ? t.editEntry : t.addEntry}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>{t.babyName}</Label>
                <Input
                  value={formData.babyName}
                  onChange={(e) => setFormData({ ...formData, babyName: e.target.value })}
                  className="bg-background"
                />
              </div>
              <div>
                <Label>{t.gender}</Label>
                <Select
                  value={formData.gender}
                  onValueChange={(v) => setFormData({ ...formData, gender: v as 'male' | 'female' })}
                >
                  <SelectTrigger className="bg-background"><SelectValue /></SelectTrigger>
                  <SelectContent className="bg-card z-50">
                    <SelectItem value="male">{t.male}</SelectItem>
                    <SelectItem value="female">{t.female}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>{t.date}</Label>
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="bg-background"
                />
              </div>
              <div>
                <Label>{t.time}</Label>
                <Input
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="bg-background"
                />
              </div>
            </div>

            <div>
              <Label>{t.feedingType}</Label>
              <Select
                value={formData.feedingType}
                onValueChange={(v) => setFormData({ ...formData, feedingType: v as any })}
              >
                <SelectTrigger className="bg-background"><SelectValue /></SelectTrigger>
                <SelectContent className="bg-card z-50">
                  <SelectItem value="breastmilk">{t.breastMilk}</SelectItem>
                  <SelectItem value="formula">{t.formula}</SelectItem>
                  <SelectItem value="solid">{t.solidFood}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>{t.foodName}</Label>
              <Input
                value={formData.foodName}
                onChange={(e) => setFormData({ ...formData, foodName: e.target.value })}
                className="bg-background"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label>{t.quantity}</Label>
                <Input
                  type="number"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 0 })}
                  className="bg-background"
                />
              </div>
              <div>
                <Label>Unit</Label>
                <Select
                  value={formData.unit}
                  onValueChange={(v) => setFormData({ ...formData, unit: v as 'ml' | 'spoons' })}
                >
                  <SelectTrigger className="bg-background"><SelectValue /></SelectTrigger>
                  <SelectContent className="bg-card z-50">
                    <SelectItem value="ml">{t.ml}</SelectItem>
                    <SelectItem value="spoons">{t.spoons}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label>{t.notes} ({t.optional})</Label>
              <Textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="bg-background"
              />
            </div>

            <div className="flex gap-3 pt-2">
              <Button variant="outline" className="flex-1" onClick={resetForm}>
                {t.cancel}
              </Button>
              <Button className="flex-1" onClick={handleSubmit}>
                {t.save}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>


      {/* Feeding Log */}
      <h3 className="font-semibold text-foreground mb-3">{t.feedingLog}</h3>
      {entries.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <Utensils className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p>{t.noEntries}</p>
        </div>
      ) : (
        <div className="space-y-3">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="bg-card rounded-xl p-4 shadow-soft"
            >
              <div className="flex items-start gap-3">
                <div className={cn(
                  'w-12 h-12 rounded-lg flex items-center justify-center text-2xl shrink-0',
                  entry.feedingType === 'solid' ? 'bg-primary/10' : 'bg-accent/10'
                )}>
                  {entry.feedingType === 'solid' ? '🥣' : '🍼'}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-foreground">{entry.babyName}</p>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                      {entry.gender === 'male' ? '👦 ' + t.male : '👧 ' + t.female}
                    </span>
                  </div>
                  <p className="text-sm text-primary font-medium">{entry.foodName}</p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {entry.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {entry.time}
                    </span>
                    <span className="font-medium text-foreground">
                      {entry.quantity} {entry.unit === 'ml' ? t.ml : t.spoons}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-accent/10 text-accent">
                      {entry.feedingType === 'breastmilk' ? t.breastMilk : entry.feedingType === 'formula' ? t.formula : t.solidFood}
                    </span>
                  </div>
                  {entry.notes && (
                    <p className="mt-2 text-xs text-muted-foreground italic">📝 {entry.notes}</p>
                  )}
                </div>
                <div className="flex flex-col gap-1 shrink-0">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleEdit(entry)}
                  >
                    <Edit2 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-destructive"
                    onClick={() => handleDelete(entry.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tracker;
