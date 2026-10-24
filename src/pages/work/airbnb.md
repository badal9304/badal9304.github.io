---
layout: ../../layouts/CaseStudy.astro
order: 1
title: Airbnb app redesign
summary: A redesign of the Airbnb mobile app, from login to payment, to cut information overload and make booking quicker.
company: Airbnb (concept project)
period: Design sprint
role: UI/UX designer
tools: Figma
cover: /images/airbnb/hero.png
coverAlt: Two phones showing the redesigned Airbnb home screen and booking screen in dark mode
group: featured
contributions:
  - User research
  - Competitor analysis
  - Personas
  - Journey mapping
  - Interaction design
  - High-fidelity UI
  - Prototyping
category: Concept project · Mobile app
headline: Reducing information overload from login to payment.
---

## Problem statement

Redesign the Airbnb mobile app to improve the user experience, simplify navigation and increase engagement, while keeping its core features. The work focuses on the login journey and the booking flow up to payment confirmation.

## User research

I ran the research and survey by talking directly with people in the target audience. This was a fast design sprint, so there wasn’t time for in-depth research with many users. To fill the gap, I analysed existing sources, including App Store and Google Play reviews, to find the main pain points.

### User needs and pain points

1. **Information overload.** Users feel overwhelmed by too many options and get confused during booking.
2. **No personalisation.** There are no personalised recommendations.
3. **Hard to navigate.** Pages need a lot of scrolling.
4. **Unclear steps.** Booking takes several taps, and some fields are hidden.

### What users like

1. The range of places to stay, and the community feel of Airbnb.
2. Reviews, which they rely on for trust and quality.
3. A clean, intuitive interface.

### Competitor analysis

Expedia and Booking.com both do two things well:

1. Personalisation and recommendations
2. Clear navigation and filtering

## User personas

<div class="personas">

<article class="persona">
  <header>
    <img src="/images/airbnb/persona-shubham.jpg" alt="" loading="lazy" />
    <div>
      <h3>Shubham</h3>
      <p class="muted">30 · Software engineer · Bengaluru</p>
      <p>Single, comfortable with tech, and travels often for work and leisure.</p>
    </div>
  </header>
  <dl>
    <div class="wide"><dt>Goals</dt><dd><ul><li>Find a good place to stay quickly without being overwhelmed by choice.</li><li>Book with as few steps as possible.</li></ul></dd></div>
    <div><dt>Motivations</dt><dd><ul><li>Values fast, efficient booking.</li><li>Enjoys exploring new places without hassle.</li></ul></dd></div>
    <div><dt>Challenges</dt><dd><ul><li>Overwhelmed by too many choices.</li><li>Confused by complicated booking steps.</li></ul></dd></div>
  </dl>
</article>

<article class="persona">
  <header>
    <img src="/images/airbnb/persona-neha.jpg" alt="" loading="lazy" />
    <div>
      <h3>Neha Verma</h3>
      <p class="muted">35 · Marketing manager · Delhi</p>
      <p>Married with two children, aged 6 and 9. Puts family-friendly travel first.</p>
    </div>
  </header>
  <dl>
    <div class="wide"><dt>Goals</dt><dd><ul><li>Find family-friendly places with amenities such as a kitchen and laundry.</li><li>Plan memorable family holidays that are safe and comfortable.</li></ul></dd></div>
    <div><dt>Motivations</dt><dd><ul><li>Wants family-friendly stays with the essentials.</li><li>Relies on reviews for safety and comfort.</li></ul></dd></div>
    <div><dt>Challenges</dt><dd><ul><li>Gets no recommendations suited to her family.</li><li>Frustrated by long pages.</li></ul></dd></div>
  </dl>
</article>

<article class="persona">
  <header>
    <img src="/images/airbnb/persona-aarav.jpg" alt="" loading="lazy" />
    <div>
      <h3>Aarav Mehta</h3>
      <p class="muted">28 · Travel blogger · Delhi</p>
      <p>Single, and keen to explore new cultures and experiences.</p>
    </div>
  </header>
  <dl>
    <div class="wide"><dt>Goals</dt><dd><ul><li>Find unique, affordable places that reflect local culture.</li><li>Stay with hosts who offer a personal connection and real local experiences.</li></ul></dd></div>
    <div><dt>Motivations</dt><dd><ul><li>Looks for unique, affordable stays with local character.</li><li>Values getting to know hosts.</li></ul></dd></div>
    <div><dt>Challenges</dt><dd><ul><li>Search results aren’t personalised.</li><li>Finds long pages tedious.</li></ul></dd></div>
  </dl>
