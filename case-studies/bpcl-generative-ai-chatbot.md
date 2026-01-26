# Generative AI Customer Assistance Chatbot for BPCL

## Product Overview

Bharat Petroleum Corporation Limited (BPCL) operates large-scale customer support and internal service operations that handle thousands of user queries related to processes, SOPs, and operational workflows. Traditionally, these queries were addressed through call centers, static FAQs, and manual ticketing systems, resulting in high operational overhead and inconsistent user experiences.

To modernize this interaction layer, BPCL initiated the development of a **Generative AI–based Customer Assistance Chatbot**. The platform was designed to serve as an intelligent, multilingual, and voice-enabled interface capable of answering user queries directly from BPCL’s internal knowledge sources, while seamlessly integrating with existing call management and ticketing systems.

The chatbot was built as a governed enterprise AI system—restricted from using open internet data and designed to operate strictly within BPCL’s Azure environment.

---

## My Role

I worked as the **Product & Solution Owner** for the BPCL Generative AI Chatbot initiative.

My role involved translating BPCL’s operational requirements and Scope of Work into a structured AI product roadmap. I collaborated with BPCL stakeholders, AI engineers, cloud architects, and UX teams to define scope, prioritize features across phases, and ensure the chatbot aligned with enterprise security and performance expectations.

I owned:
- Product vision and phased rollout strategy  
- Conversational and voice interaction design  
- Multilingual and personalization requirements  
- Governance, safety, and non-internet AI constraints  
- Milestone acceptance criteria and UAT readiness  

---

## The Problem

BPCL faced multiple challenges in managing user queries at scale:

- High dependency on human agents for repetitive queries  
- Static FAQs that could not handle conversational follow-ups  
- Language barriers across diverse user bases  
- Limited accessibility for voice-based interactions  
- Manual escalation and ticket creation workflows  
- Inconsistent response quality across channels  

The organization needed a solution that could **reduce call center load while improving accuracy, accessibility, and response speed**—without compromising data security or compliance.

---

## Product Vision

> Enable BPCL users to resolve queries through natural conversation—quickly, accurately, and securely—while preserving seamless human escalation when needed.

The chatbot was envisioned as:
- A **first-line digital support agent**  
- A **multilingual, voice-enabled conversational interface**  
- A **document-grounded AI system** with strict content controls  
- A foundation for scalable, AI-driven customer support  

The vision emphasized **assistive AI**, not autonomous decision-making.

---

## Core Capabilities

### Document-Grounded Query Resolution

The chatbot answers queries using:
- BPCL FAQ documents  
- SOP PDF documents  
- Structured data from SQL tables  

All responses are strictly grounded in approved internal sources, ensuring accuracy and auditability.

### Multilingual Conversational Support

The chatbot supports English, Hindi, and Marathi with:
- Automatic language detection  
- Seamless language switching mid-conversation  
- Consistent conversational context across turns  

### Context-Aware Responses

The system retains context from the last five user interactions within a session, allowing:
- Personalized replies  
- Intelligent follow-up responses  
- Reduced need for repeated inputs  

### Voice-Based Interaction

Users can interact with the chatbot using both text and voice. Voice input is supported across all primary languages, improving accessibility and user convenience.

### Intelligent Follow-Up Questions

When user intent is ambiguous, the chatbot asks targeted follow-up questions to refine understanding and improve response accuracy.

### Feedback Collection & Session Management

The chatbot captures:
- User feedback for continuous improvement  
- Session history for personalization  
- Secure chat logs stored in NoSQL databases  

### Human Escalation & Integration Readiness

Queries that cannot be resolved by the chatbot are escalated to human agents. The design supports integration with existing ticketing and call center systems for seamless handover.

---

## Workflow / User Experience

1. User opens the BPCL web portal or support interface  
2. Chatbot icon launches the conversational window  
3. Welcome message and disclaimer are displayed  
4. User interacts via text or voice  
5. Chatbot retrieves responses from internal knowledge sources  
6. Follow-up questions are asked where required  
7. Unresolved queries are escalated to human agents  
8. Feedback is captured at the end of the interaction  

The experience is designed to be simple, intuitive, and accessible.

---

## Technology Foundation

The BPCL chatbot was built on a **Microsoft Azure–based AI architecture**:

- **LLM Layer:** Azure OpenAI for conversational intelligence  
- **Search & Retrieval:** Document-grounded knowledge base  
- **Speech Services:** Voice-to-text and text-to-speech  
- **Backend:** Azure App Services and APIs  
- **Data Storage:** SQL and NoSQL databases  
- **Security:** Role-based access, controlled data exposure  
- **Scalability:** Designed to scale from PoC to production workloads  

The platform ensures enterprise-grade performance, security, and governance.

---

## Impact / Outcomes

- Reduced dependency on call center agents for routine queries  
- Faster query resolution and improved response consistency  
- Improved accessibility through multilingual and voice support  
- Better user satisfaction and engagement  
- Clear path to production-scale deployment  
- Established a governed AI foundation for future BPCL initiatives  

---

## Key Learnings

- In enterprise support, **accuracy matters more than creativity**
- Document grounding is essential for trust in AI systems
- Voice interaction significantly improves accessibility
- Context retention reduces friction in conversational flows
- AI delivers maximum value when paired with seamless human escalation