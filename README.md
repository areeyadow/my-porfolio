# Portfolio Project

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean and professional portfolio layout
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Next.js 14 for optimal performance
- **TypeScript**: Type-safe development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

## Pages

- **Home**: Welcome page with overview of portfolio sections
- **Experience**: Professional work experience and achievements
- **Education**: Academic background and continuous learning
- **Certificate**: Professional certifications and skills validation

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: React 18
- **Icons**: Heroicons (via SVG)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
my-portfolio/
├── app/
│   ├── components/
│   │   └── Navbar.tsx
│   ├── experience/
│   │   └── page.tsx
│   ├── education/
│   │   └── page.tsx
│   ├── certificate/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Customization

### Content
- Update the content in each page component (`page.tsx` files)
- Modify the navigation menu in `app/components/Navbar.tsx`
- Add your personal information, work experience, education, and certificates

### Styling
- Customize colors and themes in `tailwind.config.js`
- Modify global styles in `app/globals.css`
- Update component-specific styles using Tailwind classes

### Adding New Pages
1. Create a new folder in the `app` directory
2. Add a `page.tsx` file in the new folder
3. Update the navigation menu in `Navbar.tsx`

## Deployment

This project can be deployed on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **GitHub Pages** (with static export)

For Vercel deployment:
```bash
npm install -g vercel
vercel
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
