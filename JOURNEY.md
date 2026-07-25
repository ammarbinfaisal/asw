# JOURNEY.md

<!-- Structural and temporal design spec. Pairs with DESIGN.md. -->

For visual tokens and composition, see `DESIGN.md`.

## Job

**Job story (Klement):** When paid acquisition is expensive or opaque, I want an expert to connect campaign decisions to trustworthy measurement, so I can invest with confidence.

**Functional job:** improve Google Ads performance and measurement.  
**Emotional job:** feel confident that budget decisions are evidence-led.  
**Social job:** be seen as a responsible growth leader.

## Journey

**Actor:** founder or marketing lead.  
**Scenario:** assessing whether Abdul can improve PPC performance.  
**Scope:** future-state, from landing-page entry to consultation contact.

| Phase | Action | Mindset | Emotion | Touchpoint | Opportunity |
|---|---|---|---|---|---|
| Orient | Reads promise and scope | “Is this relevant to my spend?” | Cautious | Hero | Lead with the business outcome and specialist category |
| Evaluate | Scans credentials, services, and method | “Can he diagnose my situation?” | Curious | Metric strip and expertise | Make capability concrete without jargon |
| Verify | Reviews measurement approach and conversion impact | “Where is the evidence?” | Reassured | Results | Explain the decision-making value of tracking near the CTA |
| Contact | Opens WhatsApp | “Can I discuss this without a sales maze?” | Decisive | Contact panel | One direct, clearly labeled action |

**Decision model:** Google messy middle (2020); the visitor can move between expertise and evidence before contacting.  
**Research basis:** UNGROUNDED — inferred from the existing site content; validate with analytics or stakeholder interviews.

## IA

**Organization:** task-led single-page narrative.  
**Structure:** sequential with contextual anchor links.  
**Global labels:** Expertise, Approach, Results, About, Contact.  
**Validation:** NOT VALIDATED; labels are explicit and preserve the existing section content.

## Flow

### Request a consultation

**Type:** task flow  
**Entry:** hero, about, results, or final contact CTA  
**Goal:** open a direct WhatsApp conversation

1. Visitor selects “Book a free consultation” or “Start a conversation”.
2. Page moves to the contact section or opens WhatsApp.
3. WhatsApp provides the external success state.

**Error state:** if WhatsApp cannot open, the visible website link remains as an alternate contact path.  
**Success state:** WhatsApp opens with Abdul’s number and a prefilled consultation message.

## Page specs

### Home

**Purpose:** establish relevance, demonstrate competence, and create a direct consultation path.

**Entry points:** direct URL, search result, referral, contextual social link.

**Content blocks:**

1. Header — identity, speciality, compact in-page navigation.
2. Hero — business-growth promise, supporting scope, primary and evidence CTAs.
3. Evidence strip — certifications and instrumentation expertise.
4. Expertise — four existing PPC and growth service areas.
5. Approach — audit, instrument, optimize.
6. Results — conversion intelligence and optimization impact.
7. About — existing professional biography.
8. Contact — consultation promise and WhatsApp CTA.
9. Footer — website, LinkedIn, copyright.

**States:** static default; no loading or empty state; external-link failure falls back to visible URL text.  
**Primary CTA:** Book a free consultation → Contact → WhatsApp.  
**Exit:** WhatsApp, LinkedIn, or abdulsamadwani.com.

## Marketing spine

**Awareness:** solution-aware.  
**Sequence:** offer → proof → solution → method → results → guide credibility → final CTA.
**StoryBrand role:** visitor is the hero; Abdul is the expert guide.  
**Conversion principle:** Shapiro’s `Purchase = Desire − (Labor + Confusion)`; every block either adds evidence or makes the engagement clearer.
