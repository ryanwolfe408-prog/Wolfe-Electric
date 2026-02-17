# Wolfe Electric

A modern, responsive marketing website for **Wolfe Electric**, a residential and commercial electrical services company. Built with HTML, CSS, and JavaScript. Color scheme: blue, white, and black.

## Contents

- **Home** – Hero, featured services, why choose us, CTAs
- **Services** – Full list of residential and commercial electrical services with descriptions
- **About** – Company story and licensing
- **Contact** – Contact form, phone, email, service area

## Run locally

No build step is required. Open the site in a browser in one of these ways:

1. **Double-click** `index.html` to open it in your default browser.
2. **From the project folder**, start a simple HTTP server (recommended so paths work correctly):
   - **Node:** `npx serve .` then visit `http://localhost:3000`
   - **Python 3:** `python -m http.server 8000` then visit `http://localhost:8000`

## Deploy

The site is static. Deploy the entire project folder to any static host, for example:

- **Netlify** – Drag the folder into Netlify, or connect a Git repo.
- **Vercel** – Import the project and deploy (no build command needed).
- **GitHub Pages** – Push to a repo and enable Pages; set source to the branch and root (or `/docs` if you put the site there).

## Contact form

The contact form uses client-side validation only. To receive submissions:

1. **Formspree** – Set the form `action` to your Formspree endpoint (e.g. `https://formspree.io/f/your-id`).
2. **Netlify Forms** – Add `netlify` to the form tag and deploy to Netlify; no backend needed.
3. **Your own backend** – Point `action` to your API or server and handle POST there.

Replace the placeholder phone number `(555) 123-4567` and email `info@wolfeelectric.com` with your real contact details in all HTML files.

## Assets and images

- **Service and hero images** are currently loaded from Unsplash (royalty-free). You can replace them with your own photos by saving files in `assets/` and updating the `src` and `style="--hero-image: ..."` / `--page-hero-image` values in the HTML.
- Add your logo as `assets/logo.svg` or `assets/logo.png` and reference it in the header if you prefer an image logo instead of text.

## Browser support

Modern browsers (Chrome, Firefox, Safari, Edge). Uses CSS custom properties and simple JavaScript (no frameworks).
