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
      { name: 'BCG ( Single Dose )', nameHi: 'बीसीजी ( सिंगल डोस )', nameMr: 'बीसीजी ( सिंगल डोस )' },
      { name: 'OPV ( Zero Dose )', nameHi: 'ओपीवी ( शून्य डोज )', nameMr: 'ओपीव्ही ( शून्य डोस )' },
      { name: 'Hep B ( Birth Dose )', nameHi: 'हेपेटाइटिस बी ( जन्म डोज )', nameMr: 'हिपॅटायटीस बी ( जन्म डोस )' },
    ],
    purpose: {
      en: 'Protects against tuberculosis, polio, and Hep B from birth',
      hi: 'जन्म से तपेदिक, पोलियो और हेपेटाइटिस बी से सुरक्षा',
      mr: 'जन्मापासून क्षयरोग, पोलिओ आणि हिपॅटायटीस बी पासून संरक्षण',
    },
  },
  {
    month: 6,
    title: { en: '6 Weeks', hi: '6 सप्ताह', mr: '6 आठवडे' },
    emoji: '👶',
    vaccines: [
      { name: '( DTaP + Hib + IPV ) + Hep B ( 1st )', nameHi: '( DTaP + Hib + IPV ) + Hep B ( पहला )', nameMr: '( DTaP + Hib + IPV ) + Hep B ( पहिला )' },
      { name: ' (  DTwP + Hib + Hep B  ) + OPV ( 1st )', nameHi: 'या ( ( DTwP + Hib + Hep B ) ) + OPV ( पहला )', nameMr: 'किंवा ( ( DTwP + Hib + Hep B ) ) ( पहिला )' },
      { name: 'PCV - ( Pneumococcal Conjugate ) ( 1st )', nameHi: 'पीसीवी - ( न्यूमोकोकल ) ( पहला )', nameMr: 'पीसीव्ही - ( न्यूमोकोकल ) ( पहिला )' },
      { name: 'Rotavirus ( Rotarix )  ( 1st )', nameHi: '	रोटावायरस ( रोटारिक्स )  ( पहला )', nameMr: 'रोटाव्हायरस ( रोटारिक्स ) (पहिला)' },
    ],
    purpose: {
      en: 'Builds early immunity against diphtheria, tetanus, pertussis, Hib, polio, Hep B, pneumonia, and rotavirus',
      hi: 'डिप्थीरिया, टेटनस, पर्टुसिस, हिब, पोलियो, हेपेटाइटिस बी, निमोनिया और रोटावायरस ( रोटारिक्स ) के खिलाफ प्रारंभिक प्रतिरक्षा',
      mr: 'डिप्थीरिया, टिटॅनस, पर्टुसिस, हिब, पोलिओ, हिपॅटायटीस बी, न्यूमोनिया आणि रोटाव्हायरस ( रोटारिक्स ) विरुद्ध लवकर प्रतिकारशक्ती',
    },
  },
  {
    month: 2.5,
    title: { en: '10 Weeks', hi: '10 सप्ताह', mr: '10 आठवडे' },
    emoji: '👶',
    vaccines: [
      { name: '( DTaP + Hib + IPV ) + Hep B  ( 2nd )', nameHi: '( DTaP + Hib + IPV ) + Hep B  ( दूसरा )', nameMr: '( DTaP + Hib + IPV ) + Hep B  (दुसरा)' },
      { name: '( DTwP + Hib + Hep B ) OPV ( 2nd )', nameHi: 'या ( DTwP + Hib + Hep B ) OPV ( दूसरा )', nameMr: 'किंवा ( DTwP + Hib + Hep B ) + OPV (दुसरा)' },
      { name: 'PCV - ( Pneumococcal Conjugate ) ( 2nd )', nameHi: 'पीसीवी ( न्यूमोकोकल कॉन्जुगेट ) ( दूसरा )', nameMr: 'पीसीव्ही ( न्युमोकोकल कॉन्जुगेट ) (दुसरा)' },
      { name: 'Rotavirus ( Rotarix ) ( 2nd )', nameHi: 'रोटावायरस ( रोटारिक्स ) ( दूसरा )', nameMr: 'रोटाव्हायरस ( रोटारिक्स ) (दुसरा)' },
    ],
    purpose: {
      en: 'Strengthens protection started at 6 weeks',
      hi: '6 सप्ताह में शुरू की गई सुरक्षा को मजबूत करता है',
      mr: '6 आठवड्यात सुरू केलेले संरक्षण मजबूत करते',
    },
  },
  {
    month: 3.5,
    title: { en: '14 Weeks', hi: '14 सप्ताह', mr: '14 आठवडे' },
    emoji: '👶',
    vaccines: [
      { name: '( DTaP + Hib + IPV ) + Hep B ( 3rd )', nameHi: '( DTaP + Hib + IPV ) + Hep B ( तीसरा )', nameMr: '( DTaP + Hib + IPV ) + Hep B ( तिसरा )' },
      { name: '( DTwP + Hib + Hep B ) + OPV ( 3rd )', nameHi: 'या ( DTwP + Hib + Hep B ) + OPV ( तीसरा )', nameMr: 'किंवा ( DTwP + Hib + Hep B ) + OPV ( तिसरा )' },
      { name: 'PCV - ( Pneumococcal Conjugate ) ( 3rd )', nameHi: 'पीसीवी ( न्यूमोकोकल कॉन्जुगेट ) ( तीसरा )', nameMr: 'पीसीव्ही ( न्युमोकोकल कॉन्जुगेट ) ( तिसरा )' },
    ],
    purpose: {
      en: 'Completes primary vaccination series for multiple diseases',
      hi: 'कई बीमारियों के लिए प्राथमिक टीकाकरण श्रृंखला पूरी करता है',
      mr: 'अनेक रोगांसाठी प्राथमिक लसीकरण मालिका पूर्ण करते',
    },
  },
  {
    month: 9,
    title: { en: '9 Months', hi: '9 महीने', mr: '9 महिने' },
    emoji: '🧒',
    vaccines: [
      { name: 'Measles', nameHi: 'खसरा', nameMr: 'गोवर' },
      { name: 'OPV', nameHi: 'ओपीवी', nameMr: 'ओपीव्ही' },
    ],
    purpose: {
      en: 'Protects against measles and reinforces polio protection',
      hi: 'खसरा से बचाता है और पोलियो सुरक्षा को मजबूत करता है',
      mr: 'गोवरपासून संरक्षण आणि पोलिओ संरक्षण मजबूत करते',
    },
  },
  {
    month: 12,
    title: { en: '12 Months', hi: '12 महीने', mr: '12 महिने' },
    emoji: '🎉',
    vaccines: [
      { name: 'Hep A ( 1st )', nameHi: 'हेपेटाइटिस ए ( पहला )', nameMr: 'हिपॅटायटीस ए ( पहिला )' },
    ],
    purpose: {
      en: 'Protects against Hep A infection',
      hi: 'हेपेटाइटिस ए संक्रमण से बचाता है',
      mr: 'हिपॅटायटीस ए संक्रमणापासून संरक्षण',
    },
  },
  {
    month: 15,
    title: { en: '15 Months', hi: '15 महीने', mr: '15 महिने' },
    emoji: '🎂',
    vaccines: [
      { name: 'MMR - ( Measles + Mumps + Rubella ) ( 1st)', nameHi: 'एमएमआर - ( खसरा + मम्प्स + रूबेला ) ( पहला )', nameMr: 'एमएमआर - गोवर + गालगुंड + रुबेला ( पहिला )' },
      { name: 'Varicella ( Chicken Pox )  ( 1st )', nameHi: 'वैरिसेला ( चिकन पॉक्स ) ( पहला )', nameMr: 'व्हॅरिसेला ( कांजिण्या ) ( पहिला )' },
      { name: 'PCV - ( Pneumococcal Congugate ) ( Booster )', nameHi: 'पीसीवी ( न्यूमोकोकल कॉन्जुगेट ) ( बूस्टर )', nameMr: 'पीसीव्ही ( न्युमोकोकल कॉन्जुगेट ) ( बूस्टर )' },
    ],
    purpose: {
      en: 'Provides long-term protection against measles, mumps, rubella, chicken pox, and pneumonia',
      hi: 'खसरा, मम्प्स, रूबेला, चिकन पॉक्स और निमोनिया के खिलाफ दीर्घकालिक सुरक्षा',
      mr: 'गोवर, गालगुंड, रुबेला, कांजिण्या आणि न्यूमोनिया विरुद्ध दीर्घकालीन संरक्षण',
    },
  },
  {
    month: 17,
    title: { en: '16-18 Months', hi: '16-18 महीने', mr: '16-18 महिने' },
    emoji: '💪',
    vaccines: [
      { name: 'DTaP + Hib + IPV ( 1st Booster )', nameHi: 'DTaP + Hib + IPV ( पहला बूस्टर) ', nameMr: 'DTaP + Hib + IPV ( पहिला बूस्टर )' },
      { name: '( DTwP + Hib ) + OPV ( 1st Booster )', nameHi: 'या ( DTwP + Hib ) + OPV ( पहला बूस्टर )', nameMr: 'किंवा ( DTwP + Hib ) + OPV ( पहिला बूस्टर )' },
    ],
    purpose: {
      en: 'Booster dose to strengthen immunity against diphtheria, tetanus, pertussis, Hib, and polio',
      hi: 'डिप्थीरिया, टेटनस, पर्टुसिस, हिब और पोलियो के खिलाफ प्रतिरक्षा मजबूत करने के लिए बूस्टर',
      mr: 'डिप्थीरिया, टिटॅनस, पर्टुसिस, हिब आणि पोलिओ विरुद्ध प्रतिकारशक्ती मजबूत करण्यासाठी बूस्टर',
    },
  },
  {
    month: 18,
    title: { en: '18 Months', hi: '18 महीने', mr: '18 महिने' },
    emoji: '🌟',
    vaccines: [
      { name: 'Hep A ( 2nd )', nameHi: 'हेपेटाइटिस ए ( दूसरा )', nameMr: 'हिपॅटायटीस ए ( दुसरा )' },
    ],
    purpose: {
      en: 'Completes Hep A protection',
      hi: 'हेपेटाइटिस ए सुरक्षा पूरी करता है',
      mr: 'हिपॅटायटीस ए संरक्षण पूर्ण करते',
    },
  },
  {
    month: 24,
    title: { en: '2 Years', hi: '2 वर्ष', mr: '2 वर्षे' },
    emoji: '🎈',
    vaccines: [
      { name: 'Typhoid ( 1st )', nameHi: 'टायफाइड ( पहला )', nameMr: 'टायफॉइड ( पहिला )' },
    ],
    purpose: {
      en: 'Protects against typhoid fever',
      hi: 'टायफाइड बुखार से बचाता है',
      mr: 'टायफॉइड तापापासून संरक्षण',
    },
  },
  {
    month: 54,
    title: { en: '4½ - 5 Years', hi: '4½ - 5 वर्ष', mr: '4½ - 5 वर्षे' },
    emoji: '🏫',
    vaccines: [
      { name: 'DTaP / DTwP / OPV ( 2nd Booster )', nameHi: 'DTaP / DTwP / OPV ( दूसरा बूस्टर )', nameMr: 'DTaP / DTwP / OPV ( दुसरा बूस्टर )' },
      { name: 'MMR ( 2nd Booster )', nameHi: 'एमएमआर ( दूसरा बूस्टर )', nameMr: 'एमएमआर ( दुसरा बूस्टर )' },
    ],
    purpose: {
      en: 'Pre-school booster for long-lasting immunity before starting school',
      hi: 'स्कूल शुरू करने से पहले दीर्घकालिक प्रतिरक्षा के लिए प्री-स्कूल बूस्टर',
      mr: 'शाळा सुरू करण्यापूर्वी दीर्घकालीन प्रतिकारशक्तीसाठी प्री-स्कूल बूस्टर',
    },
  },
];
