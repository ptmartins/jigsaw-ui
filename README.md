<div align="center">
    <img src="./assets/logo.png" alt="Jigsaw UI Logo" width="200" height="auto">
</div>

  A modern, lightweight UI component library built with [Lit](https://lit.dev/). Jigsaw UI provides a collection of reusable web components that work seamlessly across different frameworks and vanilla JavaScript applications.

## Features

- ***Framework Agnostic*** - Works with React, Vue, Angular, or plain HTML/JavaScript
- ***Built with Lit*** - Leverages the power of Lit for efficient, declarative components
- ***Lightweight*** - Minimal bundle size with tree-shaking support
- ***Material Icons*** - Integrated Material Icons support
- ***Customizable*** - Easy to theme and customize for your design system

## Installation

```bash
npm install jigsaw-ui
```

Or with yarn:

```bash
yarn add jigsaw-ui
```

## Quick Start

### Import Components

```javascript
// Import all components
import 'jigsaw-ui';

// Or import specific components
import 'jigsaw-ui/dist/components/jg-button.js';
import 'jigsaw-ui/dist/components/jg-icon.js';
import 'jigsaw-ui/dist/components/jg-button-group.js';
```

### Use in HTML

```html
<!DOCTYPE html>
<html>
<head>
    <script type="module" src="node_modules/jigsaw-ui/dist/index.js"></script>
</head>
<body>
    <jg-button variant="primary" size="lg">Click me!</jg-button>
    <jg-icon name="home" size="24px"></jg-icon>
</body>
</html>
```

## Development

### Prerequisites

- Node.js 22+
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/ptmartins/jigsaw-ui.git
cd jigsaw-ui

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Project Structure

```
jigsaw-ui/
├── src/                         # Source files
│   ├── components/              # Component definitions
│   │   └── index.ts             # Component exports
│   ├── styles/                  # Styling system
│   │   ├── themes/              # Theme definitions
│   │   │   ├── custom.css       # Custom theme
│   │   │   ├── dark.css         # Dark theme
│   │   │   └── neutral.css      # Neutral theme
│   │   ├── tokens/              # Design tokens
│   │   │   ├── avatar.css       # Avatar tokens
│   │   │   ├── buttons.css      # Button tokens
│   │   │   ├── colors.css       # Color palette
│   │   │   └── layers.css       # Layer system
│   │   └── index.css            # Main styles entry
│   └── index.ts                 # Main library entry point
├── public/                      # Public demo assets
│   └── main.js                  # Demo application
├── assets/                      # Static assets
│   └── logo.png                 # Project logo
├── dist/                        # Built files (generated)
├── globals.css                  # Global demo styles
├── index.html                   # Demo HTML
├── package.json                 # Project configuration
├── tsconfig.json                # TypeScript configuration
├── vite.config.js               # Build configuration
├── vite.demo.config.js          # Demo build configuration
├── vercel.json                  # Deployment configuration
└── README.md                    # This file
```

## Browser Support

Jigsaw UI supports all modern browsers that support:
- ES2019
- Web Components
- CSS Custom Properties

| Browser | Version |
|---------|---------|
| Chrome  | 71+     |
| Firefox | 63+     |
| Safari  | 12.1+   |
| Edge    | 79+     |

## API Reference

(coming soon).

## Contributing

We welcome contributions!

### Development Guidelines

1. Follow TypeScript best practices
2. Write tests for new components
3. Update documentation for any API changes
4. Ensure accessibility compliance
5. Follow the existing code style

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built with [Lit](https://lit.dev/)
- Icons provided by [Material Icons](https://material.io/resources/icons/)
- Inspired by modern design systems

## Support

- Email: [pedro@pedromartins.com.pt]
- Issues: 
- Discussions:

---

Made with ❤️ by Pedro Martins