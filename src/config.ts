export const config = {
  storageBucket: process.env.STORAGE_BUCKET || 'og-images-bucket',
  cdnDomain: process.env.CDN_DOMAIN || 'cdn.degenpredict.com',
  imageWidth: 1200,
  imageHeight: 630,
  defaultFont: 'Inter',
  backgroundColor: '#FFFFFF',
  textColor: '#000000',
  logoUrl: process.env.LOGO_URL || 'https://cdn.degenpredict.com/logo.png'
} as const; 