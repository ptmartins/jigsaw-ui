# Jigsaw UI Storybook Documentation

This Storybook installation provides comprehensive documentation for all Jigsaw UI components, design tokens, and usage patterns.

## 📚 What's Included

### Design System Documentation
- **Design Tokens** - Neutral color palette, stacking levels (L1, L2, L3), and state colors
- **Component Library Overview** - Complete showcase of all available components
- **Quick Start Guide** - Get up and running with Jigsaw UI

### Component Documentation
Each component includes:
- **Interactive Controls** - Live property manipulation
- **Multiple Story Variants** - Different use cases and configurations  
- **API Documentation** - Complete property and event references
- **Usage Examples** - Real-world implementation patterns
- **Accessibility Testing** - Built-in a11y violation detection

### Components Documented

#### Layout & Structure
- **Stack** - Flexible layout component for arranging elements with consistent spacing
- **Card** - Container for structured content with thumbnail, title, and content
- **ListView** - List items with thumbnails, content, and action areas

#### Interactive Elements  
- **Button** - Versatile buttons with multiple types, sizes, and variants
- **Modal** - Dialog overlays for forms, confirmations, and content display

#### Display Components
- **Avatar** - User avatars with text labels or image thumbnails
- **Icon** - Material Design icons with customizable sizing
- **Chip** - Compact tags and labels for categorization
- **Progress** - Progress indicators for loading states and completion

## 🎨 Design System Features

### Stacking Levels (L1, L2, L3)
The design system uses three stacking levels to create visual hierarchy:
- **L1**: Primary background level (`--bg-color-l1`, `--color-l1`, `--border-l1`)
- **L2**: Content/card level (`--bg-color-l2`, `--color-l2`, `--border-l2`) 
- **L3**: Secondary background level (`--bg-color-l3`, `--color-l3`, `--border-l3`)

### Neutral Palette
Comprehensive 11-step neutral color system:
- `--white` (#ffffff) to `--black` (#000000)
- `--neutral-10` through `--neutral-90` for consistent gray scales
- Semantic color variables for states (primary, success, warning, danger)

### Theme Support
- **Light Theme** (default)
- **Neutral Theme** - Inverted L1/L2/L3 levels
- **Dark Theme** - Dark backgrounds with light text
- **Custom Theme** - Example branded theme (Premier League colors)

## 🛠 Development Features

### Accessibility Testing
- Built-in a11y addon for automatic accessibility violation detection
- All components tested for keyboard navigation and screen reader compatibility
- Color contrast validation and ARIA compliance

### Testing Integration  
- Vitest integration for component testing
- Playwright browser testing setup
- Coverage reporting with V8

### Interactive Controls
Every component story includes:
- **Controls Panel** - Manipulate props in real-time
- **Actions Panel** - Monitor component events
- **Docs Panel** - Auto-generated documentation
- **Accessibility Panel** - Test for a11y violations

## 🚀 Usage Instructions

### Running Storybook
```bash
# Start development server
npm run storybook

# Build static documentation
npm run build-storybook
```

### Exploring Components
1. **Browse by Category** - Use the sidebar to navigate component categories
2. **Try Interactive Controls** - Use the Controls panel to modify component properties
3. **View Multiple Stories** - Each component has multiple usage examples
4. **Check Accessibility** - Monitor the a11y panel for violations
5. **Copy Code Examples** - Use the code snippets in each story

### Component Integration
```javascript
// Import all components
import 'jigsaw-ui';

// Or import specific components  
import 'jigsaw-ui/dist/components/jg-button.js';
import 'jigsaw-ui/dist/components/jg-card.js';
```

```html
<!-- Use in HTML -->
<jg-button type="primary" size="lg">Click me!</jg-button>
<jg-avatar label="JD" size="md"></jg-avatar>
<jg-card title="Hello" content="World"></jg-card>
```

## 📖 Story Organization

### Overview Section
- **Component Library** - Complete showcase of all components working together
- **Quick Start Guide** - Installation and basic usage instructions

### Design System Section  
- **Design Tokens** - Color palettes, stacking levels, and state colors
- **Neutral Palette** - Complete neutral color documentation
- **Stacking Levels** - L1, L2, L3 visual hierarchy examples  
- **State Colors** - Primary, success, warning, danger color variants

### Components Section
Each component has its own section with:
- **Default** - Basic usage with interactive controls
- **Variants** - Different configurations and types
- **Advanced** - Complex usage patterns and custom slots
- **Interactive** - Event handling and dynamic behavior

## 🔧 Customization

### CSS Custom Properties
All components use CSS custom properties for theming:
```css
:root {
  --primary: #your-brand-color;
  --bg-color-l1: #your-background;
  /* Override any design tokens */
}
```

### Component Extension
Components can be extended or wrapped:
```javascript
import { JGButton } from 'jigsaw-ui';

class CustomButton extends JGButton {
  // Add custom functionality
}
```

## 📱 Browser Support

- Chrome 71+
- Firefox 63+ 
- Safari 12.1+
- Edge 79+

## 🤝 Contributing

To add new stories or improve documentation:

1. Create story files in `src/stories/`
2. Follow the existing patterns for Meta and Story definitions
3. Include comprehensive prop documentation
4. Add multiple usage examples
5. Test accessibility compliance

## 📄 License

MIT License - see LICENSE file for details.

---

**Built with ❤️ using Storybook 10.0.7 for Web Components**