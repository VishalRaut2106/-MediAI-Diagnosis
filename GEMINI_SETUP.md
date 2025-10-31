# 🤖 Gemini CLI Setup Guide

This guide will help you set up Google Gemini CLI to enable AI-powered features in MediAI Diagnosis.

## 📋 Prerequisites

- Node.js 18+ or Python 3.8+
- Google Cloud account (free tier available)
- Gemini API key

## 🔑 Get Your Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

## 💻 Installation Methods

### Method 1: Using NPM (Recommended for Node.js users)

```bash
# Install Gemini CLI globally
npm install -g @google/generative-ai

# Or install locally in your project
npm install @google/generative-ai
```

### Method 2: Using Python/pip

```bash
# Install using pip
pip install google-generativeai

# Or using pip3
pip3 install google-generativeai
```

### Method 3: Using a Custom Wrapper Script

If you don't have a direct CLI, create a wrapper script:

**Windows (gemini.bat):**
```batch
@echo off
node -e "const { GoogleGenerativeAI } = require('@google/generative-ai'); const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); const model = genAI.getGenerativeModel({ model: 'gemini-pro' }); (async () => { const result = await model.generateContent(process.argv[1]); console.log(result.response.text()); })();" %*
```

**Linux/Mac (gemini.sh):**
```bash
#!/bin/bash
node -e "const { GoogleGenerativeAI } = require('@google/generative-ai'); const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY); const model = genAI.getGenerativeModel({ model: 'gemini-pro' }); (async () => { const result = await model.generateContent(process.argv[1]); console.log(result.response.text()); })();" "$@"
```

## 🔧 Configuration

### Set Environment Variable

**Windows (PowerShell):**
```powershell
$env:GEMINI_API_KEY="your-api-key-here"

# To make it permanent:
[System.Environment]::SetEnvironmentVariable('GEMINI_API_KEY', 'your-api-key-here', 'User')
```

**Windows (CMD):**
```cmd
set GEMINI_API_KEY=your-api-key-here

# To make it permanent:
setx GEMINI_API_KEY "your-api-key-here"
```

**Linux/Mac:**
```bash
export GEMINI_API_KEY="your-api-key-here"

# To make it permanent, add to ~/.bashrc or ~/.zshrc:
echo 'export GEMINI_API_KEY="your-api-key-here"' >> ~/.bashrc
source ~/.bashrc
```

### Create .env.local File

In your project root, create `.env.local`:
```env
GEMINI_API_KEY=your-api-key-here
```

## ✅ Verify Installation

Test if Gemini CLI is working:

```bash
# Test with a simple prompt
gemini "Hello, how are you?"

# Or if using the wrapper script:
node gemini.js "Hello, how are you?"
```

You should see a response from Gemini AI.

## 🚀 Using with MediAI Diagnosis

Once configured, the app will automatically use Gemini when:
1. AI toggle is enabled in the UI
2. User clicks "Get AI Diagnosis"
3. The API will call Gemini CLI for enhanced analysis

## 🔍 Troubleshooting

### Issue: "gemini command not found"

**Solution:**
- Ensure the package is installed globally
- Check if the installation directory is in your PATH
- Try using the full path to the executable

### Issue: "API key not found"

**Solution:**
- Verify GEMINI_API_KEY environment variable is set
- Restart your terminal/IDE after setting the variable
- Check .env.local file exists and is properly formatted

### Issue: "Rate limit exceeded"

**Solution:**
- Gemini free tier has rate limits
- Wait a few minutes before trying again
- Consider upgrading to a paid plan for higher limits

### Issue: "Module not found" error

**Solution:**
```bash
# Reinstall dependencies
npm install --legacy-peer-deps

# Or install Gemini package specifically
npm install @google/generative-ai
```

## 📊 API Limits (Free Tier)

- **Requests per minute:** 60
- **Requests per day:** 1,500
- **Tokens per minute:** 32,000

For production use, consider upgrading to a paid plan.

## 🔒 Security Best Practices

1. **Never commit API keys** to version control
2. Add `.env.local` to `.gitignore`
3. Use environment variables for sensitive data
4. Rotate API keys regularly
5. Monitor API usage in Google Cloud Console

## 📚 Additional Resources

- [Google AI Studio](https://makersuite.google.com/)
- [Gemini API Documentation](https://ai.google.dev/docs)
- [Google Generative AI SDK](https://github.com/google/generative-ai-js)
- [API Key Management](https://console.cloud.google.com/apis/credentials)

## 💡 Alternative: Run Without AI

If you don't want to set up Gemini:
1. Toggle AI mode OFF in the app
2. The app will use rule-based diagnosis only
3. Still provides accurate medical analysis

---

**Need help?** Check the [main README](README.md) or open an issue on GitHub.
