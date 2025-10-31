# 🤖 MediAI Diagnosis - AI-Powered Medical Expert System

An advanced medical diagnosis application powered by **Google Gemini AI** and expert rule-based systems. This project combines traditional medical knowledge with cutting-edge AI to provide comprehensive health analysis.

## ✨ Features

### 🧠 Hybrid AI Diagnosis System
- **Rule-Based Engine**: Fast, reliable diagnosis using medical expert rules
- **AI Enhancement (Hybrid)**:
  - ⚡ **Instant Mode**: Pre-written AI responses (default, always works)
  - 🚀 **Real Gemini Mode**: Dynamic Google Gemini API responses (optional)

### 🎯 AI-Enhanced Analysis Includes:
- **Detailed Medical Explanation**: In-depth understanding of the condition
- **Severity Assessment**: Mild, Moderate, or Severe classification
- **Recovery Timeline**: Expected duration of illness
- **Emergency Guidance**: When to seek immediate medical help
- **Lifestyle Recommendations**: Daily habits to support recovery
- **Dietary Advice**: Nutrition tips specific to your condition
- **Prevention Tips**: How to avoid future occurrences

### 📊 Comprehensive Symptom Database
18+ symptoms across multiple categories:
- General (Fever, Headache, Fatigue, etc.)
- Respiratory (Cough, Runny Nose, Sore Throat, etc.)
- Digestive (Stomach Pain, Vomiting, Nausea, etc.)
- Metabolic (Excessive Thirst, Frequent Urination)
- Allergic (Itchy Eyes)

### 🏥 Disease Coverage
- Viral Fever
- Common Cold
- Flu (Influenza)
- Malaria
- Typhoid
- Dengue Fever
- Diabetes (Possible)
- Allergic Reactions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- No additional setup needed - AI features work out of the box! ⚡

### Quick Start (Works Out of the Box!)
The app uses a **hybrid AI approach**:
- ⚡ **Instant Mode** (default): Pre-written AI responses - no setup needed!
- 🚀 **Real Gemini Mode** (optional): Dynamic AI responses - requires API key

See [SETUP_GEMINI.md](SETUP_GEMINI.md) for enabling real Gemini API.

### Installation
```bash
# Install dependencies
npm install --legacy-peer-deps

# Build the project
npm run build

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎮 How to Use

1. **Select Symptoms**: Click on symptoms you're experiencing
2. **Toggle AI Mode**: Enable/disable AI enhancement (toggle in top-right)
3. **Get Diagnosis**: Click "Get AI Diagnosis" button
4. **Review Results**: See comprehensive analysis with:
   - Disease identification
   - Detailed explanation
   - Precautions and recommendations
   - AI-enhanced insights (if enabled)

## 🔧 Configuration

### AI Modes
The AI toggle in the UI allows you to switch between:
- **AI Mode ON**: Enhanced analysis with AI insights (instant by default)
- **AI Mode OFF**: Fast rule-based diagnosis only

### Environment Variables (`.env.local`)
```env
# Gemini API Key (optional - for real AI responses)
GEMINI_API_KEY=your-api-key-here

# Enable real Gemini API (default: false)
USE_REAL_GEMINI=false  # Set to 'true' for dynamic AI responses
```

**Default behavior**: Works instantly without any setup!  
**Optional**: Enable real Gemini for dynamic responses - see [SETUP_GEMINI.md](SETUP_GEMINI.md)

## 🏗️ Architecture

### Frontend (Next.js 16 + React 19)
- Modern React with TypeScript
- Tailwind CSS for styling
- Radix UI components
- Responsive design

### Backend (API Routes)
- `/api/diagnose` - Main diagnosis endpoint
- Rule-based engine for initial diagnosis
- Gemini AI integration for enhancement

### AI Integration
- Uses Gemini CLI for AI analysis
- Structured JSON responses
- Fallback to rule-based system if AI fails

## 📁 Project Structure
```
├── app/
│   ├── api/diagnose/route.ts    # Main API endpoint
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
├── components/
│   ├── diagnosis-form.tsx       # Symptom selection form
│   ├── diagnosis-result.tsx     # Results display
│   ├── header.tsx               # App header
│   └── ui/                      # UI components
├── lib/
│   ├── diagnosis-engine.ts      # Rule-based engine
│   └── disease-rules.ts         # Medical knowledge base
└── README.md
```

## 🎨 UI Features

- **Dark Mode Support**: Automatic theme switching
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Interactive Symptom Cards**: Visual feedback on selection
- **Loading States**: Clear indication of AI processing
- **Error Handling**: User-friendly error messages
- **Severity Indicators**: Color-coded severity levels

## ⚠️ Disclaimer

**This application is for educational purposes only.** It should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.

## 🛠️ Technologies Used

- **Next.js 16** - React framework
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Radix UI** - Accessible components
- **Google Gemini** - AI analysis
- **Lucide React** - Icons

## 📝 License

This project is for educational purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add more diseases to the knowledge base
- Improve AI prompts
- Enhance UI/UX
- Add new features

## 🔮 Future Enhancements

- [ ] Multi-language support
- [ ] Voice input for symptoms
- [ ] Medical history tracking
- [ ] PDF report generation
- [ ] Integration with health APIs
- [ ] Medication recommendations
- [ ] Nearby doctor finder

## 🚀 Deployment

### Deployed on Vercel ⚡

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/VishalRaut2106/-MediAI-Diagnosis)

**Already deployed!** Your app is live on Vercel.

**To redeploy after changes:**
```bash
git add .
git commit -m "your changes"
git push origin main
```
Vercel will automatically redeploy!

**Environment Variables:**
Add these in Vercel Dashboard → Settings → Environment Variables:
- `DIAGNOSIS_MODE=ai`
- `GEMINI_API_KEY=your-key` (optional)
- `USE_REAL_GEMINI=false` (optional)

For detailed instructions, see [DEPLOY_VERCEL.md](DEPLOY_VERCEL.md)

---

**Built with ❤️ using Next.js and Google Gemini AI**
