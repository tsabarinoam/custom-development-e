# Blank Application Template

A foundational React application template with organized structure and essential system components, ready for custom development.

**Experience Qualities**:
1. **Clean** - Minimal, uncluttered interface that provides clear foundation
2. **Organized** - Well-structured codebase with logical component hierarchy  
3. **Ready** - Prepared with essential building blocks for rapid development

**Complexity Level**: Micro Tool (single-purpose)
- Serves as a starting template with organized structure for building custom applications

## Essential Features

**Organized Component Structure**
- Functionality: Provides logical folder organization for components, pages, and utilities
- Purpose: Enables scalable development with clear separation of concerns
- Trigger: Developer begins building features
- Progression: Create component → Place in appropriate folder → Import and use → Scale naturally
- Success criteria: Clear, maintainable folder structure that grows with application needs

**System Components Foundation**
- Functionality: Pre-built layout, navigation, and utility components
- Purpose: Provides consistent foundation for application development
- Trigger: Application initialization
- Progression: App loads → System components provide structure → Custom content fills spaces
- Success criteria: Reusable system components that work across different use cases

## Edge Case Handling
- **Missing Content**: Graceful handling when components have no content to display
- **Component Errors**: Error boundaries prevent application crashes
- **Navigation States**: Proper handling of active/inactive navigation states

## Design Direction
Clean, professional interface that serves as a neutral foundation - minimalist approach that doesn't impose strong design opinions while maintaining visual polish.

## Color Selection
Analogous (adjacent colors on color wheel) - Using subtle grays and blues to create a professional, neutral foundation that can be easily customized.

- **Primary Color**: Professional blue (oklch(0.5 0.15 240)) - Communicates trust and professionalism
- **Secondary Colors**: Light grays (oklch(0.95 0.02 240)) for backgrounds and subtle accents
- **Accent Color**: Bright blue (oklch(0.6 0.2 240)) for interactive elements and CTAs
- **Foreground/Background Pairings**: 
  - Background (Light Gray oklch(0.98 0.01 240)): Dark text (oklch(0.2 0.02 240)) - Ratio 16.1:1 ✓
  - Card (White oklch(1 0 0)): Dark text (oklch(0.2 0.02 240)) - Ratio 17.9:1 ✓
  - Primary (Blue oklch(0.5 0.15 240)): White text (oklch(1 0 0)) - Ratio 8.2:1 ✓

## Font Selection
Clean, readable sans-serif typography that maintains professionalism while being highly legible across all devices.

- **Typographic Hierarchy**: 
  - H1 (Page Titles): Inter Bold/32px/tight letter spacing
  - H2 (Section Headers): Inter Semibold/24px/normal spacing
  - H3 (Component Titles): Inter Medium/20px/normal spacing
  - Body Text: Inter Regular/16px/relaxed line height
  - Small Text: Inter Regular/14px/normal spacing

## Animations
Subtle, functional animations that enhance usability without drawing attention - smooth transitions for state changes and navigation.

- **Purposeful Meaning**: Motion reinforces the professional, organized nature of the template
- **Hierarchy of Movement**: Focus on navigation transitions and state changes, minimal decorative animation

## Component Selection
- **Components**: Layout (header/sidebar), Card containers, Button variations, basic Form components
- **Customizations**: Custom page wrapper component, navigation component with active states
- **States**: Standard hover/focus/active states for all interactive elements
- **Icon Selection**: Minimal icon usage focusing on navigation and common actions (menu, close, external link)
- **Spacing**: Consistent 4px base unit using Tailwind's spacing scale (p-4, m-6, gap-8)
- **Mobile**: Mobile-first design with collapsible navigation and responsive grid layouts