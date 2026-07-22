import type { Language } from './i18n';

export interface LocalizedText {
  en: string;
  hi: string;
  mr: string;
}

export interface SurveyQuestion {
  id: string;
  question: LocalizedText;
  options: LocalizedText[];
  multiple?: boolean;
  allowOther?: boolean;
}

export interface SurveySection {
  id: 'A' | 'B';
  title: LocalizedText;
  subtitle: LocalizedText;
  questions: SurveyQuestion[];
}

export const tL = (t: LocalizedText | undefined, lang: Language): string =>
  (t?.[lang] ?? t?.en ?? '') as string;

const L = (en: string, hi: string, mr: string): LocalizedText => ({ en, hi, mr });

// Common option presets to reduce repetition
const O = {
  yes: L('Yes', 'हाँ', 'होय'),
  no: L('No', 'नहीं', 'नाही'),
  notSure: L('Not sure', 'पता नहीं', 'माहीत नाही'),
  always: L('Always', 'हमेशा', 'नेहमी'),
  sometimes: L('Sometimes', 'कभी-कभी', 'कधी कधी'),
  rarely: L('Rarely', 'कभी-कभार', 'क्वचित'),
  never: L('Never', 'कभी नहीं', 'कधीही नाही'),
  others: L('Others', 'अन्य', 'इतर'),
  stronglyAgree: L('Strongly agree', 'पूरी तरह सहमत', 'पूर्णपणे सहमत'),
  agree: L('Agree', 'सहमत', 'सहमत'),
  disagree: L('Disagree', 'असहमत', 'असहमत'),
  stronglyDisagree: L('Strongly disagree', 'पूरी तरह असहमत', 'पूर्णपणे असहमत'),
  monthly: L('Monthly', 'मासिक', 'मासिक'),
  regularly: L('Regularly', 'नियमित रूप से', 'नियमितपणे'),
  occasionally: L('Occasionally', 'कभी-कभी', 'अधूनमधून'),
  highlySatisfied: L('Highly satisfied', 'अत्यधिक संतुष्ट', 'अत्यंत समाधानी'),
  satisfied: L('Satisfied', 'संतुष्ट', 'समाधानी'),
  dissatisfied: L('Dissatisfied', 'असंतुष्ट', 'असमाधानी'),
  highlyDissatisfied: L('Highly dissatisfied', 'अत्यधिक असंतुष्ट', 'अत्यंत असमाधानी'),
};

export const sectionA: SurveySection = {
  id: 'A',
  title: L('Section A', 'खंड अ', 'विभाग अ'),
  subtitle: L(
    'Demographic Data of the Caregiver and Infant',
    'देखभालकर्ता और शिशु का जनसांख्यिकीय डेटा',
    'काळजी घेणाऱ्या व्यक्तीचा आणि बाळाचा लोकसंख्याशास्त्रीय डेटा'
  ),
  questions: [
    {
      id: 'a1',
      question: L('Age of the caregiver', 'देखभालकर्ता की आयु', 'काळजी घेणाऱ्याचे वय'),
      options: [
        L('Below 25 years', '25 वर्ष से कम', '25 वर्षांखालील'),
        L('25–35 years', '25–35 वर्ष', '25–35 वर्षे'),
        L('36–45 years', '36–45 वर्ष', '36–45 वर्षे'),
        L('Above 45 years', '45 वर्ष से अधिक', '45 वर्षांवरील'),
      ],
    },
    {
      id: 'a2',
      question: L('Educational status', 'शैक्षणिक स्थिति', 'शैक्षणिक स्थिती'),
      options: [
        L('No formal education', 'औपचारिक शिक्षा नहीं', 'औपचारिक शिक्षण नाही'),
        L('Primary education', 'प्राथमिक शिक्षा', 'प्राथमिक शिक्षण'),
        L('Secondary education', 'माध्यमिक शिक्षा', 'माध्यमिक शिक्षण'),
        L('Graduate and above', 'स्नातक और उससे ऊपर', 'पदवीधर व त्यावरील'),
      ],
    },
    {
      id: 'a3',
      question: L('Occupation', 'व्यवसाय', 'व्यवसाय'),
      options: [
        L('Homemaker', 'गृहिणी', 'गृहिणी'),
        L('Employed', 'नौकरीपेशा', 'नोकरी करणारी'),
        L('Self-employed', 'स्व-रोजगार', 'स्वयंरोजगार'),
        O.others,
      ],
      allowOther: true,
    },
    {
      id: 'a4',
      question: L('Type of family', 'परिवार का प्रकार', 'कुटुंबाचा प्रकार'),
      options: [
        L('Nuclear', 'एकल', 'विभक्त'),
        L('Joint', 'संयुक्त', 'संयुक्त'),
        L('Extended', 'विस्तारित', 'विस्तारित'),
      ],
    },
    {
      id: 'a5',
      question: L('Age of the infant', 'शिशु की आयु', 'बाळाचे वय'),
      options: [
        L('0–1 month', '0–1 माह', '0–1 महिना'),
        L('1–3 months', '1–3 माह', '1–3 महिने'),
        L('3–6 months', '3–6 माह', '3–6 महिने'),
        L('6 months–1 year', '6 माह–1 वर्ष', '6 महिने–1 वर्ष'),
      ],
    },
    {
      id: 'a6',
      question: L('Number of children', 'बच्चों की संख्या', 'मुलांची संख्या'),
      options: [
        L('One', 'एक', 'एक'),
        L('Two', 'दो', 'दोन'),
        L('More than two', 'दो से अधिक', 'दोनपेक्षा जास्त'),
      ],
    },
  ],
};

