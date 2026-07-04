const https = require('https');
const fs = require('fs');

const options = {
  hostname: 'unsplash.com',
  path: '/s/photos/saree',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9'
  }
};

https.get(options, (res) => {
  console.log('Status code:', res.statusCode);
  console.log('Headers:', res.headers);
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    fs.writeFileSync('page_sample.html', data.substring(0, 100000));
    console.log('Saved page sample. Length:', data.length);
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
