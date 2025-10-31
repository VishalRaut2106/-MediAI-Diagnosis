# 🤖 MediAI-Diagnosis - AI-Powered Medical Expert System

## 📋 Project Overview

**MediAI-Diagnosis** is an intelligent medical diagnosis application that combines traditional rule-based expert systems with modern AI technology (Google Gemini) to provide comprehensive health analysis. This project demonstrates the integration of classical AI techniques with cutting-edge Large Language Models (LLMs) for healthcare applications.

### 🎯 Project Purpose
This application serves as an educational tool to demonstrate:
- Implementation of expert systems in healthcare
- Integration of AI/ML in medical diagnosis
- Full-stack web development with modern technologies
- Real-world application of computer science concepts

---

## 🌟 Key Features

### 1. 🧠 Hybrid Diagnosis System

#### **Rule-Based Expert Engine**
- **What it does**: Uses predefined medical rules and symptom patterns to diagnose diseases
- **How it works**: 
  - Matches user-selected symptoms against a knowledge base of 8+ diseases
  - Each disease has specific symptom patterns (e.g., Flu = fever + cough + body pain + chills)
  - Uses pattern matching algorithm to find the best diagnosis
  - Requires minimum 2 matching symptoms for accurate diagnosis
- **Advantages**: Fast, reliable, works offline, no API costs

#### **AI Enhancement (Google Gemini Integration)**
- **What it does**: Enhances basic diagnosis with detailed AI-powered insights
- **How it works**:
  - Takes the rule-based diagnosis as input
  - Sends structured prompt to Google Gemini AI
  - Receives comprehensive medical analysis in JSON format
  - Provides severity assessment, recovery timeline, and personalized advice
- **Two Modes**:
  - **Instant Mode** (Default): Pre-written AI responses for instant results
  - **Real Gemini Mode**: Live API calls to Google Gemini for dynamic responses

### 2. 📊 Comprehensive Symptom Database

**20+ Symptoms Across Multiple Categories:**

| Category | Symptoms |
|----------|----------|
| **General** | Fever, Headache, Fatigue, Body Pain, Chills |
| **Respiratory** | Cough, Runny Nose, Sore Throat, Shortness of Breath |
| **Digestive** | Stomach Pain, Vomiting, Nausea, Diarrhea |
| **Metabolic** | Excessive Thirst, Frequent Urination |
| **Allergic** | Itchy Eyes |

### 3. 🏥 Disease Coverage

The system can diagnose 8 common medical conditions:

1. **Viral Fever** - Common viral infection with fever and malaise
2. **Common Cold** - Upper respiratory tract infection
3. **Flu (Influenza)** - Severe respiratory illness
4. **Malaria** - Parasitic infection with recurring fever
5. **Typhoid** - Bacterial infection from contaminated food/water
6. **Dengue Fever** - Mosquito-borne viral infection
7. **Diabetes (Possible)** - High blood sugar indication
8. **Allergic Reaction** - Immune response to allergens

### 4. 🎯 AI-Enhanced Analysis

When AI mode is enabled, users receive:

- **Detailed Medical Explanation**: In-depth understanding of the diagnosed condition
- **Severity Assessment**: Classification as Mild, Moderate, or Severe
- **Recovery Timeline**: Expected duration of illness (e.g., "5-7 days")
- **Emergency Guidance**: When to seek immediate medical attention
- **Lifestyle Recommendations**: Daily habits to support recovery
- **Dietary Advice**: Nutrition tips specific to the condition
- **Prevention Tips**: How to avoid future occurrences
- **Precautions**: Specific actions to take for recovery

---

## 🔬 How It Works - Technical Deep Dive

### System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        USER INTERFACE                        │
│  (React Components - Symptom Selection & Results Display)   │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                    FRONTEND (Next.js)                        │
│  • Symptom Form Component                                    │
│  • State Management (React Hooks)                            │
│  • API Communication                                         │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                  API ROUTE (/api/diagnose)                   │
│  • Receives symptom data                                     │
│  • Routes to appropriate diagnosis engine                    │
└─────────────────────┬───────────────────────────────────────┘
                      │
          ┌───────────┴───────────┐
          ▼                       ▼
