# Deploy MediAI-Diagnosis to Vercel

Your app is already deployed on Vercel! 🎉

## Environment Variables

Make sure to add these in your Vercel project settings:

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your project: `MediAI-Diagnosis`
3. Go to Settings → Environment Variables
4. Add:
   ```
   DIAGNOSIS_MODE=ai
   GEMINI_API_KEY=your-gemini-api-key (if using real Gemini)
   USE_REAL_GEMINI=false (set to true for dynamic AI)
   ```

## Redeploy After Changes

### Option 1: Git Push (Automatic)
```bash
git add .
git commit -m "your changes"
git push origin main
```
Vercel will automatically redeploy!

### Option 2: Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

### Option 3: Vercel Dashboard
- Go to your project
- Click "Deployments"
- Click "Redeploy" on the latest deployment

## Custom Domain

To add a custom domain:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

## Troubleshooting

**404 Errors:**
- Make sure `next.config.mjs` has proper configuration
- Check that API routes are in `app/api/` directory
- Verify build completed successfully in deployment logs

**API Routes Not Working:**
- Vercel automatically handles Next.js API routes
- Check environment variables are set correctly
- Review function logs in Vercel dashboard

**Build Failures:**
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

## Performance Tips

- Enable Edge Functions for faster API responses
- Use Vercel Analytics to monitor performance
- Enable caching for static assets

## Your Live URL

Your app should be live at:
- `https://your-project-name.vercel.app`
- Or your custom domain if configured

---

**Note:** Vercel is optimized for Next.js and handles all configuration automatically!
