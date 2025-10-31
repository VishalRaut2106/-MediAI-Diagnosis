import { diagnoseWithRules } from "@/lib/diagnosis-engine"

// Enhanced fallback data for instant AI-like responses
const AI_ENHANCEMENTS: Record<string, any> = {
  "Viral Fever": {
    aiExplanation: "Viral fever is caused by various viral infections that trigger your immune system to raise body temperature as a defense mechanism. The virus invades cells and replicates, causing inflammation and the release of pyrogens that signal the hypothalamus to increase body temperature. Most viral fevers are self-limiting and resolve within 3-7 days as your immune system fights off the infection.",
    severity: "mild",
    whenToSeekHelp: "Seek immediate medical attention if fever exceeds 103°F (39.4°C), persists for more than 3 days, is accompanied by severe headache, stiff neck, difficulty breathing, chest pain, or if you experience confusion or seizures.",
    lifestyle: ["Get 8-10 hours of sleep to boost immune function", "Avoid strenuous physical activity until fever subsides", "Stay in a cool, well-ventilated room", "Take lukewarm baths to reduce body temperature"],
    diet: ["Drink 8-10 glasses of water daily to prevent dehydration", "Consume light, easily digestible foods like soups and broths", "Include vitamin C-rich fruits like oranges and kiwi", "Avoid heavy, oily, or spicy foods that may upset your stomach"],
    duration: "3-7 days with proper rest and care",
    prevention: ["Wash hands frequently with soap for 20 seconds", "Avoid close contact with infected individuals", "Maintain a strong immune system with balanced nutrition", "Get adequate sleep and manage stress levels"]
  },
  "Common Cold": {
    aiExplanation: "The common cold is a viral infection of the upper respiratory tract, primarily caused by rhinoviruses. These viruses attach to cells in your nasal passages and throat, triggering inflammation and mucus production. Your immune system responds by increasing blood flow to the area, causing congestion and swelling. While uncomfortable, colds are usually harmless and resolve naturally.",
    severity: "mild",
    whenToSeekHelp: "Consult a doctor if symptoms persist beyond 10 days, you develop a high fever above 101.3°F (38.5°C), experience severe sinus pain, notice thick yellow or green nasal discharge for more than 3 days, or have difficulty breathing.",
    lifestyle: ["Rest adequately to help your body fight the infection", "Use a humidifier to keep airways moist", "Gargle with warm salt water 2-3 times daily", "Avoid smoking and secondhand smoke exposure"],
    diet: ["Drink warm liquids like herbal tea, honey-lemon water, and chicken soup", "Eat foods rich in vitamin C and zinc", "Consume ginger and garlic for their antiviral properties", "Avoid dairy if it increases mucus production for you"],
    duration: "7-10 days, with symptoms peaking around day 3-4",
    prevention: ["Practice good hand hygiene, especially before eating", "Avoid touching your face, particularly eyes, nose, and mouth", "Disinfect frequently touched surfaces regularly", "Maintain distance from people showing cold symptoms"]
  },
  "Flu (Influenza)": {
    aiExplanation: "Influenza is a highly contagious respiratory illness caused by influenza viruses that attack the respiratory system. The virus spreads through respiratory droplets and can cause severe complications, especially in high-risk groups. Unlike the common cold, flu symptoms appear suddenly and are more intense, affecting the entire body with fever, severe aches, and extreme fatigue.",
    severity: "moderate",
    whenToSeekHelp: "Seek emergency care if you experience difficulty breathing, persistent chest pain, sudden dizziness, confusion, severe vomiting, flu symptoms that improve but then return with fever and worse cough, or if you're in a high-risk group (elderly, pregnant, chronic conditions).",
    lifestyle: ["Complete bed rest for at least 3-5 days", "Isolate yourself to prevent spreading the virus", "Monitor your temperature regularly", "Use tissues when coughing or sneezing and dispose properly"],
    diet: ["Stay well-hydrated with water, electrolyte drinks, and warm broths", "Eat protein-rich foods to support immune function", "Include antioxidant-rich berries and vegetables", "Consume easy-to-digest foods like bananas, rice, and toast"],
    duration: "1-2 weeks, with severe symptoms lasting 3-7 days",
    prevention: ["Get annual flu vaccination before flu season", "Avoid crowded places during flu outbreaks", "Strengthen immunity with regular exercise and balanced diet", "Clean and disinfect shared surfaces frequently"]
  },
  "Malaria": {
    aiExplanation: "Malaria is a serious parasitic disease transmitted by infected Anopheles mosquitoes carrying Plasmodium parasites. When bitten, parasites enter your bloodstream, travel to the liver where they mature, then re-enter the blood to infect red blood cells. This causes the characteristic cyclical fever pattern as infected cells rupture. Without prompt treatment, malaria can become life-threatening.",
    severity: "severe",
    whenToSeekHelp: "Malaria is a medical emergency. Seek immediate medical attention if you have fever with chills after visiting a malaria-endemic area, experience severe headache with confusion, difficulty breathing, seizures, severe anemia, or jaundice. Early diagnosis and treatment are critical.",
    lifestyle: ["Sleep under insecticide-treated mosquito nets every night", "Use mosquito repellent containing DEET on exposed skin", "Wear long-sleeved clothing and long pants, especially at dawn and dusk", "Ensure windows and doors have screens to keep mosquitoes out"],
    diet: ["Maintain high fluid intake to prevent dehydration from fever", "Eat iron-rich foods to combat anemia", "Include protein sources for tissue repair and immune support", "Consume easily digestible, nutritious meals in small portions"],
    duration: "2-4 weeks with proper antimalarial treatment; untreated can be fatal",
    prevention: ["Take antimalarial prophylaxis when traveling to endemic areas", "Eliminate standing water where mosquitoes breed", "Use indoor residual spraying in high-risk areas", "Seek immediate testing if fever develops after travel"]
  },
  "Typhoid": {
    aiExplanation: "Typhoid fever is a bacterial infection caused by Salmonella typhi, transmitted through contaminated food and water. The bacteria invade the intestinal wall, enter the bloodstream, and spread throughout the body, particularly affecting the liver, spleen, and bone marrow. This causes sustained high fever, abdominal pain, and systemic symptoms. Without treatment, complications can be serious.",
    severity: "severe",
    whenToSeekHelp: "Seek immediate medical care if you have sustained fever above 103°F (39.4°C), severe abdominal pain, persistent vomiting preventing fluid intake, signs of dehydration, blood in stool, severe headache with confusion, or if symptoms worsen despite initial treatment.",
    lifestyle: ["Maintain strict bed rest during acute phase", "Practice meticulous hand hygiene, especially after using the bathroom", "Avoid preparing food for others until cleared by a doctor", "Use separate utensils and towels to prevent transmission"],
    diet: ["Drink only boiled or bottled water", "Eat only thoroughly cooked hot foods", "Avoid raw vegetables, salads, and unpeeled fruits", "Consume high-calorie, easily digestible foods like rice, bananas, and boiled potatoes"],
    duration: "3-4 weeks with antibiotic treatment; longer if untreated",
    prevention: ["Get typhoid vaccination before traveling to high-risk areas", "Always drink safe, treated water", "Avoid street food and ice in endemic regions", "Wash hands thoroughly before eating and after using the toilet"]
  },
  "Dengue Fever": {
    aiExplanation: "Dengue is a viral infection transmitted by Aedes aegypti mosquitoes, causing severe flu-like symptoms and potentially life-threatening complications. The virus attacks white blood cells and can cause blood vessels to become leaky, leading to plasma leakage and low platelet counts. The critical phase occurs 3-7 days after symptom onset when severe dengue can develop with bleeding and organ damage.",
    severity: "moderate",
    whenToSeekHelp: "Seek emergency care immediately if you experience severe abdominal pain, persistent vomiting, bleeding from nose or gums, blood in vomit or stool, difficulty breathing, cold or clammy skin, severe weakness, or restlessness. These are warning signs of severe dengue requiring hospitalization.",
    lifestyle: ["Complete rest is essential, especially during the critical phase (days 3-7)", "Monitor platelet count with regular blood tests", "Use mosquito nets even during daytime when Aedes mosquitoes are active", "Avoid aspirin, ibuprofen, and NSAIDs as they increase bleeding risk"],
    diet: ["Drink plenty of fluids including water, coconut water, and ORS", "Consume papaya leaf extract which may help increase platelet count", "Eat iron-rich foods like pomegranate and beetroot", "Include vitamin K-rich foods like leafy greens to support clotting"],
    duration: "7-10 days, with critical phase around days 3-7",
    prevention: ["Eliminate standing water in containers, tires, and flower pots", "Use mosquito repellent during daytime hours", "Wear protective clothing covering arms and legs", "Install screens on windows and use air conditioning when possible"]
  },
  "Diabetes (Possible)": {
    aiExplanation: "These symptoms suggest possible diabetes, a metabolic disorder where your body cannot properly regulate blood sugar levels. This occurs either because the pancreas doesn't produce enough insulin (Type 1) or your cells become resistant to insulin (Type 2). High blood sugar damages blood vessels and nerves over time, leading to serious complications if left untreated. Early detection and management are crucial.",
    severity: "moderate",
    whenToSeekHelp: "Seek immediate medical attention if you experience extreme thirst with frequent urination, unexplained weight loss, blurred vision, slow-healing wounds, numbness in extremities, or symptoms of diabetic ketoacidosis (fruity breath, nausea, confusion). Get tested urgently if you have risk factors like family history or obesity.",
    lifestyle: ["Exercise regularly for at least 30 minutes daily to improve insulin sensitivity", "Maintain a healthy weight through balanced diet and activity", "Monitor blood sugar levels as recommended by your doctor", "Manage stress through meditation, yoga, or other relaxation techniques"],
    diet: ["Follow a low glycemic index diet with whole grains and complex carbs", "Limit sugar, refined carbohydrates, and processed foods", "Include fiber-rich foods like vegetables, legumes, and whole grains", "Eat smaller, frequent meals to maintain stable blood sugar"],
    duration: "Chronic condition requiring lifelong management",
    prevention: ["Maintain healthy body weight with BMI under 25", "Stay physically active with regular exercise", "Eat a balanced diet low in processed sugars", "Get regular health screenings, especially if you have risk factors"]
  },
  "Allergic Reaction": {
    aiExplanation: "Allergic reactions occur when your immune system overreacts to normally harmless substances (allergens) like pollen, dust, or pet dander. Your body releases histamine and other chemicals, causing inflammation in the eyes, nose, and airways. This leads to symptoms like itching, sneezing, and congestion. While usually not serious, allergies can significantly impact quality of life.",
    severity: "mild",
    whenToSeekHelp: "Seek emergency care if you develop difficulty breathing, swelling of face or throat, rapid pulse, dizziness, or signs of anaphylaxis. Consult an allergist if symptoms persist despite over-the-counter medications, significantly affect daily life, or if you want to identify specific allergens.",
    lifestyle: ["Keep windows closed during high pollen count days", "Use HEPA air filters in your home and bedroom", "Shower and change clothes after being outdoors", "Remove shoes at the door to avoid tracking allergens inside"],
    diet: ["Stay well-hydrated to thin mucus secretions", "Consume anti-inflammatory foods like omega-3 rich fish", "Include quercetin-rich foods like apples and onions", "Consider local honey which may help build tolerance to local pollen"],
    duration: "Varies; seasonal allergies last weeks to months, perennial allergies are year-round",
    prevention: ["Identify and avoid your specific allergen triggers", "Keep indoor humidity between 30-50% to reduce dust mites and mold", "Wash bedding weekly in hot water", "Consider immunotherapy (allergy shots) for long-term relief"]
  }
}

