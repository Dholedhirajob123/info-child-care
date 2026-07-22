import type { ParentInfo } from './ParentInfoModal';
import { useLanguage } from '@/contexts/LanguageContext';
import { surveyStrings } from '@/lib/surveyI18n';

export const ParentInfoBar = ({ info }: { info: ParentInfo }) => {
  const { language } = useLanguage();
  const s = surveyStrings[language];
  const genderLabel =
    info.gender === 'Male' ? s.male : info.gender === 'Female' ? s.female : s.other;
  return (
    <div className="bg-card border border-border rounded-xl p-3 mb-4 shadow-soft text-sm">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-3">
        <div><span className="text-muted-foreground">{s.parentNameCol}: </span><span className="font-medium">{info.parentName}</span></div>
        <div className="truncate"><span className="text-muted-foreground">{s.emailField}: </span><span className="font-medium">{info.parentEmail}</span></div>
        <div><span className="text-muted-foreground">{s.genderField}: </span><span className="font-medium">{genderLabel}</span></div>
      </div>
    </div>
  );
};
