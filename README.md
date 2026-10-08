# Trumbull Systems website

Static website built with Tailwind CSS 4.1.14. Only `dist/` is published. Original business records remain outside this project.

## Edit and build

- Content and structure: `dist/index.html`
- Theme and styles: `src.css`
- Interactions: `dist/app.js` and `dist/theme.js`
- Legal pages: edit `build-legal.cjs` and `legal-operations.json`, then run `node build-legal.cjs` before compiling styles. Generated pages are under `dist/legal/`, `dist/privacy-policy/`, `dist/terms-of-service/`, `dist/refund-policy/`, `dist/delivery-policy/`, and `dist/contact/`.
- Replaceable local images: `dist/assets/`
- Compile styles: `./tailwindcss.exe -i ./src.css -o ./dist/styles.css --minify`
- Local preview: `python -m http.server 4173 --bind 127.0.0.1 --directory dist`

## cPanel PHP contact form

Upload the contents of `dist/` into `public_html/`. Upload `contact-config.example.php` beside `contact.php` as `contact-config.php`, then replace `YOUR_HCAPTCHA_SECRET` with the secret from hCaptcha. Replace `YOUR_HCAPTCHA_SITEKEY` in `dist/index.html` with the hCaptcha site key. Keep `contact-config.php` out of Git; it is ignored by `.gitignore`.

The form posts to `contact.php`. With JavaScript it uses AJAX and displays an inline status; with JavaScript disabled it submits normally to the same PHP endpoint. The endpoint verifies hCaptcha server-side, routes Privacy or legal inquiry to legal@trumbullsystems.com, routes other subjects to info@trumbullsystems.com, and sends through cPanel PHP `mail()`.

Use an hCaptcha site key registered for the live domain. The allowed origins in `contact-config.php` should match the HTTPS domain visitors use. Make sure the cPanel account has working email DNS and that `mail()` is enabled; otherwise replace the `mail()` call with the hosting provider’s SMTP or API service.

Tailwind standalone compiler: https://github.com/tailwindlabs/tailwindcss/releases/tag/v4.1.14 . Download the appropriate compiler for your operating system. The compiler binary is not committed or published.

## Contact

The contact form opens a `mailto:` draft. It never claims a message has been delivered. General information, partnerships, product support and routine billing use info@trumbullsystems.com. Legal notices, privacy requests and policy questions use legal@trumbullsystems.com. The form routes its Privacy or legal inquiry option to Legal and other options to Info. Without JavaScript, use the direct addresses on the Contact and Support page. When changing addresses, update dist/index.html, dist/app.js, build-legal.cjs and legal-operations.json, then regenerate the legal pages. The website does not create or configure mailboxes. No API keys or email service are required for the draft form.

## Content sources

Company activities and location: supplied business summary and Certificate of Organization. No tax identifiers, ownership details, signatures or source documents are published.

Product descriptions reviewed on October 8, 2026: https://vidket.com/ , https://blazehumanizer.com/ , https://vividwriter.app/ . Product pricing, adoption statistics and unsupported performance claims are intentionally absent.

## Assets

- logo-light.png and logo-dark.png: supplied raw assets 1.png and 2.png, unchanged.
- favicon.png: supplied raw asset 4.png, unchanged.
- architecture.jpg: Sebastian Schuster on Unsplash, https://unsplash.com/photos/modern-building-with-reflective-blue-glass-facade-uvFmI99WV8Q . Downloaded from https://images.unsplash.com/photo-1770155374632-2ee56acc5116?auto=format&fit=crop&w=1600&h=1200&q=85 . Licensed under https://unsplash.com/license . Illustrative architecture, not represented as the company's office.

## Accessibility

Target: WCAG 2.2 Level AA. Semantic landmarks and headings, skip link, native controls, visible keyboard focus, persistent theme choice, reduced-motion support, high contrast palettes, and responsive reflow. See ACCESSIBILITY.md for verification and remaining manual checks. ANDI is a testing aid, not a legal certification.
