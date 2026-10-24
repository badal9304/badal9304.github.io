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
