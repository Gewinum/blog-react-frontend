# Blog Platform

A modern, component-based blog platform built with React and TypeScript providing a clean, interactive user experience.

## Features

- Interactive blog posts with comments and likes
- User profiles with avatars
- Responsive design for multiple devices
- Component-driven architecture

## Running the Application

### Development Mode

Start the development server with:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

### Production Build

```bash
npm run build
npm run start
```

## Architecture

The application follows a **Composite Presentational Pattern** architecture where UI elements are broken down into reusable, isolated components. The main component types include:

- **Container Components**: Handle data fetching and state management
- **Presentational Components**: Focus purely on rendering UI based on props
- **Composite Components**: Combine smaller components into larger UI sections

## Routing

The application uses React Router for navigation between different views:
- Blog listing page
- Individual blog post

## Technologies

- React
- TypeScript
- React Router
- Vite