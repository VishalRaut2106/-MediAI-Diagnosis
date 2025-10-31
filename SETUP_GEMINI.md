# 🤖 Gemini API Setup Guide (Hybrid Mode)

Your app now uses a **hybrid approach**:
- ⚡ **Instant fallback** with pre-written AI data (always works)
- 🚀 **Real Gemini API** for dynamic responses (optional)

## 🎯 Current Mode: Instant AI (No Setup Needed)

By default, the app uses pre-written AI responses that are:
- ✅ Instant (no API calls)
- ✅ Comprehensive medical information
- ✅ Works offline
- ✅ No API key required

## 🚀 Enable Real Gemini API (Optional)

Want truly dynamic AI responses? Follow these steps:

### Step 1: Get Your Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy your API key

### Step 2: Configure Your App

Open `.env.local` and update:

```env
# Add your real API key
GEMINI_API_KEY=AIzaSy...your-actual-key-here

# Enable real Gemini API calls
USE_REAL_GEMINI=true
```

### Step 3: Restart Your Dev Server

```bash
# Stop the current server (Ctrl+C)
# Then restart
npm run dev
```

## 🔄 How Hybrid Mode Works

```
User Request
    ↓
Try Real Gemini API (if enabled)
    ↓
Success? → Return Gemini Response ✨
    ↓
Failed? → Use Pre-written Data ⚡
    ↓
Always Get a Response!
```

## 📊 Comparison

| Feature | Pre-written AI | Real Gemini API |
|---------|---------------|-----------------|
| Speed | ⚡ Instant | 🐢 2-5 seconds |
| Cost | 💰 Free | 💰 Free tier available |
| Offline | ✅ Yes | ❌ No |
| Dynamic | ❌ Fixed responses | ✅ Unique each time |
| Setup | ✅ None needed | 🔧 API key required |
| Quality | ⭐⭐⭐⭐ Excellent | ⭐⭐⭐⭐⭐ Outstanding |

## 🧪 Test Your Setup

1. **Check Console Logs** - Look for:
   - `🤖 Attempting real Gemini API call...` (trying API)
   - `✅ Successfully got real Gemini AI response` (API worked!)
   - `⚡ Falling back to pre-written AI data` (using fallback)

2. **Test Without API Key**:
   ```env
   USE_REAL_GEMINI=false
   ```
   Should work instantly with pre-written data

3. **Test With API Key**:
   ```env
   USE_REAL_GEMINI=true
   GEMINI_API_KEY=your-key
   ```
   Should take 2-5 seconds but give dynamic responses

## 🎮 Switching Modes

### Use Pre-written AI (Fast, Offline)
```env
USE_REAL_GEMINI=false
```

### Use Real Gemini API (Dynamic, Online)
```env
USE_REAL_GEMINI=true
GEMINI_API_KEY=your-actual-key
```

## 🆓 Gemini API Free Tier

- **60 requests per minute**
- **1,500 requests per day**
- **Free forever** for moderate use

Perfect for development and small projects!

## ⚠️ Troubleshooting

### "No valid Gemini API key found"
- Check your `.env.local` file
- Make sure `GEMINI_API_KEY` is set correctly
- Restart your dev server

### "Gemini API call failed: 429"
- You've hit the rate limit
- Wait a minute and try again
- Or use `USE_REAL_GEMINI=false` for instant responses

### Slow responses
- Real Gemini API takes 2-5 seconds
- This is normal for AI processing
- Use `USE_REAL_GEMINI=false` for instant responses

## 🎯 Recommended Setup

**For Development:**
```env
USE_REAL_GEMINI=false  # Fast testing
```

**For Demo/Production:**
```env
USE_REAL_GEMINI=true   # Show real AI capabilities
GEMINI_API_KEY=your-key
```

**For Offline/Presentation:**
```env
USE_REAL_GEMINI=false  # Always works, no internet needed
```

## 🔐 Security

- Never commit `.env.local` to git
- Keep your API key private
- Rotate keys if exposed
- Monitor usage in [Google AI Studio](https://makersuite.google.com/)

---

**Best of both worlds!** 🎉
- Fast fallback ensures it always works
- Real AI when you want dynamic responses
