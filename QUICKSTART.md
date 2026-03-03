# Quick Start Guide - 52-Week PM Tracker Web

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

### Step 3: Open in Browser
Navigate to: **http://localhost:5173**

---

## 📋 What You'll See

### Home Tab
- Dashboard with current week statistics
- 5 key metrics (Completed, Total, Rate, Pending, Overdue)
- Quick action buttons

### Schedule Tab
- Week-based activity view
- Add, edit, and complete activities
- Navigate between weeks

### Completed Tab
- View all completed activities
- Export to CSV
- Statistics for this week/month

### Pending Tab
- Monitor pending activities
- Overdue alerts
- Quick completion actions

### Reports Tab
- Weekly and monthly statistics
- Performance charts
- Activity breakdown

### Info Tab
- About the application
- Contact information
- Support details

---

## 🔧 Configuration

### Environment Variables
Edit `.env.local`:
```env
VITE_API_URL=http://localhost:3000/api
```

### Backend Requirements
Ensure your backend API is running on:
- **URL:** http://localhost:3000
- **API Base:** /api

---

## 📦 Build for Production

```bash
# Build optimized version
npm run build

# Output: dist/ folder
# Upload dist/ to your web server
```

---

## 🆘 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use different port
npm run dev -- --port 3001
```

### API Connection Error
1. Check backend is running: `http://localhost:3000`
2. Verify VITE_API_URL in .env.local
3. Check CORS settings on backend

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules dist
npm install
npm run build
```

---

## 📚 Documentation

- **Full Setup:** See `README.md`
- **Deployment:** See `DEPLOYMENT.md`
- **Project Details:** See `PROJECT_SUMMARY.md`

---

## 🎯 Next Steps

1. ✅ Start the dev server
2. ✅ Test all features
3. ✅ Configure API connection
4. ✅ Build for production
5. ✅ Deploy to your server

---

**Happy Tracking! 🎉**
