const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'dist', 'apps', 'web');

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  // Get clean file path without query params or hashes
  let cleanUrl = req.url;
  const questionMarkIndex = cleanUrl.indexOf('?');
  if (questionMarkIndex !== -1) {
    cleanUrl = cleanUrl.substring(0, questionMarkIndex);
  }
  const hashIndex = cleanUrl.indexOf('#');
  if (hashIndex !== -1) {
    cleanUrl = cleanUrl.substring(0, hashIndex);
  }

  let filePath = path.join(PUBLIC_DIR, cleanUrl === '/' ? 'index.html' : cleanUrl);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // SPA fallback routing to index.html for virtual routes
      filePath = path.join(PUBLIC_DIR, 'index.html');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable'
    });
    fs.createReadStream(filePath).pipe(res);
  });
});

// Bind to :: (IPv6) which also handles IPv4 on dual-stack hosts (standard Hostinger preset)
server.listen(PORT, '::', () => {
  console.log(`Production server running on port ${PORT}`);
});