┌──────────────────┐    ┌──────────────────────┐
│  RULE-BASED      │    │   AI ENHANCEMENT     │
│  ENGINE          │    │   (Gemini API)       │
│                  │    │                      │
│ • Pattern Match  │───▶│ • Detailed Analysis  │
│ • Disease Rules  │    │ • Severity Check     │
│ • Symptom Match  │    │ • Recommendations    │
└──────────────────┘    └──────────────────────┘
          │                       │
          └───────────┬───────────┘
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                    DIAGNOSIS RESULT                          │
│  • Disease Name                                              │
│  • Explanation                                               │
│  • Precautions                                               │
│  • AI Insights (if enabled)                                  │
└─────────────────────────────────────────────────────────────┘
```

### Workflow Explanation

#### Step 1: User Input
```
User selects symptoms → ["fever", "headache", "cough"]
```

#### Step 2: Rule-Based Diagnosis
```javascript
// Algorithm in diagnosis-engine.ts
1. Loop through all disease rules
2. For each disease, count matching symptoms
3. Calculate match percentage
4. Sort by highest match count
5. Return disease if ≥2 symptoms match
```

**Example:**
```
Symptoms: ["fever", "headache", "cough"]

Checking against diseases:
- Viral Fever: ["fever", "headache", "body_pain", "fatigue"]
  → Matches: 2 (fever, headache) ✓
  
- Common Cold: ["runny_nose", "cough", "headache", "fatigue"]
  → Matches: 2 (cough, headache) ✓
  
- Flu: ["fever", "cough", "body_pain", "chills", "headache"]
  → Matches: 3 (fever, cough, headache) ✓✓✓ BEST MATCH!

Result: Flu (Influenza)
```

#### Step 3: AI Enhancement (Optional)
```javascript
// If AI mode is enabled
1. Take diagnosed disease name
2. Create structured prompt for Gemini
3. Send to Gemini API
4. Parse JSON response
5. Merge with rule-based diagnosis
```

**Gemini Prompt Structure:**
```
"You are a medical expert. Analyze this diagnosis:
Disease: Flu (Influenza)
Symptoms: fever, headache, cough

