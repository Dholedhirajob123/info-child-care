export type Language = 'en' | 'hi' | 'mr';

export interface TranslationKeys {
  // App
  appName: string;
  appTagline: string;
  
  // Navigation
  home: string;
  topics: string;
  tracker: string;
  vaccination: string;
  tips: string;
  quiz: string;
  profile: string;
  
  // Home
  welcome: string;
  welcomeSubtitle: string;
  exploreTopics: string;
  installApp: string;
  keyBenefits: string;
  expertGuidance: string;
  expertGuidanceDesc: string;
  multilingualSupport: string;
  multilingualSupportDesc: string;
  offlineAccess: string;
  offlineAccessDesc: string;
  evidenceBased: string;
  evidenceBasedDesc: string;
  supportedBy: string;
  
  // Topics
  searchTopics: string;
  all: string;
  breastfeeding: string;
  complementary: string;
  hygiene: string;
  nutrition: string;
  learnAbout: string;
  dos: string;
  donts: string;
  faq: string;
  visualGuide: string;
  backToTopics: string;
  
  // Tracker
  babyAge: string;
  months: string;
  feedingGuidance: string;
  totalMilkIntake: string;
  totalSolidMeals: string;
  addEntry: string;
  editEntry: string;
  deleteEntry: string;
  feedingLog: string;
  babyName: string;
  gender: string;
  male: string;
  female: string;
  date: string;
  time: string;
  feedingType: string;
  breastMilk: string;
  formula: string;
  solidFood: string;
  foodName: string;
  quantity: string;
  ml: string;
  spoons: string;
  notes: string;
  optional: string;
  save: string;
  cancel: string;
  noEntries: string;
  monthlySummary: string;
  weight: string;
  height: string;
  newFoodsTried: string;
  
  // Vaccination
  vaccinationSchedule: string;
  vaccinationSubtitle: string;
  vaccines: string;
  purpose: string;
  careNote: string;
  atBirth: string;
  month: string;
  year: string;
  
  // Quiz
  startQuiz: string;
  question: string;
  correct: string;
  incorrect: string;
  explanation: string;
  nextQuestion: string;
  finishQuiz: string;
  yourScore: string;
  tryAgain: string;
  selectTopic: string;
  
  // Tips
  dailyTips: string;
  tipsSubtitle: string;
  
  // Common
  loading: string;
  error: string;
  readMore: string;
  
  // Feeding guidance
  breastMilkOnly: string;
  milkPlusTwoMeals: string;
  milkPlusThreeMeals: string;
  milkPlusFamilyFood: string;
}

