# Generative AI–Powered Job Matching Platform for NSDC JobX

## Product Overview

The National Skill Development Corporation (NSDC) operates **JobX**, a national-level employment and skilling platform designed to connect job seekers, training providers, and recruiters. While the platform already hosted large volumes of candidate resumes, job descriptions, and certification data, the recruitment experience remained largely manual and keyword-driven.

Recruiters spent significant time filtering resumes, while candidates struggled to identify roles aligned with their skills and certifications. The challenge was not lack of data—but the lack of **intelligent matching and insight extraction at scale**.

To address this, NSDC initiated a **Generative AI–powered enhancement of the JobX platform**, focused on transforming recruitment workflows through AI-driven resume analysis, keyword intelligence, and job recommendations. The initiative was executed as a milestone-based Proof of Concept (PoC) on Microsoft’s Data & AI stack, with a clear roadmap toward a scalable national deployment.

---

## My Role

I worked as the **Product & Solution Owner** for the NSDC JobX Generative AI initiative.

My role involved translating NSDC’s workforce and recruitment objectives into a coherent AI product strategy, while ensuring the solution remained explainable, ethical, and PoC-feasible. I worked closely with NSDC stakeholders, recruiters, AI engineers, and cloud architects to define scope, prioritize use cases, and guide delivery across milestones.

I was responsible for:
- Product vision and use-case prioritization  
- Defining recruiter and candidate personas  
- Translating BRD and SOW into AI-ready workflows  
- Ensuring responsible and bias-aware AI design  
- Driving milestone acceptance and PoC success criteria  

---

## The Problem

Recruitment on large public platforms faces unique challenges:

- Recruiters manually sift through hundreds of resumes  
- Keyword searches miss relevant candidates due to vocabulary mismatch  
- Candidates are unsure which roles best match their profiles  
- Certifications and skill training data are underutilized  
- Hiring decisions lack confidence scores or explainability  

At a national scale, these inefficiencies directly impact employability outcomes and recruiter productivity. NSDC needed a **smart, assistive recruitment layer**—not a replacement for human judgment, but a force multiplier.

---

## Product Vision

> Build an AI-powered recruitment intelligence layer that helps recruiters hire faster and helps candidates discover the right opportunities—fairly, transparently, and at scale.

The platform was envisioned as:
- A **decision-assist system** for recruiters  
- A **career discovery engine** for candidates  
- A **responsible AI system**, compliant with data privacy and fairness principles  
- A foundation for future AI-led skilling and employability initiatives  

---

## Core Capabilities

### Resume Recommendation for Recruiters

The platform analyses large volumes of candidate resumes and JobX profiles stored in the data lake. Recruiters can search using keywords, and the system returns **ranked candidate profiles** with confidence scores, reflecting relevance to the search intent.

This significantly reduces manual screening effort while improving match quality.

### Keyword Intelligence & Search Refinement

Recruiters receive **real-time keyword suggestions** while searching. The system recommends related or adjacent skills and terms, enabling broader and more accurate discovery of relevant candidates—even when recruiters don’t know the exact terminology.

### Job Recommendation for Candidates

Candidates can upload their resumes or use their JobX profiles to receive **AI-driven job recommendations**. The system matches candidate skills, experience, and certifications against available job descriptions, presenting tailored opportunities aligned with their profile.

This shifts the experience from manual job hunting to guided career discovery.

### Multi-Persona Experience

The platform supports two primary personas:
- **Recruiters**, focused on candidate discovery and ranking  
- **Candidates**, focused on job discovery and fitment  

Each persona experiences a simplified UI designed to demonstrate AI value without overwhelming complexity—aligned with PoC goals.

---

## Workflow / User Experience

For recruiters:
1. Upload or index job descriptions  
2. Search candidates using keywords  
3. Receive ranked resumes with confidence scores  
4. View detailed resume insights and metadata  

For candidates:
1. Upload resume or use JobX profile  
2. AI analyses skills and experience  
3. Platform recommends best-matching jobs  
4. Candidate explores roles aligned with profile  

The workflows were intentionally kept minimalistic to highlight backend intelligence rather than UI polish.

---

## Technology Foundation

The JobX enhancement was built on a **Microsoft Azure Data & AI stack**, optimized for scalability and experimentation:

- **Generative AI & NLP:** Azure OpenAI for semantic understanding and matching  
- **Document Processing:** Azure Document Intelligence for resume parsing  
- **Search & Ranking:** Azure AI Search for indexing and relevance scoring  
- **Data Storage:** Azure Data Lake for resumes, JDs, and certification data  
- **Security:** Role-based access control and secure data isolation  

The PoC was deployed in NSDC’s Azure environment with a strong focus on validation over optimization.

---

## Impact / Outcomes

- Faster recruiter shortlisting through ranked recommendations  
- Improved candidate-job fit visibility  
- Reduced dependency on exact keyword matches  
- Better utilization of certification and skill data  
- Demonstrated feasibility of AI-led recruitment at national scale  
- Clear roadmap for expanding into advanced AI use cases  

---

## Key Learnings

- Recruitment AI must **assist decisions, not automate hiring**
- Confidence scores and ranking build trust with recruiters
- Vocabulary mismatch is a major hidden problem in hiring
- Responsible AI and fairness are non-negotiable in public platforms
- Even a focused PoC can unlock long-term platform transformation

---

This case study represents how **Generative AI can responsibly enhance employability ecosystems**, balancing scale, transparency, and human judgment.
