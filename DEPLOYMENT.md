# 🚀 Iron Forge Gym - Deployment Guide

## Pre-Deployment Checklist

- [x] Build completes successfully (`npm run build`)
- [x] All routes working correctly
- [x] Navigation links functional
- [x] No console errors
- [x] Responsive design verified
- [x] All features tested

---

## Deployment Options

### Option 1: Netlify (Recommended - Easiest)

**Steps:**

1. **Go to Netlify**: https://app.netlify.com/
2. **Sign in** with your GitHub account
3. Click **"Add new site"** → **"Import an existing project"**
4. Choose **GitHub** and select **`ironforage`** repository
5. **Build settings**:
   ```
   Build command: npm run build
   Publish directory: dist
   ```
6. Click **"Deploy site"**
7. **Done!** Your site will be live in ~2 minutes

**Custom Domain (Optional):**
- Go to Site settings → Domain management
- Add your custom domain
- Configure DNS settings

---

### Option 2: Vercel (Also Great)

**Steps:**

1. **Go to Vercel**: https://vercel.com/
2. **Sign in** with GitHub
3. Click **"New Project"**
4. Import **`ironforage`** repository
5. Vercel auto-detects Vite settings
6. Click **"Deploy"**
7. **Done!** Live in ~1 minute

---

### Option 3: GitHub Pages

**Steps:**

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Update `package.json`:
   ```json
   {
     "homepage": "https://adityakashid21.github.io/ironforage",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.ts`:
   ```typescript
   export default defineConfig({
     base: '/ironforage/',
     // ... rest of config
   });
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. Enable GitHub Pages:
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages / (root)
   - Save

6. Site will be live at: `https://adityakashid21.github.io/ironforage/`

---

## Post-Deployment

### 1. Verify All Routes
- [ ] Homepage (/)
- [ ] Diet Plan Maker (/diet-plan)
- [ ] Workout Planner (/workout-planner)
- [ ] Class Booking (/classes)

### 2. Test Features
- [ ] BMI Calculator working
- [ ] Calorie calculator accurate
- [ ] Meal plans generating
- [ ] Workout programs displaying
- [ ] Class booking form functional
- [ ] Navigation working (desktop + mobile)

### 3. Performance Check
- [ ] Run Lighthouse audit
- [ ] Check load times
- [ ] Verify mobile responsiveness
- [ ] Test on different browsers

### 4. SEO
- [ ] Verify meta tags
- [ ] Check Open Graph tags
- [ ] Submit sitemap to Google
- [ ] Add Google Analytics (optional)

---

## Troubleshooting

### Routes Not Working (404 errors)

**Netlify:**
- Ensure `_redirects` file exists in `public/` folder
- Content: `/* /index.html 200`

**Vercel:**
- Ensure `vercel.json` exists in root
- Contains proper rewrites configuration

**GitHub Pages:**
- Ensure `base` is set in `vite.config.ts`
- Use HashRouter instead of BrowserRouter (alternative)

### Build Fails

1. Clear cache:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   npm run build
   ```

2. Check Node version (should be 18+):
   ```bash
   node --version
   ```

---

## Environment Variables (If Needed)

Create `.env` file:
```
VITE_API_URL=your_api_url
VITE_GA_ID=your_google_analytics_id
```

Add to `.gitignore`:
```
.env
.env.local
```

Configure in hosting platform:
- **Netlify**: Site settings → Environment variables
- **Vercel**: Project settings → Environment Variables

---

## Custom Domain Setup

### Netlify
1. Go to Domain settings
2. Add custom domain
3. Update DNS:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5

   Type: CNAME
   Name: www
   Value: [your-site].netlify.app
   ```

### Vercel
1. Go to Domains
2. Add domain
3. Follow DNS instructions

---

## Monitoring & Analytics

### Google Analytics
1. Create GA4 property
2. Add tracking code to `index.html`
3. Or use environment variable

### Performance Monitoring
- Use Netlify Analytics
- Or Vercel Analytics
- Or Google PageSpeed Insights

---

## Maintenance

### Regular Updates
```bash
# Update dependencies
npm update

# Check for security issues
npm audit

# Fix issues
npm audit fix
```

### Backup
- Keep GitHub repository updated
- Tag releases:
  ```bash
  git tag -a v1.0.0 -m "Initial release"
  git push origin v1.0.0
  ```

---

## Support

For issues or questions:
- Check build logs in hosting platform
- Review browser console for errors
- Test locally first: `npm run build && npm run preview`

---

**Developed with ❤️ and 💪 by Aditya Kashid**
