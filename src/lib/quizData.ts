import { Language } from './i18n';

export interface QuizQuestion {
  id: string;
  question: Record<Language, string>;
  options: Record<Language, string[]>;
  correctIndex: number;
  explanation: Record<Language, string>;
  category: 'breastfeeding' | 'complementary' | 'hygiene' | 'nutrition' | 'growth';
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
  // Growth Monitoring Questions
  {
    id: 'q13',
    question: {
      en: 'How often should you monitor your infant\'s height and weight?',
      hi: 'आपको अपने शिशु की ऊंचाई और वजन की कितनी बार निगरानी करनी चाहिए?',
      mr: 'तुम्ही तुमच्या बाळाची उंची आणि वजन किती वेळा तपासावे?',
    },
    options: {
      en: ['Monthly', 'Once every 6 months', 'Once a year', 'Never'],
      hi: ['मासिक', 'हर 6 महीने में', 'साल में एक बार', 'कभी नहीं'],
      mr: ['मासिक', 'दर 6 महिन्यांनी', 'वर्षातून एकदा', 'कधीच नाही'],
    },
    correctIndex: 0,
    explanation: {
      en: 'Monthly monitoring of height and weight helps track your infant\'s growth pattern and detect any issues early.',
      hi: 'ऊंचाई और वजन की मासिक निगरानी आपके शिशु के विकास पैटर्न को ट्रैक करने और किसी भी समस्या का जल्दी पता लगाने में मदद करती है।',
      mr: 'उंची आणि वजनाचे मासिक निरीक्षण तुमच्या बाळाच्या वाढीचा ट्रॅक ठेवण्यास आणि कोणत्याही समस्या लवकर शोधण्यात मदत करते.',
    },
    category: 'growth',
  },
  {
    id: 'q14',
    question: {
      en: 'Has your infant\'s growth been monitored regularly using a growth chart?',
      hi: 'क्या आपके शिशु की वृद्धि की नियमित रूप से ग्रोथ चार्ट के माध्यम से निगरानी की गई है?',
      mr: 'तुमच्या बाळाच्या वाढीचे ग्रोथ चार्ट वापरून नियमित निरीक्षण केले आहे का?',
    },
    options: {
      en: ['Yes, regularly', 'Sometimes', 'Rarely', 'Never'],
      hi: ['हाँ, नियमित रूप से', 'कभी-कभी', 'शायद ही कभी', 'कभी नहीं'],
      mr: ['हो, नियमितपणे', 'कधीकधी', 'क्वचितच', 'कधीच नाही'],
    },
    correctIndex: 0,
    explanation: {
      en: 'Regular growth chart monitoring is essential to ensure your infant is growing at a healthy rate and to identify any growth delays early.',
      hi: 'नियमित ग्रोथ चार्ट निगरानी यह सुनिश्चित करने के लिए आवश्यक है कि आपका शिशु स्वस्थ दर से बढ़ रहा है और किसी भी विकास देरी की पहचान जल्दी हो।',
      mr: 'तुमचे बाळ निरोगी गतीने वाढत आहे याची खात्री करण्यासाठी आणि कोणत्याही वाढीच्या विलंबाची लवकर ओळख करण्यासाठी नियमित ग्रोथ चार्ट निरीक्षण आवश्यक आहे.',
    },
    category: 'growth',
  },
  {
    id: 'q15',
    question: {
      en: 'Does your infant achieve developmental milestones appropriate for their age?',
      hi: 'क्या आपका शिशु अपनी उम्र के अनुसार विकासात्मक मील के पत्थर हासिल करता है?',
      mr: 'तुमचे बाळ त्यांच्या वयानुसार विकासात्मक टप्पे गाठते का?',
    },
    options: {
      en: ['Yes, on track', 'Slightly delayed', 'Significantly delayed', 'Not sure'],
      hi: ['हाँ, सही समय पर', 'थोड़ी देरी से', 'काफी देरी से', 'पता नहीं'],
      mr: ['हो, वेळेवर', 'थोडा उशीरा', 'लक्षणीय उशीरा', 'माहीत नाही'],
    },
    correctIndex: 0,
    explanation: {
      en: 'Tracking developmental milestones helps ensure your baby is developing normally. If delays are noticed, early intervention can make a big difference.',
      hi: 'विकासात्मक मील के पत्थर ट्रैक करने से यह सुनिश्चित करने में मदद मिलती है कि आपका बच्चा सामान्य रूप से विकसित हो रहा है।',
      mr: 'विकासात्मक टप्पे ट्रॅक केल्याने तुमचे बाळ सामान्यपणे विकसित होत आहे याची खात्री होते.',
    },
    category: 'growth',
  },
  {
    id: 'q16',
    question: {
      en: 'What was the ideal nutritional status for an infant during a health check-up?',
      hi: 'स्वास्थ्य जांच के दौरान शिशु की आदर्श पोषण स्थिति क्या होनी चाहिए?',
      mr: 'आरोग्य तपासणी दरम्यान बाळाची आदर्श पोषण स्थिती काय असावी?',
    },
    options: {
      en: ['Normal weight for age', 'Mildly underweight', 'Moderately underweight', 'Severely underweight'],
      hi: ['उम्र के अनुसार सामान्य वजन', 'हल्का कम वजन', 'मध्यम कम वजन', 'गंभीर रूप से कम वजन'],
      mr: ['वयानुसार सामान्य वजन', 'किंचित कमी वजन', 'मध्यम कमी वजन', 'गंभीरपणे कमी वजन'],
    },
    correctIndex: 0,
    explanation: {
      en: 'Normal weight for age indicates proper nutrition and healthy growth. Regular monitoring helps maintain optimal nutritional status.',
      hi: 'उम्र के अनुसार सामान्य वजन उचित पोषण और स्वस्थ विकास को दर्शाता है।',
      mr: 'वयानुसार सामान्य वजन योग्य पोषण आणि निरोगी वाढ दर्शवते.',
    },
    category: 'growth',
  },
  {
    id: 'q17',
    question: {
      en: 'How can you tell if your infant has growth delay or undernutrition?',
      hi: 'आपको कैसे पता चलेगा कि आपके शिशु को विकास में देरी या कुपोषण है?',
      mr: 'तुमच्या बाळाला वाढीत विलंब किंवा कुपोषण आहे हे कसे कळेल?',
    },
    options: {
      en: ['Regular growth chart monitoring', 'Comparing with other babies', 'Guessing by appearance', 'No way to tell'],
      hi: ['नियमित ग्रोथ चार्ट निगरानी', 'अन्य बच्चों से तुलना', 'दिखावट से अंदाजा', 'कोई तरीका नहीं'],
      mr: ['नियमित ग्रोथ चार्ट निरीक्षण', 'इतर बाळांशी तुलना', 'दिसण्यावरून अंदाज', 'कोणताही मार्ग नाही'],
    },
    correctIndex: 0,
    explanation: {
      en: 'Growth chart monitoring is the most reliable way to detect growth delays. It tracks weight, height, and head circumference against standard benchmarks.',
      hi: 'ग्रोथ चार्ट निगरानी विकास देरी का पता लगाने का सबसे विश्वसनीय तरीका है।',
      mr: 'ग्रोथ चार्ट निरीक्षण वाढीतील विलंब शोधण्याचा सर्वात विश्वसनीय मार्ग आहे.',
    },
    category: 'growth',
  },
  {
    id: 'q18',
    question: {
      en: 'How frequently should an infant visit a healthcare facility for growth monitoring?',
      hi: 'शिशु को विकास निगरानी के लिए स्वास्थ्य सुविधा में कितनी बार जाना चाहिए?',
      mr: 'वाढीच्या निरीक्षणासाठी बाळाने आरोग्य सुविधेला किती वेळा भेट द्यावी?',
    },
    options: {
      en: ['Monthly', 'Every 3 months', 'Every 6 months', 'Once a year'],
      hi: ['मासिक', 'हर 3 महीने', 'हर 6 महीने', 'साल में एक बार'],
      mr: ['मासिक', 'दर 3 महिन्यांनी', 'दर 6 महिन्यांनी', 'वर्षातून एकदा'],
    },
    correctIndex: 0,
    explanation: {
      en: 'Monthly visits allow healthcare providers to track growth patterns and address any nutritional or developmental concerns promptly.',
      hi: 'मासिक यात्राएं स्वास्थ्य प्रदाताओं को विकास पैटर्न ट्रैक करने और पोषण या विकासात्मक चिंताओं को तुरंत संबोधित करने में सक्षम बनाती हैं।',
      mr: 'मासिक भेटी आरोग्य सेवा प्रदात्यांना वाढीचे नमुने ट्रॅक करण्यास आणि पोषण किंवा विकासात्मक चिंतांचे त्वरित निराकरण करण्यास सक्षम करतात.',
    },
    category: 'growth',
  },
  {
    id: 'q19',
    question: {
      en: 'What is the best first food for a baby after 6 months?',
      hi: '6 महीने के बाद बच्चे के लिए सबसे अच्छा पहला भोजन क्या है?',
      mr: '6 महिन्यांनंतर बाळासाठी सर्वोत्तम पहिला आहार कोणता?',
    },
    options: {
      en: ['Mashed rice or dal', 'Chocolate', 'Chips', 'Cold drinks'],
      hi: ['मसला हुआ चावल या दाल', 'चॉकलेट', 'चिप्स', 'कोल्ड ड्रिंक'],
      mr: ['मॅश केलेला भात किंवा डाळ', 'चॉकलेट', 'चिप्स', 'कोल्ड ड्रिंक्स'],
    },
    correctIndex: 0,
    explanation: {
      en: 'Soft, mashed homemade foods like rice and dal are ideal first foods. Avoid processed and sugary items.',
      hi: 'नरम, मसला हुआ घर का बना भोजन जैसे चावल और दाल आदर्श पहला भोजन है।',
      mr: 'मऊ, मॅश केलेले घरचे अन्न जसे भात आणि डाळ आदर्श पहिला आहार आहे.',
    },
    category: 'complementary',
  },
  {
    id: 'q20',
    question: {
      en: 'How many times a day should a 6-8 month old baby be fed solid food?',
      hi: '6-8 महीने के बच्चे को दिन में कितनी बार ठोस आहार खिलाना चाहिए?',
      mr: '6-8 महिन्यांच्या बाळाला दिवसातून किती वेळा घन आहार द्यावा?',
    },
    options: {
      en: ['1 time', '2-3 times', '5-6 times', 'Only when crying'],
      hi: ['1 बार', '2-3 बार', '5-6 बार', 'केवल जब रोए'],
      mr: ['1 वेळा', '2-3 वेळा', '5-6 वेळा', 'फक्त रडताना'],
    },
    correctIndex: 1,
    explanation: {
      en: 'Babies aged 6-8 months should be fed solid foods 2-3 times a day alongside continued breastfeeding.',
      hi: '6-8 महीने के बच्चों को स्तनपान जारी रखते हुए दिन में 2-3 बार ठोस आहार दिया जाना चाहिए।',
      mr: '6-8 महिन्यांच्या बाळांना स्तनपान सुरू ठेवत दिवसातून 2-3 वेळा घन आहार द्यावा.',
    },
    category: 'complementary',
  },
  {
    id: 'q21',
    question: {
      en: 'Which vitamin is produced when skin is exposed to sunlight?',
      hi: 'त्वचा को धूप में रखने पर कौन सा विटामिन बनता है?',
      mr: 'त्वचा सूर्यप्रकाशात आल्यावर कोणते व्हिटॅमिन तयार होते?',
    },
    options: {
      en: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'],
      hi: ['विटामिन A', 'विटामिन B', 'विटामिन C', 'विटामिन D'],
      mr: ['व्हिटॅमिन A', 'व्हिटॅमिन B', 'व्हिटॅमिन C', 'व्हिटॅमिन D'],
    },
    correctIndex: 3,
    explanation: {
      en: 'Vitamin D is produced when skin is exposed to sunlight. It is essential for bone health and calcium absorption in infants.',
      hi: 'सूर्य के प्रकाश में त्वचा के संपर्क में आने पर विटामिन D बनता है। यह हड्डियों के स्वास्थ्य के लिए आवश्यक है।',
      mr: 'सूर्यप्रकाशात त्वचा आल्यावर व्हिटॅमिन D तयार होते. हे हाडांच्या आरोग्यासाठी आवश्यक आहे.',
    },
    category: 'nutrition',
  },
  {
    id: 'q22',
    question: {
      en: 'Which nutrient is most important for brain development in infants?',
      hi: 'शिशुओं में मस्तिष्क विकास के लिए कौन सा पोषक तत्व सबसे महत्वपूर्ण है?',
      mr: 'बाळांच्या मेंदूच्या विकासासाठी कोणते पोषक तत्व सर्वात महत्त्वाचे आहे?',
    },
    options: {
      en: ['Sugar', 'Iron', 'Salt', 'Caffeine'],
      hi: ['चीनी', 'आयरन', 'नमक', 'कैफीन'],
      mr: ['साखर', 'लोह', 'मीठ', 'कॅफीन'],
    },
    correctIndex: 1,
    explanation: {
      en: 'Iron is crucial for brain development. Iron-rich foods like green leafy vegetables, eggs, and fortified cereals should be included in an infant\'s diet.',
      hi: 'आयरन मस्तिष्क विकास के लिए महत्वपूर्ण है। आयरन युक्त खाद्य पदार्थ शिशु के आहार में शामिल होने चाहिए।',
      mr: 'लोह मेंदूच्या विकासासाठी महत्त्वाचे आहे. लोहयुक्त पदार्थ बाळाच्या आहारात समाविष्ट करावेत.',
    },
    category: 'nutrition',
  },
  {
    id: 'q23',
    question: {
      en: 'How should you clean a baby\'s feeding bottles?',
      hi: 'बच्चे की फीडिंग बोतलें कैसे साफ करनी चाहिए?',
      mr: 'बाळाच्या फीडिंग बॉटल्स कशा स्वच्छ कराव्यात?',
    },
    options: {
      en: ['Rinse with water only', 'Wash and sterilize properly', 'Wipe with cloth', 'No need to clean'],
      hi: ['केवल पानी से धोएं', 'अच्छी तरह धोएं और स्टरलाइज़ करें', 'कपड़े से पोंछें', 'साफ करने की जरूरत नहीं'],
      mr: ['फक्त पाण्याने धुवा', 'नीट धुवा आणि निर्जंतुक करा', 'कापडाने पुसा', 'स्वच्छ करण्याची गरज नाही'],
    },
    correctIndex: 1,
    explanation: {
      en: 'Feeding bottles must be washed thoroughly with soap and sterilized by boiling to prevent bacterial contamination.',
      hi: 'फीडिंग बोतलों को साबुन से अच्छी तरह धोकर उबालकर स्टरलाइज़ करना चाहिए।',
      mr: 'फीडिंग बॉटल्स साबणाने नीट धुवून उकळवून निर्जंतुक कराव्यात.',
    },
    category: 'hygiene',
  },
  {
    id: 'q24',
    question: {
      en: 'What is the recommended duration for continued breastfeeding along with solid foods?',
      hi: 'ठोस आहार के साथ स्तनपान जारी रखने की अनुशंसित अवधि क्या है?',
      mr: 'घन आहारासह स्तनपान सुरू ठेवण्याचा शिफारस केलेला कालावधी किती आहे?',
    },
    options: {
      en: ['Up to 1 year', 'Up to 2 years or beyond', 'Up to 6 months only', 'No need after solids start'],
      hi: ['1 साल तक', '2 साल या उससे अधिक', 'केवल 6 महीने तक', 'ठोस आहार शुरू होने के बाद जरूरत नहीं'],
      mr: ['1 वर्षापर्यंत', '2 वर्षे किंवा त्यापुढे', 'फक्त 6 महिन्यांपर्यंत', 'घन आहार सुरू झाल्यावर गरज नाही'],
    },
    correctIndex: 1,
    explanation: {
      en: 'WHO recommends continued breastfeeding up to 2 years or beyond along with appropriate complementary foods.',
      hi: 'WHO उचित पूरक आहार के साथ 2 साल या उससे अधिक तक स्तनपान जारी रखने की सिफारिश करता है।',
      mr: 'WHO योग्य पूरक आहारासह 2 वर्षे किंवा त्यापुढे स्तनपान सुरू ठेवण्याची शिफारस करते.',
    },
    category: 'breastfeeding',
  },
  {
    id: 'q25',
    question: {
      en: 'What should you do if a breastfeeding mother has a common cold?',
      hi: 'अगर स्तनपान कराने वाली माँ को सामान्य सर्दी हो तो क्या करना चाहिए?',
      mr: 'स्तनपान करणाऱ्या आईला सामान्य सर्दी झाल्यास काय करावे?',
    },
    options: {
      en: ['Stop breastfeeding', 'Continue breastfeeding', 'Give formula milk', 'Give cow milk'],
      hi: ['स्तनपान बंद करें', 'स्तनपान जारी रखें', 'फॉर्मूला दूध दें', 'गाय का दूध दें'],
      mr: ['स्तनपान थांबवा', 'स्तनपान सुरू ठेवा', 'फॉर्म्युला दूध द्या', 'गायीचे दूध द्या'],
    },
    correctIndex: 1,
    explanation: {
      en: 'Breastfeeding should continue even if the mother has a common cold. Breast milk contains antibodies that protect the baby.',
      hi: 'सामान्य सर्दी होने पर भी स्तनपान जारी रखना चाहिए। स्तन के दूध में एंटीबॉडी होती हैं जो बच्चे की रक्षा करती हैं।',
      mr: 'आईला सामान्य सर्दी असली तरी स्तनपान सुरू ठेवावे. आईच्या दुधात अँटीबॉडीज असतात जे बाळाचे रक्षण करतात.',
    },
    category: 'breastfeeding',
  },
  {
    id: 'q26',
    question: {
      en: 'At what age does a baby typically start crawling?',
      hi: 'बच्चा आमतौर पर किस उम्र में रेंगना शुरू करता है?',
      mr: 'बाळ सामान्यतः कोणत्या वयात रांगायला लागते?',
    },
    options: {
      en: ['2-3 months', '6-10 months', '12-15 months', '18 months'],
      hi: ['2-3 महीने', '6-10 महीने', '12-15 महीने', '18 महीने'],
      mr: ['2-3 महिने', '6-10 महिने', '12-15 महिने', '18 महिने'],
    },
    correctIndex: 1,
    explanation: {
      en: 'Most babies start crawling between 6-10 months. However, some babies skip crawling and go directly to walking.',
      hi: 'अधिकांश बच्चे 6-10 महीने के बीच रेंगना शुरू करते हैं।',
      mr: 'बहुतेक बाळे 6-10 महिन्यांत रांगायला लागतात.',
    },
    category: 'growth',
  },
  {
    id: 'q27',
    question: {
      en: 'Which of the following is a sign of dehydration in infants?',
      hi: 'निम्नलिखित में से कौन सा शिशुओं में निर्जलीकरण का संकेत है?',
      mr: 'खालीलपैकी कोणते बाळांमधील निर्जलीकरणाचे लक्षण आहे?',
    },
    options: {
      en: ['Frequent urination', 'Dry mouth and fewer tears', 'Excessive sweating', 'Increased appetite'],
      hi: ['बार-बार पेशाब', 'सूखा मुंह और कम आंसू', 'अत्यधिक पसीना', 'बढ़ी हुई भूख'],
      mr: ['वारंवार लघवी', 'कोरडे तोंड आणि कमी अश्रू', 'जास्त घाम', 'वाढलेली भूक'],
    },
    correctIndex: 1,
    explanation: {
      en: 'Dry mouth, fewer tears, and reduced urination are key signs of dehydration. Seek medical help immediately if noticed.',
      hi: 'सूखा मुंह, कम आंसू और कम पेशाब निर्जलीकरण के प्रमुख संकेत हैं।',
      mr: 'कोरडे तोंड, कमी अश्रू आणि कमी लघवी हे निर्जलीकरणाचे प्रमुख लक्षणे आहेत.',
    },
    category: 'nutrition',
  },
  {
    id: 'q28',
    question: {
      en: 'How should you store expressed breast milk?',
      hi: 'निकाला हुआ स्तन दूध कैसे स्टोर करना चाहिए?',
      mr: 'काढलेले आईचे दूध कसे साठवावे?',
    },
    options: {
      en: ['In a clean container in the refrigerator', 'In an open bowl at room temperature', 'Mix with formula', 'In a metal container'],
      hi: ['रेफ्रिजरेटर में साफ बर्तन में', 'कमरे के तापमान पर खुले कटोरे में', 'फॉर्मूला के साथ मिलाएं', 'धातु के बर्तन में'],
      mr: ['रेफ्रिजरेटरमध्ये स्वच्छ भांड्यात', 'खोलीच्या तापमानावर उघड्या भांड्यात', 'फॉर्म्युलासोबत मिसळा', 'धातूच्या भांड्यात'],
    },
    correctIndex: 0,
    explanation: {
      en: 'Expressed breast milk should be stored in a clean, covered container in the refrigerator and used within 24 hours.',
      hi: 'निकाला हुआ स्तन दूध रेफ्रिजरेटर में साफ, ढके हुए बर्तन में रखना चाहिए और 24 घंटे के भीतर उपयोग करना चाहिए।',
      mr: 'काढलेले आईचे दूध रेफ्रिजरेटरमध्ये स्वच्छ, झाकलेल्या भांड्यात ठेवावे आणि 24 तासांत वापरावे.',
    },
    category: 'breastfeeding',
  },
  {
    id: 'q29',
    question: {
      en: 'What is the ideal room temperature for a newborn baby?',
      hi: 'नवजात शिशु के लिए आदर्श कमरे का तापमान क्या है?',
      mr: 'नवजात बाळासाठी आदर्श खोलीचे तापमान किती आहे?',
    },
    options: {
      en: ['16-18°C', '20-22°C', '25-28°C', '30-32°C'],
      hi: ['16-18°C', '20-22°C', '25-28°C', '30-32°C'],
      mr: ['16-18°C', '20-22°C', '25-28°C', '30-32°C'],
    },
    correctIndex: 2,
    explanation: {
      en: 'A room temperature of 25-28°C is ideal for newborns in India. It keeps the baby warm without overheating.',
      hi: 'भारत में नवजात शिशुओं के लिए 25-28°C कमरे का तापमान आदर्श है।',
      mr: 'भारतात नवजात बाळांसाठी 25-28°C खोलीचे तापमान आदर्श आहे.',
    },
    category: 'hygiene',
  },
  {
    id: 'q30',
    question: {
      en: 'When should you introduce eggs in a baby\'s diet?',
      hi: 'बच्चे के आहार में अंडे कब शामिल करने चाहिए?',
      mr: 'बाळाच्या आहारात अंडी कधी समाविष्ट करावीत?',
    },
    options: {
      en: ['After 3 months', 'After 6 months', 'After 1 year', 'After 2 years'],
      hi: ['3 महीने बाद', '6 महीने बाद', '1 साल बाद', '2 साल बाद'],
      mr: ['3 महिन्यांनंतर', '6 महिन्यांनंतर', '1 वर्षानंतर', '2 वर्षांनंतर'],
    },
    correctIndex: 1,
    explanation: {
      en: 'Well-cooked eggs can be introduced after 6 months. Start with the yolk and gradually introduce the whole egg.',
      hi: 'अच्छी तरह पके हुए अंडे 6 महीने बाद शुरू किए जा सकते हैं। जर्दी से शुरू करें।',
      mr: 'चांगले शिजवलेली अंडी 6 महिन्यांनंतर सुरू करता येतात. बलकापासून सुरुवात करा.',
    },
    category: 'complementary',
  },
];
