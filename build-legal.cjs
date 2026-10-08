const fs = require('node:fs');
const path = require('node:path');
const email = '<a href="mailto:info@trumbullsystems.com">info@trumbullsystems.com</a>';
const legalEmail = '<a href="mailto:legal@trumbullsystems.com">legal@trumbullsystems.com</a>';
const address = '<address class="not-italic">Trumbull Systems LLC<br>709 Myrtle Street<br>New Britain, CT 06053<br>United States</address>';
const links = [ ['legal','Policies and support'], ['privacy-policy','Privacy Policy'], ['terms-of-service','Terms of Service'], ['delivery-policy','Digital Delivery'], ['contact','Contact and Support'] ];
const pages = {
 'legal': {
  title: 'Policies and support',
  intro: 'Business information, website policies and help with our software products.',
  sections: [
   ['Our business', `<p>Trumbull Systems LLC is a Connecticut software development and publishing company. We build software applications, web tools and subscription products, and work with independent developers on publishing and distribution.</p>${address}<p>Email: ${email}</p>`],
   ['Read our policies', '<ul><li><a href="/privacy-policy/">Privacy Policy</a>: information handled by this website and when you contact us.</li><li><a href="/terms-of-service/">Terms of Service</a>: use of this website and the relationship to product-specific terms.</li><li><a href="/refund-policy/">Refunds and Cancellation</a>: refund periods, renewal cancellation and billing help for each product.</li><li><a href="/delivery-policy/">Digital Delivery</a>: how to find access instructions and get help with a software order.</li><li><a href="/contact/">Contact and Support</a>: help with products, billing, privacy and accessibility.</li></ul>'],
   ['Buying a product', '<p>This company website introduces our business and products. It does not take payments or create product accounts. Follow a product link to review its features, system requirements, current price, purchase currency and purchase policies before ordering. Product-specific terms and the seller identified at checkout apply to that purchase.</p><p>For a developer partnership or a separately negotiated service, the written agreement sets out the scope, fees and responsibilities.</p>'],
   ['A question about a charge or an order?', `<p>Email ${email} with the product name, purchase email and order reference if you have one. Do not send a password, complete payment card number or card security code.</p>`]
  ]
 },
 'privacy-policy': {
  title:'Privacy Policy',
  intro:'This policy explains how Trumbull Systems LLC handles information through this company website and business inquiries.',
  sections:[
   ['1. Scope and contact', `<p>Trumbull Systems LLC, based at the address below, is responsible for the business information described in this policy. Contact ${email} with a privacy question or request.</p>${address}<p>This policy covers the company website. Vidket, Blaze Humanizer and VividWriter have separate product privacy notices that explain their accounts, uploaded content, software features and payment flows. Review the relevant notice before using a product.</p>`],
   ['2. Information we handle', '<ul><li><strong>Correspondence:</strong> the name, email address, message and any attachments you choose to send when contacting us. If you ask about an order, this may include the product name, order reference and purchase details you provide.</li><li><strong>Technical information:</strong> our hosting provider may handle your IP address, browser and device information, requested page, request time and security-related logs to deliver and protect the website.</li><li><strong>Theme preference:</strong> this site saves your light or dark mode selection in local storage in your browser.</li></ul><p>The contact form prepares a draft in your own email application. This website does not send that draft to a server or save it in a contact database. We receive its contents only if you send the email.</p>'],
   ['3. Why we use information', '<p>We use correspondence to answer questions, assist customers, discuss business partnerships, maintain relevant business records and address complaints or legal obligations. Technical information supports website delivery, troubleshooting and security. The saved theme preference makes the site display in your chosen mode.</p><p>Where applicable data protection law requires a legal basis, processing may be necessary to respond to a request before entering a contract, perform a contract, comply with law, or pursue legitimate interests in communicating with customers and running a secure business. Where consent is required for an activity, it must be obtained before that activity takes place.</p>'],
   ['4. Cookies, local storage and tracking', '<p>The website code does not set advertising cookies or load analytics, advertising pixels, embedded videos or remote fonts. Images and styles are served with the site. The key <code>trumbull-theme</code> in local storage records only your selected display mode and stays in that browser until cleared.</p><p>You can remove the saved preference using your browser’s site-data settings. Without it, the site uses your system theme. The hosting platform may separately use technical cookies or authentication storage to deliver the site or control access. Platform sign-in, if requested, is handled by the hosting provider.</p>'],
   ['5. Sharing and service providers', '<p>Information may be handled by providers that host the website, deliver email or support business administration, to the extent needed for those services. We may disclose information to meet a legal obligation, respond to a lawful request, protect rights or security, or handle a business transfer subject to applicable protections.</p><p>This company website does not sell personal information or share it for cross-context behavioral advertising. Visiting a linked product, payment service or other website is subject to that service’s own privacy notice.</p>'],
   ['6. Retention and security', '<p>We retain correspondence and business records for as long as needed for the purpose of the communication, an ongoing business relationship, applicable recordkeeping duties or resolution of disputes. Retention depends on the type of record and applicable obligations. The browser theme preference remains until you clear it.</p><p>The website uses HTTPS. No internet transmission or storage method is completely secure. Do not email passwords, complete card details or other sensitive information that is not needed to address your request.</p>'],
   ['7. International visitors and privacy rights', `<p>We are based in the United States and welcome inquiries from other countries. Your correspondence may be processed in the United States or other countries where our service providers operate. Applicable data protection requirements govern any necessary safeguards.</p><p>Depending on where you live and the law that applies, you may have rights to access, correct, delete or receive a copy of your information, restrict or object to certain processing, or withdraw consent where processing depends on it. You may also be able to complain to a data protection authority.</p><p>Send requests to ${email}. We may need information to verify your identity and locate the relevant records. Some information may need to be retained for legal or other permitted reasons. We will explain any applicable limits when responding.</p>`],
   ['8. Children', `<p>This company website is intended for business customers, developers and adult creators. It is not directed to children under 13. If you believe a child has sent us personal information, contact ${email} so we can investigate and take appropriate action.</p>`],
   ['9. Updates', '<p>The date on this page identifies the latest revision. We will update this notice when website features or relevant practices change and provide any additional notice required by law.</p>']
  ]
 },
 'terms-of-service': {
  title:'Terms of Service',
  intro:'These terms apply to the Trumbull Systems company website. Product purchases and software use are also subject to the terms presented for that product.',
  sections:[
   ['1. Who we are', `<p>This website is operated by Trumbull Systems LLC, a Connecticut limited liability company.</p>${address}<p>Business and customer support: ${email}.</p>`],
   ['2. Using this website', '<p>You may use this website to learn about our business, explore product links and contact us. Use it lawfully and do not interfere with its operation, introduce malicious software, attempt unauthorized access, impersonate another person or submit content you have no right to share.</p><p>If you contact us on behalf of an organization, you must have authority to make the relevant inquiry or proposal. A message to us does not, by itself, create a partnership, agency relationship or contract for services.</p>'],
   ['3. Product purchases and licensing', '<p>This website does not include a checkout. A linked product website explains what its software does and presents its current purchase or licensing options. Before paying, review the product description, supported devices, license limits, price and currency, taxes, any recurring charges, delivery method, refund policy and cancellation terms.</p><p>The seller and applicable purchase terms are those identified during the purchase. These website terms do not replace a software license, a product-specific policy or a separate written agreement. A purchase grants the license described in those terms; it does not transfer ownership of the software or trademarks.</p><p>Questions about an order can be sent through our <a href="/contact/">Contact and Support page</a>. Do not send payment card details by email.</p>'],
   ['4. Subscriptions, trials and changes', '<p>Where a product offers a subscription, its checkout or order agreement must identify the amount, currency, billing interval and whether it renews automatically. A fixed-term license is not the same as an automatically renewing subscription. Read the terms of the option you select.</p><p>Any trial or promotion is subject to the conditions shown with that offer, including its duration, eligibility and any charge that follows. Changes to a paid arrangement are governed by its terms and applicable law. This website does not itself enroll you in a subscription or a trial.</p>'],
   ['5. Intellectual property and submissions', '<p>The company name, branding, site content and software are protected by applicable intellectual property laws. Product names and third-party trademarks belong to their respective owners. You may link to this website and use its information to evaluate our products or business, but may not present our work as your own or imply an endorsement without permission.</p><p>You retain your rights in material you send us. Provide only material that you are entitled to share. Do not send confidential source code, credentials or trade secrets in an initial inquiry; discuss a suitable agreement and transfer method first.</p>'],
   ['6. External services and availability', '<p>Links to product websites, payment services and other external resources take you to services with their own terms and privacy notices. Third-party availability is outside this company website’s control.</p><p>We may update, maintain or temporarily suspend this website. We aim to keep its information accurate, but cannot promise uninterrupted availability or that every description will always reflect a product’s latest version. Check the product details at the time of purchase.</p>'],
   ['7. Responsibility and consumer rights', '<p>Use the information on this website to assess whether a product suits your needs. No statement on this website promises particular sales, income, publishing acceptance or other business results.</p><p>Nothing in these terms excludes any warranty, remedy, liability or consumer right that cannot lawfully be excluded. Rights and obligations for paid software are governed by the applicable purchase terms and mandatory law.</p>'],
   ['8. Applicable law and concerns', `<p>Connecticut law governs these website terms, except where mandatory law gives you protections that cannot be waived. These terms do not remove any right you have to bring a complaint or claim in a jurisdiction available to you under mandatory law.</p><p>Please contact ${email} with a concern so we can try to resolve it. You are not required to give up statutory complaint or dispute rights to contact us.</p>`],
   ['9. Changes to these terms', '<p>We may revise these website terms and will update the date shown on this page. New website terms do not retroactively remove rights under a completed purchase or a separate agreement. Any notice or consent required by applicable law still applies.</p>']
  ]
 },
 'contact': {
  title:'Contact and support',
  intro:'Reach Trumbull Systems LLC about a software order, billing question, partnership or website issue.',
  sections:[
   ['Email support', `<p>Email ${email}. You can use this address directly without completing a form or signing into a product account.</p><p>For product or billing help, include the product name, the email used for the purchase, the order reference if available, and a short description of the issue. Never include a complete card number, security code or password.</p>`],
   ['Business correspondence', `${address}<p>This is our business correspondence address. Please arrange any meeting with us by email first.</p>`],
   ['Product help', '<ul><li><a href="https://vidket.com/support">Vidket support</a></li><li><a href="https://blazehumanizer.com/#contact">Blaze Humanizer contact page</a></li><li><a href="https://vividwriter.app/">VividWriter website and support links</a></li></ul><p>If you are unsure which product or seller a charge relates to, send the receipt reference and charge date to our business email. We can help identify the appropriate support channel.</p>'],
   ['Partnership inquiries', '<p>Include a link or demo, a short description of the software, who it is for and what kind of support you are seeking. We welcome inquiries from developers and business partners worldwide.</p>'],
   ['Privacy and accessibility', `<p>For a privacy request, email ${email} with the subject “Privacy request”. See our <a href="/privacy-policy/">Privacy Policy</a> for more information.</p><p>For an accessibility issue, tell us the page, what you were trying to do and what prevented you from completing it. Include your browser or assistive technology if you wish. You can request information by email if a page is difficult to use.</p>`]
  ]
 }
};
// Operational policies are maintained separately once the business confirms them.
const operationalFile = path.join(__dirname,'legal-operations.json');
if(fs.existsSync(operationalFile)) {
 const additional=JSON.parse(fs.readFileSync(operationalFile,'utf8'));
 Object.assign(pages,additional);
 if(additional['refund-policy'])links.splice(3,0,['refund-policy','Refunds and Cancellation']);
}
// Route policy and privacy correspondence to Legal; routine product support stays with Info.
for (const slug of ['privacy-policy', 'terms-of-service']) {
 pages[slug].sections = pages[slug].sections.map(([title, body]) => [title,
  body.replaceAll(email, legalEmail).replace('Business and customer support:', 'Legal notices and questions:')
 ]);
}
pages.contact.sections = pages.contact.sections.map(([title, body]) => [title,
 title === 'Privacy and accessibility'
  ? body.replace(`For a privacy request, email ${email}`, `For a privacy request, email ${legalEmail}`)
      .replace('For an accessibility issue, tell us', `For an accessibility issue, email ${email} and tell us`)
  : body
]);
for (const slug of ['legal', 'contact', 'refund-policy', 'delivery-policy']) {
 if (pages[slug]) pages[slug].sections.push(['Legal and policy questions',
  `<p>For legal notices, privacy matters or questions about our policies, contact ${legalEmail}. General information, product support and routine billing inquiries go to ${email}.</p>`
 ]);
}
let home=fs.readFileSync('dist/index.html','utf8');
const header=home.match(/<header[\s\S]*?<\/header>/)[0].replace(/href="#"/g,'href="/"').replace(/href="#(products|company|partnerships|contact)"/g,'href="/#$1"');
const policyNav='<nav class="policy-links" aria-label="Footer policies and support">'+links.map(([slug,label])=>`<a href="/${slug}/">${label}</a>`).join('')+'</nav>';
const footer=`<footer class="border-t rule surface"><div class="wrap py-10"><div class="flex flex-col justify-between gap-5 sm:flex-row sm:items-center"><p class="font-semibold">Trumbull Systems LLC</p><nav aria-label="Footer navigation" class="flex flex-wrap gap-6 text-sm"><a class="nav-link" href="/#products">Our products</a><a class="nav-link" href="/#partnerships">Partnerships</a><a class="nav-link" href="/contact/">Contact</a></nav></div>${policyNav}<p class="mt-6 text-sm muted">© 2026 Trumbull Systems LLC. All rights reserved.</p></div></footer>`;
for(const [slug,page] of Object.entries(pages)){
 const dir=path.join('dist',slug);fs.mkdirSync(dir,{recursive:true});
 const sidebar=links.map(([s,label])=>`<li><a href="/${s}/"${s===slug?' aria-current="page"':''}>${label}</a></li>`).join('');
 const content=page.sections.map(([title,body],index)=>`<section aria-labelledby="section-${index}"><h2 id="section-${index}">${title}</h2>${body}</section>`).join('\n');
 const html=`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${page.title} | Trumbull Systems LLC</title><meta name="description" content="${page.intro}"><meta name="theme-color" content="#0b1524"><link rel="icon" href="/assets/favicon.webp" type="image/webp"><link rel="stylesheet" href="/styles.css"><script src="/theme.js"></script><script src="/app.js" defer></script></head><body><a class="skip" href="#main">Skip to content</a>${header}<main id="main" tabindex="-1"><div class="wrap legal-shell"><nav class="legal-nav" aria-label="Policies and support"><p class="eyebrow mb-3">Trumbull Systems</p><ul>${sidebar}</ul></nav><article class="legal-content"><p class="eyebrow mb-4">Policies and support</p><h1>${page.title}</h1><p class="legal-date">Last updated: October 8, 2026</p><p class="legal-intro">${page.intro}</p>${content}</article></div></main>${footer}</body></html>`;
 fs.writeFileSync(path.join(dir,'index.html'),html);
}
// Remove the short privacy accordion now that the dedicated policy is available.
home=home.replace(/<details><summary>Privacy on this website<\/summary>[\s\S]*?<\/details>/,'');
if(home.includes('<!-- legal-navigation -->'))home=home.replace(/<!-- legal-navigation -->[\s\S]*?<!-- \/legal-navigation -->/,`<!-- legal-navigation -->${policyNav}<!-- /legal-navigation -->`);
else home=home.replace('<div class="mt-6 flex flex-col justify-between gap-3 border-t rule pt-6 text-sm muted sm:flex-row">',`<!-- legal-navigation -->${policyNav}<!-- /legal-navigation --><div class="mt-6 flex flex-col justify-between gap-3 border-t rule pt-6 text-sm muted sm:flex-row">`);
fs.writeFileSync('dist/index.html',home);
console.log('Generated pages:',Object.keys(pages).join(', '));
