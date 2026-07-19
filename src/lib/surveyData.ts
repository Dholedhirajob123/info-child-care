export interface SurveyQuestion {
  id: string;
  question: string;
  options: string[];
  multiple?: boolean;
  allowOther?: boolean;
}

export interface SurveySection {
  id: 'A' | 'B';
  title: string;
  subtitle: string;
  questions: SurveyQuestion[];
}

export const sectionA: SurveySection = {
  id: 'A',
  title: 'Section A',
  subtitle: 'Demographic Data of the Caregiver and Infant',
  questions: [
    { id: 'a1', question: 'Age of the caregiver', options: ['Below 25 years', '25–35 years', '36–45 years', 'Above 45 years'] },
    { id: 'a2', question: 'Educational status', options: ['No formal education', 'Primary education', 'Secondary education', 'Graduate and above'] },
    { id: 'a3', question: 'Occupation', options: ['Homemaker', 'Employed', 'Self-employed', 'Others'], allowOther: true },
    { id: 'a4', question: 'Type of family', options: ['Nuclear', 'Joint', 'Extended'] },
    { id: 'a5', question: 'Age of the infant', options: ['0–1 month', '1–3 months', '3–6 months', '6 months–1 year'] },
    { id: 'a6', question: 'Number of children', options: ['One', 'Two', 'More than two'] },
  ],
};

export const sectionB: SurveySection = {
  id: 'B',
  title: 'Section B',
  subtitle: 'Health-Seeking Behaviour and Health Outcomes of Infants',
  questions: [
    { id: 'b1', question: 'How often do you take your infant for routine health check-ups?', options: ['Monthly', 'Once every 3 months', 'Only when the child is sick', 'Never'] },
    { id: 'b2', question: 'Where do you usually seek healthcare services for your infant?', options: ['Government hospital', 'Private clinic/hospital', 'Anganwadi centre', 'Traditional healer', 'Others'], allowOther: true },
    { id: 'b3', question: 'How often do you consult a doctor before giving any medication to your infant?', options: ['Always', 'Sometimes', 'Rarely', 'Never'] },
    { id: 'b4', question: 'Do you use any digital application or tool to maintain your infant\u2019s health records?', options: ['Yes', 'No'] },
    { id: 'b5', question: 'If yes, which digital application do you use?', options: ['e-Health / MCTS', 'Aarogya Setu', 'Hospital application', 'Others'], allowOther: true },
    { id: 'b6', question: 'How easy do you find using digital applications for maintaining your child\u2019s health records?', options: ['Very easy', 'Easy', 'Difficult', 'Very difficult'] },
    { id: 'b7', question: 'How often do you check your child\u2019s immunization status using a digital app or immunization card?', options: ['Regularly', 'Occasionally', 'Rarely', 'Never'] },
    { id: 'b8', question: 'Using digital health records helps in early detection of illness in infants.', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] },
    { id: 'b9', question: 'How confident are you in identifying early symptoms of illness in your infant?', options: ['Very confident', 'Somewhat confident', 'Not confident', 'Not sure'] },
    { id: 'b10', question: 'When your infant becomes ill, how soon do you seek medical attention?', options: ['Immediately', 'Within 1–2 days', 'After 3 days', 'Only when the condition worsens'] },
    { id: 'b11', question: 'What are the barriers to seeking timely medical care for your infant? (Multiple responses allowed)', options: ['Financial constraints', 'Distance to healthcare facility', 'Lack of awareness', 'Family influence', 'Others'], multiple: true, allowOther: true },
    { id: 'b12', question: 'How satisfied are you with the healthcare services available in your area?', options: ['Highly satisfied', 'Satisfied', 'Dissatisfied', 'Highly dissatisfied'] },
    { id: 'b13', question: 'Do you regularly follow the doctor\u2019s advice and prescribed treatment for your infant?', options: ['Always', 'Sometimes', 'Rarely', 'Never'] },
    { id: 'b14', question: 'Have you ever missed or delayed your infant\u2019s vaccination for any reason?', options: ['Yes', 'No'] },
    { id: 'b15', question: 'Digital app-based health records improve my health-seeking decisions for my child.', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] },
    { id: 'b16', question: 'Is your infant\u2019s immunization schedule up to date?', options: ['Yes', 'No', 'Not sure'] },
    { id: 'b17', question: 'How frequently does your infant suffer from common illnesses (fever, cough, cold, diarrhea)?', options: ['Rarely (0–1 time/year)', 'Occasionally (2–3 times/year)', 'Frequently (4 or more times/year)', 'Not sure'] },
    { id: 'b18', question: 'In the past six months, has your infant been hospitalized?', options: ['Yes', 'No'] },
    { id: 'b19', question: 'How would you describe your infant\u2019s overall health?', options: ['Excellent', 'Good', 'Fair', 'Poor'] },
    { id: 'b20', question: 'Has your infant\u2019s growth been monitored regularly using a growth chart or digital app?', options: ['Yes', 'No'] },
    { id: 'b21', question: 'What was your infant\u2019s nutritional status during the last health check-up?', options: ['Normal', 'Mildly underweight', 'Moderately underweight', 'Severely underweight'] },
    { id: 'b22', question: 'How often do you monitor your infant\u2019s height and weight?', options: ['Monthly', 'Quarterly', 'Occasionally', 'Never'] },
    { id: 'b23', question: 'Does your infant achieve developmental milestones appropriate for age?', options: ['Yes', 'No', 'Not sure'] },
    { id: 'b24', question: 'Are you aware of your infant\u2019s recommended immunization schedule?', options: ['Fully aware', 'Partly aware', 'Not aware'] },
    { id: 'b25', question: 'Does your infant consume a balanced diet including all major food groups (as per age)?', options: ['Always', 'Sometimes', 'Rarely', 'Never'] },
    { id: 'b26', question: 'I have noticed improvement in my infant\u2019s health after using digital health records.', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] },
    { id: 'b27', question: 'Has your infant experienced any growth delay or undernutrition in the past year?', options: ['Yes', 'No', 'Not sure'] },
    { id: 'b28', question: 'How frequently does your infant visit a healthcare facility for preventive care?', options: ['Regularly', 'Occasionally', 'Rarely', 'Never'] },
    { id: 'b29', question: 'Maintaining digital health records helps in better tracking of infant growth and development compared to manual records.', options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'] },
    { id: 'b30', question: 'Overall, how satisfied are you with your infant\u2019s current health status and health outcomes?', options: ['Highly satisfied', 'Satisfied', 'Dissatisfied', 'Highly dissatisfied'] },
  ],
};

export const surveySections: SurveySection[] = [sectionA, sectionB];
