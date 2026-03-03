# Deploy to Netlify - Complete Guide

## 📋 Prerequisites

Before you start, make sure you have:
1. A **Netlify account** (free at https://netlify.com)
2. A **GitHub account** (free at https://github.com)
3. **Git** installed on your computer
4. The project files from `/home/ubuntu/52-Week-PM-Tracker-Web/`

---

## 🚀 Method 1: Deploy via GitHub (Recommended)

This method automatically deploys whenever you push to GitHub.

### Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Create a new repository named `52-week-pm-tracker-web`
3. Choose **Public** or **Private** (your preference)
4. Click **Create repository**

### Step 2: Push Your Code to GitHub

On your computer, in the project directory:

```bash
# Navigate to project
cd /home/ubuntu/52-Week-PM-Tracker-Web

# Initialize git (if not already done)
git init

# Add GitHub as remote
git remote add origin https://github.com/YOUR_USERNAME/52-week-pm-tracker-web.git

# Add all files
git add .

# Commit
git commit -m "Initial commit: 52-Week PM Tracker Web App"

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Connect to Netlify

1. Go to https://app.netlify.com
2. Click **Add new site** → **Import an existing project**
3. Choose **GitHub**
4. Authorize Netlify to access your GitHub account
5. Select your `52-week-pm-tracker-web` repository
6. Click **Deploy site**

### Step 4: Configure Build Settings (if needed)

Netlify should auto-detect these settings:
- **Build command:** `npm run build`
- **Publish directory:** `dist`

If not, update them:
1. Go to **Site settings** → **Build & deploy**
2. Set **Build command:** `npm run build`
3. Set **Publish directory:** `dist`
4. Save

### Step 5: Set Environment Variables

1. Go to **Site settings** → **Build & deploy** → **Environment**
2. Click **Edit variables**
3. Add:
   - **Key:** `VITE_API_URL`
   - **Value:** `https://your-api-domain.com/api` (replace with your backend URL)
4. Click **Save**

---

## 📦 Method 2: Deploy via Drag & Drop

This is the quickest way if you just want to test.

### Step 1: Build the Project

```bash
cd /home/ubuntu/52-Week-PM-Tracker-Web
npm run build
```

This creates a `dist/` folder with all the files ready to deploy.

### Step 2: Upload to Netlify

1. Go to https://app.netlify.com/drop
2. Drag and drop the **`dist/` folder** onto the page
3. Wait for deployment to complete
4. Your site will be live at a random URL like `https://random-name.netlify.app`

**Note:** This method doesn't auto-update when you make changes.

---

## 🔧 Method 3: Deploy via Netlify CLI

For advanced users who want full control.

### Step 1: Install Netlify CLI

```bash
npm install -g netlify-cli
```

### Step 2: Build the Project

```bash
cd /home/ubuntu/52-Week-PM-Tracker-Web
npm run build
```

### Step 3: Deploy

```bash
# Login to Netlify
netlify login

# Deploy the dist folder
netlify deploy --prod --dir=dist
```

Follow the prompts to complete deployment.

---

## ⚙️ Environment Variables Setup

Your app needs to know where your backend API is located.

### For Development
Edit `.env.local`:
```env
VITE_API_URL=http://localhost:3000/api
```

### For Production (Netlify)

1. **Via GitHub (Recommended):**
   - Site settings → Build & deploy → Environment
   - Add variable: `VITE_API_URL=https://your-backend-api.com/api`

2. **Via netlify.toml:**
   Create a `netlify.toml` file in project root:
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [build.environment]
     VITE_API_URL = "https://your-backend-api.com/api"
   ```

---

## 🌐 Custom Domain Setup

### Connect Your Domain

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain (e.g., `tracker.yourdomain.com`)
4. Follow the DNS setup instructions
5. Netlify will provide DNS records to add to your domain registrar

### DNS Configuration Example

If your domain registrar is GoDaddy, Namecheap, etc.:

1. Go to your domain registrar's DNS settings
2. Add the DNS records Netlify provides
3. Wait 24-48 hours for DNS to propagate
4. Your site will be accessible at your custom domain

---

## 🔒 HTTPS & SSL

Netlify automatically provides free HTTPS/SSL certificates via Let's Encrypt.

- ✅ Automatic HTTPS enabled
- ✅ Free SSL certificate
- ✅ Auto-renewal
- No additional setup needed!

---

## 📊 Monitoring & Analytics

### View Deployment Status

1. Go to **Deployments** tab
2. See all deployment history
3. Click any deployment to see details

### View Site Analytics

1. Go to **Analytics** tab
2. See visitor stats, page views, etc.

### View Build Logs

1. Go to **Deploys** tab
2. Click on a deployment
3. Scroll to **Deploy log** section
4. See detailed build output

---

## 🆘 Troubleshooting

### Build Fails with "npm ERR!"

**Solution:**
```bash
# Clear cache and rebuild
npm cache clean --force
npm install
npm run build
```

Then push to GitHub to trigger redeploy.

### Site Shows Blank Page

**Possible causes:**
1. API URL is wrong - check `VITE_API_URL` environment variable
2. Backend API is down - ensure your API server is running
3. CORS issues - check backend CORS settings

**Solution:**
1. Check browser console for errors (F12)
2. Verify API URL is correct in environment variables
3. Check backend server is running and accessible

### "Cannot find module" Error

**Solution:**
1. Ensure `package.json` has all dependencies
2. Check `package-lock.json` or `pnpm-lock.yaml` is committed
3. Rebuild locally: `npm install && npm run build`

### Deployment Stuck

**Solution:**
1. Go to **Site settings** → **Build & deploy**
2. Click **Trigger deploy** → **Deploy site**
3. Check build logs for errors

---

## 📝 Deployment Checklist

Before deploying, verify:

- [ ] Code is committed to GitHub
- [ ] `npm run build` works locally
- [ ] `dist/` folder is created successfully
- [ ] `.env.local` has correct `VITE_API_URL`
- [ ] Backend API is running and accessible
- [ ] CORS is enabled on backend
- [ ] All dependencies are in `package.json`
- [ ] No console errors in browser (F12)

---

## 🎯 Post-Deployment Steps

### 1. Test Your Site

- [ ] Visit your Netlify URL
- [ ] Test all navigation tabs
- [ ] Check if data loads from API
- [ ] Test on mobile browser

### 2. Set Up Custom Domain

- [ ] Add custom domain in Netlify
- [ ] Update DNS records
- [ ] Wait for DNS propagation
- [ ] Test custom domain works

### 3. Configure API Connection

- [ ] Update `VITE_API_URL` for production
- [ ] Test API calls work
- [ ] Verify data displays correctly

### 4. Monitor Deployment

- [ ] Check deployment logs
- [ ] Monitor site analytics
- [ ] Set up alerts (optional)

---

## 📚 Useful Links

- **Netlify Docs:** https://docs.netlify.com
- **Vite Deployment:** https://vitejs.dev/guide/static-deploy.html#netlify
- **React Router SPA:** https://docs.netlify.com/routing/overview/
- **Environment Variables:** https://docs.netlify.com/configure-builds/environment-variables/

---

## 🚀 Quick Deployment Summary

### Fastest Way (5 minutes)

```bash
# 1. Build locally
npm run build

# 2. Drag dist/ to https://app.netlify.app/drop
# Done! Your site is live
```

### Best Way (10 minutes)

```bash
# 1. Push to GitHub
git push origin main

# 2. Connect GitHub to Netlify
# (via https://app.netlify.com)

# 3. Set environment variables
# VITE_API_URL = your-api-url

# Done! Auto-deploys on every push
```

---

## 💡 Pro Tips

1. **Auto-deploy on push:** Use GitHub method for automatic updates
2. **Preview deploys:** Netlify creates preview URLs for pull requests
3. **Rollback:** Click any previous deployment to revert instantly
4. **Split testing:** Test multiple versions with Netlify's split testing
5. **Functions:** Add serverless functions for backend logic

---

## 🎉 You're Ready!

Your 52-Week PM Tracker web app is ready to deploy. Choose your preferred method above and follow the steps.

**Questions?** Check Netlify's documentation or contact support.

Happy deploying! 🚀
