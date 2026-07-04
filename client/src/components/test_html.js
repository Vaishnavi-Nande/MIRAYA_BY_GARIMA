const https = require('https');
const fs = require('fs');

const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9'
  }
};

https.get('https://unsplash.com/s/photos/saree', options, (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    // Save first 50000 characters of the page to analyze
    fs.writeFileSync('page_sample.html', data.substring(0, 50000));
    console.log('Saved page sample');
  });
});
