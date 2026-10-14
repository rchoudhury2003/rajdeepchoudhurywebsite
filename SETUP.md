# Getting this live (free, no domain needed yet)

## 1. Put this on GitHub
Create a new repo (e.g. `rajdeep-portfolio`), and upload everything in
this folder to it (drag-and-drop on github.com works fine, or `git push`
if you're comfortable with that).

## 2. Connect it to Cloudflare
1. Go to the Cloudflare dashboard → Workers & Pages → Create → Connect to Git
   → pick your repo.
2. Build settings:
   - Build command: `npm run build`
   - Deploy command: `npx wrangler deploy`
   - Root directory: `/`
3. Click Deploy. Your real site files live in the `public/` folder (that's
   what `wrangler.jsonc` points at), so `node_modules` never gets uploaded.
4. You'll get a free link like `rajdeepchoudhury.workers.dev` (or
   `.pages.dev`, depending on which Cloudflare flow you're in) — that's your
   live site.

## 3. Turn on the admin login (Decap CMS + GitHub)
Decap CMS needs a free login bridge since we're not using Netlify to
host. Easiest path:
1. Go to **netlify.com**, sign up free (you won't host anything there,
   this is just for the free login feature).
2. In Netlify: Site settings → Access & security → OAuth → "Install
   provider" → GitHub. Follow its steps to create a GitHub OAuth App
   (GitHub will ask for your site's URL — use your `.pages.dev` link,
   and update it later when you get the real domain).
3. Open `admin/config.yml` in this folder and replace
   `YOUR-GITHUB-USERNAME/YOUR-REPO-NAME` with your real repo, e.g.
   `rajdeepc/rajdeep-portfolio`. Push that change to GitHub.

## 4. Use it
Go to `yoursite.pages.dev/admin`, log in with GitHub, click "New Post,"
fill it in, hit Publish. About a minute later it's live on your site.

## Later: adding RajdeepChoudhury.com
When you're ready — in the same Cloudflare Pages project, go to
"Custom domains," buy and attach RajdeepChoudhury.com there. Nothing
else about the site changes.
