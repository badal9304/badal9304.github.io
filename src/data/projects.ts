// Reads every case study in src/pages/work and sorts it by its "order" number.
// "group" in a case study decides where it appears: featured, selected or more.
const modules = import.meta.glob('../pages/work/*.md', { eager: true });

export const projects = Object.values(modules)
  .map((m: any) => ({ ...m.frontmatter, url: m.url }))
  .sort((a: any, b: any) => (a.order ?? 99) - (b.order ?? 99));

export const tones = ['var(--tone-1)', 'var(--tone-2)', 'var(--tone-3)', 'var(--tone-4)'];
