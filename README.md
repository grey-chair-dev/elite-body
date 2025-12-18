# Elite Body Works Columbus

Premium auto body, collision repair, and custom paint specialist website for Columbus, Ohio. Features AI-powered quote assistance and seamless photo uploads.

## Features

- 🚗 Premium collision repair and auto body services
- 🎨 Custom paint and restoration services
- 📸 Photo upload for quote requests
- 🤖 AI-powered quote assistance using Google Gemini
- 📱 Responsive design with modern UI
- ⚡ Built with React, TypeScript, and Vite

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Google Gemini AI** - Quote assistance
- **Lucide React** - Icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- Google Gemini API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/grey-chair-dev/elite-body.git
   cd elite-body
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory:
   ```bash
   GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build locally

## Project Structure

```
elite-body/
├── components/       # Reusable React components
│   ├── Footer.tsx
│   └── Navbar.tsx
├── pages/           # Page components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Gallery.tsx
│   ├── Home.tsx
│   ├── Quote.tsx
│   ├── Reviews.tsx
│   └── Services.tsx
├── services/        # API and service integrations
│   └── geminiService.ts
├── App.tsx          # Main app component
├── index.tsx        # Entry point
└── vite.config.ts   # Vite configuration
```

## Environment Variables

- `GEMINI_API_KEY` - Required. Your Google Gemini API key for AI-powered quote assistance.

## Deployment

The project can be deployed to any static hosting service that supports Vite/React applications:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

Build the project first:
```bash
npm run build
```

The output will be in the `dist` directory.

## License

Private - All rights reserved

## Contact

For questions or support, please contact Elite Body Works Columbus.
