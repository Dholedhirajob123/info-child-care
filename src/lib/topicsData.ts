import { Language } from './i18n';

export type TopicCategory = 'breastfeeding' | 'complementary' | 'hygiene' | 'nutrition';

export interface FAQ {
  question: Record<Language, string>;
  answer: Record<Language, string>;
}

export interface Topic {
  id: string;
  category: TopicCategory;
  emoji: string;
  title: Record<Language, string>;
  summary: Record<Language, string>;
  description: Record<Language, string>;
  dos: Record<Language, string[]>;
  donts: Record<Language, string[]>;
  faqs: FAQ[];
}

export const topics: Topic[] = [
  {
    id: 'breastfeeding-basics',
    category: 'breastfeeding',
    emoji: '🤱',
    title: {
      en: 'Breastfeeding Basics',
      hi: 'स्तनपान की मूल बातें',
      mr: 'स्तनपानाची मूलभूत माहिती',
    },
    summary: {
      en: 'Learn the fundamentals of successful breastfeeding for your newborn.',
      hi: 'अपने नवजात के लिए सफल स्तनपान की मूल बातें सीखें।',
      mr: 'तुमच्या नवजात बाळासाठी यशस्वी स्तनपानाची मूलभूत माहिती जाणून घ्या.',
    },
    description: {
      en: 'Breastfeeding is the natural way to provide infants with nutrients they need for healthy growth. Breast milk contains antibodies that help protect infants from bacteria and viruses. Exclusive breastfeeding is recommended for the first 6 months of life.',
      hi: 'स्तनपान शिशुओं को स्वस्थ विकास के लिए आवश्यक पोषक तत्व प्रदान करने का प्राकृतिक तरीका है। माँ के दूध में एंटीबॉडी होती हैं जो शिशुओं को बैक्टीरिया और वायरस से बचाने में मदद करती हैं। जीवन के पहले 6 महीनों के लिए केवल स्तनपान की सिफारिश की जाती है।',
      mr: 'स्तनपान हे बाळांना निरोगी वाढीसाठी आवश्यक पोषक तत्त्वे पुरवण्याचा नैसर्गिक मार्ग आहे. आईच्या दुधात अँटीबॉडीज असतात जे बाळांना जीवाणू आणि विषाणूंपासून संरक्षण करण्यास मदत करतात. आयुष्याच्या पहिल्या 6 महिन्यांसाठी फक्त स्तनपान करण्याची शिफारस केली जाते.',
    },
    dos: {
      en: [
        'Start breastfeeding within 1 hour of birth',
        'Breastfeed on demand, day and night',
        'Ensure proper latch for comfortable feeding',
        'Stay hydrated and eat nutritious food',
        'Breastfeed exclusively for first 6 months',
      ],
      hi: [
        'जन्म के 1 घंटे के भीतर स्तनपान शुरू करें',
        'दिन और रात मांग पर स्तनपान कराएं',
        'आरामदायक फीडिंग के लिए उचित लैच सुनिश्चित करें',
        'हाइड्रेटेड रहें और पौष्टिक भोजन खाएं',
        'पहले 6 महीनों तक केवल स्तनपान कराएं',
      ],
      mr: [
        'जन्मानंतर 1 तासाच्या आत स्तनपान सुरू करा',
        'दिवसा आणि रात्री मागणीनुसार स्तनपान करा',
        'आरामदायी आहारासाठी योग्य लॅच सुनिश्चित करा',
        'हायड्रेटेड राहा आणि पौष्टिक अन्न खा',
        'पहिल्या 6 महिन्यांसाठी फक्त स्तनपान करा',
      ],
    },
    donts: {
      en: [
        "Don't give water or other liquids before 6 months",
        "Don't use pacifiers in the first few weeks",
        "Don't skip night feeds",
        "Don't stress - it affects milk production",
      ],
      hi: [
        '6 महीने से पहले पानी या अन्य तरल पदार्थ न दें',
        'पहले कुछ हफ्तों में पेसिफायर का उपयोग न करें',
        'रात की फीड न छोड़ें',
        'तनाव न लें - यह दूध उत्पादन को प्रभावित करता है',
      ],
      mr: [
        '6 महिन्यांपूर्वी पाणी किंवा इतर द्रव देऊ नका',
        'पहिल्या काही आठवड्यांत पॅसिफायर वापरू नका',
        'रात्रीचे आहार वगळू नका',
        'ताण घेऊ नका - याचा दूध उत्पादनावर परिणाम होतो',
      ],
    },
    faqs: [
      {
        question: {
          en: 'How often should I breastfeed my newborn?',
          hi: 'मुझे अपने नवजात को कितनी बार स्तनपान कराना चाहिए?',
          mr: 'मी माझ्या नवजात बाळाला किती वेळा स्तनपान करावे?',
        },
        answer: {
          en: 'Newborns typically need to breastfeed 8-12 times in 24 hours. Feed on demand whenever your baby shows hunger cues.',
          hi: 'नवजात शिशुओं को आमतौर पर 24 घंटों में 8-12 बार स्तनपान की आवश्यकता होती है। जब भी आपका बच्चा भूख के संकेत दिखाए, मांग पर खिलाएं।',
          mr: 'नवजात बाळांना सामान्यतः 24 तासांत 8-12 वेळा स्तनपान करणे आवश्यक असते. जेव्हा तुमचे बाळ भुकेची चिन्हे दाखवते तेव्हा मागणीनुसार खायला द्या.',
        },
      },
    ],
  },
  {
    id: 'importance-of-colostrum',
    category: 'breastfeeding',
    emoji: '💛',
    title: {
      en: 'Importance of Colostrum',
      hi: 'कोलोस्ट्रम का महत्व',
      mr: 'कोलोस्ट्रमचे महत्त्व',
    },
    summary: {
      en: 'Understand why colostrum is called "liquid gold" for your baby.',
      hi: 'समझें कि कोलोस्ट्रम को आपके बच्चे के लिए "तरल सोना" क्यों कहा जाता है।',
      mr: 'कोलोस्ट्रमला तुमच्या बाळासाठी "द्रव सोने" का म्हणतात ते समजून घ्या.',
    },
    description: {
      en: 'Colostrum is the first milk produced after birth. It is thick, yellowish, and packed with antibodies and nutrients. This "liquid gold" provides essential immunity and helps establish healthy gut bacteria in newborns.',
      hi: 'कोलोस्ट्रम जन्म के बाद उत्पन्न होने वाला पहला दूध है। यह गाढ़ा, पीला और एंटीबॉडी और पोषक तत्वों से भरपूर होता है। यह "तरल सोना" आवश्यक प्रतिरक्षा प्रदान करता है और नवजात शिशुओं में स्वस्थ आंत बैक्टीरिया स्थापित करने में मदद करता है।',
      mr: 'कोलोस्ट्रम हे जन्मानंतर तयार होणारे पहिले दूध आहे. ते जाड, पिवळसर आणि अँटीबॉडीज आणि पोषक तत्त्वांनी भरलेले असते. हे "द्रव सोने" आवश्यक प्रतिकारशक्ती प्रदान करते आणि नवजात बाळांमध्ये निरोगी आतड्यांचे जीवाणू स्थापित करण्यास मदत करते.',
    },
    dos: {
      en: [
        'Feed colostrum within first hour of birth',
        'Allow baby to feed frequently',
        'Express colostrum if baby cannot latch',
        'Trust that small amounts are enough initially',
      ],
      hi: [
        'जन्म के पहले घंटे में कोलोस्ट्रम पिलाएं',
        'बच्चे को बार-बार दूध पीने दें',
        'अगर बच्चा लैच नहीं कर सकता तो कोलोस्ट्रम निकालें',
        'भरोसा रखें कि शुरू में थोड़ी मात्रा पर्याप्त है',
      ],
      mr: [
        'जन्माच्या पहिल्या तासात कोलोस्ट्रम द्या',
        'बाळाला वारंवार पाजू द्या',
        'जर बाळ लॅच करू शकत नसेल तर कोलोस्ट्रम काढा',
        'विश्वास ठेवा की सुरुवातीला थोडेसे पुरेसे आहे',
      ],
    },
    donts: {
      en: [
        "Don't discard colostrum - it's precious",
        "Don't give honey or other pre-lacteals",
        "Don't delay first feed",
      ],
      hi: [
        'कोलोस्ट्रम न फेंकें - यह कीमती है',
        'शहद या अन्य प्री-लैक्टल न दें',
        'पहले फीड में देरी न करें',
      ],
      mr: [
        'कोलोस्ट्रम टाकून देऊ नका - ते मौल्यवान आहे',
        'मध किंवा इतर प्री-लॅक्टल देऊ नका',
        'पहिल्या आहारात विलंब करू नका',
      ],
    },
    faqs: [
      {
        question: {
          en: 'Why is my colostrum yellow?',
          hi: 'मेरा कोलोस्ट्रम पीला क्यों है?',
          mr: 'माझे कोलोस्ट्रम पिवळे का आहे?',
        },
        answer: {
          en: 'The yellow color comes from beta-carotene and antibodies. This is completely normal and indicates its richness in nutrients.',
          hi: 'पीला रंग बीटा-कैरोटीन और एंटीबॉडी से आता है। यह पूरी तरह से सामान्य है और पोषक तत्वों की समृद्धि को इंगित करता है।',
          mr: 'पिवळा रंग बीटा-कॅरोटीन आणि अँटीबॉडीजमुळे येतो. हे पूर्णपणे सामान्य आहे आणि पोषक तत्त्वांची समृद्धी दर्शवते.',
        },
      },
    ],
  },
  {
    id: 'feeding-positions',
    category: 'breastfeeding',
    emoji: '🤱',
    title: {
      en: 'Correct Feeding Positions',
      hi: 'सही फीडिंग पोजीशन',
      mr: 'योग्य आहार स्थिती',
    },
    summary: {
      en: 'Learn different breastfeeding positions for comfortable feeding.',
      hi: 'आरामदायक फीडिंग के लिए विभिन्न स्तनपान पोजीशन सीखें।',
      mr: 'आरामदायी आहारासाठी विविध स्तनपान स्थिती शिका.',
    },
    description: {
      en: 'There are several positions for breastfeeding: Cradle hold, Cross-cradle hold, Football hold, and Side-lying position. Choose the one most comfortable for you and your baby. Ensure baby\'s ear, shoulder, and hip are in a straight line.',
      hi: 'स्तनपान के लिए कई पोजीशन हैं: क्रैडल होल्ड, क्रॉस-क्रैडल होल्ड, फुटबॉल होल्ड, और साइड-लाइंग पोजीशन। आप और आपके बच्चे के लिए सबसे आरामदायक चुनें। सुनिश्चित करें कि बच्चे का कान, कंधा और कूल्हा एक सीधी रेखा में हों।',
      mr: 'स्तनपानासाठी अनेक स्थिती आहेत: क्रॅडल होल्ड, क्रॉस-क्रॅडल होल्ड, फुटबॉल होल्ड आणि साइड-लाइंग स्थिती. तुमच्यासाठी आणि तुमच्या बाळासाठी सर्वात आरामदायक निवडा. बाळाचे कान, खांदा आणि नितंब एका सरळ रेषेत असल्याची खात्री करा.',
    },
    dos: {
      en: [
        "Support baby's head and neck",
        'Keep baby close to body',
        "Align baby's ear, shoulder, and hip",
        'Use pillows for support',
      ],
      hi: [
        'बच्चे के सिर और गर्दन को सहारा दें',
        'बच्चे को शरीर के करीब रखें',
        'बच्चे के कान, कंधे और कूल्हे को संरेखित करें',
        'सहारे के लिए तकिए का उपयोग करें',
      ],
      mr: [
        'बाळाचे डोके आणि मान आधार द्या',
        'बाळाला शरीराच्या जवळ ठेवा',
        'बाळाचे कान, खांदा आणि नितंब संरेखित करा',
        'आधारासाठी उशा वापरा',
      ],
    },
    donts: {
      en: [
        "Don't let baby hang or twist",
        "Don't feed in uncomfortable position",
        "Don't rush the feeding",
      ],
      hi: [
        'बच्चे को लटकने या मुड़ने न दें',
        'असुविधाजनक स्थिति में न खिलाएं',
        'फीडिंग में जल्दी न करें',
      ],
      mr: [
        'बाळाला लटकू किंवा वळू देऊ नका',
        'अस्वस्थ स्थितीत खायला देऊ नका',
        'आहारात घाई करू नका',
      ],
    },
    faqs: [],
  },
  {
    id: 'starting-solids',
    category: 'complementary',
    emoji: '🥣',
    title: {
      en: 'Starting Solids at 6 Months',
      hi: '6 महीने में ठोस आहार शुरू करना',
      mr: '6 महिन्यांत घन आहार सुरू करणे',
    },
    summary: {
      en: 'Guide to introducing solid foods when your baby turns 6 months.',
      hi: 'जब आपका बच्चा 6 महीने का हो जाए तो ठोस आहार शुरू करने की गाइड।',
      mr: 'तुमचे बाळ 6 महिन्यांचे झाल्यावर घन आहार सुरू करण्याचे मार्गदर्शक.',
    },
    description: {
      en: 'At 6 months, babies are ready for complementary foods alongside breast milk. Start with single-ingredient purees like mashed banana, rice porridge, or dal water. Gradually introduce variety while continuing breastfeeding.',
      hi: '6 महीने में, बच्चे स्तन के दूध के साथ पूरक आहार के लिए तैयार होते हैं। मैश किए हुए केले, चावल का दलिया, या दाल के पानी जैसे एकल-सामग्री प्यूरी से शुरू करें। स्तनपान जारी रखते हुए धीरे-धीरे विविधता पेश करें।',
      mr: '6 महिन्यांत, बाळे आईच्या दुधासोबत पूरक आहारासाठी तयार असतात. मॅश केलेले केळे, तांदळाची लापशी किंवा डाळीचे पाणी यासारख्या एकल-घटक प्युरीने सुरुवात करा. स्तनपान सुरू ठेवताना हळूहळू विविधता सादर करा.',
    },
    dos: {
      en: [
        'Wait until baby shows signs of readiness',
        'Start with iron-rich foods',
        'Introduce one food at a time',
        'Continue breastfeeding alongside solids',
        'Let baby explore textures',
      ],
      hi: [
        'जब तक बच्चा तैयारी के संकेत न दिखाए तब तक प्रतीक्षा करें',
        'आयरन युक्त खाद्य पदार्थों से शुरू करें',
        'एक समय में एक भोजन पेश करें',
        'ठोस आहार के साथ स्तनपान जारी रखें',
        'बच्चे को बनावट का पता लगाने दें',
      ],
      mr: [
        'बाळ तयारीची चिन्हे दाखवेपर्यंत प्रतीक्षा करा',
        'लोहयुक्त अन्नापासून सुरुवात करा',
        'एका वेळी एक अन्न सादर करा',
        'घन आहारासोबत स्तनपान सुरू ठेवा',
        'बाळाला पोत शोधू द्या',
      ],
    },
    donts: {
      en: [
        "Don't add salt or sugar to baby food",
        "Don't force feed",
        "Don't give honey before 1 year",
        "Don't start solids before 6 months",
      ],
      hi: [
        'बेबी फूड में नमक या चीनी न डालें',
        'जबरदस्ती न खिलाएं',
        '1 साल से पहले शहद न दें',
        '6 महीने से पहले ठोस आहार शुरू न करें',
      ],
      mr: [
        'बेबी फूडमध्ये मीठ किंवा साखर घालू नका',
        'जबरदस्तीने खायला देऊ नका',
        '1 वर्षापूर्वी मध देऊ नका',
        '6 महिन्यांपूर्वी घन आहार सुरू करू नका',
      ],
    },
    faqs: [],
  },
  {
    id: 'baby-hygiene',
    category: 'hygiene',
    emoji: '🛁',
    title: {
      en: 'Baby Hygiene & Care',
      hi: 'शिशु स्वच्छता और देखभाल',
      mr: 'बाळाची स्वच्छता आणि काळजी',
    },
    summary: {
      en: 'Essential hygiene practices to keep your baby healthy and clean.',
      hi: 'अपने बच्चे को स्वस्थ और साफ रखने के लिए आवश्यक स्वच्छता अभ्यास।',
      mr: 'तुमच्या बाळाला निरोगी आणि स्वच्छ ठेवण्यासाठी आवश्यक स्वच्छता पद्धती.',
    },
    description: {
      en: 'Good hygiene is essential for your baby\'s health. This includes proper bathing techniques, diaper changing, umbilical cord care, and keeping feeding equipment clean. Always wash hands before handling your baby.',
      hi: 'अच्छी स्वच्छता आपके बच्चे के स्वास्थ्य के लिए आवश्यक है। इसमें उचित स्नान तकनीक, डायपर बदलना, गर्भनाल की देखभाल, और फीडिंग उपकरण को साफ रखना शामिल है। बच्चे को संभालने से पहले हमेशा हाथ धोएं।',
      mr: 'चांगली स्वच्छता तुमच्या बाळाच्या आरोग्यासाठी आवश्यक आहे. यात योग्य आंघोळीचे तंत्र, डायपर बदलणे, नाभीची काळजी आणि आहाराचे साधने स्वच्छ ठेवणे समाविष्ट आहे. बाळाला हाताळण्यापूर्वी नेहमी हात धुवा.',
    },
    dos: {
      en: [
        'Wash hands before touching baby',
        'Bathe baby 2-3 times a week',
        'Keep umbilical cord dry',
        'Change diapers frequently',
        'Clean feeding bottles thoroughly',
      ],
      hi: [
        'बच्चे को छूने से पहले हाथ धोएं',
        'सप्ताह में 2-3 बार बच्चे को नहलाएं',
        'गर्भनाल को सूखा रखें',
        'डायपर बार-बार बदलें',
        'फीडिंग बोतलों को अच्छी तरह साफ करें',
      ],
      mr: [
        'बाळाला स्पर्श करण्यापूर्वी हात धुवा',
        'आठवड्यातून 2-3 वेळा बाळाला आंघोळ घाला',
        'नाभी कोरडी ठेवा',
        'वारंवार डायपर बदला',
        'फीडिंग बाटल्या पूर्णपणे स्वच्छ करा',
      ],
    },
    donts: {
      en: [
        "Don't use adult soap on babies",
        "Don't over-bathe the baby",
        "Don't apply anything on umbilical cord",
        "Don't leave wet diaper on for long",
      ],
      hi: [
        'बच्चों पर वयस्क साबुन का उपयोग न करें',
        'बच्चे को ज्यादा न नहलाएं',
        'गर्भनाल पर कुछ भी न लगाएं',
        'गीला डायपर लंबे समय तक न छोड़ें',
      ],
      mr: [
        'बाळांवर प्रौढांचा साबण वापरू नका',
        'बाळाला जास्त आंघोळ घालू नका',
        'नाभीवर काहीही लावू नका',
        'ओला डायपर जास्त वेळ ठेवू नका',
      ],
    },
    faqs: [],
  },
  {
    id: 'mother-nutrition',
    category: 'nutrition',
    emoji: '🥗',
    title: {
      en: 'Nutrition for Nursing Mothers',
      hi: 'स्तनपान कराने वाली माताओं के लिए पोषण',
      mr: 'स्तनपान करणाऱ्या मातांसाठी पोषण',
    },
    summary: {
      en: 'Dietary guidelines for mothers to ensure quality breast milk.',
      hi: 'गुणवत्तापूर्ण स्तन दूध सुनिश्चित करने के लिए माताओं के लिए आहार दिशानिर्देश।',
      mr: 'दर्जेदार आईचे दूध सुनिश्चित करण्यासाठी मातांसाठी आहार मार्गदर्शक तत्त्वे.',
    },
    description: {
      en: 'A nursing mother needs extra calories and nutrients to produce quality breast milk. Focus on eating a balanced diet with plenty of fruits, vegetables, whole grains, and protein. Stay well-hydrated by drinking water throughout the day.',
      hi: 'एक स्तनपान कराने वाली माँ को गुणवत्तापूर्ण स्तन दूध उत्पन्न करने के लिए अतिरिक्त कैलोरी और पोषक तत्वों की आवश्यकता होती है। बहुत सारे फल, सब्जियां, साबुत अनाज और प्रोटीन के साथ संतुलित आहार खाने पर ध्यान दें। पूरे दिन पानी पीकर अच्छी तरह हाइड्रेटेड रहें।',
      mr: 'स्तनपान करणाऱ्या आईला दर्जेदार आईचे दूध तयार करण्यासाठी अतिरिक्त कॅलरी आणि पोषक तत्त्वांची आवश्यकता असते. भरपूर फळे, भाज्या, संपूर्ण धान्य आणि प्रथिने असलेला संतुलित आहार खाण्यावर लक्ष केंद्रित करा. दिवसभर पाणी पिऊन चांगले हायड्रेटेड राहा.',
    },
    dos: {
      en: [
        'Eat extra 500 calories daily',
        'Include iron-rich foods',
        'Drink 8-10 glasses of water',
        'Eat calcium-rich foods',
        'Take prescribed supplements',
      ],
      hi: [
        'दैनिक 500 अतिरिक्त कैलोरी खाएं',
        'आयरन युक्त खाद्य पदार्थ शामिल करें',
        '8-10 गिलास पानी पिएं',
        'कैल्शियम युक्त खाद्य पदार्थ खाएं',
        'निर्धारित सप्लीमेंट लें',
      ],
      mr: [
        'दररोज अतिरिक्त 500 कॅलरी खा',
        'लोहयुक्त अन्न समाविष्ट करा',
        '8-10 ग्लास पाणी प्या',
        'कॅल्शियमयुक्त अन्न खा',
        'निर्धारित सप्लिमेंट्स घ्या',
      ],
    },
    donts: {
      en: [
        "Don't skip meals",
        "Don't drink alcohol",
        "Don't consume excessive caffeine",
        "Don't diet to lose weight quickly",
      ],
      hi: [
        'भोजन न छोड़ें',
        'शराब न पिएं',
        'अत्यधिक कैफीन का सेवन न करें',
        'जल्दी वजन कम करने के लिए डाइट न करें',
      ],
      mr: [
        'जेवण वगळू नका',
        'दारू पिऊ नका',
        'जास्त कॅफीन सेवन करू नका',
        'वेगाने वजन कमी करण्यासाठी आहार करू नका',
      ],
    },
    faqs: [],
  },
];

export const getCategoryColor = (category: TopicCategory): string => {
  const colors: Record<TopicCategory, string> = {
    breastfeeding: 'category-breastfeeding',
    complementary: 'category-complementary',
    hygiene: 'category-hygiene',
    nutrition: 'category-nutrition',
  };
  return colors[category];
};
