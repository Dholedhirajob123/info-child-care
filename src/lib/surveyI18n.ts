import type { Language } from './i18n';

export interface SurveyStrings {
  // Quiz start / thank you
  healthSurvey: string;
  healthSurveyDesc: string;
  healthSurveyFlow: string;
  startQuizBtn: string;
  adminLoginBtn: string;
  thankYou: string;
  thankYouMsg: string;
  surveyIdLabel: string;
  submitAnother: string;

  // Parent modal / bar
  parentInformation: string;
  parentNameLabel: string;
  parentEmailLabel: string;
  childGenderLabel: string;
  enterFullName: string;
  emailPlaceholder: string;
  male: string;
  female: string;
  other: string;
  parentNameRequired: string;
  emailInvalid: string;
  genderRequired: string;
  cancel: string;
  emailField: string;
  genderField: string;

  // Quiz section
  nextSectionB: string;
  back: string;
  submit: string;
  submitting: string;
  questionRequired: string;
  answerAllFirst: string;
  pleaseSpecify: string;
  couldNotSubmit: string;

  // Admin
  adminDashboard: string;
  logout: string;
  searchNameEmail: string;
  gender: string;
  all: string;
  from: string;
  to: string;
  exportExcel: string;
  exportPDF: string;
  submissionsCount: (n: number) => string;
  surveyIdCol: string;
  parentNameCol: string;
  emailCol: string;
  genderCol: string;
  scoreCol: string;
  dateCol: string;
  actionCol: string;
  view: string;
  loadingText: string;
  noSubmissions: string;
  adminLogin: string;
  adminEmail: string;
  adminPassword: string;
  signIn: string;
  signingIn: string;
  invalidCreds: string;
  backBtn: string;
  parentAnswerLabel: string;
  markReviewed: string;
  surveyAnswersDist: string;
  chartFootnote: (n: number) => string;
  surveyNotFound: string;
  submissionDate: string;
  reviewed: string;
  surveyIdField: string;
}

const build = (
  quizDesc: string,
  flow: string,
  male: string,
  female: string,
  other: string,
  s: Omit<
    SurveyStrings,
    | 'healthSurveyDesc'
    | 'healthSurveyFlow'
    | 'male'
    | 'female'
    | 'other'
  >
): SurveyStrings => ({
  ...s,
  healthSurveyDesc: quizDesc,
  healthSurveyFlow: flow,
  male,
  female,
  other,
});