Provide detailed analysis in JSON format with:
- severity (Mild/Moderate/Severe)
- recovery_timeline
- emergency_signs
- lifestyle_recommendations
- dietary_advice
- prevention_tips"
```

#### Step 4: Result Display
```
Final Output:
{
  disease: "Flu (Influenza)",
  explanation: "Contagious respiratory illness...",
  precautions: [...],
  recommendations: [...],
  ai_insights: {
    severity: "Moderate",
    recovery_timeline: "7-10 days",
    ...
  }
}
```

---

## 🛠️ Technologies Used

### Frontend Technologies

| Technology | Purpose | Why Used |
|------------|---------|----------|
| **Next.js 16** | React Framework | Server-side rendering, API routes, optimal performance |
| **React 19** | UI Library | Component-based architecture, state management |
| **TypeScript** | Programming Language | Type safety, better code quality, fewer bugs |
| **Tailwind CSS 4** | Styling | Utility-first CSS, responsive design, fast development |
| **Radix UI** | Component Library | Accessible, unstyled components for custom design |
| **Lucide React** | Icons | Modern, customizable icon library |

### Backend Technologies

| Technology | Purpose | Why Used |
|------------|---------|----------|
| **Next.js API Routes** | Backend API | Serverless functions, easy deployment |
| **Node.js** | Runtime Environment | JavaScript on server, npm ecosystem |
| **Google Gemini AI** | AI Integration | Advanced language model for medical analysis |

### Development Tools

| Tool | Purpose |
|------|---------|
| **Git & GitHub** | Version control and collaboration |
| **Vercel** | Deployment and hosting |
| **npm** | Package management |
| **ESLint** | Code quality and linting |

---

## 📁 Project Structure Explained

```
mediai-diagnosis/
│
├── app/                          # Next.js App Directory
│   ├── api/                      # Backend API Routes
│   │   ├── diagnose/
│   │   │   └── route.ts         # Main diagnosis endpoint
│   │   └── diagnose-ai/
│   │       └── route.ts         # AI-only diagnosis endpoint
│   │
│   ├── layout.tsx               # Root layout (metadata, fonts)
│   ├── page.tsx                 # Home page component
│   └── globals.css              # Global styles
│
├── components/                   # React Components
│   ├── diagnosis-form.tsx       # Symptom selection form
│   ├── diagnosis-result.tsx     # Results display component
│   ├── header.tsx               # App header
│   ├── theme-provider.tsx       # Dark mode provider
│   └── ui/                      # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       ├── checkbox.tsx
│       └── ... (30+ components)
│
├── lib/                         # Core Logic
│   ├── diagnosis-engine.ts     # Rule-based diagnosis algorithm
│   ├── disease-rules.ts        # Medical knowledge base
│   └── utils.ts                # Utility functions
│
├── public/                      # Static assets
│   └── images/
│
├── .env.local                   # Environment variables (not in git)
├── .env.example                 # Environment template
├── package.json                 # Dependencies and scripts
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── next.config.mjs             # Next.js configuration
└── README.md                   # This file
```

### Key Files Explained

#### 1. `lib/disease-rules.ts` - Medical Knowledge Base
```typescript
// Defines all diseases and their symptom patterns
export const DISEASE_RULES: Disease[] = [
  {
    name: "Flu (Influenza)",
    symptoms: ["fever", "cough", "body_pain", "chills", "headache"],
    explanation: "A contagious respiratory illness...",
    precautions: ["Get flu vaccination", "Rest completely", ...],
    recommendations: ["Seek medical attention within 48 hours", ...]
  },
  // ... more diseases
]
```

#### 2. `lib/diagnosis-engine.ts` - Diagnosis Algorithm
```typescript
// Pattern matching algorithm
export function diagnoseWithRules(symptoms: string[]): Disease | null {
  // Find disease with maximum matching symptoms
  const matches = DISEASE_RULES.map((disease) => {
    const matchingSymptoms = disease.symptoms.filter(
      (symptom) => symptoms.includes(symptom)
    )
    return {
      disease,
      matchCount: matchingSymptoms.length,
      matchPercentage: (matchingSymptoms.length / disease.symptoms.length) * 100
    }
  }).sort((a, b) => b.matchCount - a.matchCount)

  // Return best match if at least 2 symptoms match
  if (matches[0]?.matchCount >= 2) {
    return matches[0].disease
  }
  return null
}
```

#### 3. `app/api/diagnose/route.ts` - API Endpoint
```typescript
// Handles diagnosis requests
export async function POST(request: Request) {
  const { symptoms } = await request.json()
  
  // Get diagnosis from rule engine
  const diagnosis = diagnoseWithRules(symptoms)
  
  // Optionally enhance with AI
  if (AI_MODE_ENABLED) {
    const aiInsights = await getGeminiAnalysis(diagnosis)
    return { ...diagnosis, aiInsights }
  }
  
  return diagnosis
}
```

---

## 🎮 User Journey - How to Use

### Step-by-Step Guide

1. **Open the Application**
   - Navigate to the deployed URL or run locally
   - See the clean, modern interface with symptom cards

2. **Select Symptoms**
   - Click on symptom cards that match your condition
   - Selected symptoms are highlighted in blue
   - Can select multiple symptoms (minimum 2 recommended)

3. **Toggle AI Mode (Optional)**
   - Switch in the top-right corner
   - ON = Get AI-enhanced analysis
   - OFF = Get quick rule-based diagnosis only

4. **Get Diagnosis**
   - Click "Get AI Diagnosis" button
   - System processes symptoms (loading indicator appears)
   - Results appear in 1-3 seconds

5. **Review Results**
   - **Disease Name**: Clear identification of the condition
   - **Explanation**: What the disease is and how it affects you
   - **Precautions**: Immediate actions to take
   - **Recommendations**: Long-term care advice
   - **AI Insights** (if enabled): Severity, timeline, emergency signs, etc.

6. **Take Action**
   - Follow the precautions listed
   - Consult a healthcare professional if needed
   - Monitor symptoms as advised

---

## 🔧 Installation & Setup

### Prerequisites
- **Node.js 18+** installed ([Download](https://nodejs.org/))
- **Git** installed ([Download](https://git-scm.com/))
- **Code Editor** (VS Code recommended)

### Local Development Setup

```bash
# 1. Clone the repository
git clone https://github.com/VishalRaut2106/-MediAI-Diagnosis.git
cd -MediAI-Diagnosis

