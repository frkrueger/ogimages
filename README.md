# OG Image Generator for Prediction Markets

A Next.js application that generates social media preview cards (OG images) for prediction markets.

## Features

- Live preview of OG images
- Customizable market details:
  - Title
  - Category
  - Chance percentage
- Responsive design
- Modern UI with Tailwind CSS

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- @vercel/og for image generation

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This project is configured for deployment on Netlify. The build settings are:

- Build command: `npm run build`
- Publish directory: `out`
- Node version: 18.x

## License

MIT 