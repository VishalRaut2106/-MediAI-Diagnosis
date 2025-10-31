# Deploy MediAI-Diagnosis to Netlify

## Quick Deploy Options

### Option 1: Deploy via Netlify CLI (Recommended)

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize and Deploy**
   ```bash
   netlify init
   ```
   - Choose "Create & configure a new site"
   - Select your team
   - Enter site name: `mediai-diagnosis` (or your preferred name)
   - Build command: `npm run build`
   - Publish directory: `.next`

4. **Deploy**
   ```bash
   netlify deploy --prod
   ```

### Option 2: Deploy via Netlify Dashboard

1. **Push your code to GitHub** (already done ✓)

2. **Go to Netlify Dashboard**
   - Visit: https://app.netlify.com/
   - Click "Add new site" → "Import an existing project"

3. **Connect to GitHub**
   - Select your repository: `VishalRaut2106/-MediAI-Diagnosis`

4. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy site"

### Option 3: One-Click Deploy

Click this button to deploy directly:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/VishalRaut2106/-MediAI-Diagnosis)

## Environment Variables

After deployment, add these environment variables in Netlify:

1. Go to: Site settings → Environment variables
2. Add:
   ```
   DIAGNOSIS_MODE=ai
   ```

## Important Notes

- The `netlify.toml` file is already configured
- Next.js images are set to unoptimized mode for static export
- The app will work with both rule-based and AI diagnosis modes
- For AI mode, ensure Gemini CLI is configured (may need serverless functions)

## Post-Deployment

Your site will be live at: `https://your-site-name.netlify.app`

To use a custom domain:
1. Go to Site settings → Domain management
2. Add your custom domain
3. Follow DNS configuration instructions

## Troubleshooting

If you get 404 errors:
- Check that `netlify.toml` is in the root directory
- Verify build command completed successfully
- Check Netlify build logs for errors

For API routes with Gemini:
- Consider using Netlify Functions for serverless API calls
- Or switch to `DIAGNOSIS_MODE=rules` for static deployment
