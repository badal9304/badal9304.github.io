---
layout: ../../layouts/CaseStudy.astro
order: 3
group: selected
toc: true
category: Enterprise software · Automotive
title: Toyota Digital Dealer Management System
shortTitle: Toyota DDMS
headline: Bringing clarity and consistency to complex dealership workflows.
summary: Designing features, workflows and reusable components for an enterprise platform that gives dealerships one view of sales, inventory and after-sales work.
company: Coforge, for Toyota
period: Sept 2025 to now
role: UI/UX designer
tools: Figma, FigJam
contributions:
  - Complex workflow design
  - End-to-end feature design
  - Information architecture
  - Interaction design
  - Reusable UI components
  - Design systems
  - Product and engineering collaboration
  - Developer handoff
seoTitle: "Toyota Dealer Management System UX | Badal Ranjan"
seoDescription: "How Badal Ranjan designs features, workflows and reusable components at Coforge for Toyota's Digital Dealer Management System, an enterprise dealer platform."
---

## Project overview

Toyota’s Digital Dealer Management System is an enterprise platform that gives dealerships one view of their sales, inventory and after-sales work. I joined the project at Coforge in September 2025, and I design features across the product with the product and engineering teams.

Working on an enterprise platform requires more than designing individual screens. It means understanding how information, actions and connected workflows fit together, and making sure the experience stays predictable across the product.

## Product context

Dealership work crosses departments. Sales, inventory and after-sales are connected, and one platform has to support all of them without each area feeling like a separate tool.

That shapes how I approach every feature. A screen is rarely used on its own: it is one step in a workflow that someone may have started elsewhere, and that someone else may pick up next.

## Problem and design challenge

The challenge isn’t one broken screen. It’s keeping a large, growing product clear and consistent while new capabilities are added:

- **Workflows span many screens.** A change in one place can affect steps somewhere else.
- **Screens carry a lot of information.** Not all of it matters at every step of a task.
- **Features are designed at different times.** Without shared patterns, the product slowly drifts into inconsistency.

The question I keep coming back to: **how do we add capability without adding complexity?**

## My role and responsibilities

I’m a hands-on designer on the team. I take features from requirements to handoff, working day to day with product managers and developers.

- Designing features end to end, from requirements and workflow mapping to high-fidelity screens
- Structuring information and navigation within and across features
- Defining interaction patterns, states and behaviour
- Building interactive prototypes to test and explain flows
- Helping build a design system of reusable dashboard components
- Running quick feedback sessions and heuristic reviews to check early decisions
- Writing design specifications and supporting developers through implementation

## Workflow understanding

Before I design a screen, I map the workflow it belongs to. My usual sequence:

<ol class="steps">
  <li><strong>Read the requirement closely.</strong> List the open questions and unclear assumptions, and take them to the product manager before designing.</li>
  <li><strong>Map the workflow.</strong> Who starts it, what they need at each step, and where it hands over to another step or role.</li>
  <li><strong>Look for existing patterns.</strong> Check what the product already does for similar tasks, so the new feature fits what people know.</li>
  <li><strong>Note edge cases early.</strong> Empty, error and permission states are listed before visual design, not after.</li>
  <li><strong>Agree the flow.</strong> Review the flow with product and engineering before moving to high fidelity.</li>
</ol>

Spending time here is cheaper than reworking finished screens, and it gives everyone the same picture of the problem.

## Information architecture and interaction decisions

The same kinds of decisions come up on almost every feature. This is how I reason through them.

<div class="decisions">

<div class="decision">
  <h3>What to show by default</h3>
  <dl>
    <div><dt>Problem</dt><dd>Enterprise screens can show far more data than someone needs for the task in front of them.</dd></div>
    <div><dt>Reasoning</dt><dd>I start from the task at that step and put the information needed to complete it first. Everything else stays one interaction away.</dd></div>
    <div><dt>Trade-off</dt><dd>Less-used details can take an extra click, so I check with product which information is actually needed at each step.</dd></div>
    <div><dt>User benefit</dt><dd>The screen is quicker to scan, and the important information isn’t lost among everything else.</dd></div>
  </dl>
