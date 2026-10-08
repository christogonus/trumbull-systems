# Trumbull Systems website

The public website for **Trumbull Systems LLC**, a Connecticut software development and publishing company. Trumbull Systems builds practical software for businesses, independent creators, writers, and developers, and welcomes product, publishing, and distribution partnerships worldwide.

The site introduces three products:

- **[Vidket](https://vidket.com/)**: video hosting, branded embeds, calls to action, lead capture, and viewer engagement tools for businesses.
- **[Blaze Humanizer](https://blazehumanizer.com/)**: text cleanup and rewriting tools for people who need clearer, more natural drafts while keeping control of their wording.
- **[VividWriter](https://vividwriter.app/)**: a desktop book writing and publishing studio for Windows and macOS, with manuscript, cover, formatting, PDF, DOCX, and EPUB workflows.

Trumbull Systems works with independent developers and business partners on software publishing, product distribution, customer acquisition, and go-to-market support. Partnership inquiries are welcome from every region.

## Website features

- Responsive static HTML website built with Tailwind CSS 4.1.14.
- Light and dark display modes with a saved theme preference.
- Local WebP logo, favicon, and hero artwork for fast delivery and easy replacement.
- Product pages linked to the official Vidket, Blaze Humanizer, and VividWriter websites.
- Dedicated legal, privacy, terms, refunds, digital delivery, and contact pages.
- PHP contact form endpoint for cPanel hosting with optional AJAX submission and hCaptcha verification.
- General correspondence at `info@trumbullsystems.com`; legal and privacy correspondence at `legal@trumbullsystems.com`.
- Keyboard navigation, visible focus states, semantic landmarks, responsive reflow, reduced-motion support, and accessible form status announcements.

## Project structure

Only `dist/` is published to a web server.

- `dist/index.html`: main company, products, partnership, and contact page.
- `dist/assets/`: local WebP brand assets and replaceable artwork.
- `dist/styles.css`: compiled Tailwind CSS output.
- `dist/app.js` and `dist/theme.js`: contact form behavior, navigation, and theme selection.
- `dist/contact.php`: cPanel form processor with hCaptcha and email routing.
- `build-legal.cjs` and `legal-operations.json`: legal page source and generation data.
- `src.css`: Tailwind source styles.
- `ACCESSIBILITY.md`: accessibility targets and verification notes.

## Build and preview

From this directory, compile the production stylesheet:

```powershell
.\tailwindcss.exe -i .\src.css -o .\dist\styles.css --minify
```

Regenerate the legal pages when their source or operational policy data changes:

```powershell
node build-legal.cjs
```

Preview the published files locally:

```powershell
python -m http.server 4173 --bind 127.0.0.1 --directory dist
```

Then open `http://127.0.0.1:4173/` in a browser. Do not open `dist/index.html` directly with a `file://` URL because PHP form requests and root-relative asset paths require HTTP hosting.

## cPanel deployment

Upload the contents of `dist/` into the domain's `public_html/` directory. Copy `dist/contact-config.example.php` to `contact-config.php` on the server and set the live hCaptcha secret, allowed HTTPS origins, and mailbox settings. Keep the live `contact-config.php` out of Git.

Replace `YOUR_HCAPTCHA_SITEKEY` in `dist/index.html` with the site key registered for the live domain. The PHP endpoint verifies hCaptcha server-side, sends legal and privacy inquiries to `legal@trumbullsystems.com`, and sends general, partnership, support, billing, and accessibility inquiries to `info@trumbullsystems.com`.

The form supports JavaScript-enhanced submission with visible success and error alerts. With JavaScript disabled, it submits directly to the PHP endpoint. cPanel must have PHP enabled, working email DNS, and a functioning `mail()` configuration. If the host disables `mail()`, connect the endpoint to the host's SMTP or email API service.

## SEO and content policy

The public copy is written for people searching for software development, software publishing, video marketing tools, writing software, book production tools, and developer partnerships. Product links point to the official product websites so visitors and search engines can find the canonical product information. The site avoids unsupported pricing, adoption, performance, or income claims.

Use the company website as the canonical business link when requesting legitimate directory listings, partner profiles, product announcements, or developer portfolio backlinks. Links should describe the relevant product or partnership and should not be placed in unrelated or automated directories.

## Accessibility

The site targets WCAG 2.2 Level AA and follows the accessibility practices documented in `ACCESSIBILITY.md`, including keyboard access, focus visibility, semantic HTML, heading structure, color contrast, responsive layouts, reduced-motion support, and announced form status changes. ANDI and browser-based checks are testing aids, not legal certification.

## Contact

General information, product support, billing, partnerships, and accessibility feedback: [info@trumbullsystems.com](mailto:info@trumbullsystems.com).

Legal notices, privacy requests, policy questions, and legal correspondence: [legal@trumbullsystems.com](mailto:legal@trumbullsystems.com).
