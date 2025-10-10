# Product Requirements Document - The Alcove Portfolio

## Project Overview
The Alcove is a modern personal portfolio website featuring advanced animations, interactive design elements, and a fully functional contact system. The site showcases projects, personal information, and provides visitor engagement through a contact form with database storage and email notifications.

## Technology Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Express.js + TypeScript
- **UI Framework**: shadcn/ui + Tailwind CSS
- **Animations**: Framer Motion
- **Database**: PostgreSQL (via Drizzle ORM)
- **Email**: SendGrid
- **State Management**: TanStack Query (React Query)
- **Forms**: React Hook Form + Zod validation

---

## File Structure & Purpose

### Root Configuration Files

#### `package.json`
- **Purpose**: Node.js project configuration
- **Contains**: Dependencies, scripts, project metadata
- **Key Scripts**: `dev` (runs full-stack development server)

#### `package-lock.json`
- **Purpose**: Lock file for exact dependency versions
- **Contains**: Dependency tree with specific versions for reproducible builds

#### `tsconfig.json`
- **Purpose**: TypeScript compiler configuration
- **Contains**: Compilation options, module resolution settings, path aliases

#### `vite.config.ts`
- **Purpose**: Vite bundler configuration for frontend
- **Contains**: Build settings, plugins (@vitejs/plugin-react), path aliases, development server config

#### `tailwind.config.ts`
- **Purpose**: Tailwind CSS configuration
- **Contains**: Theme customization, color palette, plugins, dark mode settings

#### `postcss.config.js`
- **Purpose**: PostCSS configuration for CSS processing
- **Contains**: Tailwind CSS and Autoprefixer plugin setup

#### `drizzle.config.ts`
- **Purpose**: Drizzle ORM configuration
- **Contains**: Database connection settings, schema location, migration settings

#### `components.json`
- **Purpose**: shadcn/ui component configuration
- **Contains**: Component library settings, style preferences, path aliases

#### `README.md`
- **Purpose**: Project documentation
- **Contains**: Setup instructions, project description, usage guidelines

#### `replit.md`
- **Purpose**: Project memory and preferences
- **Contains**: Architecture overview, user preferences, system architecture, external dependencies

---

### Client Directory (`client/`)

#### `client/index.html`
- **Purpose**: HTML entry point for the application
- **Contains**: Root div, script tag for main.tsx, meta tags, title

#### `client/src/main.tsx`
- **Purpose**: Frontend application entry point
- **Contains**: React root rendering, global providers setup

#### `client/src/App.tsx`
- **Purpose**: Main application component with routing
- **Contains**: Route definitions using wouter, page layout structure

#### `client/src/index.css`
- **Purpose**: Global styles and CSS variables
- **Contains**: Tailwind directives, custom CSS properties, theme colors, font imports

---

### Client Pages (`client/src/pages/`)

#### `home.tsx`
- **Purpose**: Main landing page
- **Contains**: 
  - Navigation bar with smooth scrolling
  - Hero section integration
  - Underwater transition animation
  - Projects section
  - About section
  - Contact section
  - Footer with social links (GitHub, LinkedIn, Email)

#### `admin.tsx`
- **Purpose**: Admin dashboard for viewing contact form submissions
- **Contains**:
  - Contact message display table
  - Real-time data fetching with TanStack Query
  - Message details (name, email, message, timestamp)

#### `not-found.tsx`
- **Purpose**: 404 error page
- **Contains**: Error message, navigation back to home

---

### Client Components (`client/src/components/`)

#### `hero-section.tsx`
- **Purpose**: Animated hero section at top of page
- **Contains**:
  - "The Alcove" branding with green glow effect
  - Floating geometric shapes and particles
  - Dumbledore quote words animation (left side)
  - Boy silhouette SVG (right side)
  - Personal name and description
  - Gibran Khalil Gibran quote box
  - Framer Motion animations

#### `underwater-transition.tsx`
- **Purpose**: Animated transition section between hero and projects
- **Contains**:
  - Underwater-themed visual effects
  - Literary/book-themed animations
  - Smooth scroll transitions
  - Framer Motion scroll-based animations