// Try to call real Gemini API
async function callRealGeminiAPI(diagnosis: any, symptomLabels: string) {
  try {
    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey || apiKey === 'your-api-key-here') {
      console.log('No valid Gemini API key found, using fallback data')
      return null
    }

    const prompt = `You are an expert medical AI assistant. A patient has been diagnosed with "${diagnosis.name}" based on symptoms: ${symptomLabels}.

Provide a comprehensive medical analysis in JSON format:
{
  "aiExplanation": "Detailed 3-4 sentence explanation of ${diagnosis.name}, its causes, and how it develops",
  "severity": "mild/moderate/severe",
  "whenToSeekHelp": "Clear guidance on when immediate medical attention is needed",
  "lifestyle": ["lifestyle tip 1", "lifestyle tip 2", "lifestyle tip 3", "lifestyle tip 4"],
  "diet": ["dietary recommendation 1", "dietary recommendation 2", "dietary recommendation 3", "dietary recommendation 4"],
  "duration": "Expected recovery timeline",
  "prevention": ["prevention tip 1", "prevention tip 2", "prevention tip 3", "prevention tip 4"]
}

Be specific, practical, and medically accurate. Return ONLY valid JSON.`

    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=' + apiKey, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{
          parts: [{ text: prompt }]
        }]
      })
    })

    if (!response.ok) {
      console.log('Gemini API call failed:', response.status)
      return null
    }

    const data = await response.json()
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text
    
    if (!text) {
      console.log('No text in Gemini response')
      return null
    }

    // Extract JSON from response
    const jsonMatch = text.match(/\{[\s\S]*\}/)
    if (jsonMatch) {
      const parsed = JSON.parse(jsonMatch[0])
      console.log('✅ Successfully got real Gemini AI response')
      return parsed
    }

    return null
  } catch (error) {
    console.error('Gemini API error:', error)
    return null
  }
}

