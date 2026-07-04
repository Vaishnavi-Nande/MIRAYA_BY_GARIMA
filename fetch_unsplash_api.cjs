const https = require('https');
const fs = require('fs');

const categories = {
  lehenga: "bridal-lehenga",
  saree: "saree",
  anarkali: "anarkali-suit",
  sharara: "sharara-suit",
  gown: "indo-western-gown",
  kurti: "kurti-dress",
  salwar: "salwar-suit",
  coord: "coord-set-women"
};

const results = {};

function fetchSearchApi(query) {
  return new Promise((resolve) => {
    const url = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=15&page=1`;
    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.9'
      }
    };
    
    https.get(url, options, (res) => {
      console.log(`API response for ${query}: status code ${res.statusCode}`);
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve(parsed.results || []);
        } catch (err) {
          console.error(`Failed to parse JSON for ${query}:`, err.message);
          resolve([]);
        }
      });
    }).on('error', (err) => {
      console.error(`API error for ${query}:`, err.message);
      resolve([]);
    });
  });
}

async function run() {
  for (const [catName, query] of Object.entries(categories)) {
    console.log(`Fetching API for ${catName} using query "${query}"...`);
    const items = await fetchSearchApi(query);
    
    // Extract 5 clean image URLs from results
    const urls = items.map(item => {
      // Unsplash returns different sizes, raw or regular or small are good
      const baseUrl = item.urls.raw.split('?')[0];
      return `${baseUrl}?q=80&w=600&auto=format&fit=crop`;
    });
    
    results[catName] = urls.slice(0, 5);
    console.log(`Found ${results[catName].length} image URLs for ${catName}`);
    
    // Brief sleep to avoid rate limiting
    await new Promise(r => setTimeout(r, 1000));
  }
  
  fs.writeFileSync('unsplash_images.json', JSON.stringify(results, null, 2));
  console.log('Finished! Saved image URLs to unsplash_images.json');
}

run();
