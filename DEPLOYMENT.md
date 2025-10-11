# Deployment Guide - Render

This guide will help you deploy The Alcove portfolio to Render.

## Prerequisites

- GitHub account
- Render account (sign up at https://render.com)
- Your code pushed to a GitHub repository
- SendGrid API key (for contact form emails)

---

## Deployment Options

### Option 1: Deploy with Blueprint (Automatic - Recommended)

This uses the `render.yaml` file for automatic configuration.

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Go to Render Dashboard**
   - Visit https://dashboard.render.com/
   - Click "New +" → "Blueprint"

3. **Connect your GitHub repository**
   - Select your portfolio repository
   - Render will automatically detect the `render.yaml` file

4. **Configure environment variables**
   - Set `SENDGRID_API_KEY` to your SendGrid API key
   - PORT will be automatically set by Render

5. **Deploy**
   - Click "Apply" to start deployment
   - Wait for build to complete (3-5 minutes)
   - Your app will be live at `https://the-alcove-portfolio.onrender.com`

---

### Option 2: Manual Deployment

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Create new Web Service on Render**
   - Go to https://dashboard.render.com/
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

3. **Configure the service**
   - **Name**: `the-alcove-portfolio`
   - **Region**: Oregon (US West) or closest to you
   - **Branch**: `main`
   - **Runtime**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free (or paid for better performance)

4. **Add Environment Variables**
   Go to "Environment" tab and add:
   - `NODE_ENV` = `production`
   - `SENDGRID_API_KEY` = `your-sendgrid-api-key`
   - `PORT` (Render sets this automatically)

5. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment (3-5 minutes)
   - Access your live site

---

## Environment Variables

### Required
- `SENDGRID_API_KEY` - Your SendGrid API key for email notifications
  - Get it from: https://app.sendgrid.com/settings/api_keys
  - Make sure sender email is verified: aamuktha1k@gmail.com

### Auto-configured by Render
- `PORT` - Server port (automatically set by Render)
- `NODE_ENV` - Set to `production` in render.yaml

---

## Database Setup (Optional)

If you want to use PostgreSQL instead of in-memory storage:

1. **Create PostgreSQL database on Render**
   - Dashboard → "New +" → "PostgreSQL"
   - Choose free tier
   - Note the Internal Database URL

2. **Update environment variables**
   - Add `DATABASE_URL` with the PostgreSQL connection string

3. **Run migrations**
   - In your local terminal:
   ```bash
   npm run db:push
   ```

---

## Build Process

The deployment runs these steps automatically:

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Build frontend and backend**
   ```bash
   npm run build
   ```
   - Builds React frontend to `dist/public/`
   - Bundles Express backend to `dist/index.js`

3. **Start server**
   ```bash
   npm start
   ```
   - Runs `node dist/index.js`
   - Serves frontend from `dist/public/`
   - API available at `/api/*`

---

## Health Check

Render will ping your app at `/` to ensure it's running.
The health check is configured in `render.yaml`:
```yaml
healthCheckPath: /
```

---

## Post-Deployment

### Verify deployment
1. Visit your deployed URL
2. Test the contact form
3. Check admin dashboard at `/admin`
4. Verify email notifications work

### Custom Domain (Optional)
1. Go to your service settings on Render
2. Click "Custom Domains"
3. Add your domain and follow DNS instructions

### Update code
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```
Render will automatically redeploy!

---

## Troubleshooting

### Build fails
- Check build logs in Render dashboard
- Ensure all dependencies are in `package.json`
- Verify Node version compatibility

### App crashes
- Check runtime logs in Render dashboard
- Verify environment variables are set
- Ensure `dist/public` directory exists after build

### Email notifications don't work
- Verify SENDGRID_API_KEY is correct
- Ensure sender email (aamuktha1k@gmail.com) is verified in SendGrid
- Check Render logs for email errors

### Static files not loading
- Ensure `npm run build` completes successfully
- Check that `dist/public/` contains index.html and assets
- Verify vite.config.ts has correct outDir

---

## Cost Estimate

### Free tier includes:
- 750 hours/month runtime
- Automatic HTTPS
- GitHub auto-deploy
- 100GB bandwidth/month

### Limitations:
- Apps spin down after 15 min of inactivity
- First request after spin-down takes ~30 seconds
- 512MB RAM

### Paid tier ($7/month):
- Always-on
- Faster performance
- More RAM
- Better for production use

---

## Support

- Render Docs: https://render.com/docs
- Render Community: https://community.render.com
- GitHub Issues: Create issue in your repository
