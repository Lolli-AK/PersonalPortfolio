# Portfolio Website

## Overview

This is a modern portfolio website built with React and Express.js, featuring a creative underwater-themed design with smooth animations and a contact form. The application showcases projects, personal information, and provides a way for visitors to get in touch through a contact form. The site uses Framer Motion for animations and shadcn/ui components for a polished user interface.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript running on Vite for fast development and hot module replacement
- **UI Components**: shadcn/ui component library built on Radix UI primitives for accessible, customizable components
- **Styling**: Tailwind CSS with custom CSS variables for theming and responsive design
- **Animations**: Framer Motion for smooth page transitions, scroll-based animations, and interactive elements
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Forms**: React Hook Form with Zod validation for type-safe form handling

### Backend Architecture
- **Server**: Express.js with TypeScript providing REST API endpoints
- **Database Layer**: Drizzle ORM configured for PostgreSQL with type-safe schema definitions
- **Storage**: Currently using in-memory storage (MemStorage) with interface for easy database integration
- **Validation**: Zod schemas shared between frontend and backend for consistent data validation
- **Development**: Custom Vite middleware integration for seamless full-stack development

### Design System
- **Theme**: Custom color palette with CSS variables supporting light/dark mode
- **Typography**: Inter for body text, Playfair Display for headings, JetBrains Mono for code
- **Components**: Modular component architecture with reusable UI primitives
- **Responsive**: Mobile-first design with progressive enhancement for larger screens

### Contact System
- **Form Handling**: Validated contact form with real-time field validation
- **Data Flow**: Form submissions processed through API endpoints with proper error handling
- **Storage**: Contact messages stored with timestamps and unique IDs
- **User Feedback**: Toast notifications for form submission status

### Development Environment
- **Build System**: Vite for frontend bundling, esbuild for backend compilation
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared modules
- **Path Aliases**: Configured import paths for clean module resolution
- **Hot Reload**: Development server with automatic reload for both client and server changes

## External Dependencies

### Core Framework Dependencies
- **@vitejs/plugin-react**: React plugin for Vite build system
- **express**: Web application framework for Node.js
- **react** and **react-dom**: Core React libraries for UI rendering

### Database and ORM
- **drizzle-orm**: Type-safe ORM for database operations
- **drizzle-kit**: CLI tools for database migrations and schema management
- **@neondatabase/serverless**: Serverless PostgreSQL client for Neon database

### UI and Styling
- **@radix-ui/react-***: Comprehensive set of accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant styling utility
- **framer-motion**: Production-ready motion library for React animations

### Form Management and Validation
- **react-hook-form**: Performant forms library with minimal re-renders
- **@hookform/resolvers**: Validation resolvers for React Hook Form
- **zod**: TypeScript-first schema validation library
- **drizzle-zod**: Integration between Drizzle ORM and Zod validation

### Development and Build Tools
- **typescript**: Static type checking for JavaScript
- **vite**: Fast build tool and development server
- **esbuild**: Fast JavaScript bundler for production builds
- **tsx**: TypeScript execution engine for Node.js

### Routing and State Management
- **wouter**: Minimalist routing library for React
- **@tanstack/react-query**: Data fetching and caching library
- **nanoid**: URL-safe unique ID generator

### Additional Utilities
- **date-fns**: Modern date utility library
- **clsx** and **tailwind-merge**: Utility libraries for conditional CSS classes
- **cmdk**: Command palette component for search interfaces
- **embla-carousel-react**: Carousel/slider component library