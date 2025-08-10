# Aditya Birla Group Corporate Website

## Overview

This is a modern corporate website for Aditya Birla Group built with React and Express.js. The site presents the company's business portfolio, legacy, innovation initiatives, community impact, and career opportunities through an elegant, responsive interface. The application features a clean architecture with a React frontend styled using Tailwind CSS and shadcn/ui components, backed by an Express.js server with PostgreSQL database integration for contact form submissions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development patterns
- **Routing**: Wouter for lightweight client-side routing with a single-page application structure
- **Styling**: Tailwind CSS with custom Aditya Birla Group brand colors and typography, utilizing the Inter font family
- **Component System**: shadcn/ui components built on Radix UI primitives for accessibility and customization
- **State Management**: TanStack React Query for server state management and caching
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Server Framework**: Express.js with TypeScript for RESTful API endpoints
- **Database ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Storage Layer**: Modular storage interface with in-memory implementation for development and PostgreSQL for production
- **Request Handling**: JSON request parsing with comprehensive error handling and logging middleware
- **Development Mode**: Vite integration for hot module replacement during development

### Database Schema
- **Users Table**: Basic user management with UUID primary keys, username, and password fields
- **Contact Messages Table**: Stores form submissions with fields for personal information, business interests, and timestamps
- **Schema Validation**: Zod schemas for runtime type checking and API request validation

### Component Structure
- **Layout Components**: Navigation with scroll-based styling changes, footer with company links
- **Content Sections**: Hero carousel, business showcase, legacy presentation, innovation highlights, community impact, careers information
- **Interactive Elements**: Contact form with validation, smooth scrolling navigation, responsive mobile menu
- **UI Components**: Comprehensive design system including buttons, cards, forms, modals, and feedback components

### Development Workflow
- **Type Safety**: Shared TypeScript types between frontend and backend through the shared directory
- **Code Organization**: Clear separation between client, server, and shared code with path aliases for clean imports
- **Development Server**: Integrated development environment with Express serving Vite in middleware mode
- **Build Process**: Separate build steps for frontend (Vite) and backend (esbuild) with production-ready output

## External Dependencies

### Database Integration
- **Neon Database**: PostgreSQL serverless database provider for production data storage
- **Drizzle Kit**: Database migrations and schema management toolkit
- **Connection**: Environment-based DATABASE_URL configuration with connection pooling

### UI and Styling
- **Radix UI**: Comprehensive set of accessible, unstyled UI components as building blocks
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens matching Aditya Birla Group branding
- **Lucide React**: Modern icon library for consistent iconography throughout the application
- **Google Fonts**: Inter font family integration for professional typography

### Development Tools
- **Replit Integration**: Development environment optimization with cartographer plugin and error modal overlay
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer plugins
- **ESLint/Prettier**: Code formatting and linting for consistent code quality

### Runtime Dependencies
- **React Hook Form**: Form handling with validation and error management
- **Date-fns**: Date manipulation and formatting utilities
- **Class Variance Authority**: Utility for creating type-safe component variants
- **Wouter**: Lightweight routing solution for single-page application navigation