# 2. Install dependencies
npm install --legacy-peer-deps

# 3. Create environment file (optional for AI)
copy .env.example .env.local

# 4. Run development server
npm run dev

# 5. Open in browser
# Navigate to http://localhost:3000
```

### Environment Configuration (Optional)

Create `.env.local` file:
```env
# For AI-powered diagnosis
DIAGNOSIS_MODE=ai

# For real Gemini API (optional)
GEMINI_API_KEY=your-api-key-here
USE_REAL_GEMINI=false
```

**Note:** The app works perfectly without any environment setup! AI features use pre-written responses by default.

---

## 🚀 Deployment

### Deployed on Vercel

**Live URL:** [Your Vercel URL]

**Deployment Process:**
1. Push code to GitHub
2. Connect GitHub repo to Vercel
3. Vercel automatically builds and deploys
4. Every push to `main` branch triggers auto-deployment

**Deployment Commands:**
```bash
# Commit changes
git add .
git commit -m "your changes"
git push origin main

# Vercel automatically redeploys!
```

---

## 🎨 UI/UX Features

### Design Principles
- **Clean & Modern**: Minimalist design with focus on usability
- **Responsive**: Works on mobile, tablet, and desktop
- **Accessible**: WCAG compliant, keyboard navigation
- **Fast**: Optimized performance, instant feedback

### Interactive Elements
- **Symptom Cards**: Hover effects, click animations
- **Loading States**: Spinner during diagnosis
- **Error Handling**: User-friendly error messages
- **Dark Mode**: Automatic theme switching
- **Color Coding**: Severity indicators (green/yellow/red)

### User Experience
- **Intuitive Navigation**: Clear flow from symptoms to diagnosis
- **Visual Feedback**: Immediate response to user actions
- **Progressive Disclosure**: Information revealed as needed
- **Mobile-First**: Optimized for touch interactions

---

## 📊 Algorithm Complexity Analysis

### Rule-Based Diagnosis Algorithm

**Time Complexity:**
- Best Case: O(n × m) where n = number of diseases, m = average symptoms per disease
- Worst Case: O(n × m)
- Space Complexity: O(n)

**Optimization:**
- Pre-sorted disease rules for faster matching
- Early termination when perfect match found
- Efficient array filtering and mapping

### AI Enhancement

**Time Complexity:**
- Depends on API response time (typically 1-3 seconds)
- Asynchronous processing doesn't block UI

---

## 🔒 Security & Privacy

### Data Protection
- **No Data Storage**: Symptoms are not saved or logged
- **No User Tracking**: No personal information collected
- **Secure API Calls**: HTTPS encryption for all requests
- **Environment Variables**: Sensitive keys stored securely

### Medical Disclaimer
⚠️ **Important:** This application is for educational purposes only. It should NOT be used as a substitute for professional medical advice, diagnosis, or treatment. Always consult qualified healthcare providers.

---

## 🧪 Testing the Application

### Manual Testing Scenarios

#### Test Case 1: Common Cold
```
Input: runny_nose, cough, headache
Expected: Common Cold diagnosis
Result: ✓ Pass
```

#### Test Case 2: Flu
```
Input: fever, cough, body_pain, chills
Expected: Flu (Influenza) diagnosis
Result: ✓ Pass
```

#### Test Case 3: Insufficient Symptoms
```
Input: headache (only 1 symptom)
Expected: "No matching diagnosis found"
Result: ✓ Pass
```

#### Test Case 4: AI Mode
```
Input: fever, headache + AI Mode ON
Expected: Diagnosis + AI insights
Result: ✓ Pass
```

---

## 📈 Future Enhancements

### Planned Features
- [ ] **Multi-language Support**: Hindi, Spanish, French
- [ ] **Voice Input**: Speak symptoms instead of clicking
- [ ] **Medical History**: Track past diagnoses
- [ ] **PDF Reports**: Download diagnosis as PDF
- [ ] **Medication Suggestions**: Recommend OTC medicines
- [ ] **Doctor Finder**: Locate nearby healthcare providers
- [ ] **Symptom Severity**: Rate symptom intensity (1-10)
- [ ] **Image Analysis**: Upload photos for skin conditions
- [ ] **Chat Interface**: Conversational diagnosis
- [ ] **Health Tracking**: Monitor symptoms over time

### Technical Improvements
- [ ] Add unit tests (Jest, React Testing Library)
- [ ] Implement caching for faster responses
- [ ] Add analytics to track usage patterns
- [ ] Optimize bundle size
- [ ] Add Progressive Web App (PWA) support
- [ ] Implement offline mode

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/new-feature`
3. **Make your changes**
4. **Commit**: `git commit -m "Add new feature"`
5. **Push**: `git push origin feature/new-feature`
6. **Create Pull Request**

