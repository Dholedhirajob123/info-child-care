import { Language } from './i18n';

export interface Tip {
  id: string;
  emoji: string;
  title: Record<Language, string>;
  content: Record<Language, string>;
  category: 'nutrition' | 'care' | 'feeding' | 'hygiene';
}

export const tips: Tip[] = [
  {
    id: 'tip-1',
    emoji: '🍼',
    title: {
      en: 'First Hour Feeding',
      hi: 'पहले घंटे में स्तनपान',
      mr: 'पहिल्या तासात स्तनपान',
    },
    content: {
      en: 'Start breastfeeding within the first hour of birth. This helps establish milk supply and gives baby vital antibodies.',
      hi: 'जन्म के पहले घंटे में स्तनपान शुरू करें। यह दूध की आपूर्ति स्थापित करने में मदद करता है और बच्चे को महत्वपूर्ण एंटीबॉडी देता है।',
      mr: 'जन्माच्या पहिल्या तासात स्तनपान सुरू करा. यामुळे दूध पुरवठा स्थापित होण्यास मदत होते आणि बाळाला महत्त्वाची अँटीबॉडीज मिळतात.',
    },
    category: 'feeding',
  },
  {
    id: 'tip-2',
    emoji: '🌙',
    title: {
      en: 'Night Feeding Matters',
      hi: 'रात का स्तनपान महत्वपूर्ण',
      mr: 'रात्रीचे स्तनपान महत्त्वाचे',
    },
    content: {
      en: 'Night feeds are important! Prolactin levels are highest at night, helping maintain milk supply.',
      hi: 'रात के फीड महत्वपूर्ण हैं! प्रोलैक्टिन का स्तर रात में सबसे अधिक होता है, जो दूध की आपूर्ति बनाए रखने में मदद करता है।',
      mr: 'रात्रीचे आहार महत्त्वाचे आहेत! रात्री प्रोलॅक्टिनची पातळी सर्वाधिक असते, जी दूध पुरवठा टिकवून ठेवण्यास मदत करते.',
    },
    category: 'feeding',
  },
  {
    id: 'tip-3',
    emoji: '🥕',
    title: {
      en: 'Iron-Rich First Foods',
      hi: 'आयरन युक्त पहला आहार',
      mr: 'लोहयुक्त पहिले अन्न',
    },
    content: {
      en: 'When starting solids, include iron-rich foods like mashed dal, egg yolk, or iron-fortified cereals.',
      hi: 'ठोस आहार शुरू करते समय, मसली हुई दाल, अंडे की जर्दी, या आयरन-फोर्टिफाइड अनाज जैसे आयरन युक्त खाद्य पदार्थ शामिल करें।',
      mr: 'घन आहार सुरू करताना, मॅश केलेली डाळ, अंड्याचे बलक किंवा लोहयुक्त तृणधान्ये यासारखे लोहयुक्त अन्न समाविष्ट करा.',
    },
    category: 'nutrition',
  },
  {
    id: 'tip-4',
    emoji: '🧴',
    title: {
      en: 'Gentle Skin Care',
      hi: 'कोमल त्वचा देखभाल',
      mr: 'हलक्या हाताने त्वचेची काळजी',
    },
    content: {
      en: 'Use mild, fragrance-free products on baby\'s sensitive skin. Pat dry gently after baths.',
      hi: 'बच्चे की संवेदनशील त्वचा पर सौम्य, सुगंध-मुक्त उत्पादों का उपयोग करें। नहाने के बाद धीरे से थपथपाकर सुखाएं।',
      mr: 'बाळाच्या संवेदनशील त्वचेवर सौम्य, सुगंधमुक्त उत्पादने वापरा. आंघोळीनंतर हलक्या हाताने कोरडे करा.',
    },
    category: 'hygiene',
  },
  {
    id: 'tip-5',
    emoji: '💧',
    title: {
      en: 'Stay Hydrated',
      hi: 'हाइड्रेटेड रहें',
      mr: 'हायड्रेटेड राहा',
    },
    content: {
      en: 'Nursing mothers need extra fluids. Keep a water bottle nearby while feeding.',
      hi: 'स्तनपान कराने वाली माताओं को अतिरिक्त तरल पदार्थों की आवश्यकता होती है। स्तनपान करते समय पास में पानी की बोतल रखें।',
      mr: 'स्तनपान करणाऱ्या मातांना अतिरिक्त द्रव पदार्थांची आवश्यकता असते. आहार देताना पाण्याची बाटली जवळ ठेवा.',
    },
    category: 'nutrition',
  },
  {
    id: 'tip-6',
    emoji: '👐',
    title: {
      en: 'Handwashing Habit',
      hi: 'हाथ धोने की आदत',
      mr: 'हात धुण्याची सवय',
    },
    content: {
      en: 'Always wash hands before feeding, preparing food, or changing diapers to prevent infections.',
      hi: 'संक्रमण से बचने के लिए स्तनपान, भोजन तैयार करने, या डायपर बदलने से पहले हमेशा हाथ धोएं।',
      mr: 'संक्रमण टाळण्यासाठी आहार देण्यापूर्वी, अन्न तयार करण्यापूर्वी किंवा डायपर बदलण्यापूर्वी नेहमी हात धुवा.',
    },
    category: 'hygiene',
  },
  {
    id: 'tip-7',
    emoji: '🍌',
    title: {
      en: 'Mashed Banana Magic',
      hi: 'मैश किया केला जादू',
      mr: 'मॅश केलेल्या केळ्याची जादू',
    },
    content: {
      en: 'Mashed ripe banana is a perfect first food! It\'s naturally sweet, nutritious, and easy to digest.',
      hi: 'मैश किया हुआ पका केला एक उत्तम पहला भोजन है! यह प्राकृतिक रूप से मीठा, पौष्टिक और पचाने में आसान है।',
      mr: 'मॅश केलेले पिकलेले केळे हे उत्तम पहिले अन्न आहे! ते नैसर्गिकरित्या गोड, पौष्टिक आणि पचायला सोपे आहे.',
    },
    category: 'nutrition',
  },
  {
    id: 'tip-8',
    emoji: '😴',
    title: {
      en: 'Safe Sleep Position',
      hi: 'सुरक्षित नींद की स्थिति',
      mr: 'सुरक्षित झोपेची स्थिती',
    },
    content: {
      en: 'Always place your baby on their back to sleep. This reduces the risk of SIDS.',
      hi: 'हमेशा अपने बच्चे को सोने के लिए उनकी पीठ पर लिटाएं। यह SIDS के जोखिम को कम करता है।',
      mr: 'तुमच्या बाळाला झोपवताना नेहमी पाठीवर ठेवा. यामुळे SIDS चा धोका कमी होतो.',
    },
    category: 'care',
  },
];
