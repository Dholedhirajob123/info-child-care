import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export interface ParentInfo {
  parentName: string;
  parentEmail: string;
  gender: 'Male' | 'Female' | 'Other';
}

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onStart: (info: ParentInfo) => void;
}

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ParentInfoModal = ({ open, onOpenChange, onStart }: Props) => {
  const [parentName, setParentName] = useState('');
  const [parentEmail, setParentEmail] = useState('');
  const [gender, setGender] = useState<'Male' | 'Female' | 'Other' | ''>('');
  const [touched, setTouched] = useState(false);

  const emailValid = emailRe.test(parentEmail.trim());
  const nameValid = parentName.trim().length > 0;
  const genderValid = gender !== '';
  const canStart = nameValid && emailValid && genderValid;

  const handleStart = () => {
    setTouched(true);
    if (!canStart) return;
    onStart({
      parentName: parentName.trim(),
      parentEmail: parentEmail.trim().toLowerCase(),
      gender: gender as 'Male' | 'Female' | 'Other',
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center">Parent Information</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 py-2">
          <div className="space-y-1.5">
            <Label htmlFor="parent-name">Parent Name *</Label>
            <Input
              id="parent-name"
              value={parentName}
              maxLength={100}
              onChange={(e) => setParentName(e.target.value)}
              placeholder="Enter your full name"
            />
            {touched && !nameValid && (
              <p className="text-xs text-destructive">Parent name is required.</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="parent-email">Parent Email *</Label>
            <Input
              id="parent-email"
              type="email"
              value={parentEmail}
              maxLength={255}
              onChange={(e) => setParentEmail(e.target.value)}
              placeholder="you@example.com"
            />
            {touched && !emailValid && (
              <p className="text-xs text-destructive">Please enter a valid email address.</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label>Child Gender *</Label>
            <RadioGroup
              value={gender}
              onValueChange={(v) => setGender(v as 'Male' | 'Female' | 'Other')}
              className="flex gap-4 pt-1"
            >
              {(['Male', 'Female', 'Other'] as const).map((g) => (
                <div key={g} className="flex items-center gap-2">
                  <RadioGroupItem value={g} id={`gender-${g}`} />
                  <Label htmlFor={`gender-${g}`} className="cursor-pointer font-normal">{g}</Label>
                </div>
              ))}
            </RadioGroup>
            {touched && !genderValid && (
              <p className="text-xs text-destructive">Please select a gender.</p>
            )}
          </div>
        </div>

        <DialogFooter className="flex-row gap-2 sm:justify-end">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="flex-1 sm:flex-none">
            Cancel
          </Button>
          <Button onClick={handleStart} disabled={!canStart} className="flex-1 sm:flex-none">
            Start Quiz
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
