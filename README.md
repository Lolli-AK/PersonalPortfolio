# The Alcove - Personal Portfolio

A modern, animated personal portfolio website featuring underwater-themed transitions, interactive design elements, and a fully functional contact system.

![Portfolio Preview](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)
![React](https://img.shields.io/badge/React-18.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- 🎨 **Advanced Animations** - Framer Motion powered smooth transitions and interactions
- 🌊 **Underwater Theme** - Literary-inspired underwater transition effects
- 📱 **Fully Responsive** - Mobile-first design with progressive enhancement
- 💼 **Project Showcase** - Professional portfolio with tech stack highlights
- 📧 **Contact System** - Functional contact form with email notifications
- 🎯 **Admin Dashboard** - View and manage contact submissions
- 🚀 **Modern Stack** - React, TypeScript, Express, Tailwind CSS, shadcn/ui

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion
- **Routing**: Wouter
- **State Management**: TanStack Query (React Query)
- **Forms**: React Hook Form + Zod validation

### Backend
- **Server**: Express.js + TypeScript
- **Database**: PostgreSQL with Drizzle ORM (in-memory storage available)
- **Email**: SendGrid
- **Validation**: Zod schemas

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd the-alcove-portfolio

# Install dependencies
npm install

# Set up environment variables
# Create .env file and add:
# SENDGRID_API_KEY=your_sendgrid_api_key

# Start development server
npm run dev
```

Visit `http://localhost:5000` to see your portfolio!

## 📝 Available Scripts

- `npm run dev` - Start development server (frontend + backend)
- `npm run build` - Build for production
- `npm start` - Run production server
- `npm run check` - Type check with TypeScript
- `npm run db:push` - Push database schema changes

## 🌐 Deployment

**Ready to deploy?** See the [Deployment Guide](./DEPLOYMENT.md) for detailed instructions.

### Quick Deploy to Render

1. Push to GitHub
2. Connect to Render (uses `render.yaml`)
3. Add `SENDGRID_API_KEY` environment variable
4. Deploy!

Your portfolio will be live at `https://your-app.onrender.com`

## 📂 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── ui/       # shadcn/ui components
│   │   │   ├── hero-section.tsx
│   │   │   ├── underwater-transition.tsx
│   │   │   ├── projects-section.tsx
│   │   │   ├── about-section.tsx
│   │   │   └── contact-section.tsx
│   │   ├── pages/        # Route pages
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities
│   └── index.html        # HTML entry point
├── server/                # Backend Express application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Data storage layer
│   └── sendgrid.ts       # Email service
├── shared/               # Shared types and schemas
│   └── schema.ts         # Zod schemas & types
├── attached_assets/      # Images and assets
├── render.yaml           # Render deployment config
├── DEPLOYMENT.md         # Deployment guide
└── PRD.md               # Product requirements doc
```

## 🔐 Environment Variables

### Required
- `SENDGRID_API_KEY` - SendGrid API key for email notifications

### Optional
- `DATABASE_URL` - PostgreSQL connection string (uses in-memory storage if not set)
- `PORT` - Server port (default: 5001, Render auto-assigns)
- `NODE_ENV` - Environment (development/production)

## 📧 Contact Form

The contact form includes:
- Real-time validation
- Email notifications via SendGrid
- Database storage of submissions
- Admin dashboard at `/admin`
- Toast notifications for user feedback

**Note**: Make sure to verify your sender email (aamuktha1k@gmail.com) in SendGrid before emails will send.

## 🎨 Customization

### Update Personal Information

1. **Social Links** - Edit `client/src/pages/home.tsx` footer section
2. **Hero Content** - Modify `client/src/components/hero-section.tsx`
3. **Projects** - Update `client/src/components/projects-section.tsx`
4. **About** - Change `client/src/components/about-section.tsx`
5. **Colors** - Customize `client/src/index.css` CSS variables

### Add New Pages

1. Create component in `client/src/pages/`
2. Register route in `client/src/App.tsx`
3. Add navigation link in `client/src/pages/home.tsx`

## 🐛 Troubleshooting

### Build Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Development Server Not Starting
```bash
# Check port availability
lsof -ti:5000 | xargs kill -9
npm run dev
```

### Email Not Sending
- Verify `SENDGRID_API_KEY` is set
- Confirm sender email is verified in SendGrid dashboard
- Check server logs for error details

## 📄 License

MIT License - feel free to use this portfolio template for your own projects!

## 🤝 Contributing

This is a personal portfolio, but suggestions are welcome! Feel free to open an issue or submit a PR.

## 📬 Contact

- **Email**: aamuktha1k@gmail.com
- **LinkedIn**: [Aamuktha Kottapalli](https://www.linkedin.com/in/aamuktha-kottapalli/)
- **GitHub**: [@Lolli-AK](https://github.com/Lolli-AK)

---

Made with ❤️ using React, TypeScript, and Tailwind CSS
