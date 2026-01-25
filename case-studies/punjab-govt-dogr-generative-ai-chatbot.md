# Generative AI Chatbot for Punjab Government (DoGR)

## Product Overview

The Department of Governance Reforms & Public Grievances (DoGR), Government of Punjab, set out to modernize how citizens interact with government services. Despite having portals like E-Sewa and Connect, citizens still struggled with fragmented information, language barriers, and the need for repeated physical visits to Sewa Kendras for basic queries.

To address this gap, a **cloud-based Generative AI chatbot** was conceptualized and delivered as a **single conversational access layer** for government services. The chatbot enables citizens to ask questions in natural language and receive accurate, policy-compliant responses related to services, documents, fees, timelines, and application status.

Unlike open internet chatbots, this system was intentionally designed to respond **only from approved government documents**, making it suitable for regulated public-sector use while still delivering a modern conversational experience.



---

## My Role

I worked as the **Product & Solution Owner** for the DoGR AI Chatbot initiative, owning the product lifecycle from requirement translation to deployment readiness.

My role sat at the intersection of government stakeholders, business analysts, AI engineers, and Azure cloud teams. I translated the Business Requirement Document (BRD) and policy constraints into a practical product roadmap, defined scope boundaries for the pilot and production phases, and ensured the chatbot met both citizen experience and governance expectations.

Beyond feature definition, I was deeply involved in conversation design, safety guardrails, milestone acceptance criteria, and UAT readiness—ensuring the solution could scale beyond a proof of concept into a production-grade GovTech platform.

---

## The Problem

Citizens seeking information about government services faced multiple friction points:

- Static websites that were difficult to navigate
- Overloaded call centers with limited availability
- Heavy dependence on physical visits to Sewa Kendras
- Inconsistent information across portals and touchpoints
- Language barriers for non-English speakers

From the government’s perspective, this resulted in increased operational costs, staff overload, and avoidable citizen dissatisfaction—especially during peak service periods.

The challenge was not the absence of data, but the **absence of an intuitive, scalable access mechanism** that could deliver accurate information in a citizen-friendly manner.

---

## Product Vision

> To make government services accessible through simple conversation—without compromising accuracy, compliance, or trust.

The chatbot was envisioned as a **digital front desk for DoGR**, capable of answering routine citizen queries at scale while remaining tightly governed. It needed to balance the power of generative AI with strict content controls, ensuring responses were explainable, auditable, and aligned with official documentation.

This vision laid the foundation for future AI-enabled governance initiatives across departments.

---

## Core Capabilities

### Multilingual Conversational Experience

The chatbot was designed to support English, Punjabi, Hindi, and Hinglish from day one. Language selection happens at the beginning of the interaction, and the chatbot maintains conversational context across turns, enabling natural and inclusive interactions for a diverse citizen base.

### Government Services Discovery

Citizens can ask about E-Sewa and Connect portal services in plain language. The chatbot responds with structured, easy-to-understand information covering service descriptions, delivery timelines, and procedural guidance—eliminating the need to navigate multiple web pages.

### Documents, Links, and Fees

For each service, the chatbot provides:
- Lists of required supporting documents
- Government and facilitation fee details
- Clickable links that open official documents in new tabs

Each response is grounded in approved source material, reinforcing trust and transparency.

### Application Status & Guided Assistance

Where applicable, the chatbot guides users to provide the required inputs for tracking application status and offers clear next steps—reducing unnecessary follow-ups and in-person visits.

### Compliance & Safety Guardrails

Given the public-sector context, strict controls were implemented:
- Mandatory disclaimer and chatbot privacy policy
- Explicit guidance to avoid entering personal data
- Responses restricted strictly to indexed government documents
- No open internet or speculative answers

![Capabilities](../assets/images/case-studies/punjab-govt-dogr-generative-ai-chatbot/capabilities.png)

---

## Workflow / User Experience

The user experience was designed to be simple and predictable:

1. A citizen opens the Punjab Government portal
2. The chatbot avatar appears with a welcome message and disclaimer
3. The user selects a preferred language
4. Queries are asked in natural, conversational language
5. The chatbot retrieves answers from indexed DoGR documents
6. Relevant links, documents, and fees are displayed inline
7. The conversation continues contextually without restarting

This flow minimized cognitive load while maintaining government-mandated transparency.

![Workflow](../assets/images/case-studies/punjab-govt-dogr-generative-ai-chatbot/workflow.png)

---

## Technology Foundation

The chatbot was built entirely on a **Microsoft Azure-based architecture**, aligned with government security and scalability standards.

Key components included:
- Azure OpenAI for natural language understanding and response generation
- Azure Cognitive Search for document-grounded retrieval
- Azure Data Lake Gen2 for secure document storage
- Azure App Services and Functions for backend orchestration
- Azure AD, Private Endpoints, Firewall, and Defender for security
- Azure Monitor and Cost Management for observability and governance

The architecture ensured high availability, scalability during peak usage, and strict data isolation.

---

## Impact / Outcomes

The deployment of the Generative AI chatbot delivered tangible value:

- Citizens gained 24×7 access to government service information
- Physical dependency on Sewa Kendras was reduced for routine queries
- Call center load decreased significantly
- Information consistency improved across channels
- Multilingual access enhanced inclusivity and reach
- The department established a reusable foundation for future AI-led initiatives

---

## Key Learnings

- In GovTech, **trust and accuracy matter more than novelty**
- Document-grounded AI is essential for regulatory acceptance
- Multilingual support must be treated as a core requirement, not an add-on
- Clear scope boundaries are critical when deploying LLMs in public systems
- Product success depended more on workflow and governance design than model sophistication
