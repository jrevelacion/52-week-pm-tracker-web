# Deploy to Netlify via GitHub - Complete Guide

## 📋 Step-by-Step Instructions

This guide will walk you through deploying your 52-Week PM Tracker web app to Netlify using GitHub. The entire process takes about **10-15 minutes**.

---

## ✅ What You'll Need

1. **GitHub Account** (free at https://github.com)
2. **Netlify Account** (free at https://netlify.com)
3. **Git installed** on your computer
4. **Project files** from `/home/ubuntu/52-Week-PM-Tracker-Web/`

---

## 🚀 Step 1: Create a GitHub Repository

### 1.1 Create New Repository on GitHub

1. Go to https://github.com/new
2. Fill in the details:
   - **Repository name:** `52-week-pm-tracker-web`
   - **Description:** "52-Week PM Tracker - Web Application"
   - **Visibility:** Public (recommended) or Private
   - **Initialize repository:** Leave unchecked
3. Click **Create repository**

### 1.2 Copy Your Repository URL

After creating, you'll see a URL like:
```
https://github.com/YOUR_USERNAME/52-week-pm-tracker-web.git
```

Save this URL - you'll need it in the next step.

---

## 📤 Step 2: Push Your Code to GitHub

### 2.1 Open Terminal/Command Prompt

Navigate to your project folder:
```bash
cd /home/ubuntu/52-Week-PM-Tracker-Web
```

### 2.2 Initialize Git (if not already done)

```bash
git init
```

### 2.3 Add GitHub as Remote

Replace `YOUR_USERNAME` with your actual GitHub username:
```bash
git remote add origin https://github.com/YOUR_USERNAME/52-week-pm-tracker-web.git
```

### 2.4 Configure Git User (first time only)

```bash
git config user.email "your-email@example.com"
git config user.name "Your Name"
```

### 2.5 Add All Files

```bash
git add .
```

### 2.6 Commit Your Code

```bash
git commit -m "Initial commit: 52-Week PM Tracker Web Application"
```

### 2.7 Push to GitHub

```bash
git branch -M main
git push -u origin main
```

**Note:** You may be asked to authenticate. Use your GitHub username and a personal access token (not your password).

### ✅ Verify on GitHub

1. Go to https://github.com/YOUR_USERNAME/52-week-pm-tracker-web
2. You should see all your project files
3. If you see them, you're ready for the next step!

---

## 🔗 Step 3: Connect GitHub to Netlify

### 3.1 Log In to Netlify

1. Go to https://app.netlify.com
2. Click **Log in** (or Sign up if you don't have an account)
3. Choose **GitHub** to sign in with your GitHub account
4. Authorize Netlify to access your GitHub account

### 3.2 Create New Site from GitHub

1. Click **Add new site** (or **New site from Git**)
2. Choose **GitHub** as your Git provider
3. Click **Authorize Netlify**
4. You'll be redirected to GitHub to authorize
5. Click **Authorize netlify** on GitHub

### 3.3 Select Your Repository

1. After authorizing, search for your repository
2. Type: `52-week-pm-tracker-web`
3. Click on your repository to select it

### 3.4 Configure Build Settings

Netlify should auto-detect these settings, but verify:

- **Branch to deploy:** `main`
- **Build command:** `npm run build`
- **Publish directory:** `dist`

If they're not correct, update them:
1. Click **Edit settings**
2. Update the values
3. Click **Save**

### 3.5 Deploy

Click **Deploy site**

Netlify will now:
1. Clone your GitHub repository
2. Install dependencies (`npm install`)
3. Build the project (`npm run build`)
4. Deploy the `dist/` folder

This takes about **2-3 minutes**. You'll see a progress bar.

### ✅ Deployment Complete!

Once done, you'll see:
- A random URL like `https://random-name.netlify.app`
- Your site is now **LIVE** 🎉

---

## ⚙️ Step 4: Configure Environment Variables

Your app needs to know where your backend API is located.

### 4.1 Add API URL Environment Variable

1. In Netlify, go to **Site settings**
2. Click **Build & deploy** → **Environment**
3. Click **Edit variables**
4. Add a new variable:
   - **Key:** `VITE_API_URL`
   - **Value:** `https://your-api-domain.com/api`
   
   Replace `your-api-domain.com` with your actual backend API domain.

5. Click **Save**

### 4.2 Trigger a New Deploy

1. Go to **Deploys** tab
2. Click **Trigger deploy** → **Deploy site**
3. Netlify will rebuild with the new environment variable

### ✅ Test Your App

1. Visit your Netlify URL
2. Open browser console (F12)
3. Check if data loads from your API
4. If you see errors, verify the API URL is correct

---

## 🌐 Step 5: Set Up Custom Domain (Optional)

### 5.1 Connect Your Domain

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain (e.g., `tracker.yourdomain.com`)
4. Click **Verify**

### 5.2 Update DNS Records

Netlify will show you DNS records to add. For example:

```
Type: CNAME
Name: tracker
Value: your-site.netlify.app
```

1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Find DNS settings
3. Add the CNAME record Netlify provided
4. Save changes

### 5.3 Wait for DNS Propagation

- Usually takes 5-30 minutes
- You can check status at https://www.whatsmydns.net/
- Once propagated, your site works at your custom domain

### ✅ HTTPS is Automatic

Netlify automatically provides:
- ✅ Free SSL certificate
- ✅ HTTPS enabled
- ✅ Auto-renewal
- No additional setup needed!

---

## 🔄 Step 6: Continuous Deployment Setup

Now whenever you push code to GitHub, Netlify automatically redeploys!

### 6.1 Make a Code Change

1. Edit a file in your project
2. Save the file
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update: [describe your change]"
   git push origin main
   ```

### 6.2 Netlify Auto-Deploys

1. Go to **Deploys** tab in Netlify
2. You'll see a new deployment starting automatically
3. It will build and deploy in 2-3 minutes
4. Your changes are now live!

### 6.3 View Deployment History

- Click **Deploys** tab
- See all your deployment history
- Click any deployment to see details
- Instantly rollback to previous versions if needed

---

## 📊 Monitoring Your Deployment

### Check Deployment Status

1. **Deploys tab:** See all deployments and their status
2. **Deploy log:** Click a deployment to see build output
3. **Analytics:** See visitor stats and page views

### View Build Logs

If a deployment fails:
1. Go to **Deploys** tab
2. Click the failed deployment
3. Scroll to **Deploy log**
4. Read the error message
5. Fix the issue and push again

---

## 🆘 Troubleshooting

### Problem: "Build failed"

**Check the deploy log:**
1. Go to **Deploys** tab
2. Click the failed deployment
3. Read the error message
4. Common causes:
   - Missing dependencies in `package.json`
   - Wrong build command
   - TypeScript errors

**Solution:**
```bash
# Test build locally
npm install
npm run build

# If it works locally, push to GitHub
git add .
git commit -m "Fix build issues"
git push origin main
```

### Problem: "Site shows blank page"

**Possible causes:**
1. API URL is wrong
2. Backend API is down
3. CORS issues

**Solution:**
1. Check browser console (F12)
2. Look for error messages
3. Verify `VITE_API_URL` environment variable
4. Ensure backend API is running

### Problem: "Cannot find module"

**Solution:**
1. Ensure all dependencies are in `package.json`
2. Commit `package-lock.json`:
   ```bash
   git add package-lock.json
   git commit -m "Add package lock"
   git push origin main
   ```
3. Trigger new deploy in Netlify

### Problem: "Site not updating after push"

**Solution:**
1. Verify push was successful: `git log`
2. Check Netlify **Deploys** tab
3. If no new deploy appeared, click **Trigger deploy**
4. Wait 2-3 minutes for build to complete

---

## 📝 Deployment Checklist

Before deploying, verify:

- [ ] All code is committed to GitHub
- [ ] `npm run build` works locally
- [ ] No console errors in browser (F12)
- [ ] `.gitignore` excludes `node_modules/` and `dist/`
- [ ] `package.json` has all dependencies
- [ ] Backend API is running and accessible
- [ ] CORS is enabled on backend

---

## 🎯 After Deployment

### 1. Test Your Site

- [ ] Visit your Netlify URL
- [ ] Click through all tabs
- [ ] Check if data loads from API
- [ ] Test on mobile browser

### 2. Set Up Custom Domain (Optional)

- [ ] Add custom domain in Netlify
- [ ] Update DNS records
- [ ] Wait for propagation
- [ ] Test custom domain works

### 3. Configure API for Production

- [ ] Update `VITE_API_URL` environment variable
- [ ] Point to production API server
- [ ] Test API calls work
- [ ] Verify data displays correctly

### 4. Set Up Monitoring

- [ ] Enable Netlify Analytics
- [ ] Monitor site performance
- [ ] Set up alerts (optional)

---

## 🚀 Future Deployments

After initial setup, deploying is simple:

```bash
# 1. Make changes to your code
# 2. Commit and push
git add .
git commit -m "Update: [description]"
git push origin main

# 3. Netlify automatically deploys
# 4. Check status in Netlify dashboard
# Done! Your changes are live
```

---

## 📚 Useful Resources

- **Netlify Docs:** https://docs.netlify.com
- **GitHub Docs:** https://docs.github.com
- **Vite Deployment:** https://vitejs.dev/guide/static-deploy.html#netlify
- **Netlify CLI:** https://cli.netlify.com/

---

## 💡 Pro Tips

1. **Preview Deploys:** Netlify creates preview URLs for pull requests
2. **Instant Rollback:** Click any previous deployment to revert instantly
3. **Split Testing:** Test multiple versions with Netlify's split testing
4. **Analytics:** Monitor visitor stats and performance
5. **Functions:** Add serverless functions for backend logic

---

## 🎉 You're Done!

Your 52-Week PM Tracker web app is now deployed to Netlify with automatic updates from GitHub!

**Summary:**
- ✅ Code on GitHub
- ✅ Auto-deploys to Netlify
- ✅ HTTPS enabled
- ✅ Custom domain ready
- ✅ Monitoring available

**Next steps:**
1. Share your Netlify URL with others
2. Monitor deployments in Netlify dashboard
3. Make updates and push to GitHub
4. Watch them auto-deploy!

---

## ❓ Questions?

- Check Netlify documentation: https://docs.netlify.com
- Check GitHub documentation: https://docs.github.com
- Contact Netlify support: https://support.netlify.com

Happy deploying! 🚀
