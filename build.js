// Reads every post file in content/posts and writes posts.json.
// No dependencies — runs with plain Node. Cloudflare Pages runs this
// automatically on every build (see build command in the setup notes).
const fs = require('fs');
const path = require('path');
function compile(name, sortKey) {
  const dir = path.join(__dirname, 'public', 'content', name);
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith('.json')) : [];
  const items = files.map(f => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')));
  if (sortKey) items.sort((a, b) => new Date(b[sortKey]) - new Date(a[sortKey]));
  fs.writeFileSync(path.join(__dirname, 'public', `${name}.json`), JSON.stringify(items, null, 2));
  console.log(`Built ${name}.json with ${items.length} item(s).`);
}
compile('posts', 'date');
compile('photos');
compile('photobooks');
compile('films');
