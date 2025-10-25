# AkuNeko - Cerámica Gres Website

A beautiful, modern website for a ceramics/gres artisan built with Vue 3, TypeScript, Vite, Tailwind CSS, and Flowbite components.

## 🎨 Design

The website features a warm, earthy color palette inspired by ceramics:
- **Clay Warm**: #D4A574
- **Clay Dark**: #8B6F47  
- **Terracotta**: #C9704F
- **Earth Brown**: #5D4E37
- **Cream**: #F5F1E8
- **White Clay**: #FDFAF5

## 📱 Features

- ✅ Single Page Application (SPA) with smooth scrolling
- ✅ Fully responsive and mobile-friendly
- ✅ Modern navigation with Flowbite navbar
- ✅ 6 main sections:
  - **Home**: Hero section with introduction
  - **Quién soy**: About the artist and creative process
  - **Tienda del Taller**: Shop with product cards
  - **Clases**: Classes and courses information
  - **Exposición y Prensa**: Exhibitions and press appearances
  - **Trabajos más locos**: Experimental and unique projects
- ✅ Footer with contact information and social media
- ✅ Smooth animations and hover effects
- ✅ Placeholder images (ready to be replaced with real photos)

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Project Structure

```
src/
├── components/
│   ├── Navbar.vue          # Main navigation bar
│   ├── Footer.vue          # Footer with contact info
│   └── sections/
│       ├── HomeSection.vue
│       ├── QuienSoySection.vue
│       ├── TiendaSection.vue
│       ├── ClasesSection.vue
│       ├── ExposicionSection.vue
│       └── TrabajosSection.vue
├── App.vue                  # Main app component
├── main.ts                  # App entry point
└── style.css               # Global styles with Tailwind
```

## 🎯 Customization

### Replace Placeholder Images
Look for `.image-placeholder` divs in the section components and replace them with your actual images:

```vue
<!-- Replace this: -->
<div class="image-placeholder">
  <span>🏺 Image</span>
</div>

<!-- With this: -->
<img src="/path/to/your/image.jpg" alt="Description" class="rounded-lg" />
```

### Update Content
Edit the content in each section component:
- Prices in `TiendaSection.vue`
- Course details in `ClasesSection.vue`
- Exhibition info in `ExposicionSection.vue`
- Projects in `TrabajosSection.vue`

### Update Contact Info
Edit footer information in `src/components/Footer.vue`:
- Email
- Phone number
- Location
- Social media links

## 🌐 Deployment to Netlify

### Option 1: Connect to Git (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://www.netlify.com/)
3. Click "Add new site" → "Import an existing project"
4. Connect your repository
5. Build settings (should auto-detect):
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Option 2: Manual Deploy

```bash
# Build the project
npm run build

# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

The built files will be in the `dist` folder, ready for deployment to any static hosting service.

## 🛠️ Technologies Used

- **Vue 3**: Progressive JavaScript framework
- **TypeScript**: Type-safe development
- **Vite**: Next-generation frontend tooling
- **Tailwind CSS**: Utility-first CSS framework
- **Flowbite**: Component library built on Tailwind CSS
- **PostCSS**: CSS transformations

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 💬 Support

For questions or issues, please open an issue on the repository or contact the developer.

---

Made with ❤️ for AkuNeko Ceramics
