# TOMORROW MORNING (5 minutes, laptop)

Everything is done and verified. Only this remains:

1. Go to github.com and open the repo **gowthamkumarofficial2-crypto.github.io** (already created, already Public, ignore the old "Website" repo)
2. Click the **"uploading an existing file"** link (or Add file, then Upload files)
3. Unzip the site zip on the laptop. Drag **everything inside the folder** (including _posts, _layouts, assets) into the upload box
4. Click **Commit changes**
5. Wait 2 minutes, then open: https://gowthamkumarofficial2-crypto.github.io

Then tell Claude "live" to connect gowthamkumarshivakumar.com.

---

# Your site — cheat sheet

Everything you need lives in this file. When in doubt, come back here.

---

## 1. Publish (one time, ~10 min, use a laptop)

1. Go to **github.com** → sign in (or Sign up, it's free).
2. Top-right **+** → **New repository**.
3. Name it **exactly**: `YOUR-USERNAME.github.io` (your actual GitHub username). Public. Click **Create repository**.
4. Click the **"uploading an existing file"** link on the new repo page.
5. Unzip the site folder. Drag **everything inside it** (including `_posts`, `_layouts`, `assets`) into the upload box.
6. Click **Commit changes**.
7. Wait ~2 minutes. Live at `https://YOUR-USERNAME.github.io`

## 2. Post daily (2 minutes, works from your phone)

1. Open your repo on github.com → open the **`_posts`** folder.
2. **Add file → Create new file**.
3. Filename: `2026-07-24-your-title-here.md` ← today's date, words joined by dashes.
4. Paste this at the top, then write below it:

```
---
layout: post
title: "Your title here"
---

Your post text. **Bold** works, `code` works, blank line = new paragraph.
```

5. **Commit changes**. Live in ~1 minute. That's the whole workflow.

Feeling sluggish? Two-minute rule: open `_posts`, create the file, write two sentences. A short entry still counts as shipped.

## 3. Add your photo

1. In your repo, open `assets/img` → **Add file → Upload files** → upload your picture (e.g. `me.jpg`).
2. In `_config.yml`, change one line: `portrait: "/assets/img/me.jpg"`.
Until then the monogram tile shows — it's designed to look fine on its own.

## 4. Edit your text

- **Credential chips** (hero): `_config.yml` → the `credentials:` list. Put real certs / roles / years here.
- **Role line** (under your name): `_config.yml` → `role:`.
- **Your links**: `_config.yml` → under `links:`. Empty = hidden automatically.
- **About paragraphs**: middle of `index.html`.

## 5. Newsletter — free, automatic (~5 min, do after the site is live)

Goal: when you publish a post, subscribers get an email. Zero cost, no sending anything manually.

1. Go to **follow.it** → create a free account.
2. Add your feed: `https://YOUR-SITE-ADDRESS/feed.xml`
3. It gives you a subscription form — copy the form's **action URL**.
4. Paste it into `_config.yml` → `newsletter_form: "..."`.
The subscribe box appears on your homepage automatically, and every new post gets emailed to subscribers for you.

## 6. Connect your Squarespace domain (with Claude, ~10 min)

GitHub repo → Settings → Pages → Custom domain, plus 4 A-records + 1 CNAME in Squarespace DNS. Do this step in chat — Claude will hand you the exact values.

## Bonus (already built in)

- RSS feed at `/feed.xml` — evidence for Oracle ACE nominations.
- Sitemap + SEO tags — Google finds you with no extra setup.
