# Midnight Terminal Dashboard

A sleek, dark-themed dashboard application with terminal aesthetics, built with React, TypeScript, and Tailwind CSS.

## Features

### 🎯 Core Functionality
- **Authentication**: Mock sign-in/sign-out system (ready for backend integration)
- **Dashboard Tabs**: Three main sections - Overview, Settings, Activity
- **Command Palette**: Quick navigation via keyboard shortcuts (⌘K)
- **Settings Form**: Validated form with error handling and real-time feedback
- **Activity Timeline**: Real-time system events with status indicators
- **Help System**: Keyboard shortcut overlay and contextual help

### ⌨️ Keyboard Shortcuts
- `⌘/Ctrl + K` - Open command palette
- `1, 2, 3` - Navigate to Overview, Settings, Activity tabs
- `?` - Show help overlay with all shortcuts
- `⌘/Ctrl + Q` - Sign out
- `Escape` - Close modals and overlays
- `Arrow Keys` - Navigate command palette
- `Enter` - Execute selected command
- `Tab` - Navigate form fields

### 🎨 Design Features
- **Terminal Theme**: Dark cyberpunk aesthetic with terminal green accents
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Accessibility**: WCAG AA compliant with full keyboard navigation
- **Animations**: Smooth transitions and status pulse effects
- **Typography**: JetBrains Mono for authentic terminal feel

## Tech Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom design system
- **React Hook Form** - Performant form handling with validation
- **Zod** - Schema validation for forms
- **Lucide React** - Beautiful, consistent icons
- **Radix UI** - Accessible primitive components (via shadcn/ui)

## Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd midnight-terminal

# Install dependencies
npm install

# Start development server
npm run dev
```

### Demo Credentials
- **Username**: `admin`
- **Password**: `password`

## Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components (shadcn/ui)
│   ├── CommandPalette.tsx      # Command palette modal
│   ├── SettingsForm.tsx        # Settings form with validation
│   ├── ActivityTimeline.tsx    # Activity feed component
│   ├── HelpOverlay.tsx         # Keyboard shortcuts help
│   ├── LoginForm.tsx           # Authentication form
│   ├── MidnightDashboard.tsx   # Main dashboard container
│   └── button-variants.tsx     # Custom button variants
├── hooks/
│   └── use-toast.ts   # Toast notifications hook
├── pages/
│   ├── Index.tsx      # Main application entry
│   └── NotFound.tsx   # 404 page
├── lib/
│   └── utils.ts       # Shared utilities
├── index.css          # Design system and global styles
└── main.tsx          # React app entry point
```

## Architecture Decisions

### Design System
All styling is controlled through a comprehensive design system defined in:
- `src/index.css` - CSS custom properties and component classes
- `tailwind.config.ts` - Tailwind configuration extending the design system

Key principles:
- **Semantic tokens**: Colors, spacing, and typography use semantic naming
- **HSL color space**: All colors defined in HSL for easier manipulation
- **Component variants**: Styled variants for consistent component usage
- **No inline styles**: All styling goes through the design system

### State Management
- **Local component state** for UI interactions
- **React Hook Form** for form state and validation
- **Simple props drilling** for authentication state
- Ready for integration with state management libraries (Redux, Zustand) when needed

### Component Architecture
- **Functional components** with React hooks
- **TypeScript interfaces** for all component props
- **Compound components** for complex UI patterns
- **Accessibility-first** approach with proper ARIA labels

### Form Handling
- **React Hook Form** for performance and developer experience
- **Zod schemas** for runtime validation
- **Real-time validation** with animated error messages
- **Accessible forms** with proper labeling and error handling

## Customization

### Colors
Modify the color palette in `src/index.css`:
```css
:root {
  --primary: 120 100% 50%;        /* Terminal green */
  --background: 220 15% 6%;       /* Dark background */
  --terminal-cyan: 190 100% 50%;  /* Accent color */
  /* ... other color tokens */
}
```

### Typography
Update font configuration in `tailwind.config.ts`:
```typescript
fontFamily: {
  mono: ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'monospace'],
}
```

### Components
Create new component variants by extending the design system:
```typescript
// Add new button variant
const buttonVariants = cva("base-classes", {
  variants: {
    variant: {
      // ... existing variants
      custom: "your-custom-classes"
    }
  }
});
```

## Backend Integration

The app is designed for easy backend integration:

### Authentication
Replace mock authentication in `src/pages/Index.tsx` with real auth:
```typescript
const handleLogin = async (credentials) => {
  const response = await authAPI.login(credentials);
  // Handle response
};
```

### Data Fetching
Add API integration with tools like:
- **React Query** for server state management
- **Axios** or **fetch** for HTTP requests
- **Supabase** for full backend solution

### Real-time Updates
Integrate WebSocket or Server-Sent Events for:
- Live activity timeline updates
- Real-time system metrics
- Notification system

## Deployment

### Build for Production
```bash
npm run build
```

### Deployment Options
- **Vercel/Netlify** - For static deployment
- **Docker** - Containerized deployment
- **Traditional hosting** - Upload dist folder to web server

## Accessibility Features

- **Keyboard Navigation**: Full keyboard support for all interactions
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Focus Management**: Visible focus indicators and logical tab order
- **Color Contrast**: WCAG AA compliant contrast ratios
- **Reduced Motion**: Respects user's motion preferences

## Performance Considerations

- **Code Splitting**: Lazy loading for route-based code splitting
- **Bundle Size**: Tree-shaking and optimized imports
- **Animations**: CSS-based animations for 60fps performance
- **Image Optimization**: Responsive images with proper loading strategies

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

### Development Guidelines
- Follow TypeScript best practices
- Maintain design system consistency
- Add proper error handling
- Include keyboard shortcut support for new features
- Ensure mobile responsiveness
- Add appropriate ARIA labels for accessibility

## License

MIT License - see LICENSE file for details.

## Acknowledgments

- **shadcn/ui** - For the excellent component library
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the beautiful icon library
- **JetBrains Mono** - For the perfect monospace font
