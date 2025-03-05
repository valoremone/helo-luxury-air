# HELO Luxury Air

## Premium Helicopter Booking Platform

![HELO Luxury Air](./public/logo192.png)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Setup & Installation](#setup--installation)
  - [Local Development](#local-development)
  - [Docker Deployment](#docker-deployment)
- [Security Measures](#security-measures)
- [API Integration](#api-integration)
- [User Roles & Permissions](#user-roles--permissions)
- [Application Structure](#application-structure)
- [CSS & Styling](#css--styling)
- [Performance Optimizations](#performance-optimizations)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Overview

HELO Luxury Air is a premium helicopter booking platform designed for luxury air travel. The application provides a sophisticated interface for users to browse, book, and manage helicopter flights for both leisure and business purposes. With a focus on high-end user experience and security, HELO Luxury Air caters to discerning clients seeking exclusive air transportation solutions.

## Features

### User Authentication & Authorization
- Secure login and registration system
- JWT-based authentication
- Role-based access control (member, admin, guest)
- Membership tier system (standard, premium, elite)
- Remember me functionality
- Token management with automatic expiration

### Booking Management
- Intuitive booking interface
- Real-time availability checking
- Flight scheduling and management
- Booking history and status tracking
- Cancellation and modification options

### Fleet Management
- Comprehensive helicopter fleet information
- Detailed specifications for each aircraft
- Availability calendars
- Maintenance scheduling and tracking

### User Dashboard
- Personalized user dashboards
- Booking history and upcoming flights
- Account preferences management
- Membership tier information and benefits
- Payment method management

### Admin Portal
- Comprehensive administration dashboard
- User management
- Fleet management
- Booking oversight and management
- Analytics and reporting tools

### Analytics
- Business intelligence dashboards
- Booking trends and patterns
- Revenue tracking and forecasting
- User engagement metrics
- Fleet utilization statistics

## Tech Stack

### Frontend
- **React 18**: Modern UI library for building interactive user interfaces
- **TypeScript**: Type-safe JavaScript superset for improved code quality
- **Redux Toolkit**: State management with Redux Toolkit for efficient state handling
- **React Router 6**: Client-side routing for single-page application navigation
- **React Hook Form**: Form validation and submission handling
- **Axios**: HTTP client for API requests
- **Tailwind CSS**: Utility-first CSS framework for styling

### Backend Integration
- RESTful API integration with backend services
- JWT authentication flow
- Secure API request handling with interceptors

### Build & Development
- **Create React App**: Bootstrapping and build tooling
- **Webpack**: Module bundling
- **Babel**: JavaScript transpiling
- **PostCSS**: CSS processing with plugins
- **Autoprefixer**: Automatic CSS vendor prefixing
- **cssnano**: CSS minification

### Deployment & Infrastructure
- **Docker**: Containerization for consistent deployment
- **Nginx**: High-performance web server and reverse proxy
- **Docker Compose**: Multi-container application orchestration
- **Alpine Linux**: Lightweight container OS base

## Architecture

The application follows a modern frontend architecture:

- **Component-Based Structure**: Modular UI components for reusability
- **Feature-Focused Organization**: Code organized by business domains
- **Flux Architecture**: Unidirectional data flow with Redux
- **Type Safety**: TypeScript for static type checking
- **Service Layer**: Abstracted API communication through service modules
- **Container/Presentation Pattern**: Separation of logic and presentation components

### Data Flow
1. User interacts with the UI
2. Action creators dispatch actions
3. Reducers update state based on actions
4. Components re-render with new state
5. API requests handled through service layer with interceptors

## Setup & Installation

### Local Development

#### Prerequisites
- Node.js (v20+)
- npm (v9+) or yarn (v1.22+)

#### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-organization/helo-luxury-air.git
   cd helo-luxury-air
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following:
   ```
   REACT_APP_API_URL=https://api.heloluxuryair.com
   ```

4. Build the Tailwind CSS:
   ```bash
   npm run build:css
   ```

5. Start the development server:
   ```bash
   npm start
   ```

6. The application will be available at `http://localhost:3000`

### Docker Deployment

#### Prerequisites
- Docker (v20+)
- Docker Compose (v2+)

#### Deployment Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-organization/helo-luxury-air.git
   cd helo-luxury-air
   ```

2. Build and start the Docker container:
   ```bash
   docker-compose up -d
   ```

3. The application will be available at `http://localhost:8080`

#### Docker Configuration
The application is containerized using a multi-stage build process:
1. **Build Stage**: Uses Node.js Alpine image to build the React application
2. **Production Stage**: Uses Nginx Alpine image to serve the static files

The Dockerfile includes:
- Security hardening measures
- Non-root user configuration
- Health checks
- Optimized caching
- Security headers configuration

## Security Measures

### Frontend Security
- **Content Security Policy (CSP)**: Restricts content sources to prevent XSS attacks
- **XSS Protection Headers**: Browser-level protection against cross-site scripting
- **Frame Protection**: Prevents clickjacking attacks
- **CORS Configuration**: Restricts cross-origin requests
- **Referrer Policy**: Controls information sent in HTTP referrer header
- **Permissions Policy**: Restricts browser feature usage
- **Secure Authentication**: Token-based authentication with proper storage
- **Input Sanitization**: Form input validation and sanitization
- **HTTPS Enforcement**: Secure communication channel

### Docker Security
- **Non-Root User**: Container runs as non-privileged user
- **Minimal Base Image**: Alpine Linux for reduced attack surface
- **Security Packages**: Only necessary security packages installed
- **File Permissions**: Proper file ownership and permissions
- **Server Configuration**: Hardened nginx configuration
- **Sensitive Data Removal**: Source maps and debug information removed
- **Health Checks**: Container health monitoring

### Nginx Security Configuration
- **Server Tokens Off**: Hides server version information
- **Security Headers**: Comprehensive set of security headers
- **Caching Policies**: Appropriate cache controls for different content types
- **Gzip Configuration**: Secure compression settings
- **Access Restrictions**: Hidden files access prevention

## API Integration

### API Communication
- **Base URL**: Configured through environment variables
- **Request Interceptors**: Automatically attach authentication tokens
- **Response Interceptors**: Handle common error scenarios (401, etc.)
- **Token Management**: Automatic token refresh and expiration handling
- **Error Handling**: Consistent error handling and user feedback

### Service Layer
The application implements a comprehensive service layer divided by domain:
- `userService.ts`: User authentication and profile management
- `bookingService.ts`: Booking-related operations
- `fleetService.ts`: Fleet and aircraft management
- `analyticsService.ts`: Analytics and reporting data
- `api.ts`: Core API configuration and interceptors

## User Roles & Permissions

### User Roles
1. **Guest**: Unauthenticated users with limited access
2. **Member**: Authenticated users with booking capabilities
3. **Admin**: Administrative users with full system access

### Membership Tiers
1. **Standard**: Basic membership level
2. **Premium**: Enhanced benefits and privileges
3. **Elite**: Highest tier with exclusive access and services

### Permission Model
- Role-based access controls determine feature accessibility
- Membership tiers grant access to different service levels
- UI elements and routes are conditionally rendered based on permissions
- API requests include authorization context

## Application Structure

```
helo-luxury-air/
├── public/              # Static assets
│   ├── index.html       # HTML entry point
│   ├── styles.css       # Compiled Tailwind CSS
│   └── custom.css       # Custom CSS overrides
├── src/
│   ├── assets/          # Application assets (images, fonts)
│   ├── components/      # Reusable UI components
│   ├── features/        # Feature modules
│   │   ├── admin/       # Admin-specific features
│   │   ├── member/      # Member-specific features
│   │   └── shared/      # Shared features (auth, etc.)
│   ├── hooks/           # Custom React hooks
│   ├── layouts/         # Page layout components
│   ├── pages/           # Page components
│   ├── services/        # API service modules
│   │   ├── admin/       # Admin-specific services
│   │   ├── member/      # Member-specific services
│   │   ├── shared/      # Shared services
│   │   ├── api.ts       # API configuration
│   │   ├── userService.ts  # User/auth services
│   │   ├── bookingService.ts # Booking services
│   │   ├── fleetService.ts   # Fleet services
│   │   └── analyticsService.ts # Analytics services
│   ├── store/           # Redux store configuration
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   ├── App.tsx          # Main application component
│   ├── index.tsx        # Application entry point
│   └── index.css        # Base styles and Tailwind directives
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose configuration
├── nginx.conf           # Nginx configuration
├── package.json         # Project dependencies and scripts
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── tsconfig.json        # TypeScript configuration
```

## CSS & Styling

### Styling Approach
The application uses a hybrid approach to styling:
1. **Tailwind CSS**: Utility-first CSS for rapid UI development
2. **Custom CSS**: Additional custom styles for complex components
3. **Component Scoped Styles**: Styles specific to individual components
4. **Responsive Design**: Mobile-first approach with responsive breakpoints

### Theme Configuration
The design system is implemented through Tailwind's theme extension, featuring:
- **Custom Colors**: Brand color palette
- **Typography**: Font families (Inter and Playfair Display)
- **Spacing**: Consistent spacing scale
- **Shadows**: Custom box shadows for depth
- **Borders**: Border radius and width definitions

### Build Process
CSS processing pipeline:
1. Tailwind directives processed
2. PostCSS plugins applied (autoprefixer, etc.)
3. CSS minified for production
4. Styles served with appropriate caching headers

## Performance Optimizations

### Frontend Optimizations
- **Code Splitting**: Dynamic imports for route-based code splitting
- **Tree Shaking**: Unused code elimination
- **Lazy Loading**: Components and routes loaded on demand
- **Memo & Callbacks**: Optimization of React renders
- **Virtualization**: Efficient rendering for large lists

### Server Optimizations
- **Gzip Compression**: Reduces response size
- **Cache Headers**: Optimized caching policies for different asset types
- **Immutable Cache**: Long-term caching for static assets
- **No-Cache Policy**: Prevents caching of dynamic content

### Network Optimizations
- **CDN Compatibility**: Designed to work with content delivery networks
- **Reduced Payload Size**: Minified assets for production
- **Font Loading Strategy**: Web font loading optimization
- **HTTP/2 Ready**: Optimized for multiplexed connections

## Testing

### Test Suite
The application includes comprehensive testing:
- **Unit Tests**: Testing individual functions and components
- **Integration Tests**: Testing interactions between components
- **End-to-End Tests**: Testing complete user flows

### Testing Tools
- **Jest**: JavaScript testing framework
- **React Testing Library**: Component testing
- **Mock Service Worker**: API mocking

### Running Tests
```bash
# Run all tests
npm test

# Run with coverage report
npm test -- --coverage
```

## Contributing

### Development Workflow
1. Create a feature branch from `develop`
2. Implement changes with tests
3. Submit a pull request
4. Code review process
5. Merge to `develop` after approval
6. Periodic releases to `main`

### Code Standards
- TypeScript strict mode
- ESLint for code quality
- Prettier for code formatting
- Husky for pre-commit hooks

### Documentation
- JSDoc comments for functions and components
- README files for major features
- Storybook for component documentation (if applicable)

## License

This project is licensed under the ISC License - see the LICENSE file for details.

---

© 2025 HELO Luxury Air. All rights reserved.
