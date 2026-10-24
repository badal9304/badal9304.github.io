// Structured data (JSON-LD) that tells search engines who this site is about.
// Everything here comes from site.ts and experience.ts, so edit those files, not this one.
import { site } from './site';
import { skills } from './experience';

export const personSchema = {
  '@type': 'Person',
  '@id': `${site.url}#person`,
  name: site.name,
  jobTitle: site.jobTitle,
  url: site.url,
  image: new URL('/images/badal-ranjan.webp', site.url).href,
  email: `mailto:${site.email}`,
  worksFor: { '@type': 'Organization', name: 'Coforge' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Rajasthan Technical University, Kota' },
  knowsAbout: skills.flatMap((s) => s.items),
  sameAs: site.links.map((l) => l.href),
};

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: `${site.name}, Portfolio`,
  url: site.url,
  author: { '@id': `${site.url}#person` },
};
