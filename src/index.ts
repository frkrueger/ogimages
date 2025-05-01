import express from 'express';
import fs from 'fs';
import path from 'path';
import { generateOGImage } from './services/imageGenerator';
import { config } from './config';

const app = express();
const port = process.env.PORT || 3000;

console.log('Starting server with config:', config);

// Create cache directory if it doesn't exist
const cacheDir = path.join(__dirname, '../cache');
console.log('Cache directory:', cacheDir);
if (!fs.existsSync(cacheDir)) {
  console.log('Creating cache directory...');
  fs.mkdirSync(cacheDir, { recursive: true });
}

app.get('/og/:marketId', async (req, res) => {
  console.log('Received request:', req.params, req.query);
  try {
    const { marketId } = req.params;
    const { title, creator, expiry } = req.query;

    // Validate required parameters
    if (!title || typeof title !== 'string') {
      console.log('Invalid title parameter');
      return res.status(400).json({ error: 'Title is required' });
    }

    // Check if image exists in local cache
    const cachePath = path.join(cacheDir, `${marketId}.png`);
    console.log('Checking cache path:', cachePath);
    if (fs.existsSync(cachePath)) {
      console.log('Cache hit, returning cached image');
      res.set('Content-Type', 'image/png');
      return res.sendFile(cachePath);
    }

    console.log('Generating new image...');
    // Generate new image
    const imageBuffer = await generateOGImage({
      marketId,
      title,
      creator: creator as string | undefined,
      expiry: expiry as string | undefined
    });

    console.log('Saving to cache...');
    // Save to local cache
    fs.writeFileSync(cachePath, imageBuffer);

    // Return the image
    res.set('Content-Type', 'image/png');
    res.send(imageBuffer);
  } catch (error) {
    console.error('Error generating OG image:', error);
    res.status(500).json({ error: 'Failed to generate image' });
  }
});

app.listen(port, () => {
  console.log(`OG Image Generator service running on port ${port}`);
}); 