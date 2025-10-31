export interface Disease {
  name: string
  symptoms: string[]
  explanation: string
  precautions: string[]
  recommendations?: string[]
}

export const DISEASE_RULES: Disease[] = [
  {
    name: "Viral Fever",
    symptoms: ["fever", "headache", "body_pain", "fatigue"],
    explanation: "A common viral infection characterized by elevated body temperature and general malaise.",
    precautions: [
      "Take paracetamol for fever and pain relief",
      "Stay hydrated with plenty of water and fluids",
      "Get adequate rest and sleep",
      "Avoid close contact with others",
      "Maintain good hygiene practices",
    ],
    recommendations: [
      "Consult a healthcare professional if symptoms persist",
      "Monitor your temperature regularly",
      "Avoid strenuous activities",
      "Eat light, nutritious meals",
    ],
  },
  {
    name: "Common Cold",
    symptoms: ["runny_nose", "cough", "headache", "fatigue"],
    explanation: "A mild viral infection affecting the upper respiratory tract, causing nasal congestion and cough.",
    precautions: [
      "Use saline nasal drops for congestion",
      "Drink warm water and herbal tea",
      "Use cough drops or lozenges",
      "Get sufficient rest",
      "Wash hands frequently",
    ],
    recommendations: [
      "Stay home to avoid spreading the infection",
      "Use a humidifier to ease breathing",
      "Gargle with warm salt water",
      "Avoid smoking and secondhand smoke",
    ],
  },
  {
    name: "Flu (Influenza)",
    symptoms: ["fever", "cough", "body_pain", "chills", "headache"],
    explanation: "A contagious respiratory illness caused by influenza virus, more severe than common cold.",
    precautions: [
      "Get flu vaccination immediately",
      "Take antiviral medications if prescribed",
      "Maintain complete bed rest",
      "Stay hydrated and consume vitamin C rich foods",
      "Avoid going to public places",
    ],
    recommendations: [
      "Seek medical attention within 48 hours of symptom onset",
      "Cover your mouth when coughing or sneezing",
      "Disinfect frequently touched surfaces",
      "Monitor for complications like pneumonia",
    ],
  },
  {
    name: "Malaria",
    symptoms: ["fever", "chills", "headache", "body_pain", "fatigue"],
    explanation: "A parasitic infection transmitted by mosquitoes, causing recurring fever and chills.",
    precautions: [
      "Consult a doctor immediately for blood tests",
      "Start antimalarial medication as prescribed",
      "Sleep under a mosquito net",
      "Avoid mosquito bites with repellent",
      "Stay hydrated and maintain nutrition",
    ],
    recommendations: [
      "Complete the full course of antimalarial medication",
      "Get tested for malaria parasites",
      "Eliminate standing water around your home",
      "Wear long-sleeved clothing in endemic areas",
    ],
  },
  {
    name: "Typhoid",
    symptoms: ["fever", "headache", "stomach_pain", "vomiting", "fatigue"],
    explanation: "A bacterial infection spread through contaminated food and water, causing prolonged fever.",
    precautions: [
      "Seek immediate medical attention",
      "Take prescribed antibiotics without fail",
      "Drink clean boiled water only",
      "Avoid raw vegetables and fruits",
      "Maintain strict hygiene and sanitation",
    ],
    recommendations: [
      "Get the typhoid vaccine if traveling to endemic areas",
      "Wash hands thoroughly before eating",
      "Eat only freshly cooked hot food",
      "Follow up with blood tests after treatment",
    ],
  },
  {
    name: "Dengue Fever",
    symptoms: ["fever", "headache", "body_pain", "chills"],
    explanation: "A viral infection transmitted by Aedes mosquitoes, causing severe joint and body pain.",
    precautions: [
      "Get medical tests (NS1, IgM, IgG)",
      "Avoid anti-inflammatory drugs like ibuprofen",
      "Stay hydrated and maintain platelet count",
      "Rest completely for 7-10 days",
      "Use mosquito repellent and nets",
    ],
    recommendations: [
      "Monitor platelet count daily during illness",
      "Watch for warning signs like bleeding or severe abdominal pain",
      "Drink plenty of fluids including ORS",
      "Eliminate mosquito breeding sites around your home",
    ],
  },
  {
    name: "Diabetes (Possible)",
    symptoms: ["excessive_thirst", "frequent_urination", "fatigue", "headache"],
    explanation: "High blood sugar levels potentially indicating diabetes, requiring medical investigation.",
    precautions: [
      "Get blood sugar tests (fasting and random)",
      "Reduce sugar and refined carbohydrates",
      "Exercise regularly (30 mins daily)",
      "Maintain healthy body weight",
      "Consult an endocrinologist",
    ],
    recommendations: [
      "Monitor blood glucose levels regularly",
      "Follow a balanced diet with low glycemic index foods",
      "Stay physically active",
      "Learn about diabetes management and complications",
    ],
  },
  {
    name: "Allergic Reaction",
    symptoms: ["itchy_eyes", "runny_nose", "cough"],
    explanation: "An immune response to allergens causing respiratory and ocular symptoms.",
    precautions: [
      "Identify and avoid allergen triggers",
      "Use antihistamine medications",
      "Apply eye drops for itchy eyes",
      "Keep environment clean and dust-free",
      "Consider allergy testing with a specialist",
    ],
    recommendations: [
      "Use air purifiers in your home",
      "Wash bedding regularly in hot water",
      "Avoid outdoor activities during high pollen counts",
      "Keep windows closed during allergy season",
    ],
  },
]
