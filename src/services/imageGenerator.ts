import puppeteer from 'puppeteer';
import { config } from '../config';

interface GenerateOGImageParams {
  marketId: string;
  title: string;
  creator?: string;
  expiry?: string;
}

export async function generateOGImage({
  marketId,
  title,
  creator,
  expiry
}: GenerateOGImageParams): Promise<Buffer> {
  console.log('Launching Puppeteer...');
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--disable-gpu'
      ]
    });
  } catch (error) {
    console.error('Failed to launch Puppeteer:', error);
    throw new Error('Failed to launch browser: ' + (error as Error).message);
  }

  try {
    console.log('Creating new page...');
    const page = await browser.newPage();
    await page.setViewport({
      width: config.imageWidth,
      height: config.imageHeight
    });

    // Generate HTML for the OG image
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=${config.defaultFont}:wght@400;700&display=swap');
            
            body {
              margin: 0;
              padding: 0;
              width: ${config.imageWidth}px;
              height: ${config.imageHeight}px;
              background-color: ${config.backgroundColor};
              font-family: '${config.defaultFont}', sans-serif;
              color: ${config.textColor};
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              padding: 40px;
            }
            
            .logo {
              width: 200px;
              height: auto;
            }
            
            .title {
              font-size: 48px;
              font-weight: 700;
              line-height: 1.2;
              margin-bottom: 20px;
            }
            
            .metadata {
              display: flex;
              justify-content: space-between;
              font-size: 24px;
              color: #666;
            }
          </style>
        </head>
        <body>
          <img src="${config.logoUrl}" class="logo" alt="DegenPredict Logo" />
          <div class="title">${title}</div>
          <div class="metadata">
            <div>${creator ? `@${creator}` : ''}</div>
            <div>${expiry || ''}</div>
          </div>
        </body>
      </html>
    `;

    console.log('Setting page content...');
    await page.setContent(html);
    console.log('Waiting for network idle...');
    await page.waitForNetworkIdle();

    console.log('Taking screenshot...');
    // Take screenshot
    const screenshot = await page.screenshot({
      type: 'png',
      clip: {
        x: 0,
        y: 0,
        width: config.imageWidth,
        height: config.imageHeight
      }
    });

    console.log('Screenshot taken successfully');
    return screenshot as Buffer;
  } catch (error) {
    console.error('Error in generateOGImage:', error);
    throw error;
  } finally {
    console.log('Closing browser...');
    if (browser) {
      await browser.close();
    }
  }
} 