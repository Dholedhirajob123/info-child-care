import { Language } from './i18n';

export interface QuizQuestion {
  id: string;
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
  category: 'breastfeeding' | 'complementary' | 'hygiene' | 'nutrition';
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: {
      en: 'When should breastfeeding be initiated after birth?',
      hi: 'जन्म के बाद स्तनपान कब शुरू किया जाना चाहिए?',
      mr: 'जन्मानंतर स्तनपान केव्हा सुरू करावे?',
    },
    options: {
      en: ['Within 1 hour', 'After 6 hours', 'After 24 hours', 'After 1 week'],
      hi: ['1 घंटे के भीतर', '6 घंटे बाद', '24 घंटे बाद', '1 सप्ताह बाद'],
      mr: ['1 तासाच्या आत', '6 तासांनंतर', '24 तासांनंतर', '1 आठवड्यानंतर'],
    },
    correctIndex: 0,
    explanation: {
      en: 'Breastfeeding should start within the first hour of birth to help establish milk supply and provide the baby with colostrum.',
      hi: 'दूध की आपूर्ति स्थापित करने और बच्चे को कोलोस्ट्रम प्रदान करने के लिए जन्म के पहले घंटे में स्तनपान शुरू होना चाहिए।',
      mr: 'दूध पुरवठा स्थापित करण्यासाठी आणि बाळाला कोलोस्ट्रम देण्यासाठी जन्माच्या पहिल्या तासात स्तनपान सुरू व्हायला हवे.',
    },
    category: 'breastfeeding',
  },
  {
    id: 'q2',
    question: {
      en: 'For how many months should a baby be exclusively breastfed?',
      hi: 'बच्चे को कितने महीनों तक केवल स्तनपान कराना चाहिए?',
      mr: 'बाळाला किती महिन्यांपर्यंत फक्त स्तनपान करावे?',
    },
    options: {
      en: ['3 months', '6 months', '9 months', '12 months'],
      hi: ['3 महीने', '6 महीने', '9 महीने', '12 महीने'],
      mr: ['3 महिने', '6 महिने', '9 महिने', '12 महिने'],
    },
    correctIndex: 1,
    explanation: {
      en: 'Exclusive breastfeeding is recommended for the first 6 months. After that, complementary foods should be introduced while continuing breastfeeding.',
      hi: 'पहले 6 महीनों के लिए केवल स्तनपान की सिफारिश की जाती है। उसके बाद, स्तनपान जारी रखते हुए पूरक आहार शुरू किया जाना चाहिए।',
      mr: 'पहिल्या 6 महिन्यांसाठी फक्त स्तनपान करण्याची शिफारस केली जाते. त्यानंतर, स्तनपान सुरू ठेवताना पूरक आहार सुरू करावा.',
    },
    category: 'breastfeeding',
  },
  {
    id: 'q3',
    question: {
      en: 'What is colostrum?',
      hi: 'कोलोस्ट्रम क्या है?',
      mr: 'कोलोस्ट्रम म्हणजे काय?',
    },
    options: {
      en: ['Formula milk', 'First breast milk', 'Cow milk', 'Vitamin supplement'],
      hi: ['फॉर्मूला दूध', 'पहला स्तन दूध', 'गाय का दूध', 'विटामिन सप्लीमेंट'],
      mr: ['फॉर्म्युला दूध', 'पहिले आईचे दूध', 'गायीचे दूध', 'व्हिटॅमिन सप्लिमेंट'],
    },
    correctIndex: 1,
    explanation: {
      en: 'Colostrum is the first milk produced after birth. It\'s thick, yellowish, and packed with antibodies - often called "liquid gold".',
      hi: 'कोलोस्ट्रम जन्म के बाद उत्पन्न होने वाला पहला दूध है। यह गाढ़ा, पीला और एंटीबॉडी से भरपूर होता है - जिसे अक्सर "तरल सोना" कहा जाता है।',
      mr: 'कोलोस्ट्रम हे जन्मानंतर तयार होणारे पहिले दूध आहे. ते जाड, पिवळसर आणि अँटीबॉडीजने भरलेले आहे - याला "द्रव सोने" म्हणतात.',
    },
    category: 'breastfeeding',
  },
  {
    id: 'q4',
    question: {
      en: 'At what age can you start giving solid foods to a baby?',
      hi: 'बच्चे को ठोस आहार कितने महीने में दे सकते हैं?',
      mr: 'बाळाला घन आहार कोणत्या वयात देता येतो?',
    },
    options: {
      en: ['2 months', '4 months', '6 months', '8 months'],
      hi: ['2 महीने', '4 महीने', '6 महीने', '8 महीने'],
      mr: ['2 महिने', '4 महिने', '6 महिने', '8 महिने'],
    },
    correctIndex: 2,
    explanation: {
      en: 'Solid foods should be introduced at 6 months when the baby\'s digestive system is ready. Before that, breast milk provides all necessary nutrition.',
      hi: '6 महीने में ठोस आहार शुरू किया जाना चाहिए जब बच्चे का पाचन तंत्र तैयार हो। उससे पहले, स्तन का दूध सभी आवश्यक पोषण प्रदान करता है।',
      mr: 'बाळाची पचनसंस्था तयार झाल्यावर 6 महिन्यांत घन आहार सुरू करावा. त्यापूर्वी, आईचे दूध सर्व आवश्यक पोषण पुरवते.',
    },
    category: 'complementary',
  },
  {
    id: 'q5',
    question: {
      en: 'Which of these should NOT be given to babies before 1 year?',
      hi: 'इनमें से क्या 1 साल से पहले बच्चों को नहीं देना चाहिए?',
      mr: 'यापैकी काय 1 वर्षापूर्वी बाळांना देऊ नये?',
    },
    options: {
      en: ['Mashed banana', 'Rice porridge', 'Honey', 'Dal water'],
      hi: ['मैश किया केला', 'चावल का दलिया', 'शहद', 'दाल का पानी'],
      mr: ['मॅश केलेले केळे', 'तांदळाची लापशी', 'मध', 'डाळीचे पाणी'],
    },
    correctIndex: 2,
    explanation: {
      en: 'Honey should not be given to babies under 1 year as it can cause infant botulism, a serious illness.',
      hi: '1 साल से कम उम्र के बच्चों को शहद नहीं देना चाहिए क्योंकि इससे शिशु बोटुलिज्म हो सकता है, एक गंभीर बीमारी।',
      mr: '1 वर्षाखालील बाळांना मध देऊ नये कारण त्यामुळे इन्फंट बोटुलिझम होऊ शकतो, एक गंभीर आजार.',
    },
    category: 'complementary',
  },
  {
    id: 'q6',
    question: {
      en: 'How often should you wash hands before handling a baby?',
      hi: 'बच्चे को संभालने से पहले आपको कितनी बार हाथ धोने चाहिए?',
      mr: 'बाळाला हाताळण्यापूर्वी किती वेळा हात धुवावेत?',
    },
    options: {
      en: ['Never', 'Once a day', 'Every time', 'Once a week'],
      hi: ['कभी नहीं', 'दिन में एक बार', 'हर बार', 'सप्ताह में एक बार'],
      mr: ['कधीच नाही', 'दिवसातून एकदा', 'प्रत्येक वेळी', 'आठवड्यातून एकदा'],
    },
    correctIndex: 2,
    explanation: {
      en: 'You should wash your hands every time before handling a baby to prevent infections and keep them healthy.',
      hi: 'संक्रमण को रोकने और उन्हें स्वस्थ रखने के लिए आपको बच्चे को संभालने से पहले हर बार हाथ धोने चाहिए।',
      mr: 'संक्रमण टाळण्यासाठी आणि त्यांना निरोगी ठेवण्यासाठी तुम्ही बाळाला हाताळण्यापूर्वी प्रत्येक वेळी हात धुवावेत.',
    },
    category: 'hygiene',
  },
  {
    id: 'q7',
    question: {
      en: 'How often should you take your infant for routine health check-ups?',
      hi: 'आपको अपने शिशु को नियमित स्वास्थ्य जांच के लिए कितनी बार ले जाना चाहिए?',
      mr: 'तुम्ही तुमच्या बाळाला नियमित आरोग्य तपासणीसाठी किती वेळा घेऊन जावे?',
    },
    options: {
      en: ['Monthly', 'Once every 3 months', 'Only when the child is sick', 'Never'],
      hi: ['मासिक', 'हर 3 महीने में एक बार', 'केवल जब बच्चा बीमार हो', 'कभी नहीं'],
      mr: ['मासिक', 'दर 3 महिन्यांनी एकदा', 'फक्त बाळ आजारी असताना', 'कधीच नाही'],
    },
    correctIndex: 0,
    explanation: {
      en: 'Monthly health check-ups help monitor your infant\'s growth, detect issues early, and ensure timely vaccinations.',
      hi: 'मासिक स्वास्थ्य जांच आपके शिशु की वृद्धि की निगरानी, समस्याओं का शीघ्र पता लगाने और समय पर टीकाकरण सुनिश्चित करने में मदद करती है।',
      mr: 'मासिक आरोग्य तपासणी तुमच्या बाळाच्या वाढीचे निरीक्षण, समस्या लवकर शोधणे आणि वेळेवर लसीकरण सुनिश्चित करण्यात मदत करते.',
    },
    category: 'hygiene',
  },
  {
    id: 'q8',
    question: {
      en: 'How often should you consult a doctor before giving any medication to your infant?',
      hi: 'शिशु को कोई दवा देने से पहले आपको कितनी बार डॉक्टर से परामर्श करना चाहिए?',
      mr: 'तुमच्या बाळाला कोणतेही औषध देण्यापूर्वी तुम्ही किती वेळा डॉक्टरांचा सल्ला घ्यावा?',
    },
    options: {
      en: ['Always', 'Sometimes', 'Rarely', 'Never'],
      hi: ['हमेशा', 'कभी-कभी', 'शायद ही कभी', 'कभी नहीं'],
      mr: ['नेहमी', 'कधीकधी', 'क्वचितच', 'कधीच नाही'],
    },
    correctIndex: 0,
    explanation: {
      en: 'Always consult a doctor before giving medication to infants. Self-medication can be dangerous for babies.',
      hi: 'शिशुओं को दवा देने से पहले हमेशा डॉक्टर से परामर्श करें। स्व-दवा बच्चों के लिए खतरनाक हो सकती है।',
      mr: 'बाळांना औषध देण्यापूर्वी नेहमी डॉक्टरांचा सल्ला घ्या. स्वत: औषध देणे बाळांसाठी धोकादायक असू शकते.',
    },
    category: 'hygiene',
  },
  {
    id: 'q9',
    question: {
      en: 'When your infant becomes ill, how soon should you seek medical attention?',
      hi: 'जब आपका शिशु बीमार हो, तो आपको कितनी जल्दी चिकित्सा सहायता लेनी चाहिए?',
      mr: 'तुमचे बाळ आजारी पडल्यावर किती लवकर वैद्यकीय मदत घ्यावी?',
    },
    options: {
      en: ['Immediately', 'Within 1–2 days', 'After 3 days', 'Only when the condition worsens'],
      hi: ['तुरंत', '1-2 दिनों के भीतर', '3 दिनों के बाद', 'केवल जब स्थिति बिगड़े'],
      mr: ['लगेच', '1-2 दिवसांत', '3 दिवसांनंतर', 'फक्त स्थिती बिघडल्यावर'],
    },
    correctIndex: 0,
    explanation: {
      en: 'Seek medical attention immediately when your infant is ill. Early treatment prevents complications and ensures better outcomes.',
      hi: 'जब आपका शिशु बीमार हो तो तुरंत चिकित्सा सहायता लें। शीघ्र उपचार जटिलताओं को रोकता है।',
      mr: 'बाळ आजारी असताना लगेच वैद्यकीय मदत घ्या. लवकर उपचार गुंतागुंत टाळतो.',
    },
    category: 'hygiene',
  },
  {
    id: 'q10',
    question: {
      en: 'Should your infant consume a balanced diet including all major food groups (as per age)?',
      hi: 'क्या आपके शिशु को उम्र के अनुसार सभी प्रमुख खाद्य समूहों सहित संतुलित आहार लेना चाहिए?',
      mr: 'तुमच्या बाळाने वयानुसार सर्व प्रमुख अन्न गटांसह संतुलित आहार घ्यावा का?',
    },
    options: {
      en: ['Always', 'Sometimes', 'Rarely', 'Never'],
      hi: ['हमेशा', 'कभी-कभी', 'शायद ही कभी', 'कभी नहीं'],
      mr: ['नेहमी', 'कधीकधी', 'क्वचितच', 'कधीच नाही'],
    },
    correctIndex: 0,
    explanation: {
      en: 'A balanced diet with all food groups is essential for proper infant growth and development after 6 months of age.',
      hi: 'सभी खाद्य समूहों के साथ संतुलित आहार 6 महीने की उम्र के बाद उचित शिशु विकास के लिए आवश्यक है।',
      mr: '6 महिन्यांनंतर बाळाच्या योग्य वाढ आणि विकासासाठी सर्व अन्न गटांसह संतुलित आहार आवश्यक आहे.',
    },
    category: 'nutrition',
  },
  {
    id: 'q11',
    question: {
      en: 'How frequently should your infant visit a healthcare facility for preventive care?',
      hi: 'आपके शिशु को निवारक देखभाल के लिए स्वास्थ्य सुविधा में कितनी बार जाना चाहिए?',
      mr: 'तुमच्या बाळाने प्रतिबंधात्मक काळजीसाठी आरोग्य सुविधेला किती वेळा भेट द्यावी?',
    },
    options: {
      en: ['Regularly', 'Occasionally', 'Rarely', 'Never'],
      hi: ['नियमित रूप से', 'कभी-कभी', 'शायद ही कभी', 'कभी नहीं'],
      mr: ['नियमितपणे', 'कधीकधी', 'क्वचितच', 'कधीच नाही'],
    },
    correctIndex: 0,
    explanation: {
      en: 'Regular preventive care visits help track growth, catch health issues early, and keep vaccinations on schedule.',
      hi: 'नियमित निवारक देखभाल यात्राएं वृद्धि को ट्रैक करने, स्वास्थ्य समस्याओं को जल्दी पकड़ने और टीकाकरण को समय पर रखने में मदद करती हैं।',
      mr: 'नियमित प्रतिबंधात्मक काळजी भेटी वाढ ट्रॅक करणे, आरोग्य समस्या लवकर शोधणे आणि लसीकरण वेळेवर ठेवण्यात मदत करतात.',
    },
    category: 'hygiene',
  },
  {
    id: 'q12',
    question: {
      en: 'Is it important to keep your infant\'s immunization schedule up to date?',
      hi: 'क्या आपके शिशु का टीकाकरण अनुसूची अद्यतित रखना महत्वपूर्ण है?',
      mr: 'तुमच्या बाळाचे लसीकरण वेळापत्रक अद्ययावत ठेवणे महत्त्वाचे आहे का?',
    },
    options: {
      en: ['Yes, very important', 'Somewhat important', 'Not important', 'Not sure'],
      hi: ['हाँ, बहुत महत्वपूर्ण', 'कुछ हद तक महत्वपूर्ण', 'महत्वपूर्ण नहीं', 'पता नहीं'],
      mr: ['हो, खूप महत्त्वाचे', 'काहीसे महत्त्वाचे', 'महत्त्वाचे नाही', 'माहीत नाही'],
    },
    correctIndex: 0,
    explanation: {
      en: 'Keeping immunizations up to date is crucial to protect your infant from serious preventable diseases.',
      hi: 'गंभीर रोकथाम योग्य बीमारियों से अपने शिशु को बचाने के लिए टीकाकरण अद्यतित रखना महत्वपूर्ण है।',
      mr: 'गंभीर प्रतिबंधात्मक रोगांपासून तुमच्या बाळाचे रक्षण करण्यासाठी लसीकरण अद्ययावत ठेवणे महत्त्वाचे आहे.',
    },
    category: 'hygiene',
  },
];