</div>

<div class="decision">
  <h3>Where an action lives</h3>
  <dl>
    <div><dt>Problem</dt><dd>When similar screens place actions differently, people have to relearn each one.</dd></div>
    <div><dt>Reasoning</dt><dd>Primary actions keep the same position and hierarchy on comparable screens. Destructive or rarely used actions are kept apart from them.</dd></div>
    <div><dt>Trade-off</dt><dd>A shared placement can be slightly less ideal for one particular screen than a custom layout would be.</dd></div>
    <div><dt>User benefit</dt><dd>People can predict where to act, which builds confidence across the whole product.</dd></div>
  </dl>
</div>

<div class="decision">
  <h3>Reuse a pattern or create one</h3>
  <dl>
    <div><dt>Problem</dt><dd>A new requirement often looks like it needs a new component.</dd></div>
    <div><dt>Reasoning</dt><dd>I first check whether an existing component, or a variant of it, can do the job. I create a new pattern only when reuse would change what the component means or how it behaves.</dd></div>
    <div><dt>Trade-off</dt><dd>Reuse can constrain a design. A new pattern adds design and engineering upkeep.</dd></div>
    <div><dt>User benefit</dt><dd>Fewer patterns to learn, and the same behaviour wherever a pattern appears.</dd></div>
  </dl>
</div>

</div>

## Wireframes and design exploration

I agree on structure in low fidelity before discussing visuals. Flows and wireframes in Figma and FigJam let the team compare options side by side when there is more than one reasonable answer.

Exploring early is cheaper than reworking a high-fidelity screen, and it gives product and engineering something concrete to react to.

<p class="note">This is ongoing client work, so screens aren’t published on this page. I’m happy to walk through the design work in a conversation.</p>

## Reusable components and design consistency

I help build a design system of reusable components for the product’s dashboards. Components are built with variants for their states and sizes, so they cover real use rather than a single ideal screen.

When a feature needs something the system doesn’t have, I design it as a reusable component rather than a one-off. That keeps tables, filters and form fields behaving the same way wherever they appear.

## Final interface designs

High-fidelity designs follow the agreed flow and use system components. Before sharing them, I check each one against the workflow map and the list of states, so the final design answers the questions raised earlier.

<p class="note">Final screens are not shown here for the same reason as above.</p>

## Edge cases and interaction states

A design isn’t finished when the ideal state looks right. For each feature I work through:

- **Empty states:** what someone sees before there’s any data, and what they can do next
- **Loading:** what stays visible while data loads
- **Errors and validation:** clear messages next to the problem, with a way to fix it
- **Unexpected content:** long names, large numbers and missing values
- **Permissions:** what happens when a role can’t take an action
- **Interrupted tasks:** leaving part-way through and coming back

Designing these up front means developers don’t have to guess, and people don’t hit dead ends.

## Collaboration and implementation handoff

I bring product managers and developers into the design while it’s happening, not only at the end. Design reviews catch feasibility questions early, while they are still cheap to change.

My handoff includes:

- Annotated designs with specifications
- Component names that match the design system
- Every state and edge case, not only the default screen
- Interaction notes for behaviour that a static screen can’t show
- Interactive prototypes for flows that are easier to show than to describe

## Outcomes and learnings

The project is ongoing, and I don’t publish metrics for it here. What this way of working is designed to achieve:

- A more predictable experience from one feature to the next
- Fewer one-off patterns as the product grows
- Handoffs that developers can build from with fewer open questions

What it has reinforced for me:

- **In enterprise products, consistency is a feature.** People rely on the product behaving the same way every time.
- **The most useful design time often happens before high fidelity,** in questions about the workflow.
- **Edge cases are where trust is won or lost.** The default screen is only part of the experience.
