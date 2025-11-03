# Jonathan Pardo Portfolio - Vue 3

Personal portfolio migrated to Vue 3 as a static application.

## Features

- **Vue 3** with Composition API
- **Vue Router** for SPA navigation
- **Bootstrap 4** for styling
- **Marked** for Markdown rendering
- **Dark Mode** support with system preference detection
- **Fully responsive** design
- Completely static application (no backend)

## Available Pages

- `/` - Home page
- `/biografia` - Personal biography
- `/portafolio` - Complete portfolio with experience, skills, certifications, and tech stack
- `/contacto` - Contact form (uses mailto)
- `/cv` - Complete CV/resume page (ATS-friendly)
- `/proyectos` - Projects management (read-only view of projects with MD and GitHub links)

## Installation

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Management

The `/proyectos` page displays projects stored in `src/data/projects.json`.

### Manual Project Modification

Edit directly `src/data/projects.json`:

```json
[
  {
    "id": 1,
    "title": "My Project",
    "description": "Short description",
    "markdown": "# My Project\n\nDetailed description...",
    "githubUrl": "https://github.com/user/repo",
    "image": "https://example.com/image.jpg",
    "date": "2024-01-01"
  }
]
```

Then recompile the application with `npm run build`.

### Data Persistence

Projects are loaded from `src/data/projects.json`. For a more permanent solution, edit this file directly and rebuild the application.

## Project Structure

```
frontend-vue/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Navbar.vue      # Main navigation
│   │   ├── Footer.vue      # Footer
│   │   ├── TextRotate.vue  # Text rotation effect
│   │   └── DarkModeToggle.vue  # Dark mode toggle
│   ├── views/              # Main pages
│   │   ├── Home.vue        # Home page
│   │   ├── Bio.vue         # Biography
│   │   ├── Portfolio.vue   # Complete portfolio
│   │   ├── Contact.vue     # Contact
│   │   ├── CV.vue          # Resume/CV
│   │   └── ProjectsManager.vue  # Projects display
│   ├── router/
│   │   └── index.js        # Route configuration
│   ├── data/               # Static JSON data
│   │   ├── projects.json   # Projects list
│   │   ├── skills.json     # Skills
│   │   ├── certifications.json  # Certifications
│   │   ├── experience.json # Work experience
│   │   ├── cv.json         # CV data
│   │   └── bio.json        # Biography data
│   ├── composables/
│   │   ├── useProjects.js  # Projects management logic
│   │   └── useDarkMode.js  # Dark mode management
│   ├── assets/
│   │   └── css/            # Migrated CSS styles
│   │       ├── variables.css  # CSS variables for theming
│   │       ├── responsive.css  # Responsive styles
│   │       └── ...         # Other CSS files
│   ├── App.vue
│   └── main.js
├── public/                 # Public static files
├── package.json
└── vite.config.js
```

## Customization

### Modify Projects

Edit `src/data/projects.json` directly and rebuild.

### Modify Other Data

- **Skills**: Edit `src/data/skills.json`
- **Certifications**: Edit `src/data/certifications.json`
- **Experience**: Edit `src/data/experience.json`
- **CV**: Edit `src/data/cv.json`
- **Bio**: Edit `src/data/bio.json`

## Technical Features

### Dark Mode

The application includes a complete dark mode implementation:
- Automatic detection of system preference
- Manual toggle in the navbar
- Persistence in LocalStorage
- Smooth transitions between themes
- CSS variables for easy theme customization

### TextRotate Component

The `TextRotate.vue` component maintains the original text rotation effect displaying:
- "Tester"
- "Desarrollador web junior"
- "Analista de base de datos"
- "Jonathan Andres Pardo"

### Contact Form

The contact form uses `mailto:` to send emails. The user's default email client will open with the form data.

### Markdown in Projects

Projects can use full Markdown:
- Headers (#, ##, ###)
- Lists (-, *)
- Code (`, ```)
- Links, images, etc.
- Full dark mode support

### Responsive Design

The application is fully responsive with:
- Mobile-first approach
- Tablet optimizations
- Desktop enhancements
- Breakpoints: 575px, 767px, 991px

## Deployment

This application is completely static and can be deployed to:

- **Netlify**: Drag and drop the `dist` folder after `npm run build`
- **Vercel**: Connect the repository and configure the build
- **GitHub Pages**: Configure the build and deploy from the `dist` folder
- **Any static hosting**: Upload files from `dist/`

### Production Build

```bash
npm run build
```

Compiled files will be in the `dist/` folder.

## Development

### Hot Reload

During development, changes are automatically reflected thanks to Vite.

### Routes

All routes are configured in `src/router/index.js`. To add new routes:

1. Create the component in `src/views/`
2. Import and add the route in `src/router/index.js`

### CORS Configuration

CORS is configured in `vite.config.js` to allow requests from any origin during development and preview.

## Notes

- Original CSS styles are maintained in `src/assets/css/`
- Bootstrap 4 is loaded from CDN
- Font Awesome is loaded from CDN for icons
- Projects are loaded from JSON files
- Dark mode variables are defined in `src/assets/css/variables.css`
- Responsive styles are in `src/assets/css/responsive.css`

## Support

For any issues or questions, check the documentation of:
- [Vue 3](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Marked](https://marked.js.org/)