</article>

</div>

## User journey map

The journey for booking a stay.

![User journey map for booking a stay on Airbnb](/images/airbnb/journey-map.jpg)

## High-fidelity mockups

<div class="folds">

<figure class="fold">
  <figcaption>
    <h3>Login and sign-up</h3>
    <ul><li>The redesigned login and sign-up screen.</li></ul>
  </figcaption>
  <div class="fold-shots">
    <div class="shot after"><img src="/images/airbnb/login-after.png" alt="Redesigned login and sign-up screen" loading="lazy" /><span>After</span></div>
  </div>
</figure>

<figure class="fold">
  <figcaption>
    <h3>Country code list</h3>
    <ul><li>A search bar makes it easier to find a country code.</li></ul>
  </figcaption>
  <div class="fold-shots">
    <div class="shot before"><img src="/images/airbnb/login-country-before.jpg" alt="Original country code list" loading="lazy" /><span>Before</span></div>
    <div class="shot after"><img src="/images/airbnb/login-country-after.png" alt="Redesigned country code list with a search bar" loading="lazy" /><span>After</span></div>
  </div>
</figure>

<figure class="fold">
  <figcaption>
    <h3>Property listing</h3>
    <ul>
      <li>Updated filter and sort options, with the main filters visible up front so users can choose a property faster.</li>
      <li>“Recommended for you” personalises searches and results.</li>
    </ul>
  </figcaption>
  <div class="fold-shots">
    <div class="shot before"><img src="/images/airbnb/listing-before.jpg" alt="Original property listing screen" loading="lazy" /><span>Before</span></div>
    <div class="shot after"><img src="/images/airbnb/listing-after.png" alt="Redesigned property listing with filters and recommendations" loading="lazy" /><span>After</span></div>
  </div>
</figure>

<figure class="fold">
  <figcaption>
    <h3>Property details</h3>
    <ul><li>Less scrolling, so information is easier to reach.</li></ul>
  </figcaption>
  <div class="fold-shots">
    <div class="shot before"><img src="/images/airbnb/detail-before.jpg" alt="Original property detail screen" loading="lazy" /><span>Before</span></div>
    <div class="shot after"><img src="/images/airbnb/detail-after.png" alt="Redesigned property detail screen" loading="lazy" /><span>After</span></div>
  </div>
</figure>

<figure class="fold">
  <figcaption>
    <h3>Confirm and pay</h3>
    <ul>
      <li>All payment options on a single screen.</li>
      <li>Clear prompts for PAN and phone number, with fewer taps.</li>
      <li>A clear button showing the total amount before booking.</li>
    </ul>
  </figcaption>
  <div class="fold-shots">
    <div class="shot before"><img src="/images/airbnb/pay-before-1.jpg" alt="Original confirm and pay screen" loading="lazy" /><span>Before</span></div>
    <div class="shot before"><img src="/images/airbnb/pay-before-2.jpg" alt="Original payment options screen" loading="lazy" /><span>Before</span></div>
    <div class="shot after"><img src="/images/airbnb/pay-after.png" alt="Redesigned request to book screen" loading="lazy" /><span>After</span></div>
  </div>
</figure>

<figure class="fold">
  <figcaption>
    <h3>Confirm and pay, full page</h3>
    <ul><li>The whole redesigned page, from trip details down to payment and the booking button.</li></ul>
  </figcaption>
  <div class="fold-shots">
    <div class="shot after tall"><img src="/images/airbnb/pay-after-full.png" alt="Full redesigned confirm and pay page" loading="lazy" /><span>After</span></div>
  </div>
</figure>

</div>

## Prototype

![Prototype screens for the Airbnb redesign](/images/airbnb/prototype.png)

[Open the prototype in Figma](https://www.figma.com/proto/pVk7gDT6cICfQ3iceagmTQ/Airbnb?page-id=0%3A1&node-id=52-4695&node-type=frame&viewport=792%2C393%2C0.35&t=vc8idHZZd0IAmr8v-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=52%3A4695)
