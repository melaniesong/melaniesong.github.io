---
cover: "/projects/sensory-accessibility/thumbnail-sensory-accessibility.png"
title: "Designing for Predictability in Campus Spaces"
descriptor: "Helping students identify sensory-friendly study spaces through real-time environmental information."
role: "UX Researcher & Designer"
timeline: "10 weeks"
teamSize: "3 designers"
responsibilities: "Research Planning • Interviews • Synthesis • Prototyping • Testing"
tools: ["Figma", "Semi-structured interviews", "Usability testing", "Surveys", "Guided Tours"]
problem: "Students with sensory sensitivities often struggle to predict whether a campus environment will be comfortable enough to focus, participate, or remain in for extended periods of time. Existing accessibility resources focus on physical accommodations, leaving sensory needs largely invisible."
impact: "Reframed sensory accessibility from a personal coping challenge into an information accessibility problem, resulting in a concept that helps students make informed decisions before entering a space."
outcomes:
  - "Identified noise, crowding, and uncertainty as the primary barriers affecting participation."
  - "Developed a real-time environmental information system for study spaces and events."
  - "Validated the concept through usability testing with students."
metrics:
  - label: "Survey Participants"
    value: "14 students"
  - label: "Semi-structured Interviews and Guided Tours"
    value: "5 participants"
  - label: "Semi-structured Interviews with Subject Matter Experts"
    value: "2 participants"
  - label: "Usability tests"
    value: "5 participants"


nav:
  - id: overview
    label: Overview
  - id: challenge
    label: The Challenge
  - id: research
    label: Our Findings
  - id: key-decision
    label: Reframing Accessibility
  - id: solution
    label: Our Solution
  - id: design-decision
    label: Design Decisions
  - id: reflection
    label: Reflection

draft: false
---

<!-- Copy this file, rename it (e.g. my-project.md), set draft: false, and fill in each section below.
     Each <section> id must match an entry in the nav frontmatter array. -->

<section id="overview">

## Overview

This project explored how UW could better support students with sensory sensitivities when navigating campus spaces and events. Through mixed-method research, we discovered that the biggest challenge was often not the sensory stimulus itself, but the inability to anticipate it beforehand.

</section>

<section id="challenge">

## The Challenge

Most campus accessibility initiatives focus on physical access needs. However, many students experience barriers related to noise, crowding, lighting, and environmental unpredictability that are rarely communicated before entering a space.

One participant described avoiding unfamiliar campus events because she couldn't predict how overwhelming the environment would be. She often relied on prior experience, routines, and advance planning to decide whether a space would feel manageable.

<div class="insight-row">
  <img src="/projects/sensory-accessibility/insight-1.png" alt="Insight 1" />
  <img src="/projects/sensory-accessibility/insight-2.png" alt="Insight 2" />
  <img src="/projects/sensory-accessibility/insight-3.png" alt="Insight 3" />
</div>

To understand these experiences, we worked with students who regularly navigate sensory challenges in academic and social settings.

### Participants
- Students registered with DRS
- Students who self-identified as having sensory sensitivities
- Accessibility stakeholders
- Event organizers and campus staff

### Research Methods

<table class="research-methods-table">
  <thead>
    <tr>
      <th>Method</th>
      <th>Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Literature Review</td>
      <td>Understand sensory accessibility challenges and existing solutions</td>
    </tr>
    <tr>
      <td>Survey (14 responses)</td>
      <td>Identify common barriers and patterns across students</td>
    </tr>
     <tr>
      <td>Guided Tours (5 participants)</td>
      <td>Observe sensory experiences in real campus spaces</td>
    </tr>
    <tr>
      <td>Semi-structured Interview (5 participants)</td>
      <td>Explore individual needs, behaviors, and strategies for navigating sensory challenges</td>
    </tr>
    <tr>
      <td>Stakeholder Interviews </td>
      <td>Understand institutional priorities, constraints, and opportunities for implementation</td>
    </tr>
  </tbody>
</table>

</section>

<section id="research">

## Our Findings

> "If I know what to expect, I can prepare. It's when I don't know that it becomes stressful."

Students weren't avoiding spaces. They were avoiding uncertainty.

Across surveys, semi-structured interviews, and guided tours, a consistent pattern emerged: participants spent significant effort evaluating whether an environment would be manageable before deciding to enter.

<div class="findings-row">

<figure class="finding-card">
  <img src="/projects/sensory-accessibility/finding-1.png" alt="Finding 1" />
  <figcaption>10 out of 14 students we surveyed said that they are at least moderately overstimulated on campus</figcaption>
</figure>

<figure class="finding-card">
  <img src="/projects/sensory-accessibility/finding-2.png" alt="Finding 2" />
  <figcaption>Guided tours revealed that 5/5 students struggled most with unpredictability and expressed a desire for real-time information about noise and crowd levels</figcaption>
</figure>

<figure class="finding-card">
  <img src="/projects/sensory-accessibility/finding-3.png" alt="Finding 3" />
  <figcaption>0 out of 5 guided tour participants knew about the Scout website that UW IT built</figcaption>
</figure>

</div>

Our research also showed that sensory needs varied widely across students. Some preferred quiet, isolated study spaces, while others worked best with moderate activity, ambient noise, and natural light. Rather than a single universally accessible environment, students needed reliable information that helped them predict what a space would feel like before arriving.

Core Insight

> Students weren't looking for quiet. They were looking for predictability.



