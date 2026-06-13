---
cover: "/projects/baking-app/baking-app-thumbnail.png"
title: "Baking App Design"
descriptor: "A mobile application designed to help home bakers organize recipes, manage ingredients, and navigate baking workflows with greater confidence."
role: "UX Researcher & Designer"
timeline: "3 weeks"
teamSize: "Individual Project"
responsibilities: "User Research • Competitive Analysis • Journey Mapping • Wireframing • Prototyping • UI Design"
tools: ["Figma", "Figjam", "Claude Design"]
problem: "Home bakers frequently adjust recipes to match portion needs or available ingredients. However, existing tools require manual recalculation or rigid serving multipliers. This project explores how intelligent recalculation can preserve flow during cooking."



nav:
  - id: overview
    label: Overview
  - id: challenge
    label: The Challenge
  - id: research
    label: Key Findings
  - id: design-opportunities
    label: Design Opportunities
  - id: design-process
    label: Design Process
  - id: design-decision
    label: Design Decisions
  - id: solution
    label: Final Solution
  - id: reflection
    label: Reflection

draft: false
---

<!-- Copy this file, rename it (e.g. my-project.md), set draft: false, and fill in each section below.
     Each <section> id must match an entry in the nav frontmatter array. -->

<section id="overview">

## Overview

Home bakers often rely on a combination of recipe websites, screenshots, notes, and memory throughout the baking process. While recipes are easy to find, managing ingredients, preparing materials, and keeping track of progress can become frustrating and disorganized.

I explored how a digital baking assistant could better support users before, during, and after baking.

</section>

<section id="challenge">

## The Challenge

Home bakers often rely on a combination of recipe websites, screenshots, notes, and memory throughout the baking process. While recipes are easy to find, managing ingredients, preparing materials, and keeping track of progress can become frustrating and disorganized.

To better understand these challenges, I conducted self-interviews and analyzed existing baking workflows.

**Research Methods**

<table class="research-methods-table">
  <thead>
    <tr>
      <th>Method</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>User Interview</td>
      <td>Understand baking habits, workflows, and pain points</td>
    </tr>
    <tr>
      <td>Competitive Analysis and Market Reserach</td>
      <td>Understand the current landscape of baking apps and user friction</td>
    </tr>
    <tr>
      <td>Affinity Mapping</td>
      <td>Identify recurring themes and opportunities</td>
    </tr>
  </tbody>
</table>


</section>

<section id="research">

## Key Findings

> "I love my kitchen scale but so many American recipes are all in cups and I don't always want to do the math."


<div class="findings-row findings-row--text">

<div class="finding-text-card">
  <p class="finding-text-card-title">Recipes Are Difficult to Organize and Adapt</p>
  <div class="finding-text-card-media">
    <img src="/projects/baking-app/recipe-collage.png" alt="Recipes collected across websites, social media, and notes" />
  </div>
  <p class="finding-text-card-body">Bakers in online forums often collected recipes from multiple sources and often modified them to fit available ingredients, serving sizes, or personal preferences. Managing these changes was typically a manual process.</p>
</div>

<div class="finding-text-card">
  <p class="finding-text-card-title">Baking Involves Constant Decision-Making</p>
  <div class="finding-text-card-media">
    <img src="/projects/baking-app/journey-map.avif" alt="Baking journey map" />
  </div>
  <p class="finding-text-card-body">Bakers in online forums mentioned frequently switched between measuring ingredients, adjusting quantities, monitoring timers, and referencing instructions. These interruptions increased cognitive load and made it easy to lose track of progress.</p>
</div>

<div class="finding-text-card">
  <p class="finding-text-card-title">Missing Ingredients Create Friction</p>
  <blockquote class="finding-text-card-quote">"Only way I do it is just google substitutions for whichever ingredient in whatever recipe. Like last week I was looking up substitutions for egg in brownie mix and just had to google that." - Reddit Baker</blockquote>
  <p class="finding-text-card-body">Many bakers in online forums discovered they were missing ingredients or equipment after beginning a recipe. Finding substitutions or adjusting recipes often required additional research and manual calculations.</p>
</div>

</div>

These findings revealed that challenges occurred throughout the baking process, from planning and preparation to execution and cleanup.

</section>

<section id="design-opportunities">

## Design Opportunities

<div class="findings-row findings-row--text findings-row--four">

<div class="finding-text-card">
  <p class="finding-text-card-title">01 Create a More Flexible Baking Experience</p>
  <p class="finding-text-card-body">Allow users to adapt recipes to their needs instead of following fixed instructions and measurements.</p>
</div>

<div class="finding-text-card">
  <p class="finding-text-card-title">02 Reduce Manual Calculations</p>
  <p class="finding-text-card-body">Automate recipe adjustments and conversions to minimize errors and reduce cognitive load during baking.</p>
</div>

