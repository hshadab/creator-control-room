# Midnight Terminal - Design System

## Overview
Midnight Terminal is a dark-themed dashboard application inspired by terminal/command-line interfaces with a cyberpunk aesthetic. The design focuses on functionality, accessibility, and a polished user experience with mock authentication for easy access.

## Color Palette

### Primary Colors
- **Background**: `hsl(220, 15%, 6%)` - Deep dark blue-gray
- **Foreground**: `hsl(120, 100%, 90%)` - Terminal green text
- **Primary**: `hsl(120, 100%, 50%)` - Bright terminal green
- **Card**: `hsl(220, 15%, 8%)` - Slightly lighter background for cards

### Status Colors
- **Success**: `hsl(120, 100%, 50%)` - Green for success states
- **Warning**: `hsl(45, 95%, 55%)` - Amber for warnings
- **Error**: `hsl(0, 85%, 60%)` - Red for errors
- **Info**: `hsl(190, 100%, 50%)` - Cyan for informational states

### Terminal Accent Colors
- **Terminal Green**: `hsl(120, 100%, 50%)` - Classic terminal green
- **Terminal Cyan**: `hsl(190, 100%, 50%)` - System messages
- **Terminal Amber**: `hsl(45, 95%, 55%)` - API/external events
- **Terminal Red**: `hsl(0, 85%, 60%)` - Error states

## Typography

### Font Family
- **Primary**: JetBrains Mono - Modern monospace font designed for developers
- **Fallbacks**: Fira Code, Monaco, Consolas, monospace

### Font Weights
- Regular (400) - Body text
- Medium (500) - Headings and emphasis
- Semibold (600) - Important UI elements
- Bold (700) - Primary headings

## Visual Effects

### Shadows
- **Terminal Glow**: `0 0 20px hsl(120 100% 50% / 0.3)` - Subtle green glow for primary elements
- **Card Shadow**: `0 4px 20px hsl(220 15% 3% / 0.3)` - Depth for cards and modals
- **Text Shadow**: `0 0 10px hsl(120 100% 50% / 0.5)` - Terminal text glow effect

### Animations
- **Pulse Effects**: Status indicators with breathing animation
- **Fade Transitions**: Smooth 300ms fade-in for content
- **Slide Animations**: 200ms slide-down for error messages
- **Hover States**: 200ms transform and color transitions

## Component Styling

### Buttons
- **Default**: Primary green with terminal glow
- **Terminal**: Outlined style with green border and hover fill
- **Ghost**: Transparent with subtle hover background
- **Success/Warning/Error**: Semantic color variants

### Cards
- **Terminal Card**: Dark background with subtle gradient and glow border
- **Backdrop Blur**: Header uses backdrop blur for depth
- **Border**: Subtle border using design system colors

### Forms
- **Input Fields**: Dark background with green focus ring
- **Validation**: Animated error messages with status indicators
- **Labels**: Clear hierarchy with icons for context

### Status Indicators
- **Online**: Pulsing green dot with glow effect
- **Warning**: Pulsing amber dot
- **Error**: Pulsing red dot
- **Inactive**: Muted gray dot without animation

## Layout Principles

### Grid System
- **Container**: Centered with responsive padding
- **Cards**: Responsive grid using CSS Grid
- **Spacing**: Consistent 4px/8px/16px/24px scale

### Navigation
- **Tabs**: Horizontal navigation with keyboard support
- **Command Palette**: Modal overlay with fuzzy search
- **Keyboard Shortcuts**: Comprehensive keyboard navigation

### Accessibility
- **Focus Indicators**: Visible focus rings using primary color
- **Contrast**: WCAG AA compliant contrast ratios
- **Keyboard Navigation**: Full keyboard support for all interactions
- **Screen Readers**: Proper ARIA labels and semantic HTML

## Responsive Design

### Breakpoints
- **Mobile**: < 768px - Stacked layout, simplified navigation
- **Tablet**: 768px - 1024px - Two-column grid where appropriate
- **Desktop**: > 1024px - Full three-column layout

### Mobile Considerations
- Touch-friendly target sizes (44px minimum)
- Optimized command palette for mobile screens
- Collapsible sections for better mobile experience

## Interactive States

### Hover Effects
- Subtle scale transforms (1.05x)
- Color transitions for buttons and links
- Glow effects for primary actions

### Active States
- Pressed button states with reduced glow
- Active tab indicators with underline
- Selected command palette items

### Loading States
- Subtle animations for form submissions
- Skeleton loading for data-heavy components
- Progress indicators for long operations

## Icon Usage

### Icon Library
- Lucide React for consistent iconography
- 16px/20px/24px sizes for different contexts
- Semantic colors matching the design system

### Icon Placement
- Leading icons for navigation items
- Status icons for system information
- Action icons for buttons and interactive elements

## Theming Philosophy

The Midnight Terminal design system prioritizes:
1. **Functionality over decoration** - Every visual element serves a purpose
2. **Consistency** - Systematic approach to colors, spacing, and typography
3. **Accessibility** - Ensuring the interface is usable by everyone
4. **Performance** - Lightweight animations and efficient rendering
5. **Extensibility** - Design tokens allow for easy customization and themes