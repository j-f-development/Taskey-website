# Taskey - Vercel Deployment Guide

## 🚀 Quick Deployment Steps

### 1. Go to Vercel
Visit: https://vercel.com/

### 2. Sign In with GitHub
- Click "Sign Up" or "Log In"
- Choose "Continue with GitHub"
- Authorize Vercel to access your GitHub repositories

### 3. Import Your Repository
1. Click "Add New..." → "Project"
2. Find and select: **fynnoman/taskey**
3. Click "Import"

### 4. Configure Your Project

#### Build Settings (Auto-detected, but verify):
- **Framework Preset**: Next.js
- **Root Directory**: `./`
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

#### ⚠️ **IMPORTANT: Add Environment Variables**

Click on "Environment Variables" and add:

**For Email Functionality (Required):**
```
Name: SMTP_USER
Value: fynnschulzonline@gmail.com

Name: SMTP_PASSWORD
Value: [Your Gmail App Password - 16 characters]
```

**How to get Gmail App Password:**
1. Go to: https://myaccount.google.com/security
2. Enable 2-Step Verification
3. Go to: https://myaccount.google.com/apppasswords
4. Create App Password for "Mail"
5. Copy the 16-character password (without spaces)

### 5. Deploy!
- Click "Deploy"
- Wait 2-3 minutes for the build to complete
- Your site will be live at: `https://taskey-xxx.vercel.app`

## 📝 Post-Deployment Steps

### 1. Test Your Website
- ✅ Check all pages load correctly
- ✅ Test "Demo buchen" form (should send emails)
- ✅ Test Cookie banner
- ✅ Test mobile responsiveness

### 2. Add Custom Domain (Optional)
1. Go to your project in Vercel
2. Click "Settings" → "Domains"
3. Add your domain (e.g., taskey.de)
4. Follow DNS configuration instructions

### 3. Environment Variables Management
To update environment variables later:
1. Go to Vercel Dashboard → Your Project
2. Click "Settings" → "Environment Variables"
3. Add/Edit variables
4. Redeploy for changes to take effect

## 🔧 Troubleshooting

### Build Fails
- Check the build logs in Vercel
- Make sure all dependencies are in `package.json`
- Verify TypeScript errors are fixed

### Emails Not Sending
1. Check Environment Variables are set correctly
2. Verify Gmail App Password (not regular password)
3. Check Vercel Function Logs for errors
4. Test locally first with `npm run dev`

### 500 Error on Demo Form
- Environment variables might be missing
- Check Vercel Function Logs
- Verify SMTP credentials are correct

## 📊 Vercel Features You Get

✅ **Automatic Deployments**: Every push to `main` branch auto-deploys
✅ **Preview Deployments**: Every PR gets its own preview URL
✅ **SSL Certificate**: Automatic HTTPS
✅ **Global CDN**: Fast worldwide
✅ **Analytics**: Built-in (optional upgrade)
✅ **100GB Bandwidth**: Free tier

## 🎯 Your Deployment URLs

After deployment, you'll get:
- **Production**: `https://taskey.vercel.app` (or your custom domain)
- **Every commit**: `https://taskey-git-[branch]-[user].vercel.app`

## 📱 Testing Checklist

After deployment, test these features:

- [ ] Homepage loads correctly
- [ ] Cookie banner appears on first visit
- [ ] Cookie settings can be customized
- [ ] "Demo buchen" form works and sends email
- [ ] All navigation links work
- [ ] Features page displays correctly
- [ ] Pricing page loads
- [ ] About page shows company info
- [ ] Legal pages (Impressum, Datenschutz, AGB) display
- [ ] 600+ Branchen section with search works
- [ ] Mobile menu works on small screens
- [ ] Buttons are clickable and responsive
- [ ] Forms validate input correctly

## 🔒 Security Notes

✅ `.env.local` is in `.gitignore` (secrets not in repo)
✅ Environment variables are encrypted in Vercel
✅ Use Gmail App Password (not your main password)
✅ Consider using Resend for production email (see EMAIL_SETUP.md)

## 📈 Next Steps After Deployment

1. **Monitor**: Check Vercel Analytics dashboard
2. **SEO**: Submit sitemap to Google Search Console
3. **Performance**: Run Lighthouse audit
4. **Domain**: Add custom domain for professional look
5. **Backup**: Keep GitHub repo updated

## 🆘 Need Help?

- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support
- Check build logs in Vercel dashboard
- Review EMAIL_SETUP.md for email troubleshooting

---

**Current Status**: ✅ Code pushed to GitHub - Ready for Vercel deployment!
**Repository**: https://github.com/fynnoman/taskey
**Next Action**: Go to https://vercel.com and import your project!