export const sectionB: SurveySection = {
  id: 'B',
  title: L('Section B', 'खंड ब', 'विभाग ब'),
  subtitle: L(
    'Health-Seeking Behaviour and Health Outcomes of Infants',
    'शिशुओं का स्वास्थ्य-खोज व्यवहार और स्वास्थ्य परिणाम',
    'बाळांचे आरोग्य-शोधक वर्तन आणि आरोग्य परिणाम'
  ),
  questions: [
    {
      id: 'b1',
      question: L(
        'How often do you take your infant for routine health check-ups?',
        'आप अपने शिशु को नियमित स्वास्थ्य जांच के लिए कितनी बार ले जाते हैं?',
        'तुम्ही तुमच्या बाळाला नियमित आरोग्य तपासणीसाठी किती वेळा नेता?'
      ),
      options: [
        O.monthly,
        L('Once every 3 months', 'हर 3 माह में एक बार', 'दर 3 महिन्यांतून एकदा'),
        L('Only when the child is sick', 'केवल जब बच्चा बीमार हो', 'फक्त बाळ आजारी असतानाच'),
        O.never,
      ],
    },
    {
      id: 'b2',
      question: L(
        'Where do you usually seek healthcare services for your infant?',
        'आप आमतौर पर अपने शिशु के लिए स्वास्थ्य सेवा कहाँ लेते हैं?',
        'तुम्ही सहसा तुमच्या बाळासाठी आरोग्य सेवा कोठे घेता?'
      ),
      options: [
        L('Government hospital', 'सरकारी अस्पताल', 'सरकारी रुग्णालय'),
        L('Private clinic/hospital', 'निजी क्लिनिक/अस्पताल', 'खाजगी दवाखाना/रुग्णालय'),
        L('Anganwadi centre', 'आंगनवाड़ी केंद्र', 'अंगणवाडी केंद्र'),
        L('Traditional healer', 'पारंपरिक चिकित्सक', 'पारंपरिक वैद्य'),
        O.others,
      ],
      allowOther: true,
    },
    {
      id: 'b3',
      question: L(
        'How often do you consult a doctor before giving any medication to your infant?',
        'शिशु को कोई भी दवा देने से पहले आप कितनी बार डॉक्टर से सलाह लेते हैं?',
        'बाळाला कोणतेही औषध देण्यापूर्वी तुम्ही किती वेळा डॉक्टरांचा सल्ला घेता?'
      ),
      options: [O.always, O.sometimes, O.rarely, O.never],
    },
    {
      id: 'b4',
      question: L(
        'Do you use any digital application or tool to maintain your infant’s health records?',
        'क्या आप अपने शिशु के स्वास्थ्य रिकॉर्ड के लिए कोई डिजिटल ऐप का उपयोग करते हैं?',
        'तुम्ही तुमच्या बाळाच्या आरोग्य नोंदींसाठी कोणतेही डिजिटल अ‍ॅप वापरता का?'
      ),
      options: [O.yes, O.no],
    },
    {
      id: 'b5',
      question: L(
        'If yes, which digital application do you use?',
        'यदि हाँ, तो आप कौन सा डिजिटल ऐप उपयोग करते हैं?',
        'होय असल्यास, तुम्ही कोणते डिजिटल अ‍ॅप वापरता?'
      ),
      options: [
        L('e-Health / MCTS', 'ई-हेल्थ / MCTS', 'ई-हेल्थ / MCTS'),
        L('Aarogya Setu', 'आरोग्य सेतु', 'आरोग्य सेतू'),
        L('Hospital application', 'अस्पताल का ऐप', 'रुग्णालयाचे अ‍ॅप'),
        O.others,
      ],
      allowOther: true,
    },
    {
      id: 'b6',
      question: L(
        'How easy do you find using digital applications for maintaining your child’s health records?',
        'बच्चे के स्वास्थ्य रिकॉर्ड के लिए डिजिटल ऐप का उपयोग करना आपको कितना आसान लगता है?',
        'बाळाच्या आरोग्य नोंदींसाठी डिजिटल अ‍ॅप वापरणे तुम्हाला किती सोपे वाटते?'
      ),
      options: [
        L('Very easy', 'बहुत आसान', 'खूप सोपे'),
        L('Easy', 'आसान', 'सोपे'),
        L('Difficult', 'कठिन', 'कठीण'),
        L('Very difficult', 'बहुत कठिन', 'खूप कठीण'),
      ],
    },
    {
      id: 'b7',
      question: L(
        'How often do you check your child’s immunization status using a digital app or immunization card?',
        'आप अपने बच्चे की टीकाकरण स्थिति डिजिटल ऐप या टीकाकरण कार्ड से कितनी बार जाँचते हैं?',
        'तुम्ही तुमच्या मुलाची लसीकरण स्थिती डिजिटल अ‍ॅप किंवा लसीकरण कार्डद्वारे किती वेळा तपासता?'
      ),
      options: [O.regularly, O.occasionally, O.rarely, O.never],
    },
    {
      id: 'b8',
      question: L(
        'Using digital health records helps in early detection of illness in infants.',
        'डिजिटल स्वास्थ्य रिकॉर्ड का उपयोग शिशुओं में बीमारी की जल्दी पहचान में मदद करता है।',
        'डिजिटल आरोग्य नोंदींचा वापर बाळांमधील आजाराच्या लवकर निदानात मदत करतो.'
      ),
      options: [O.stronglyAgree, O.agree, O.disagree, O.stronglyDisagree],
    },
    {
      id: 'b9',
      question: L(
        'How confident are you in identifying early symptoms of illness in your infant?',
        'शिशु में बीमारी के शुरुआती लक्षण पहचानने में आप कितने आश्वस्त हैं?',
        'बाळामधील आजाराची सुरुवातीची लक्षणे ओळखण्यात तुम्ही किती आत्मविश्वासू आहात?'
      ),
      options: [
        L('Very confident', 'बहुत आश्वस्त', 'खूप आत्मविश्वासू'),
        L('Somewhat confident', 'कुछ हद तक आश्वस्त', 'काही प्रमाणात आत्मविश्वासू'),
        L('Not confident', 'आश्वस्त नहीं', 'आत्मविश्वासू नाही'),
        O.notSure,
      ],
    },
    {
      id: 'b10',
      question: L(
        'When your infant becomes ill, how soon do you seek medical attention?',
        'जब आपका शिशु बीमार होता है, तो आप कितनी जल्दी चिकित्सा सहायता लेते हैं?',
        'तुमचे बाळ आजारी पडल्यावर तुम्ही किती लवकर वैद्यकीय मदत घेता?'
      ),
      options: [
        L('Immediately', 'तुरंत', 'ताबडतोब'),
        L('Within 1–2 days', '1–2 दिनों के भीतर', '1–2 दिवसांत'),
        L('After 3 days', '3 दिनों के बाद', '3 दिवसांनंतर'),
        L('Only when the condition worsens', 'केवल जब स्थिति बिगड़ जाए', 'फक्त स्थिती बिघडल्यावर'),
      ],
    },
    {
      id: 'b11',
      question: L(
        'What are the barriers to seeking timely medical care for your infant? (Multiple responses allowed)',
        'शिशु के लिए समय पर चिकित्सा प्राप्त करने में क्या बाधाएँ हैं? (एकाधिक उत्तर मान्य)',
        'बाळासाठी वेळेवर वैद्यकीय मदत मिळवण्यात कोणते अडथळे आहेत? (एकाधिक उत्तरे मान्य)'
      ),
      options: [
        L('Financial constraints', 'वित्तीय बाधाएँ', 'आर्थिक अडचणी'),
        L('Distance to healthcare facility', 'स्वास्थ्य सुविधा की दूरी', 'आरोग्य सुविधेचे अंतर'),
        L('Lack of awareness', 'जागरूकता की कमी', 'जागरूकतेचा अभाव'),
        L('Family influence', 'पारिवारिक प्रभाव', 'कुटुंबाचा प्रभाव'),
        O.others,
      ],
      multiple: true,
      allowOther: true,
    },
    {
      id: 'b12',
      question: L(
        'How satisfied are you with the healthcare services available in your area?',
        'आप अपने क्षेत्र में उपलब्ध स्वास्थ्य सेवाओं से कितने संतुष्ट हैं?',
        'तुमच्या भागातील आरोग्य सेवांबाबत तुम्ही किती समाधानी आहात?'
      ),
      options: [O.highlySatisfied, O.satisfied, O.dissatisfied, O.highlyDissatisfied],
    },
    {
      id: 'b13',
      question: L(
        'Do you regularly follow the doctor’s advice and prescribed treatment for your infant?',
        'क्या आप शिशु के लिए डॉक्टर की सलाह और निर्धारित उपचार का नियमित रूप से पालन करते हैं?',
        'तुम्ही बाळासाठी डॉक्टरांचा सल्ला व लिहून दिलेले उपचार नियमितपणे पाळता का?'
      ),
      options: [O.always, O.sometimes, O.rarely, O.never],
    },
    {
      id: 'b14',
      question: L(
        'Have you ever missed or delayed your infant’s vaccination for any reason?',
        'क्या आपने कभी किसी कारण से शिशु का टीकाकरण छोड़ा या विलंबित किया है?',
        'तुम्ही कधी कोणत्याही कारणाने बाळाचे लसीकरण चुकवले किंवा उशीर केला आहे का?'
      ),
      options: [O.yes, O.no],
    },
    {
      id: 'b15',
      question: L(
        'Digital app-based health records improve my health-seeking decisions for my child.',
        'डिजिटल ऐप आधारित स्वास्थ्य रिकॉर्ड मेरे बच्चे के लिए स्वास्थ्य निर्णयों को बेहतर बनाते हैं।',
        'डिजिटल अ‍ॅप-आधारित आरोग्य नोंदी माझ्या मुलासाठीच्या आरोग्य निर्णयांना सुधारतात.'
      ),
      options: [O.stronglyAgree, O.agree, O.disagree, O.stronglyDisagree],
    },
    {
      id: 'b16',
      question: L(
        'Is your infant’s immunization schedule up to date?',
        'क्या आपके शिशु का टीकाकरण कार्यक्रम अद्यतित है?',
        'तुमच्या बाळाचे लसीकरण वेळापत्रक अद्ययावत आहे का?'
      ),
      options: [O.yes, O.no, O.notSure],
    },
    {
      id: 'b17',
      question: L(
        'How frequently does your infant suffer from common illnesses (fever, cough, cold, diarrhea)?',
        'आपके शिशु को सामान्य बीमारियाँ (बुखार, खाँसी, सर्दी, दस्त) कितनी बार होती हैं?',
        'तुमच्या बाळाला सर्वसामान्य आजार (ताप, खोकला, सर्दी, अतिसार) किती वेळा होतात?'
      ),
      options: [
        L('Rarely (0–1 time/year)', 'कभी-कभार (0–1 बार/वर्ष)', 'क्वचित (0–1 वेळा/वर्ष)'),
        L('Occasionally (2–3 times/year)', 'कभी-कभी (2–3 बार/वर्ष)', 'अधूनमधून (2–3 वेळा/वर्ष)'),
        L('Frequently (4 or more times/year)', 'अक्सर (4 या अधिक बार/वर्ष)', 'वारंवार (4 किंवा अधिक वेळा/वर्ष)'),
        O.notSure,
      ],
    },
    {
      id: 'b18',
      question: L(
        'In the past six months, has your infant been hospitalized?',
        'पिछले छह माह में, क्या आपका शिशु अस्पताल में भर्ती हुआ है?',
        'गेल्या सहा महिन्यांत तुमच्या बाळाला रुग्णालयात दाखल करावे लागले का?'
      ),
      options: [O.yes, O.no],
    },
    {
      id: 'b19',
      question: L(
        'How would you describe your infant’s overall health?',
        'आप अपने शिशु के समग्र स्वास्थ्य का वर्णन कैसे करेंगे?',
        'तुम्ही तुमच्या बाळाच्या एकूण आरोग्याचे वर्णन कसे कराल?'
      ),
      options: [
        L('Excellent', 'उत्कृष्ट', 'उत्कृष्ट'),
        L('Good', 'अच्छा', 'चांगले'),
        L('Fair', 'ठीक-ठाक', 'ठीक'),
        L('Poor', 'खराब', 'खराब'),
      ],
    },
    {
      id: 'b20',
      question: L(
        'Has your infant’s growth been monitored regularly using a growth chart or digital app?',
        'क्या आपके शिशु की वृद्धि नियमित रूप से ग्रोथ चार्ट या डिजिटल ऐप से मॉनिटर की जाती है?',
        'तुमच्या बाळाची वाढ नियमितपणे ग्रोथ चार्ट किंवा डिजिटल अ‍ॅपद्वारे तपासली जाते का?'
      ),
      options: [O.yes, O.no],
    },
    {
      id: 'b21',
      question: L(
        'What was your infant’s nutritional status during the last health check-up?',
        'पिछली स्वास्थ्य जांच के दौरान आपके शिशु की पोषण स्थिति क्या थी?',
        'शेवटच्या आरोग्य तपासणीत तुमच्या बाळाची पोषण स्थिती काय होती?'
      ),
      options: [
        L('Normal', 'सामान्य', 'सामान्य'),
        L('Mildly underweight', 'हल्का कम वजन', 'सौम्य कमी वजन'),
        L('Moderately underweight', 'मध्यम कम वजन', 'मध्यम कमी वजन'),
        L('Severely underweight', 'गंभीर कम वजन', 'गंभीर कमी वजन'),
      ],
    },
    {
      id: 'b22',
      question: L(
        'How often do you monitor your infant’s height and weight?',
        'आप अपने शिशु की ऊँचाई और वजन कितनी बार जाँचते हैं?',
        'तुम्ही तुमच्या बाळाची उंची व वजन किती वेळा तपासता?'
      ),
      options: [
        O.monthly,
        L('Quarterly', 'त्रैमासिक', 'त्रैमासिक'),
        O.occasionally,
        O.never,
      ],
    },
    {
      id: 'b23',
      question: L(
        'Does your infant achieve developmental milestones appropriate for age?',
        'क्या आपका शिशु आयु के अनुसार विकास के मील के पत्थर प्राप्त कर रहा है?',
        'तुमचे बाळ वयानुसार विकासाचे टप्पे गाठत आहे का?'
      ),
      options: [O.yes, O.no, O.notSure],
    },
    {
      id: 'b24',
      question: L(
        'Are you aware of your infant’s recommended immunization schedule?',
        'क्या आप अपने शिशु के अनुशंसित टीकाकरण कार्यक्रम से अवगत हैं?',
        'तुम्हाला तुमच्या बाळाच्या शिफारस केलेल्या लसीकरण वेळापत्रकाची माहिती आहे का?'
      ),
      options: [
        L('Fully aware', 'पूरी तरह अवगत', 'पूर्णपणे माहिती'),
        L('Partly aware', 'आंशिक रूप से अवगत', 'अंशतः माहिती'),
        L('Not aware', 'अवगत नहीं', 'माहिती नाही'),
      ],
    },
    {
      id: 'b25',
      question: L(
        'Does your infant consume a balanced diet including all major food groups (as per age)?',
        'क्या आपका शिशु सभी प्रमुख खाद्य समूहों सहित संतुलित आहार लेता है (आयु के अनुसार)?',
        'तुमचे बाळ वयानुसार सर्व प्रमुख अन्नगटांसह संतुलित आहार घेते का?'
      ),
      options: [O.always, O.sometimes, O.rarely, O.never],
    },
    {
      id: 'b26',
      question: L(
        'I have noticed improvement in my infant’s health after using digital health records.',
        'डिजिटल स्वास्थ्य रिकॉर्ड का उपयोग करने के बाद मैंने अपने शिशु के स्वास्थ्य में सुधार देखा है।',
        'डिजिटल आरोग्य नोंदी वापरल्यानंतर माझ्या बाळाच्या आरोग्यात सुधारणा दिसून आली आहे.'
      ),
      options: [O.stronglyAgree, O.agree, O.disagree, O.stronglyDisagree],
    },
    {
      id: 'b27',
      question: L(
        'Has your infant experienced any growth delay or undernutrition in the past year?',
        'क्या पिछले वर्ष में आपके शिशु को वृद्धि में देरी या कुपोषण हुआ है?',
        'गेल्या वर्षभरात तुमच्या बाळाला वाढीत विलंब किंवा कुपोषण झाले आहे का?'
      ),
      options: [O.yes, O.no, O.notSure],
    },
    {
      id: 'b28',
      question: L(
        'How frequently does your infant visit a healthcare facility for preventive care?',
        'आपका शिशु निवारक देखभाल के लिए स्वास्थ्य सुविधा पर कितनी बार जाता है?',
        'तुमचे बाळ प्रतिबंधात्मक काळजीसाठी आरोग्य सुविधेत किती वेळा जाते?'
      ),
      options: [O.regularly, O.occasionally, O.rarely, O.never],
    },
    {
      id: 'b29',
      question: L(
        'Maintaining digital health records helps in better tracking of infant growth and development compared to manual records.',
        'मैनुअल रिकॉर्ड की तुलना में डिजिटल स्वास्थ्य रिकॉर्ड रखने से शिशु की वृद्धि और विकास की बेहतर ट्रैकिंग होती है।',
        'हस्तलिखित नोंदींपेक्षा डिजिटल आरोग्य नोंदी ठेवल्याने बाळाच्या वाढ व विकासाचा अधिक चांगला मागोवा घेता येतो.'
      ),
      options: [O.stronglyAgree, O.agree, O.disagree, O.stronglyDisagree],
    },
    {
      id: 'b30',
      question: L(
        'Overall, how satisfied are you with your infant’s current health status and health outcomes?',
        'कुल मिलाकर, आप अपने शिशु के वर्तमान स्वास्थ्य और परिणामों से कितने संतुष्ट हैं?',
        'एकूणच, तुमच्या बाळाच्या सध्याच्या आरोग्य स्थितीबाबत व परिणामांबाबत तुम्ही किती समाधानी आहात?'
      ),
      options: [O.highlySatisfied, O.satisfied, O.dissatisfied, O.highlyDissatisfied],
    },
  ],
};

export const surveySections: SurveySection[] = [sectionA, sectionB];
