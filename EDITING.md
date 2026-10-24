# How to edit your portfolio

Everything you will change is in one of these places. Save the file (Cmd + S) and the preview updates.

| I want to change...                     | Open this file                         |
|-----------------------------------------|----------------------------------------|
| My name, headline, intro, email, links  | src/data/site.ts                       |
| Colours, fonts, text sizes, spacing     | src/styles/theme.css                   |
| About page: jobs, awards, tools, school | src/data/experience.ts                 |
| A case study's text                     | src/pages/work/<name>.md               |
| Add a new case study                    | Copy any file in src/pages/work, rename it, edit the text at the top and below |
| Order of case studies on the home page  | The "order:" number at the top of each case study file |
| Add images                              | Put the file in public/images, then write /images/<file-name> in the case study |

To show a cover image, remove the "#" at the start of the "cover:" line in a case study and set the path.

## Case study settings (the lines at the top of each file in src/pages/work)

| Setting        | What it does                                                                 |
|----------------|------------------------------------------------------------------------------|
| group          | `featured` (the big project at the top), `selected` (the grid) or `more` (the list below) |
| order          | Position within the site, lowest first                                       |
| category       | Small label above the title, e.g. "Fintech"                                  |
| headline       | The large line under the title on the case study page                        |
| shortTitle     | Name shown on the cover when there is no cover image                         |
| contributions  | Tags on the featured project (one per line, starting with "- ")             |
| toc: true      | Adds an "On this page" section list beside a long case study                 |

The home page principles, contact text and hero text are in src/data/site.ts. Skills and the About text are in src/data/experience.ts.
To add your résumé, put the PDF in the public folder and set `resume: '/your-file.pdf'` in src/data/site.ts. The download links then appear automatically.

## Search engine (SEO) settings

| Setting         | What it does                                                                 |
|-----------------|------------------------------------------------------------------------------|
| seoTitle        | The title shown in Google and browser tabs. Keep it under 60 characters      |
| seoDescription  | The text under the title in Google. Keep it between 140 and 160 characters   |
| ogImage         | The preview image when the page is shared (1200 × 630). Put it in public/og  |

The home page title and description are in src/data/site.ts. The sitemap updates itself when you add a case study.
When you add an image, save it as .webp if you can, and give the `<img>` a `width`, `height`, `alt` and `loading="lazy"`, like the existing ones.

## Notes for case studies that need more detail

These used to be hidden comments in the case study files. They live here so they are not published in the page source.

### toyota-ddms.md

EDITING NOTE: This case study describes the approach without naming confidential features.
Where you're allowed to, add a real example under "Information architecture and interaction decisions"
using the decision block below, and add anonymised or approved visuals in the image sections.

```html
<div class="decision">
  <h3>Decision title</h3>
  <dl>
    <div><dt>Problem</dt><dd>…</dd></div>
    <div><dt>Reasoning</dt><dd>…</dd></div>
    <div><dt>Trade-off</dt><dd>…</dd></div>
    <div><dt>User benefit</dt><dd>…</dd></div>
  </dl>
</div>
```

### wanderon-dashboards.md

EDITING NOTE: Add specifics where you have them: the main tasks each team did, how you structured
tables, search and filters, how efficiency was measured, and anonymised screenshots.

### wanderon-landing-pages.md

EDITING NOTE: Add specifics where you have them: what you tested (headlines, forms, layout),
the time period for the results, and screenshots.

### wanderon-website.md

EDITING NOTE: Add specifics where you have them: what the old site got wrong, the main changes
to navigation and trip pages, and screenshots (put images in public/images/wanderon/).
