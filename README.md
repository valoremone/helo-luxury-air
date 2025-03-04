# HELO Luxury Air Mobility

A premium helicopter booking platform for luxury air travel.

## Overview

HELO Luxury Air Mobility is a web application that provides a seamless booking experience for luxury helicopter services. The application consists of two main components:

1. **Member-facing App**: Allows members to book helicopter services, view upcoming trips, manage their profile, and access membership benefits.
2. **Admin Dashboard**: Enables administrators to manage bookings, users, fleet, and view analytics.

## Features

### Member App

- **Authentication**: Secure login/registration with role-based access control
- **Booking Workflow**: Intuitive booking process with location selection, scheduling, and add-on services
- **User Dashboard**: View upcoming and past trips
- **Profile Management**: Update personal information, payment methods, and saved locations
- **Real-time Updates**: Booking confirmations and flight status notifications

### Admin Dashboard

- **Booking Management**: Calendar view of scheduled flights with approval workflow
- **User Management**: Member directory with search and filter capabilities
- **Fleet Management**: Helicopter and vehicle inventory with maintenance scheduling
- **Analytics**: Booking metrics, revenue visualization, and route analysis

## Tech Stack

- **Frontend**: React with TypeScript
- **State Management**: Redux Toolkit
- **Styling**: Tailwind CSS
- **Authentication**: JWT-based auth
- **API Communication**: Axios
- **Forms**: React Hook Form

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/helo-luxury-air.git
   cd helo-luxury-air
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

## Usage

### Member Access

- Navigate to `/login` to sign in as a member
- Use the following demo credentials:
  - Email: john.doe@example.com
  - Password: password123

### Admin Access

- Navigate to `/login` and sign in with admin credentials:
  - Email: admin@heloluxuryair.com
  - Password: admin123

## Project Structure

```
src/
├── components/       # Reusable UI components
├── features/         # Feature-based modules with Redux slices
├── layouts/          # Page layout components
├── pages/            # Page components
├── services/         # API services
├── store/            # Redux store configuration
├── utils/            # Utility functions
└── hooks/            # Custom React hooks
```

## Design

- **Dark Mode**: Luxury aesthetic with dark interface
- **Color Scheme**: Black primary (#000000), Accent gold (#C4B087)
- **Responsive Design**: Supports desktop and tablet views

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/)
