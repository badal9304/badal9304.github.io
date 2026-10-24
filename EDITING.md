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