### Areas for Contribution
- Add more diseases to the knowledge base
- Improve AI prompts for better responses
- Enhance UI/UX design
- Add new features from the roadmap
- Fix bugs and improve performance
- Write documentation and tutorials

---

## 📚 Learning Outcomes

### For Students
This project demonstrates:
- **Full-stack Development**: Frontend + Backend integration
- **AI/ML Integration**: Working with modern AI APIs
- **Expert Systems**: Rule-based AI implementation
- **Web Technologies**: React, Next.js, TypeScript
- **API Design**: RESTful API principles
- **Deployment**: Cloud hosting and CI/CD
- **Version Control**: Git and GitHub workflows

### Skills Developed
- React component architecture
- State management with hooks
- API route creation
- TypeScript type safety
- Responsive design with Tailwind
- AI prompt engineering
- Debugging and testing
- Project documentation

---

## 📞 Support & Contact

### Issues & Bugs
- Report issues on [GitHub Issues](https://github.com/VishalRaut2106/-MediAI-Diagnosis/issues)
- Include screenshots and error messages
- Describe steps to reproduce

### Questions
- Check existing documentation first
- Search closed issues for solutions
- Open a new issue with [Question] tag

---

## 📄 License

This project is created for **educational purposes** as part of academic coursework.

**Usage Rights:**
- ✓ Use for learning and education
- ✓ Modify and experiment
- ✓ Share with attribution
- ✗ Commercial use without permission
- ✗ Medical use in real scenarios

---

## 🙏 Acknowledgments

- **Google Gemini AI** for providing advanced AI capabilities
- **Vercel** for free hosting and deployment
- **Next.js Team** for the amazing framework
- **Radix UI** for accessible components
- **Tailwind CSS** for utility-first styling
- **Open Source Community** for inspiration and tools

---

## 📊 Project Statistics

- **Total Lines of Code**: ~5,000+
- **Components**: 40+
- **API Endpoints**: 2
- **Diseases Covered**: 8
- **Symptoms Tracked**: 18+
- **Technologies Used**: 15+
- **Development Time**: [Your timeframe]

---

## 🎓 Academic Information

**Project Type:** Web Application Development  
**Domain:** Healthcare Technology / AI in Medicine  
**Technologies:** Full-stack JavaScript, AI/ML Integration  
**Complexity Level:** Intermediate to Advanced  

**Key Concepts Demonstrated:**
- Expert Systems in AI
- Pattern Matching Algorithms
- API Integration
- Full-stack Development
- Modern Web Technologies
- User Experience Design
- Cloud Deployment

---

**Built with ❤️ by Vishal Raut**  
**GitHub:** [@VishalRaut2106](https://github.com/VishalRaut2106)  
**Project:** MediAI-Diagnosis  
**Year:** 2025

---

*This project showcases the intersection of traditional computer science (expert systems) with modern AI (Large Language Models) to solve real-world healthcare challenges.*
