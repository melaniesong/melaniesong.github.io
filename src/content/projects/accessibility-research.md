---
title: "Accessibility Research on Data Analysis Tool"
summary: "A Research Case Study about accessibility, particularly on the Street Diligence platform"
role: "UX Researcher"
team: "1 Researcher"
timeline: "December 2024"
tools: ["WebAim WCAG", "WAVE", "NVDA"]
tags: ["Accessibility Audit", "UX Evaluation", "Inclusive Research"]
outcomes:
  - "Design Recommendations to the current platform"
cover: "/projects/sensory-accessibility/cover.jpg"
gallery:
  - "/projects/sensory-accessibility/screen-1.png"
  - "/projects/sensory-accessibility/screen-2.png"
---

## Context
Inspired by a friend'
s temporary visual impairment, I began questioning how accessible
Street Diligence's client portal truly was for users with visual disabilities. The main data analysis page had neverbeen formally evaluated for accessibility. 

## Problem
Through research on accessibility standards and usability evaluation, I discovered critical gaps: 
- the visual hierarchy didn't adequately emphasize important information
- users had no control over text formatting to suit their individual needs

For users with visual impairments, low vision, or
reading difficulties, navigating dense financial data without these accommodations
could make the tool frustrating or even unusable.

Research question: How might we re-design the Term Analysis page so that it is more inclusive and accessible?

## My role
Researcher + UX Auditor

## Approach

### Project Goals
For this project, my goal was to evaluate the accessibility of the Term Analysis page in
our client portal and provide recommendations for improvement. To scope the project
realistically, I came up with 3 specific goals:
- Evaluate the current functionality and accessibility of the Term Analysis page
- Identify significant accessibility challenges within the Term Analysis page
- Explore potential solutions to address identified issues and user pain points

### Research
To access the accessibility of our client portal, I ran 3 different tests using different tools
and methods. From these 3 different tests, I generated some insights, detailed below.
NVDA Testing Insights
- Inconsistent or missing semantic labels prevented screen readers from accurately interpreting key interface elements
- Misidentified interactive elements and unclear button states disrupted user expectations
- Inefficient keyboard navigation and illogical focus order created barriers for users relying on non-visual input methods
- Inaccurate or confusing screen reader feedback led to misunderstandings of on-screen content

WebAim WCAG Testing Insights
- Low contrast in key interface elements made text and controls difficult to distinguish
- Lack of adjustable font sizes limited accessibility for users with visual impairments who rely on customizable text for comfort and clarity
- Missing descriptive labels on links and buttons hindered screen reader usability
- Content failed to maintain functionality at higher zoom levels

WAVE Testing Insights
- Low color contrast across the interface reduced legibility
- Missing alt text prevented screen readers from conveying essential visual information
- Thousands of ARIA-related errors revealed gaps in semantic markup
- The absence of the left-hand menu in the tab order disrupted navigation flow

### Design Sprints
- IA / flows
- Key decisions
- Iterations
To break down our problem, I decided to focus on one particular area first: readability. I picked this because I think this one has the largest impact on our users. To start, I created some low fidelity wireframes and mock-ups where users can select different types of font sizing and line spacing. 


### Validation
- What you tested
- What changed as a result
After my re-design, the contrast was increased, leading to better readability. 

## Solution
The final design is a proposed design recommendation to the document viewer side of the data analysis page. Options to adjust line spacing and font size were added. 

## Outcome
Although I have made a few mock-ups and designs for some ideas to improve readability, I think I am very far from solving the issue. I have consolidated a list of recommendations that I have not explored in this case study. In the future, I hope to explore each of these recommendations and come up with more solutions.
- Add Alternative Text so that NVDA and other screen reading tools can be used effectively
- Make popups accessible
- Update Navigation Order
- make HTML document viewer more accessible
- Imrpove resolution adaptability
 

## Reflection
Through exploration of the Term Analysis page on the client portal, I learned a lot! Here are a few of my key takeaways:

Visual Accessibility issues can come in many forms! For example, I learned to to solve the issue of readability, we can tackle it from many different perspectives, like font size, line spacing, contrast etc.

It is important to use many different ways to research. Throughout my research, since this is a personal project, I heavily relied on different types of technology to help. I was able to conduct some exploratory testing by myself, as well as some automated testing using WAVE. I was able to gather a more robust set of insights after combining the results from both types of testing. 

Caring and enjoying what I am working on makes the process more fun!
