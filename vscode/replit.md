# Gerenciador de Tarefas (Task Manager)

## Overview

This is a React-based todo list application built with Vite as the build tool. The project is a frontend-only task management application designed for simplicity and ease of use. The application uses Portuguese (Brazilian) as its primary language, as indicated by the HTML lang attribute and project naming.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

- *Framework*: React 18 with functional components
- *Build Tool*: Vite 5 for fast development and optimized production builds
- *Styling*: Custom CSS with CSS custom properties (variables) for theming
- *Icons*: Lucide React for icon components

### Design Patterns

- *Component-Based Architecture*: React components for modular UI development
- *CSS Variables*: Theme-based styling using CSS custom properties defined in :root
- *Material Design Inspired*: Color palette follows Material Design principles (primary: #6200ee, secondary: #03dac6)

### Project Structure


/
├── index.html          # Entry HTML file
├── src/
│   ├── main.jsx        # React application entry point
│   └── styles/
│       └── global.css  # Global styles and CSS variables
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies and scripts


### Development Server

- Configured to run on port 5000
- Host set to 0.0.0.0 for external access
- All hosts allowed for Replit compatibility

## External Dependencies

### Core Dependencies

| Package | Purpose |
|---------|---------|
| react | UI component library |
| react-dom | React DOM rendering |
| lucide-react | Icon component library |

### Development Dependencies

| Package | Purpose |
|---------|---------|
| vite | Build tool and dev server |
| @vitejs/plugin-react | React support for Vite |
| @types/react | TypeScript definitions (optional typing support) |
| @types/react-dom | TypeScript definitions (optional typing support) |

### Notes

- The main.py file exists but is empty - this appears to be a frontend-only application
- No backend, database, or external API integrations are currently configured
- State management is likely handled through React's built-in useState/useContext (no external state library installed)
- No routing library is installed - this is likely a single-page application