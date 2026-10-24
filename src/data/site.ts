// ─────────────────────────────────────────────────────────────
// SITE SETTINGS — your name, intro, links and contact details.
// Change the text between the quote marks, save, and the site updates.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Badal Ranjan',
  role: 'UI/UX Designer',
  title: 'Badal Ranjan, UI/UX Designer',
  description:
    'UI/UX designer making complex enterprise workflows clear and consistent. Currently designing Toyota’s Digital Dealer Management System at Coforge.',
  email: 'badalranjan9@gmail.com',

  // Small line above the headline on the home page.
  eyebrow: 'Badal Ranjan · UI/UX Designer · 4+ years',

  // Each item is one line of the big headline on the home page.
  headline: ['Complex problems.', 'Clear experiences.'],

  // Intro under the headline. Each item is a paragraph.
  intro: [
    'I’m a UI/UX Designer focused on making complex workflows intuitive, interfaces consistent, and digital products easier to navigate.',
    'I design enterprise experiences by bringing structure to workflows, clarity to information, and intention to every interaction.',
  ],

  // The lines next to the intro. Label on the left, text on the right.
  timeline: [
    { label: 'Now', text: 'Coforge, designing for Toyota client' },
    { label: 'Before', text: 'WanderOn, travel website, landing pages and internal dashboards' },
    { label: 'Earlier', text: 'Bestie Inc, motion graphics' },
  ],

  // Links shown in the hero and contact section.
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/badal-ranjan/' },
    { label: 'Behance', href: 'https://www.behance.net/badalranjan/projects' },
  ],

  // Put your résumé PDF in the "public" folder, then write its name here, e.g. '/Badal-Ranjan-Resume.pdf'
  // Leave as '' to hide the Download CV button.
  resume: '/Badal-Ranjan-CV.pdf',

  // Top navigation
  nav: [
    { label: 'Work', href: '/#work' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '#contact' },
  ],

  // Contact section at the bottom of every page.
  contact: {
    headline: 'Have a complex problem to solve?',
    text: 'I’m interested in working with teams that value thoughtful UX, strong collaboration, and well-crafted digital products.',
  },

  // Design principles on the home page.
  principles: [
    {
      title: 'Clarity over complexity',
      text: 'A complex product doesn’t need a complex interface. I look for the simplest structure that still covers everything the workflow needs.',
    },
    {
      title: 'Think in systems, not screens',
      text: 'Every screen is one step in a longer workflow. I design how it connects to the steps around it, and how its patterns will be reused elsewhere.',
    },
    {
      title: 'Consistency creates confidence',
      text: 'When the same action looks and behaves the same everywhere, people stop second-guessing the interface and focus on their work.',
    },
    {
      title: 'Better outcomes come from collaboration',
      text: 'Product managers know the constraints and engineers know the cost. Bringing them into decisions early means the design that ships is the one we planned.',
    },
  ],
};