#### `projects-section.tsx`
- **Purpose**: Display portfolio projects
- **Contains**:
  - Project cards with descriptions
  - Technology stack badges
  - Project links and details
  - Grid layout for project showcase

#### `about-section.tsx`
- **Purpose**: Personal introduction and photo slideshow
- **Contains**:
  - Professional resume bullet points
  - Technical skills showcase (React/TypeScript, Express.js, SendGrid)
  - Personal photo carousel/slideshow
  - Biography text

#### `contact-section.tsx`
- **Purpose**: Contact form for visitor messages
- **Contains**:
  - Form with name, email, message fields
  - Form validation with Zod schema
  - React Hook Form integration
  - Mutation handling for API submissions
  - Toast notifications for success/error states
  - Contrasting boxy design with gradient borders

#### `silhouette-svg.tsx`
- **Purpose**: Boy silhouette SVG component
- **Contains**: Scalable vector graphic of boy silhouette used in hero section

---

### UI Components (`client/src/components/ui/`)
All files in this directory are shadcn/ui components providing reusable, accessible UI primitives:

- **accordion.tsx**: Expandable/collapsible sections
- **alert-dialog.tsx**: Modal confirmation dialogs
- **alert.tsx**: Alert/notification messages
- **aspect-ratio.tsx**: Container for maintaining aspect ratios
- **avatar.tsx**: User avatar display
- **badge.tsx**: Small status/label indicators
- **breadcrumb.tsx**: Navigation breadcrumb trail
- **button.tsx**: Interactive button component
- **calendar.tsx**: Date picker calendar
- **card.tsx**: Container card component
- **carousel.tsx**: Image/content carousel slider
- **chart.tsx**: Data visualization charts
- **checkbox.tsx**: Checkbox input
- **collapsible.tsx**: Collapsible content sections
- **command.tsx**: Command palette/search interface
- **context-menu.tsx**: Right-click context menu
- **dialog.tsx**: Modal dialog windows
- **drawer.tsx**: Sliding drawer panel
- **dropdown-menu.tsx**: Dropdown menu component
- **form.tsx**: Form wrapper with validation
- **hover-card.tsx**: Content shown on hover
- **input-otp.tsx**: OTP/PIN input field
- **input.tsx**: Text input field
- **label.tsx**: Form label component
- **menubar.tsx**: Application menu bar
- **navigation-menu.tsx**: Site navigation menu
- **pagination.tsx**: Page navigation controls
- **popover.tsx**: Popover content overlay
- **progress.tsx**: Progress bar indicator
- **radio-group.tsx**: Radio button group
- **resizable.tsx**: Resizable panels
- **scroll-area.tsx**: Custom scrollable area
- **select.tsx**: Dropdown select input
- **separator.tsx**: Visual divider line
- **sheet.tsx**: Slide-in sheet panel
- **sidebar.tsx**: Application sidebar
- **skeleton.tsx**: Loading skeleton placeholder
- **slider.tsx**: Range slider input
- **switch.tsx**: Toggle switch
- **table.tsx**: Data table component
- **tabs.tsx**: Tabbed interface
- **textarea.tsx**: Multi-line text input
- **toast.tsx**: Toast notification
- **toaster.tsx**: Toast notification container
- **toggle-group.tsx**: Toggle button group
- **toggle.tsx**: Toggle button
- **tooltip.tsx**: Hover tooltip

---

### Client Hooks (`client/src/hooks/`)

#### `use-mobile.tsx`
- **Purpose**: Detect mobile device viewport
- **Contains**: Custom hook for responsive design logic

#### `use-toast.ts`
- **Purpose**: Toast notification management
- **Contains**: Hook for showing/hiding toast messages with state management

---

### Client Libraries (`client/src/lib/`)

#### `queryClient.ts`
- **Purpose**: TanStack Query client configuration
- **Contains**:
  - Query client setup
  - Default query options
  - API request helper function
  - Cache invalidation utilities

#### `utils.ts`
- **Purpose**: Utility functions
- **Contains**: Helper functions like `cn()` for className merging

---

### Server Directory (`server/`)

#### `index.ts`
- **Purpose**: Express server entry point
- **Contains**:
  - Express app initialization
  - Middleware setup
  - Port configuration (5000)
  - Server startup logic