async function enhanceWithAI(diagnosis: any, symptoms: string[]) {
  const symptomLabels = symptoms.map(s => s.replace(/_/g, ' ')).join(", ")
  const useRealGemini = process.env.USE_REAL_GEMINI === 'true'
  
  // Try real Gemini API if enabled
  if (useRealGemini) {
    console.log('🤖 Attempting real Gemini API call...')
    const geminiResponse = await callRealGeminiAPI(diagnosis, symptomLabels)
    if (geminiResponse) {
      return { ...geminiResponse, source: 'gemini-api' }
    }
    console.log('⚡ Falling back to pre-written AI data')
  }
  
  // Fallback to pre-written AI enhancements
  const enhancement = AI_ENHANCEMENTS[diagnosis.name]
  if (enhancement) {
    return { ...enhancement, source: 'pre-written' }
  }
  
  // Generic fallback
  return {
    aiExplanation: `${diagnosis.explanation} This condition requires proper medical attention and following prescribed treatment protocols for optimal recovery.`,
    severity: "moderate",
    whenToSeekHelp: "Consult a healthcare professional if symptoms worsen, persist beyond expected duration, or if you develop new concerning symptoms.",
    lifestyle: ["Get adequate rest to support recovery", "Maintain good hygiene practices", "Follow medical advice carefully", "Monitor your symptoms regularly"],
    diet: ["Stay well-hydrated throughout the day", "Eat a balanced, nutritious diet", "Avoid foods that may worsen symptoms", "Include immune-boosting foods"],
    duration: "Varies by individual; consult your doctor",
    prevention: ["Practice good hygiene", "Maintain a healthy lifestyle", "Follow preventive measures", "Get regular health check-ups"],
    source: 'generic'
  }
}

