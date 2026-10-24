// ─────────────────────────────────────────────────────────────
// ABOUT PAGE DATA — bio, skills, experience, recognition, education.
// Add a new job by copying one { ... } block and editing it.
// ─────────────────────────────────────────────────────────────

// Each item is a paragraph on the About page.
export const bio = [
  'I’m Badal Ranjan, a UI/UX Designer with 4+ years of experience across enterprise software, travel and digital products.',
  'I enjoy problems where the details matter: complex workflows, information-heavy interfaces, multi-step interactions, and systems that need to stay consistent as they grow.',
  'At Coforge, I work on Toyota’s Digital Dealer Management System, collaborating with product and engineering teams to turn requirements into thoughtful, implementation-ready experiences. My work spans feature design, workflow refinement, interaction patterns and reusable UI components.',
  'Earlier work in travel and digital products taught me to approach design from different perspectives, understand varied user needs, and adapt solutions to each product’s context.',
  'My approach is practical and collaborative. I ask questions, challenge unclear assumptions, consider edge cases, and look for ways to make an experience easier to understand without adding complexity.',
  'For me, good UX comes from clear thinking, deliberate decisions, and attention to the details that make a product feel coherent.',
];

export const skills = [
  { group: 'Product & UX', items: ['User journeys', 'Workflow mapping', 'Information architecture', 'Interaction design'] },
  { group: 'Interface design', items: ['Wireframing', 'Prototyping', 'Responsive layouts', 'Complex tables and dashboards'] },
  { group: 'Design systems', items: ['Reusable components', 'Variants', 'Design patterns', 'Visual consistency'] },
  { group: 'Product delivery', items: ['Requirements analysis', 'Stakeholder collaboration', 'Design reviews', 'Design specifications', 'Developer handoff'] },
];

export const tools = [
  { group: 'Design', items: 'Figma, FigJam, Framer, Sketch' },
  { group: 'Research and analytics', items: 'Google Analytics 4, Hotjar, Mixpanel, Notion' },
  { group: 'Motion and visual', items: 'After Effects, Premiere Pro, Illustrator, Photoshop' },
];

export const experience = [
  {
    period: 'Sept 2025 to now',
    role: 'Senior UX Designer',
    company: 'Coforge',
    client: 'Toyota',
    summary:
      'Designing features for Toyota’s Digital Dealer Management System, an enterprise platform that gives dealerships one view of sales, inventory and after-sales work.',
    points: [
      'Design features end to end, from requirements and workflow mapping to high-fidelity screens and handoff.',
      'Build interactive prototypes and refine workflows with product managers and developers.',
      'Help build a design system of reusable dashboard components.',
      'Run quick feedback sessions and heuristic reviews to check early design decisions.',
    ],
  },
  {
    period: 'Oct 2022 to Sept 2025',
    role: 'Senior UI/UX Designer',
    company: 'WanderOn',
    summary:
      'Designed for a backpacking travel company: the customer website, ad landing pages, internal dashboards and email journeys.',
    points: [
      'Redesigned the website based on user research. Site traffic grew 112%.',
      'Designed landing pages for Google and Facebook campaigns. Leads grew 127% and revenue 2.3x.',
      'Designed internal dashboards for the Sales, Ops and Lead Management teams. Process efficiency improved 50%.',
      'Used A/B tests, heatmaps and analytics to check design changes, and kept a design system consistent across platforms.',
    ],
  },
  {
    period: 'June 2021 to July 2022',
    role: 'Motion Graphics Designer',
    company: 'Bestie Inc',
    summary:
      'Made motion graphics for a Canada-based YouTube channel with over 4 million subscribers, in After Effects, Premiere Pro, Illustrator and Photoshop.',
    points: [],
  },
];

export const recognition = [
  { year: '2025', text: '“Imagination in Action” award, WanderOn annual general meeting' },
  { year: '2023', text: '“Brilliant Beginner” award, WanderOn, February 2023' },
];

export const education = [
  { year: '2017 to 2021', text: 'B.Tech, Computer Science and Engineering, Rajasthan Technical University, Kota' },
  { year: '2022', text: 'Foundations of UX Design, Coursera' },
  { year: '2021', text: 'User Experience Design Essentials, Udemy' },
];
