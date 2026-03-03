# GitHub → Netlify Deployment - Quick Reference Card

## 🎯 The 6-Step Process

```
Step 1: Create GitHub Repo
         ↓
Step 2: Push Code to GitHub
         ↓
Step 3: Connect GitHub to Netlify
         ↓
Step 4: Configure Environment Variables
         ↓
Step 5: Deploy (Automatic!)
         ↓
Step 6: Set Custom Domain (Optional)
```

---

## 📋 Commands You'll Need

### Step 1-2: Push to GitHub

```bash
# Navigate to project
cd /home/ubuntu/52-Week-PM-Tracker-Web

# Configure git (first time only)
git config user.email "your-email@example.com"
git config user.name "Your Name"

# Initialize and push
git init
git remote add origin https://github.com/YOUR_USERNAME/52-week-pm-tracker-web.git
git add .
git commit -m "Initial commit: 52-Week PM Tracker Web"
git branch -M main
git push -u origin main
```

### Future Updates

```bash
# After making changes
git add .
git commit -m "Update: describe your changes"
git push origin main
# Netlify automatically deploys!
```

---

## 🔗 URLs You'll Need

| Step | URL | What to Do |
|------|-----|-----------|
| 1 | https://github.com/new | Create GitHub repository |
| 2 | https://github.com/YOUR_USERNAME/repo | Verify code uploaded |
| 3 | https://app.netlify.com | Sign in to Netlify |
| 4 | https://app.netlify.com/sites/YOUR_SITE/settings | Add environment variables |
| 5 | https://app.netlify.com/sites/YOUR_SITE/deploys | Monitor deployments |

---

## ⚙️ Netlify Configuration

### Build Settings (Auto-detected)
```
Build command:    npm run build
Publish directory: dist
Branch to deploy:  main
```

### Environment Variables (Add manually)
```
Key:   VITE_API_URL
Value: https://your-api-domain.com/api
```

---

## ✅ Checklist

### Before Pushing to GitHub
- [ ] `npm run build` works locally
- [ ] No console errors (F12)
- [ ] All files committed
- [ ] `.gitignore` has `node_modules/` and `dist/`

### After Connecting to Netlify
- [ ] Build succeeds (check Deploy log)
- [ ] Site loads at Netlify URL
- [ ] API environment variable is set
- [ ] Data loads from API

### After First Deployment
- [ ] Test all features
- [ ] Check mobile responsiveness
- [ ] Verify API connection
- [ ] Set custom domain (optional)

---

## 🚀 Deployment Flow

```
┌─────────────────────────────────────────────────────┐
│ 1. Create GitHub Repo (5 min)                       │
│    → Go to github.com/new                           │
│    → Fill in details                                │
│    → Copy repo URL                                  │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│ 2. Push Code to GitHub (5 min)                      │
│    → git remote add origin [URL]                    │
│    → git add .                                      │
│    → git commit -m "Initial commit"                 │
│    → git push -u origin main                        │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│ 3. Connect to Netlify (5 min)                       │
│    → Go to netlify.com                              │
│    → Click "Add new site"                           │
│    → Select GitHub                                  │
│    → Choose your repository                         │
│    → Click "Deploy site"                            │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│ 4. Add Environment Variables (2 min)                │
│    → Go to Site settings → Build & deploy           │
│    → Add VITE_API_URL                               │
│    → Trigger new deploy                             │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│ 5. Your Site is LIVE! 🎉                            │
│    → Visit your Netlify URL                         │
│    → Test all features                              │
│    → Share with others                              │
└─────────────────────────────────────────────────────┘
```

---

## 📊 What Happens After You Push

```
You Push to GitHub
        ↓
GitHub notifies Netlify
        ↓
Netlify clones your repo
        ↓
Netlify runs: npm install
        ↓
Netlify runs: npm run build
        ↓
Netlify deploys dist/ folder
        ↓
Your site updates automatically ✅
```

---

## 🔄 Continuous Deployment

Once set up, deploying is automatic:

```bash
# Edit your code
# Save changes
# Commit and push
git add .
git commit -m "Update: [description]"
git push origin main

# That's it! Netlify automatically:
# 1. Detects the push
# 2. Builds your app
# 3. Deploys the new version
# 4. Your site updates instantly
```

---

## 🆘 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Build fails | Check Deploy log in Netlify |
| Blank page | Verify VITE_API_URL environment variable |
| Data not loading | Check API is running and CORS enabled |
| Site not updating | Click "Trigger deploy" in Netlify |
| Can't push to GitHub | Check git config: `git config --list` |

---

## 📞 Support

- **Netlify Docs:** https://docs.netlify.com
- **GitHub Docs:** https://docs.github.com
- **Netlify Support:** https://support.netlify.com

---

## 🎯 Key Points to Remember

1. **GitHub is your code storage** - Push all changes here
2. **Netlify is your hosting** - Automatically builds and deploys
3. **Automatic updates** - Every push to GitHub triggers a new deploy
4. **Environment variables** - Set API URL in Netlify dashboard
5. **HTTPS is free** - Netlify provides automatic SSL certificates

---

## ✨ You're Ready!

Follow the steps above and your app will be live on Netlify with automatic deployments from GitHub.

**Time to deploy: ~20 minutes** ⏱️

**Happy deploying! 🚀**
