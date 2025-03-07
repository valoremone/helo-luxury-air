# HELO Luxury Air

A luxury air mobility application for private jet and helicopter charter services.

## Overview

HELO Luxury Air is a premium web application designed to provide an exceptional booking experience for luxury air travel. The application showcases the fleet, services, and booking options for private jets and helicopters.

## Features

- **Luxury Fleet Showcase**: Browse through our premium collection of private jets and helicopters
- **Booking System**: Easily book private air travel with a streamlined process
- **Testimonials**: Read about experiences from our distinguished clientele
- **Responsive Design**: Optimized for all devices from mobile to desktop

## Technology Stack

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS, Shadcn/UI
- **Containerization**: Docker
- **Deployment**: Docker Compose

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Docker and Docker Compose (for containerized development)

### Installation

#### Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd helo-luxury-air
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

#### Docker Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd helo-luxury-air
   ```

2. Make the Docker helper script executable:
   ```bash
   chmod +x docker.sh
   ```

3. Start the development environment:
   ```bash
   ./docker.sh dev
   ```

4. Install dependencies (if needed):
   ```bash
   ./docker.sh install
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Deployment

1. Build and start the production environment:
   ```bash
   ./docker.sh prod
   ```

2. The application will be available at [http://localhost:3000](http://localhost:3000).

## Docker Commands

The `docker.sh` script provides several helpful commands:

- `./docker.sh dev` - Start development environment
- `./docker.sh prod` - Build and start production environment
- `./docker.sh build:dev` - Build development image only
- `./docker.sh build:prod` - Build production image only
- `./docker.sh install` - Install dependencies inside the container
- `./docker.sh down` - Stop and remove containers
- `./docker.sh clean` - Remove all Docker containers, images, and volumes
- `./docker.sh help` - Show help message

## Project Structure

```
helo-luxury-air/
├── app/                  # Next.js app directory
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page component
├── src/
│   ├── components/       # React components
│   │   ├── ui/           # Shadcn/UI components
│   │   ├── Header.tsx    # Site header
│   │   ├── Footer.tsx    # Site footer
│   │   ├── HeroSection.tsx
│   │   ├── FleetShowcase.tsx
│   │   ├── BookingSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── HomePage.tsx  # Main page component
│   ├── lib/              # Utility functions
│   └── index.css         # Global styles
├── public/               # Static assets
├── docker.sh             # Docker helper script
├── docker-compose.yml    # Docker Compose configuration
├── Dockerfile            # Production Docker configuration
├── Dockerfile.dev        # Development Docker configuration
├── .dockerignore         # Docker ignore file
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Project dependencies and scripts
```

## License

Proprietary - All Rights Reserved

## Contact

For inquiries, please contact [info@heloluxuryair.com](mailto:info@heloluxuryair.com) 