<div class="finding-text-card">
  <p class="finding-text-card-title">03 Support Preparation and Problem-Solving</p>
  <p class="finding-text-card-body">Help users navigate missing ingredients and unexpected situations without disrupting their workflow.</p>
</div>

<div class="finding-text-card">
  <p class="finding-text-card-title">04 Provide Guidance Throughout the Process</p>
  <p class="finding-text-card-body">Support users from planning and preparation to execution with tools that increase confidence and visibility.</p>
</div>

</div>

</section>

<section id="design-process">

## Design Process

I developed the user flows, information architecture, and wireframes based on research findings. Once the 
experience was defined, I used Claude to rapidly explore visual directions and refine interface details. The 
final prototype combines research-driven UX decisions with AI-assisted visual iteration.

<div class="reframe-row">

<div class="finding-card-media process-media-1">
  <img src="/projects/baking-app/wireframes.png" alt="Wireframes" />
</div>
<div class="finding-card-copy process-copy-1">
  <p class="finding-card-title">Wireframes</p>
  <p class="finding-card-body">I developed the user flows, information architecture, and wireframes based on research findings to define the core baking experience.</p>
</div>
<span class="reframe-arrow process-arrow-1" aria-hidden="true">→</span>

<div class="finding-card-media process-media-2">
  <img src="/projects/baking-app/claude-exploration.png" alt="Claude Exploration" />
</div>
<div class="finding-card-copy process-copy-2">
  <p class="finding-card-title">Claude Exploration</p>
  <p class="finding-card-body">Once the experience was defined, I refined the screens once on Figma, then used Claude to rapidly explore visual directions and refine interface details.</p>
</div>
<span class="reframe-arrow process-arrow-2" aria-hidden="true">→</span>

<div class="finding-card-media process-media-3">
  <img src="/projects/baking-app/claude-final.png" alt="Final Screens" />
</div>
<div class="finding-card-copy process-copy-3">
  <p class="finding-card-title">Final Screens</p>
  <p class="finding-card-body">The final prototype combines research-driven UX decisions with AI-assisted visual iteration.</p>
</div>

</div>

</section>


<section id="design-decision">

## Design Decisions

Research insights were translated into a series of design decisions that shaped the final experience.

<table class="research-methods-table">
  <thead>
    <tr>
      <th>Research Insight</th>
      <th>Design Decision</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Users adjust recipes frequently</td>
      <td>Dynamic recipe scaling</td>
    </tr>
    <tr>
      <td>Manual conversions are frustrating</td>
      <td>Automated measurement conversion</td>
    </tr>
    <tr>
      <td>Missing ingredients interrupt baking</td>
      <td>Ingredient substitutions</td>
    </tr>
    <tr>
      <td>Users juggle multiple tasks</td>
      <td>Guided baking workflow</td>
    </tr>
  </tbody>
</table>


</section>

<section id="solution">

## Final Solution

The final concept supports users throughout the baking process, through adapting recipes to their needs through intelligent scaling, measurement conversion, ingredient substitution, and guided baking support. 

<div class="section-image">
  <img src="/projects/baking-app/final-solution.png" alt="Interaction model" />
</div>

### Key Features

<div class="features-row">

<figure class="feature-card">
  <p class="feature-card-title">01 Discover</p>
  <img src="/projects/baking-app/discover.png" alt="Recipe Discovery" />
  <figcaption>Users can browse, search, and organize recipes in a centralized library, making it easier to save, revisit, and manage recipes in one place.</figcaption>
</figure>

<figure class="feature-card">
  <p class="feature-card-title">02 Adapt</p>
  <img src="/projects/baking-app/adapt.png" alt="Flexible measurement conversion" />
  <figcaption>Recipes can be customized through dynamic scaling, measurement conversion, ingredient substitutions, and automatic recalculation. These tools reduce manual calculations and help users confidently adjust recipes based on available ingredients, serving sizes, and personal preferences.</figcaption>
</figure>

<figure class="feature-card">
  <p class="feature-card-title">03 Bake</p>
  <img src="/projects/baking-app/Bake.png" alt="Baking screens" />
  <figcaption>A guided baking mode provides step-by-step instructions, progress tracking, and integrated timers to help users stay focused and keep track of their progress throughout the baking process.</figcaption>
</figure>

</div>


</section>


<section id="reflection">

## Reflection

This project taught me the importance of looking beyond the primary task users are trying to accomplish. While baking appears straightforward, research revealed that many challenges stemmed from adapting recipes, managing ingredients, and making decisions throughout the process. These insights shaped a solution focused on flexibility and reducing cognitive load.

The project also allowed me to explore AI-assisted design workflows, using AI to rapidly iterate on visual concepts while grounding design decisions in user research and product strategy.

<div class="section-image">
  <img src="/projects/baking-app/final-thoughts.png" alt="Final thoughts" />
</div>

</section>