export const translations: Record<Language, TranslationKeys> = {
  en: {
    appName: 'Info Child',
    appTagline: 'Scientific Child Nutrition & Baby Care',
    
    home: 'Home',
    topics: 'Topics',
    tracker: 'Tracker',
    vaccination: 'Vaccination',
    tips: 'Tips',
    quiz: 'Quiz',
    profile: 'Profile',
    
    welcome: 'Welcome to Info Child',
    welcomeSubtitle: 'Your trusted guide for scientific child nutrition and baby care',
    exploreTopics: 'Explore Topics',
    installApp: 'Install App',
    keyBenefits: 'Key Benefits',
    expertGuidance: 'Expert Guidance',
    expertGuidanceDesc: 'Evidence-based information from BPNI Maharashtra & UNICEF',
    multilingualSupport: 'Multilingual Support',
    multilingualSupportDesc: 'Available in English, Hindi, and Marathi',
    offlineAccess: 'Offline Access',
    offlineAccessDesc: 'Access content anytime, even without internet',
    evidenceBased: 'Evidence Based',
    evidenceBasedDesc: 'Scientific information you can trust',
    supportedBy: 'Supported by BPNI Maharashtra & UNICEF',
    
    searchTopics: 'Search topics...',
    all: 'All',
    breastfeeding: 'Breastfeeding',
    complementary: 'Complementary',
    hygiene: 'Hygiene',
    nutrition: 'Nutrition',
    learnAbout: 'Learn about child nutrition and baby care',
    dos: "Do's",
    donts: "Don'ts",
    faq: 'FAQ',
    visualGuide: 'Visual Guide',
    backToTopics: 'Topics',
    
    babyAge: 'Baby Age',
    months: 'months',
    feedingGuidance: 'Feeding Guidance',
    totalMilkIntake: 'Total Milk Intake',
    totalSolidMeals: 'Total Solid Meals',
    addEntry: 'Add Entry',
    editEntry: 'Edit Entry',
    deleteEntry: 'Delete Entry',
    feedingLog: 'Feeding Log',
    babyName: 'Baby Name',
    gender: 'Gender',
    male: 'Male',
    female: 'Female',
    date: 'Date',
    time: 'Time',
    feedingType: 'Feeding Type',
    breastMilk: 'Breast Milk',
    formula: 'Formula',
    solidFood: 'Solid Food',
    foodName: 'Food/Milk Name',
    quantity: 'Quantity',
    ml: 'ml',
    spoons: 'spoons',
    notes: 'Notes',
    optional: 'Optional',
    save: 'Save',
    cancel: 'Cancel',
    noEntries: 'No entries yet. Add your first feeding entry!',
    monthlySummary: 'Monthly Summary',
    weight: 'Weight (kg)',
    height: 'Height (cm)',
    newFoodsTried: 'New Foods Tried',
    
    vaccinationSchedule: 'Vaccination Schedule',
    vaccinationSubtitle: 'Month-wise vaccination details for your baby',
    vaccines: 'Vaccines',
    purpose: 'Purpose',
    careNote: 'Care Note',
    atBirth: 'At Birth',
    month: 'Month',
    year: 'Year',
    
    startQuiz: 'Start Quiz',
    question: 'Question',
    correct: 'Correct!',
    incorrect: 'Incorrect',
    explanation: 'Explanation',
    nextQuestion: 'Next Question',
    finishQuiz: 'Finish Quiz',
    yourScore: 'Your Score',
    tryAgain: 'Try Again',
    selectTopic: 'Select a topic to start the quiz',
    
    dailyTips: 'Daily Tips',
    tipsSubtitle: 'Simple tips for nutrition and baby care',
    
    loading: 'Loading...',
    error: 'Something went wrong',
    readMore: 'Read More',
    
    breastMilkOnly: 'Breast milk / Formula only',
    milkPlusTwoMeals: 'Milk + 2 soft solid meals',
    milkPlusThreeMeals: 'Milk + 3 solid meals',
    milkPlusFamilyFood: 'Milk + family soft food',
  },
  
  hi: {
    appName: 'इन्फो चाइल्ड',
    appTagline: 'वैज्ञानिक बाल पोषण और शिशु देखभाल',
    
    home: 'होम',
    topics: 'विषय',
    tracker: 'ट्रैकर',
    vaccination: 'टीकाकरण',
    tips: 'सुझाव',
    quiz: 'क्विज़',
    profile: 'प्रोफाइल',
    
    welcome: 'इन्फो चाइल्ड में आपका स्वागत है',
    welcomeSubtitle: 'वैज्ञानिक बाल पोषण और शिशु देखभाल के लिए आपका विश्वसनीय मार्गदर्शक',
    exploreTopics: 'विषय देखें',
    installApp: 'ऐप इंस्टॉल करें',
    keyBenefits: 'मुख्य लाभ',
    expertGuidance: 'विशेषज्ञ मार्गदर्शन',
    expertGuidanceDesc: 'BPNI महाराष्ट्र और UNICEF से प्रमाण-आधारित जानकारी',
    multilingualSupport: 'बहुभाषी समर्थन',
    multilingualSupportDesc: 'अंग्रेजी, हिंदी और मराठी में उपलब्ध',
    offlineAccess: 'ऑफलाइन एक्सेस',
    offlineAccessDesc: 'बिना इंटरनेट के भी कभी भी कंटेंट एक्सेस करें',
    evidenceBased: 'प्रमाण आधारित',
    evidenceBasedDesc: 'वैज्ञानिक जानकारी जिस पर आप भरोसा कर सकते हैं',
    supportedBy: 'BPNI महाराष्ट्र और UNICEF द्वारा समर्थित',
    
    searchTopics: 'विषय खोजें...',
    all: 'सभी',
    breastfeeding: 'स्तनपान',
    complementary: 'पूरक आहार',
    hygiene: 'स्वच्छता',
    nutrition: 'पोषण',
    learnAbout: 'बाल पोषण और शिशु देखभाल के बारे में जानें',
    dos: 'करें',
    donts: 'न करें',
    faq: 'सामान्य प्रश्न',
    visualGuide: 'दृश्य मार्गदर्शिका',
    backToTopics: 'विषय',
    
    babyAge: 'शिशु की आयु',
    months: 'महीने',
    feedingGuidance: 'आहार मार्गदर्शन',
    totalMilkIntake: 'कुल दूध सेवन',
    totalSolidMeals: 'कुल ठोस भोजन',
    addEntry: 'एंट्री जोड़ें',
    editEntry: 'एंट्री संपादित करें',
    deleteEntry: 'एंट्री हटाएं',
    feedingLog: 'आहार लॉग',
    babyName: 'शिशु का नाम',
    gender: 'लिंग',
    male: 'पुरुष',
    female: 'महिला',
    date: 'तारीख',
    time: 'समय',
    feedingType: 'आहार प्रकार',
    breastMilk: 'माँ का दूध',
    formula: 'फॉर्मूला',
    solidFood: 'ठोस आहार',
    foodName: 'भोजन/दूध का नाम',
    quantity: 'मात्रा',
    ml: 'मिली',
    spoons: 'चम्मच',
    notes: 'नोट्स',
    optional: 'वैकल्पिक',
    save: 'सेव करें',
    cancel: 'रद्द करें',
    noEntries: 'अभी तक कोई एंट्री नहीं। अपनी पहली आहार एंट्री जोड़ें!',
    monthlySummary: 'मासिक सारांश',
    weight: 'वजन (किग्रा)',
    height: 'ऊंचाई (सेमी)',
    newFoodsTried: 'नए भोजन आजमाए',
    
    vaccinationSchedule: 'टीकाकरण अनुसूची',
    vaccinationSubtitle: 'आपके शिशु के लिए महीने-वार टीकाकरण विवरण',
    vaccines: 'टीके',
    purpose: 'उद्देश्य',
    careNote: 'देखभाल नोट',
    atBirth: 'जन्म के समय',
    month: 'महीना',
    year: 'वर्ष',
    
    startQuiz: 'क्विज़ शुरू करें',
    question: 'प्रश्न',
    correct: 'सही!',
    incorrect: 'गलत',
    explanation: 'व्याख्या',
    nextQuestion: 'अगला प्रश्न',
    finishQuiz: 'क्विज़ समाप्त करें',
    yourScore: 'आपका स्कोर',
    tryAgain: 'फिर से कोशिश करें',
    selectTopic: 'क्विज़ शुरू करने के लिए एक विषय चुनें',
    
    dailyTips: 'दैनिक सुझाव',
    tipsSubtitle: 'पोषण और शिशु देखभाल के लिए सरल सुझाव',
    
    loading: 'लोड हो रहा है...',
    error: 'कुछ गलत हो गया',
    readMore: 'और पढ़ें',
    
    breastMilkOnly: 'केवल माँ का दूध / फॉर्मूला',
    milkPlusTwoMeals: 'दूध + 2 नरम ठोस भोजन',
    milkPlusThreeMeals: 'दूध + 3 ठोस भोजन',
    milkPlusFamilyFood: 'दूध + परिवार का नरम भोजन',
  },
  
  mr: {
    appName: 'इन्फो चाइल्ड',
    appTagline: 'शास्त्रीय बाल पोषण आणि बाळाची काळजी',
    
    home: 'होम',
    topics: 'विषय',
    tracker: 'ट्रॅकर',
    vaccination: 'लसीकरण',
    tips: 'टिप्स',
    quiz: 'क्विझ',
    profile: 'प्रोफाईल',
    
    welcome: 'इन्फो चाइल्ड मध्ये आपले स्वागत आहे',
    welcomeSubtitle: 'शास्त्रीय बाल पोषण आणि बाळाच्या काळजीसाठी आपला विश्वासू मार्गदर्शक',
    exploreTopics: 'विषय पहा',
    installApp: 'अॅप इन्स्टॉल करा',
    keyBenefits: 'मुख्य फायदे',
    expertGuidance: 'तज्ञ मार्गदर्शन',
    expertGuidanceDesc: 'BPNI महाराष्ट्र आणि UNICEF कडून पुरावा-आधारित माहिती',
    multilingualSupport: 'बहुभाषिक समर्थन',
    multilingualSupportDesc: 'इंग्रजी, हिंदी आणि मराठी मध्ये उपलब्ध',
    offlineAccess: 'ऑफलाइन प्रवेश',
    offlineAccessDesc: 'इंटरनेटशिवाय कधीही सामग्री पहा',
    evidenceBased: 'पुरावा आधारित',
    evidenceBasedDesc: 'शास्त्रीय माहिती ज्यावर तुम्ही विश्वास ठेवू शकता',
    supportedBy: 'BPNI महाराष्ट्र आणि UNICEF द्वारे समर्थित',
    
    searchTopics: 'विषय शोधा...',
    all: 'सर्व',
    breastfeeding: 'स्तनपान',
    complementary: 'पूरक आहार',
    hygiene: 'स्वच्छता',
    nutrition: 'पोषण',
    learnAbout: 'बाल पोषण आणि बाळाच्या काळजीबद्दल जाणून घ्या',
    dos: 'करा',
    donts: 'करू नका',
    faq: 'सामान्य प्रश्न',
    visualGuide: 'दृश्य मार्गदर्शक',
    backToTopics: 'विषय',
    
    babyAge: 'बाळाचे वय',
    months: 'महिने',
    feedingGuidance: 'आहार मार्गदर्शन',
    totalMilkIntake: 'एकूण दूध सेवन',
    totalSolidMeals: 'एकूण घन आहार',
    addEntry: 'एंट्री जोडा',
    editEntry: 'एंट्री संपादित करा',
    deleteEntry: 'एंट्री हटवा',
    feedingLog: 'आहार लॉग',
    babyName: 'बाळाचे नाव',
    gender: 'लिंग',
    male: 'पुरुष',
    female: 'स्त्री',
    date: 'तारीख',
    time: 'वेळ',
    feedingType: 'आहार प्रकार',
    breastMilk: 'आईचे दूध',
    formula: 'फॉर्म्युला',
    solidFood: 'घन आहार',
    foodName: 'अन्न/दूध नाव',
    quantity: 'प्रमाण',
    ml: 'मिली',
    spoons: 'चमचे',
    notes: 'नोट्स',
    optional: 'पर्यायी',
    save: 'सेव्ह करा',
    cancel: 'रद्द करा',
    noEntries: 'अजून कोणतीही एंट्री नाही. पहिली आहार एंट्री जोडा!',
    monthlySummary: 'मासिक सारांश',
    weight: 'वजन (किग्रॅ)',
    height: 'उंची (सेमी)',
    newFoodsTried: 'नवीन अन्न वापरले',
    
    vaccinationSchedule: 'लसीकरण वेळापत्रक',
    vaccinationSubtitle: 'तुमच्या बाळासाठी महिन्यानुसार लसीकरण तपशील',
    vaccines: 'लसी',
    purpose: 'उद्देश',
    careNote: 'काळजी टीप',
    atBirth: 'जन्माच्या वेळी',
    month: 'महिना',
    year: 'वर्ष',
    
    startQuiz: 'क्विझ सुरू करा',
    question: 'प्रश्न',
    correct: 'बरोबर!',
    incorrect: 'चुकीचे',
    explanation: 'स्पष्टीकरण',
    nextQuestion: 'पुढील प्रश्न',
    finishQuiz: 'क्विझ समाप्त करा',
    yourScore: 'तुमचा स्कोर',
    tryAgain: 'पुन्हा प्रयत्न करा',
    selectTopic: 'क्विझ सुरू करण्यासाठी विषय निवडा',
    
    dailyTips: 'दैनिक टिप्स',
    tipsSubtitle: 'पोषण आणि बाळाच्या काळजीसाठी सोपे टिप्स',
    
    loading: 'लोड होत आहे...',
    error: 'काहीतरी चुकले',
    readMore: 'अधिक वाचा',
    
    breastMilkOnly: 'फक्त आईचे दूध / फॉर्म्युला',
    milkPlusTwoMeals: 'दूध + 2 मऊ घन आहार',
    milkPlusThreeMeals: 'दूध + 3 घन आहार',
    milkPlusFamilyFood: 'दूध + कुटुंबाचे मऊ अन्न',
  },
};