export async function POST(request: Request) {
  try {
    const { symptoms, useAI = true } = await request.json()

    if (!symptoms || symptoms.length === 0) {
      return Response.json({ error: "No symptoms provided" }, { status: 400 })
    }

    // Step 1: Get initial diagnosis from rule engine
    const diagnosis = diagnoseWithRules(symptoms)

    if (!diagnosis) {
      return Response.json(
        { 
          error: "No matching diagnosis found. Please select at least 2 related symptoms." 
        }, 
        { status: 404 }
      )
    }

    // Step 2: Enhance with AI if enabled
    let aiEnhancement = null
    if (useAI) {
      aiEnhancement = await enhanceWithAI(diagnosis, symptoms)
    }

    // Return comprehensive diagnosis
    return Response.json({
      disease: diagnosis.name,
      explanation: diagnosis.explanation,
      precautions: diagnosis.precautions,
      recommendations: diagnosis.recommendations || [
        "Consult a healthcare professional",
        "Rest and stay hydrated",
        "Monitor your symptoms",
        "Follow medical advice",
      ],
      aiEnhanced: !!aiEnhancement,
      ...(aiEnhancement && {
        aiExplanation: aiEnhancement.aiExplanation,
        severity: aiEnhancement.severity,
        whenToSeekHelp: aiEnhancement.whenToSeekHelp,
        lifestyle: aiEnhancement.lifestyle,
        diet: aiEnhancement.diet,
        duration: aiEnhancement.duration,
        prevention: aiEnhancement.prevention,
      }),
    })
  } catch (error) {
    console.error("Diagnosis error:", error)
    return Response.json(
      { error: "Failed to generate diagnosis. Please try again." }, 
      { status: 500 }
    )
  }
}
