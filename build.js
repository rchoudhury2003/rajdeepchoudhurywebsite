// Reads every post file in content/posts and writes posts.json.
// No dependencies — runs with plain Node. Cloudflare Pages runs this
// automatically on every build (see build command in the setup notes).
const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'content', 'posts');
const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith('.json')) : [];
const posts = files.map(f => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')));
posts.sort((a, b) => new Date(b.date) - new Date(a.date));
fs.writeFileSync(path.join(__dirname, 'posts.json'), JSON.stringify(posts, null, 2));
console.log(`Built posts.json with ${posts.length} post(s).`);
