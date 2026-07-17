const fs = require('fs');
const https = require('https');
const path = require('path');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
if (!OPENAI_API_KEY) {
  console.error('Error: OPENAI_API_KEY environment variable is required');
  process.exit(1);
}

const prompt = `Epic mystical scene of a Taoist divination altar in an ancient Chinese temple at twilight. The scene shows an aged wooden altar with Yi Jing (I Ching) yarrow stalks, a Qi Men Dun Jia cosmic board with celestial symbols, glowing incense smoke curling upward, and Taoist talisman paper with brush-written characters. Warm amber candlelight illuminates ritual objects -- a bronze compass (luopan), tea cups, and carved jade seals. Behind the altar, a large circular cosmic mandala with yin-yang and eight trigrams (bagua) radiates soft golden light. The background reveals misty mountains at dusk, with stars beginning to appear in the deep blue-purple sky. The atmosphere is mysterious, sacred, and ancient -- like stepping into a Longhu Mountain Taoist temple. Cinematic lighting, ultra-detailed, ethereal, spiritual, profound tranquility. Suitable as a website hero background image -- the main subject is centered and the composition allows text overlay on the darker areas.`;

const requestBody = JSON.stringify({
  model: 'dall-e-3',
  prompt: prompt,
  n: 1,
  size: '1792x1024',
  quality: 'hd',
  style: 'vivid',
});

const options = {
  hostname: 'api.openai.com',
  path: '/v1/images/generations',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${OPENAI_API_KEY}`,
    'Content-Length': Buffer.byteLength(requestBody),
  },
};

const req = https.request(options, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    try {
      const result = JSON.parse(data);
      if (result.data && result.data[0] && result.data[0].url) {
        const imageUrl = result.data[0].url;
        console.log('Image URL:', imageUrl);
        
        // Download the image
        const targetPath = path.join(__dirname, '..', 'public', 'images', 'hero-altar.jpg');
        const file = fs.createWriteStream(targetPath);
        
        https.get(imageUrl, (response) => {
          response.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`Image saved to: ${targetPath}`);
          });
        });
      } else {
        console.error('No image URL in response:', JSON.stringify(result, null, 2));
      }
    } catch (e) {
      console.error('Parse error:', e.message);
      console.log('Raw response:', data);
    }
  });
});

req.on('error', (e) => console.error('Request error:', e.message));
req.write(requestBody);
req.end();