#### `routes.ts`
- **Purpose**: API route definitions
- **Contains**:
  - `/api/contact` - POST endpoint for contact form submissions
  - `/api/contact-messages` - GET endpoint for retrieving all messages
  - Request validation with Zod schemas
  - Error handling

#### `storage.ts`
- **Purpose**: Data storage abstraction layer
- **Contains**:
  - `IStorage` interface defining CRUD operations
  - `MemStorage` class implementing in-memory storage
  - Contact message storage methods
  - Type-safe storage operations using shared schemas

#### `sendgrid.ts`
- **Purpose**: Email notification service
- **Contains**:
  - SendGrid API integration
  - Email template configuration
  - Contact form notification sender
  - Error handling for email failures

#### `vite.ts`
- **Purpose**: Vite development server integration
- **Contains**:
  - Vite middleware for Express
  - Frontend asset serving in development
  - Hot module replacement (HMR) configuration

---

### Shared Directory (`shared/`)

#### `schema.ts`
- **Purpose**: Shared type definitions and validation schemas
- **Contains**:
  - Drizzle ORM table definitions (contactMessages)
  - Zod validation schemas (insertContactMessageSchema)
  - TypeScript types for frontend/backend consistency
  - Insert and Select types for type safety

---

### Assets Directory (`attached_assets/`)

#### Image Files
- **Purpose**: Personal photos and design assets
- **Contains**:
  - Personal photos for about section slideshow
  - Boy silhouette images for hero section
  - Design mockups and screenshots
  - Various image formats (.jpeg, .png, .jpg)

**Key Files**:
- `image_boy_*.png` - Boy silhouette images used in hero
- `*.jpeg` - Personal photos for slideshow
- `Screenshot_*.jpg` - Design reference images

---

## Data Flow

### Contact Form Submission Flow
1. User fills out contact form in `contact-section.tsx`
2. Form validates data using Zod schema from `shared/schema.ts`
3. React Hook Form submits validated data
4. TanStack Query mutation sends POST request to `/api/contact`
5. Server validates request in `routes.ts`
6. Storage layer (`storage.ts`) persists message
7. SendGrid service (`sendgrid.ts`) sends email notification
8. Response sent back to frontend
9. Toast notification shows success/error

### Admin Dashboard Flow
1. Admin navigates to `/admin` route
2. `admin.tsx` page loads
3. TanStack Query fetches from `/api/contact-messages`
4. Server retrieves all messages from storage
5. Messages displayed in table format

---

## Key Features

### 1. Hero Section
- Animated "The Alcove" title with green glow
- Floating geometric shapes and particles
- Dumbledore quote words animation
- Boy silhouette graphic
- Personal introduction
- Gibran Khalil Gibran quote

### 2. Underwater Transition
- Smooth scroll-based animations
- Literary/book themed visuals
- Connects hero to content sections

### 3. Projects Section
- Portfolio project showcase
- Technology stack display
- Project links and descriptions

### 4. About Section
- Professional resume bullet points
- Technical skills highlight
- Personal photo slideshow
- Biography

### 5. Contact System
- Form validation
- Database storage (PostgreSQL)
- Email notifications (SendGrid)
- Admin dashboard
- Toast notifications

### 6. Footer
- GitHub link: https://github.com/Lolli-AK
- LinkedIn link: https://www.linkedin.com/in/aamuktha-kottapalli/
- Email: aamuktha1k@gmail.com

---

## Environment Variables

### Required Secrets
- `SENDGRID_API_KEY` - SendGrid API key for email notifications
- `DATABASE_URL` - PostgreSQL connection string (optional, using in-memory storage)

---

## Development Workflow

### Starting the Application
```bash
npm run dev
```
- Starts Express server on port 5000
- Starts Vite development server
- Enables hot module replacement
- Serves frontend and backend on same port

### Build Process
1. TypeScript compilation
2. Vite bundling for frontend
3. esbuild for backend
4. Asset optimization
5. Production build output

---

## Future Enhancements
- Database migration from in-memory to PostgreSQL
- User authentication for admin dashboard
- Project filtering and search
- Dark mode toggle
- Blog section integration
- Analytics integration
- Performance optimization