export const surveyStrings: Record<Language, SurveyStrings> = {
  en: build(
    'A structured questionnaire to assess health-seeking behaviour of caregivers and health outcomes of infants (0–1 year).',
    'Section A: Demographic data · Section B: Health-seeking behaviour & outcomes',
    'Male',
    'Female',
    'Other',
    {
      healthSurvey: 'Health Survey',
      startQuizBtn: 'Start Quiz',
      adminLoginBtn: 'Admin Login',
      thankYou: 'Thank You!',
      thankYouMsg:
        'Your responses have been submitted successfully. The information you provided will be kept strictly confidential and used only for research purposes.',
      surveyIdLabel: 'Survey ID',
      submitAnother: 'Submit Another Response',
      parentInformation: 'Parent Information',
      parentNameLabel: 'Parent Name *',
      parentEmailLabel: 'Parent Email *',
      childGenderLabel: 'Child Gender *',
      enterFullName: 'Enter your full name',
      emailPlaceholder: 'you@example.com',
      parentNameRequired: 'Parent name is required.',
      emailInvalid: 'Please enter a valid email address.',
      genderRequired: 'Please select a gender.',
      cancel: 'Cancel',
      emailField: 'Email',
      genderField: 'Gender',
      nextSectionB: 'Next: Section B',
      back: 'Back',
      submit: 'Submit',
      submitting: 'Submitting…',
      questionRequired: 'This question is required.',
      answerAllFirst: 'Please answer all questions before continuing.',
      pleaseSpecify: 'Please specify',
      couldNotSubmit: 'Could not submit',
      adminDashboard: 'Admin Dashboard',
      logout: 'Logout',
      searchNameEmail: 'Search (name / email)',
      gender: 'Gender',
      all: 'All',
      from: 'From',
      to: 'To',
      exportExcel: 'Export Excel',
      exportPDF: 'Export PDF',
      submissionsCount: (n) => `${n} submission(s)`,
      surveyIdCol: 'Survey ID',
      parentNameCol: 'Parent Name',
      emailCol: 'Email',
      genderCol: 'Gender',
      scoreCol: 'Score',
      dateCol: 'Date',
      actionCol: 'Action',
      view: 'View',
      loadingText: 'Loading…',
      noSubmissions: 'No submissions found.',
      adminLogin: 'Admin Login',
      adminEmail: 'Admin Email',
      adminPassword: 'Admin Password',
      signIn: 'Sign in',
      signingIn: 'Signing in…',
      invalidCreds: 'Invalid email or password.',
      backBtn: 'Back',
      parentAnswerLabel: 'Parent Answer: ',
      markReviewed: 'Mark reviewed',
      surveyAnswersDist: 'Survey Answers & Response Distribution',
      chartFootnote: (n) =>
        `Highlighted bar = this parent's selected answer · across ${n} submission(s)`,
      surveyNotFound: 'Survey not found.',
      submissionDate: 'Submission Date',
      reviewed: 'Reviewed',
      surveyIdField: 'Survey ID',
    }
  ),
  hi: build(
    'देखभालकर्ताओं के स्वास्थ्य-खोज व्यवहार और शिशुओं (0–1 वर्ष) के स्वास्थ्य परिणामों का आकलन करने के लिए एक संरचित प्रश्नावली।',
    'खंड अ: जनसांख्यिकीय डेटा · खंड ब: स्वास्थ्य-खोज व्यवहार और परिणाम',
    'पुरुष',
    'महिला',
    'अन्य',
    {
      healthSurvey: 'स्वास्थ्य सर्वेक्षण',
      startQuizBtn: 'सर्वेक्षण शुरू करें',
      adminLoginBtn: 'एडमिन लॉगिन',
      thankYou: 'धन्यवाद!',
      thankYouMsg:
        'आपके उत्तर सफलतापूर्वक जमा हो गए हैं। आपके द्वारा दी गई जानकारी पूरी तरह गोपनीय रखी जाएगी और केवल शोध कार्यों के लिए उपयोग की जाएगी।',
      surveyIdLabel: 'सर्वेक्षण आईडी',
      submitAnother: 'एक और उत्तर जमा करें',
      parentInformation: 'अभिभावक जानकारी',
      parentNameLabel: 'अभिभावक का नाम *',
      parentEmailLabel: 'अभिभावक का ईमेल *',
      childGenderLabel: 'बच्चे का लिंग *',
      enterFullName: 'अपना पूरा नाम दर्ज करें',
      emailPlaceholder: 'you@example.com',
      parentNameRequired: 'अभिभावक का नाम आवश्यक है।',
      emailInvalid: 'कृपया एक मान्य ईमेल पता दर्ज करें।',
      genderRequired: 'कृपया लिंग चुनें।',
      cancel: 'रद्द करें',
      emailField: 'ईमेल',
      genderField: 'लिंग',
      nextSectionB: 'अगला: खंड ब',
      back: 'वापस',
      submit: 'जमा करें',
      submitting: 'जमा हो रहा है…',
      questionRequired: 'यह प्रश्न आवश्यक है।',
      answerAllFirst: 'कृपया आगे बढ़ने से पहले सभी प्रश्नों का उत्तर दें।',
      pleaseSpecify: 'कृपया निर्दिष्ट करें',
      couldNotSubmit: 'जमा नहीं हो सका',
      adminDashboard: 'एडमिन डैशबोर्ड',
      logout: 'लॉगआउट',
      searchNameEmail: 'खोजें (नाम / ईमेल)',
      gender: 'लिंग',
      all: 'सभी',
      from: 'से',
      to: 'तक',
      exportExcel: 'एक्सेल निर्यात',
      exportPDF: 'पीडीएफ निर्यात',
      submissionsCount: (n) => `${n} उत्तर`,
      surveyIdCol: 'सर्वेक्षण आईडी',
      parentNameCol: 'अभिभावक का नाम',
      emailCol: 'ईमेल',
      genderCol: 'लिंग',
      scoreCol: 'स्कोर',
      dateCol: 'तारीख',
      actionCol: 'क्रिया',
      view: 'देखें',
      loadingText: 'लोड हो रहा है…',
      noSubmissions: 'कोई उत्तर नहीं मिला।',
      adminLogin: 'एडमिन लॉगिन',
      adminEmail: 'एडमिन ईमेल',
      adminPassword: 'एडमिन पासवर्ड',
      signIn: 'साइन इन',
      signingIn: 'साइन इन हो रहा है…',
      invalidCreds: 'अमान्य ईमेल या पासवर्ड।',
      backBtn: 'वापस',
      parentAnswerLabel: 'अभिभावक का उत्तर: ',
      markReviewed: 'समीक्षित चिह्नित करें',
      surveyAnswersDist: 'सर्वेक्षण उत्तर और प्रतिक्रिया वितरण',
      chartFootnote: (n) =>
        `हाइलाइट किया गया बार = इस अभिभावक का चयनित उत्तर · ${n} उत्तरों में`,
      surveyNotFound: 'सर्वेक्षण नहीं मिला।',
      submissionDate: 'जमा करने की तारीख',
      reviewed: 'समीक्षित',
      surveyIdField: 'सर्वेक्षण आईडी',
    }
  ),
  mr: build(
    'काळजी घेणाऱ्यांच्या आरोग्य-शोधक वर्तनाचे व बाळांच्या (0–1 वर्ष) आरोग्य परिणामांचे मूल्यमापन करण्यासाठी संरचित प्रश्नावली.',
    'विभाग अ: लोकसंख्याशास्त्रीय डेटा · विभाग ब: आरोग्य-शोधक वर्तन व परिणाम',
    'पुरुष',
    'स्त्री',
    'इतर',
    {
      healthSurvey: 'आरोग्य सर्वेक्षण',
      startQuizBtn: 'सर्वेक्षण सुरू करा',
      adminLoginBtn: 'अ‍ॅडमिन लॉगिन',
      thankYou: 'धन्यवाद!',
      thankYouMsg:
        'तुमची उत्तरे यशस्वीरीत्या सादर झाली आहेत. तुम्ही दिलेली माहिती पूर्णपणे गोपनीय ठेवली जाईल आणि फक्त संशोधनासाठी वापरली जाईल.',
      surveyIdLabel: 'सर्वेक्षण आयडी',
      submitAnother: 'आणखी एक प्रतिसाद द्या',
      parentInformation: 'पालक माहिती',
      parentNameLabel: 'पालकाचे नाव *',
      parentEmailLabel: 'पालकाचा ईमेल *',
      childGenderLabel: 'मुलाचे लिंग *',
      enterFullName: 'तुमचे पूर्ण नाव प्रविष्ट करा',
      emailPlaceholder: 'you@example.com',
      parentNameRequired: 'पालकाचे नाव आवश्यक आहे.',
      emailInvalid: 'कृपया वैध ईमेल पत्ता प्रविष्ट करा.',
      genderRequired: 'कृपया लिंग निवडा.',
      cancel: 'रद्द करा',
      emailField: 'ईमेल',
      genderField: 'लिंग',
      nextSectionB: 'पुढे: विभाग ब',
      back: 'मागे',
      submit: 'सादर करा',
      submitting: 'सादर होत आहे…',
      questionRequired: 'हा प्रश्न आवश्यक आहे.',
      answerAllFirst: 'कृपया पुढे जाण्यापूर्वी सर्व प्रश्नांची उत्तरे द्या.',
      pleaseSpecify: 'कृपया नमूद करा',
      couldNotSubmit: 'सादर करता आले नाही',
      adminDashboard: 'अ‍ॅडमिन डॅशबोर्ड',
      logout: 'लॉगआउट',
      searchNameEmail: 'शोधा (नाव / ईमेल)',
      gender: 'लिंग',
      all: 'सर्व',
      from: 'पासून',
      to: 'पर्यंत',
      exportExcel: 'एक्सेल निर्यात',
      exportPDF: 'पीडीएफ निर्यात',
      submissionsCount: (n) => `${n} प्रतिसाद`,
      surveyIdCol: 'सर्वेक्षण आयडी',
      parentNameCol: 'पालकाचे नाव',
      emailCol: 'ईमेल',
      genderCol: 'लिंग',
      scoreCol: 'स्कोर',
      dateCol: 'तारीख',
      actionCol: 'कृती',
      view: 'पहा',
      loadingText: 'लोड होत आहे…',
      noSubmissions: 'कोणतेही प्रतिसाद सापडले नाहीत.',
      adminLogin: 'अ‍ॅडमिन लॉगिन',
      adminEmail: 'अ‍ॅडमिन ईमेल',
      adminPassword: 'अ‍ॅडमिन पासवर्ड',
      signIn: 'साइन इन',
      signingIn: 'साइन इन होत आहे…',
      invalidCreds: 'अवैध ईमेल किंवा पासवर्ड.',
      backBtn: 'मागे',
      parentAnswerLabel: 'पालकाचे उत्तर: ',
      markReviewed: 'पुनरावलोकन केले म्हणून चिन्हांकित करा',
      surveyAnswersDist: 'सर्वेक्षण उत्तरे व प्रतिसाद वितरण',
      chartFootnote: (n) =>
        `हायलाइट केलेला बार = या पालकाचे निवडलेले उत्तर · ${n} प्रतिसादांमध्ये`,
      surveyNotFound: 'सर्वेक्षण सापडले नाही.',
      submissionDate: 'सादर केल्याची तारीख',
      reviewed: 'पुनरावलोकन',
      surveyIdField: 'सर्वेक्षण आयडी',
    }
  ),
};

export const useSurveyT = () => {
  // Lazy import to avoid circular
  // Consumers pass language directly instead
  return surveyStrings;
};
