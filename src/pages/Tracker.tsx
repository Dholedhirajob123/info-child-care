import { useState, useEffect } from 'react';
import { Plus, Trash2, Edit2, Milk, Apple, Calendar, Clock, User, Scale, Ruler, Utensils } from 'lucide-react';
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

interface MonthlySummary {
  weight?: string;
  height?: string;
  newFoods?: string;
}

const Tracker = () => {
  const { t, language } = useLanguage();
  const [babyAge, setBabyAge] = useState(0);
  const [entries, setEntries] = useState<FeedingEntry[]>([]);
  const [monthlySummary, setMonthlySummary] = useState<MonthlySummary>({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingEntry, setEditingEntry] = useState<FeedingEntry | null>(null);

  // Form state
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
    const savedSummary = localStorage.getItem('monthly-summary');
    
    if (savedEntries) setEntries(JSON.parse(savedEntries));
    if (savedAge) setBabyAge(parseInt(savedAge));
    if (savedSummary) setMonthlySummary(JSON.parse(savedSummary));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('feeding-entries', JSON.stringify(entries));
  }, [entries]);

  useEffect(() => {
    localStorage.setItem('baby-age', babyAge.toString());
  }, [babyAge]);

  useEffect(() => {
    localStorage.setItem('monthly-summary', JSON.stringify(monthlySummary));
  }, [monthlySummary]);

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

      {/* Monthly Summary */}
      <div className="bg-card rounded-xl p-4 mb-4 shadow-soft">
        <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
          <Scale className="w-4 h-4" />
          {t.monthlySummary}
        </h3>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <Label className="text-xs">{t.weight}</Label>
            <Input
              type="number"
              step="0.1"
              value={monthlySummary.weight || ''}
              onChange={(e) => setMonthlySummary({ ...monthlySummary, weight: e.target.value })}
              className="bg-background text-sm h-9"
            />
          </div>
          <div>
            <Label className="text-xs">{t.height}</Label>
            <Input
              type="number"
              step="0.1"
              value={monthlySummary.height || ''}
              onChange={(e) => setMonthlySummary({ ...monthlySummary, height: e.target.value })}
              className="bg-background text-sm h-9"
            />
          </div>
          <div>
            <Label className="text-xs">{t.newFoodsTried}</Label>
            <Input
              value={monthlySummary.newFoods || ''}
              onChange={(e) => setMonthlySummary({ ...monthlySummary, newFoods: e.target.value })}
              className="bg-background text-sm h-9"
            />
          </div>
        </div>
      </div>

      {/* Feeding Log */}
      <h3 className="font-semibold text-foreground mb-3">{t.feedingLog}</h3>
      {entries.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <Utensils className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p>{t.noEntries}</p>
        </div>
      ) : (
        <div className="space-y-2">
          {entries.map((entry) => (
            <div
              key={entry.id}
              className="bg-card rounded-xl p-3 shadow-soft flex items-center gap-3"
            >
              <div className={cn(
                'w-10 h-10 rounded-lg flex items-center justify-center text-xl',
                entry.feedingType === 'solid' ? 'bg-primary/10' : 'bg-accent/10'
              )}>
                {entry.feedingType === 'solid' ? '🥣' : '🍼'}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground text-sm">{entry.foodName}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {entry.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {entry.time}
                  </span>
                  <span>{entry.quantity}{entry.unit}</span>
                </div>
              </div>
              <div className="flex gap-1">
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
          ))}
        </div>
      )}
    </div>
  );
};

export default Tracker;
