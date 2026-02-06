import { Topic } from './topicsData';
import { Language } from './i18n';

export interface VaccinationMonth {
  month: number;
  title: Record<Language, string>;
  emoji: string;
  vaccines: {
    name: string;
    nameHi?: string;
    nameMr?: string;
  }[];
  purpose: Record<Language, string>;
  careNote?: Record<Language, string>;
}

export const vaccinationSchedule: VaccinationMonth[] = [
  {
    month: 0,
    title: { en: 'At Birth', hi: 'जन्म के समय', mr: 'जन्माच्या वेळी' },
    emoji: '🍼',
    vaccines: [
      { name: 'BCG' },
      { name: 'Hepatitis B – Dose 1' },
      { name: 'Oral Polio Vaccine (OPV-0)' },
    ],
    purpose: {
      en: 'Protects against tuberculosis, hepatitis B, and polio',
      hi: 'तपेदिक, हेपेटाइटिस बी और पोलियो से सुरक्षा',
      mr: 'क्षयरोग, हिपॅटायटीस बी आणि पोलिओपासून संरक्षण',
    },
  },
  {
    month: 1,
    title: { en: 'Month 1', hi: 'महीना 1', mr: 'महिना 1' },
    emoji: '👶',
    vaccines: [],
    purpose: {
      en: 'No routine vaccine (monitor baby growth)',
      hi: 'कोई नियमित टीका नहीं (बच्चे की वृद्धि की निगरानी)',
      mr: 'कोणतीही नियमित लस नाही (बाळाची वाढ तपासा)',
    },
    careNote: {
      en: 'Breastfeeding support and growth monitoring',
      hi: 'स्तनपान सहायता और विकास निगरानी',
      mr: 'स्तनपान समर्थन आणि वाढ निरीक्षण',
    },
  },
  {
    month: 2,
    title: { en: 'Month 2', hi: 'महीना 2', mr: 'महिना 2' },
    emoji: '👶',
    vaccines: [
      { name: 'DPT / Pentavalent – 1' },
      { name: 'Hib – 1' },
      { name: 'IPV – 1' },
      { name: 'Hepatitis B – 2' },
      { name: 'PCV – 1' },
      { name: 'Rotavirus – 1' },
    ],
    purpose: {
      en: 'Builds early immunity against serious infections',
      hi: 'गंभीर संक्रमणों के खिलाफ प्रारंभिक प्रतिरक्षा बनाता है',
      mr: 'गंभीर संक्रमणांविरुद्ध लवकर प्रतिकारशक्ती निर्माण करते',
    },
  },
  {
    month: 3,
    title: { en: 'Month 3', hi: 'महीना 3', mr: 'महिना 3' },
    emoji: '👶',
    vaccines: [
      { name: 'DPT / Pentavalent – 2' },
      { name: 'Hib – 2' },
      { name: 'IPV – 2' },
      { name: 'PCV – 2' },
      { name: 'Rotavirus – 2' },
    ],
    purpose: {
      en: 'Strengthens protection started in Month 2',
      hi: 'महीना 2 में शुरू की गई सुरक्षा को मजबूत करता है',
      mr: 'महिना 2 मध्ये सुरू केलेले संरक्षण मजबूत करते',
    },
  },
  {
    month: 4,
    title: { en: 'Month 4', hi: 'महीना 4', mr: 'महिना 4' },
    emoji: '👶',
    vaccines: [
      { name: 'DPT / Pentavalent – 3' },
      { name: 'Hib – 3' },
      { name: 'IPV – 3' },
      { name: 'Hepatitis B – 3' },
      { name: 'PCV – 3' },
      { name: 'Rotavirus – 3' },
    ],
    purpose: {
      en: 'Completes primary vaccination series',
      hi: 'प्राथमिक टीकाकरण श्रृंखला पूरी करता है',
      mr: 'प्राथमिक लसीकरण मालिका पूर्ण करते',
    },
  },
  {
    month: 5,
    title: { en: 'Month 5', hi: 'महीना 5', mr: 'महिना 5' },
    emoji: '🧒',
    vaccines: [],
    purpose: {
      en: 'No routine vaccine',
      hi: 'कोई नियमित टीका नहीं',
      mr: 'कोणतीही नियमित लस नाही',
    },
    careNote: {
      en: 'Continue exclusive breastfeeding',
      hi: 'केवल स्तनपान जारी रखें',
      mr: 'फक्त स्तनपान सुरू ठेवा',
    },
  },
  {
    month: 6,
    title: { en: 'Month 6', hi: 'महीना 6', mr: 'महिना 6' },
    emoji: '🧒',
    vaccines: [
      { name: 'Hepatitis B (if missed earlier)' },
    ],
    purpose: {
      en: 'Catch-up vaccination if needed',
      hi: 'जरूरत पड़ने पर पकड़ो टीकाकरण',
      mr: 'आवश्यक असल्यास कॅच-अप लसीकरण',
    },
    careNote: {
      en: 'Start complementary feeding after 6 months',
      hi: '6 महीने बाद पूरक आहार शुरू करें',
      mr: '6 महिन्यांनंतर पूरक आहार सुरू करा',
    },
  },
  {
    month: 7,
    title: { en: 'Month 7', hi: 'महीना 7', mr: 'महिना 7' },
    emoji: '🧒',
    vaccines: [],
    purpose: {
      en: 'No routine vaccine',
      hi: 'कोई नियमित टीका नहीं',
      mr: 'कोणतीही नियमित लस नाही',
    },
    careNote: {
      en: 'Monitor nutrition and development',
      hi: 'पोषण और विकास की निगरानी करें',
      mr: 'पोषण आणि विकास तपासा',
    },
  },
  {
    month: 8,
    title: { en: 'Month 8', hi: 'महीना 8', mr: 'महिना 8' },
    emoji: '🧒',
    vaccines: [],
    purpose: {
      en: 'No routine vaccine',
      hi: 'कोई नियमित टीका नहीं',
      mr: 'कोणतीही नियमित लस नाही',
    },
    careNote: {
      en: 'Prepare for upcoming measles vaccine',
      hi: 'आगामी खसरा टीके की तैयारी करें',
      mr: 'आगामी गोवर लसीची तयारी करा',
    },
  },
  {
    month: 9,
    title: { en: 'Month 9', hi: 'महीना 9', mr: 'महिना 9' },
    emoji: '🧒',
    vaccines: [
      { name: 'Measles-Rubella (MR-1)' },
      { name: 'Japanese Encephalitis (JE-1) – endemic areas only' },
    ],
    purpose: {
      en: 'Protects against measles and serious viral infections',
      hi: 'खसरा और गंभीर वायरल संक्रमण से बचाता है',
      mr: 'गोवर आणि गंभीर व्हायरल संक्रमणांपासून संरक्षण',
    },
  },
  {
    month: 10,
    title: { en: 'Month 10', hi: 'महीना 10', mr: 'महिना 10' },
    emoji: '🧒',
    vaccines: [],
    purpose: {
      en: 'No routine vaccine',
      hi: 'कोई नियमित टीका नहीं',
      mr: 'कोणतीही नियमित लस नाही',
    },
    careNote: {
      en: 'Growth monitoring and nutrition support',
      hi: 'विकास निगरानी और पोषण सहायता',
      mr: 'वाढ निरीक्षण आणि पोषण समर्थन',
    },
  },
  {
    month: 11,
    title: { en: 'Month 11', hi: 'महीना 11', mr: 'महिना 11' },
    emoji: '🧒',
    vaccines: [],
    purpose: {
      en: 'No routine vaccine',
      hi: 'कोई नियमित टीका नहीं',
      mr: 'कोणतीही नियमित लस नाही',
    },
    careNote: {
      en: 'Prepare for 1-year vaccines',
      hi: '1 साल के टीकों की तैयारी करें',
      mr: '1 वर्षाच्या लसींची तयारी करा',
    },
  },
  {
    month: 12,
    title: { en: '1 Year', hi: '1 वर्ष', mr: '1 वर्ष' },
    emoji: '🎉',
    vaccines: [
      { name: 'MMR – 1' },
      { name: 'Hepatitis A – 1 (optional)' },
      { name: 'Chickenpox (Varicella)' },
    ],
    purpose: {
      en: 'Long-term protection as the child grows',
      hi: 'बच्चे के बढ़ने पर दीर्घकालिक सुरक्षा',
      mr: 'मुलाच्या वाढीसह दीर्घकालीन संरक्षण',
    },
  },
];
