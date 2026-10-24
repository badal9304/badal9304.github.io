// ─────────────────────────────────────────────────────────────
// SITE SETTINGS — your name, intro, links and contact details.
// Change the text between the quote marks, save, and the site updates.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Badal Ranjan',
  role: 'Senior UX Designer',
  title: 'Badal Ranjan, Senior UX Designer',
  description:
    'Senior UX designer working on enterprise dashboards and travel products.',
  email: 'badalranjan9@gmail.com',

  // Each item is one line of the big headline on the home page.
  headline: ['Senior UX designer', 'for enterprise tools', 'and travel products.'],

  // Short intro under the headline. Each item is a paragraph.
  intro: [
    'Four years in design, the last three in UI/UX. I work between design and product: research, interaction design, and the measuring that shows whether a change worked.',
  ],

  // The three lines next to the intro. Label on the left, text on the right.
  timeline: [
    { label: 'Now', text: 'Senior UX Designer at Coforge, on Toyota’s dealer management platform' },
    { label: 'Before', text: 'Senior UI/UX Designer at WanderOn, 2022 to 2025' },
    { label: 'Earlier', text: 'Motion graphics designer at Bestie Inc, 2021 to 2022' },
  ],

  // Links shown in the footer. Add LinkedIn the same way:
  // { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-name' },
  links: [
    { label: 'Behance', href: 'https://www.behance.net/badalranjan/projects' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/badal-ranjan/' },
  ],

  // Put your CV PDF in the "public" folder, then write its name here, e.g. '/Badal-Ranjan-CV.pdf'
  // Leave as '' to hide the link.
  resume: '',

  // Top navigation
  nav: [
    { label: 'Work', href: '/#work' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '#contact' },
  ],
};