</section>

<section id="key-decision">

## Reframing Accessibility

**We stopped designing quiet spaces and started designing informed choices.**

<div class="reframe-row">

<figure class="finding-card">
  <img src="/projects/sensory-accessibility/assume.png" alt="What we assumed" />
  <figcaption>What we assumed</figcaption>
</figure>

<span class="reframe-arrow" aria-hidden="true">→</span>

<figure class="finding-card">
  <img src="/projects/sensory-accessibility/learned.png" alt="What we learned" />
  <figcaption>What we learned</figcaption>
</figure>

<span class="reframe-arrow" aria-hidden="true">→</span>

<figure class="finding-card">
  <img src="/projects/sensory-accessibility/design-opp.png" alt="Design opportunity" />
  <figcaption>Design opportunity</figcaption>
</figure>

</div>

Many accessible spaces already existed. Students simply lacked reliable information about what those environments would feel like before arriving.

</section>

<section id="solution">

## Our Solution

<div class="section-image">
  <img src="/projects/sensory-accessibility/interaction-model.png" alt="Interaction model" />
</div>

**Designed for informed decision-making**


Our solution addresses three challenges uncovered through research: helping students anticipate environmental conditions before arriving, navigate spaces once inside, and identify locations that match their individual sensory preferences.

</section>

<section id="design-decision">

## Design Decisions

<div class="decision-cards">

<article class="decision-card">
  <div class="decision-card-header">
    <span class="decision-card-number">01</span>
    <h3 class="decision-card-title">Making Scout Discoverable</h3>
  </div>
  <div class="decision-card-body">
    <div class="decision-block">
      <h4 class="decision-block-label">Research Insight</h4>
      <p>0 of 5 guided-tour participants had heard of UW Scout.</p>
    </div>
    <div class="decision-block">
      <h4 class="decision-block-label">Design Decision</h4>
      <p>Added Scout as a persistent entry point within the UW Libraries website.</p>
    </div>
    <div class="decision-block">
      <h4 class="decision-block-label">Why It Mattered</h4>
      <p>Students can't benefit from a tool they don't know exists.</p>
    </div>
    <div class="decision-card-image">
       <img src="/projects/sensory-accessibility/uw-scout.png" alt="Making Scout Discoverable" />
    </div>
  </div>
</article>

<article class="decision-card">
  <div class="decision-card-header">
    <span class="decision-card-number">02</span>
    <h3 class="decision-card-title">Designing for Predictability</h3>
  </div>
  <div class="decision-card-body">
    <div class="decision-block">
      <h4 class="decision-block-label">Research Insight</h4>
      <p>Students struggled with uncertainty.</p>
    </div>
    <div class="decision-block">
      <h4 class="decision-block-label">Design Decision</h4>
      <p>Added real-time noise and occupancy data.</p>
    </div>
    <div class="decision-block">
      <h4 class="decision-block-label">Why It Mattered</h4>
      <p>Students could evaluate a space before entering.</p>
    </div>
    <div class="decision-card-image">
       <img src="/projects/sensory-accessibility/odegaard-whole-floor.png" alt="Designing for Predictability" /> 
    </div>
  </div>
</article>

<article class="decision-card">
  <div class="decision-card-header">
    <span class="decision-card-number">03</span>
    <h3 class="decision-card-title">Reducing Cognitive Load</h3>
  </div>
  <div class="decision-card-body">
    <div class="decision-block">
      <h4 class="decision-block-label">Research Insight</h4>
      <p>Participants preferred simpler screens.</p>
    </div>
    <div class="decision-block">
      <h4 class="decision-block-label">Design Decision</h4>
      <p>Removed graph-heavy visualizations.</p>
    </div>
    <div class="decision-block">
      <h4 class="decision-block-label">Trade-offs</h4>
      <p>Less precision, more clarity.</p>
    </div>
    <div class="decision-card-image">
       <img src="/projects/sensory-accessibility/graphs.png" alt="Reducing Cognitive Load" /> 
    </div>
  </div>
</article>

<article class="decision-card">
  <div class="decision-card-header">
    <span class="decision-card-number">04</span>
    <h3 class="decision-card-title">Supporting Different Sensory Preferences</h3>
  </div>
  <div class="decision-card-body">
    <div class="decision-block">
      <h4 class="decision-block-label">Research Insight</h4>
      <p>No universally accessible space existed.</p>
    </div>
    <div class="decision-block">
      <h4 class="decision-block-label">Design Decision</h4>
      <p>Made recommendations based on environmental conditions.</p>
    </div>
    <div class="decision-block">
      <h4 class="decision-block-label">Why It Mattered</h4>
      <p>Students could choose spaces based on their own needs.</p>
    </div>
    <div class="decision-card-image">
       <img src="/projects/sensory-accessibility/recommendations.png" alt="Supporting Different Sensory Preferences" /> 
    </div>
  </div>
</article>

</div>

</section>

<section id="reflection">

## Reflection

This project changed how I think about accessibility. I initially approached the challenge as a question of accommodation, but the research revealed that information itself can be an accessibility tool. The experience reinforced the importance of defining the right problem before designing a solution.

If I continued the project, I would explore how the system could support campus events and temporary spaces where sensory conditions change frequently.

<div class="section-image">
  <img src="/projects/sensory-accessibility/final-thoughts.png" alt="Final thoughts" />
</div>

</section>
