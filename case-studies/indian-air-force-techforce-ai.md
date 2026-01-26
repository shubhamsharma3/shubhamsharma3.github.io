# TechForce AI Platform for Indian Air Force

## Product Overview

The Indian Air Force (IAF) operates highly complex, mission-critical technology systems that demand reliability, security, and long-term maintainability. Over time, a large portion of these systems had evolved into **monolithic codebases, extensive technical documentation, and siloed databases**, making modernization and information retrieval increasingly difficult.

To address these challenges, the IAF initiated **TechForce AI** — a secure, air-gapped **Generative AI platform** designed to assist internal teams with document intelligence, database querying, and large-scale application modernization.

The platform was architected to operate **entirely in a disconnected environment**, ensuring zero exposure to the public internet while still leveraging advanced Generative AI capabilities for productivity, modernization, and operational efficiency.

---

## My Role

I worked as the **Product & Solution Owner** for the TechForce AI initiative.

My role involved translating defense-grade operational requirements into a practical AI platform design while ensuring absolute adherence to security, isolation, and governance constraints. I collaborated closely with domain experts, infrastructure architects, AI engineers, and security teams to define scope, validate feasibility, and shape the platform roadmap.

Key responsibilities included:
- Defining product vision aligned with defense use cases  
- Translating modernization goals into AI-enabled workflows  
- Designing air-gapped, on-prem AI architecture  
- Ensuring document-grounded and database-grounded AI responses  
- Aligning infrastructure sizing with concurrent usage needs  
- Driving milestone-based delivery and acceptance criteria  

---

## The Problem

The Indian Air Force faced several structural technology challenges:

- Large monolithic applications that were difficult to maintain or modernize  
- Extensive PDF-based technical documentation with limited searchability  
- SQL databases accessible only through technical query interfaces  
- High dependency on senior engineers for legacy system understanding  
- Strict security requirements preventing cloud or internet-based AI usage  

Traditional tools were insufficient to address these issues simultaneously. The IAF needed a **secure AI acceleration layer** that could enhance productivity without compromising operational security.

---

## Product Vision

> Enable the Indian Air Force to modernize, analyze, and operate its technology systems faster using secure, air-gapped Generative AI.

TechForce AI was envisioned as:
- A **trusted internal AI assistant**, not an external system  
- A **document- and data-grounded platform**, not a generic chatbot  
- A **modernization accelerator** for legacy applications  
- A future-ready AI foundation aligned with defense security standards  

The vision emphasized **control, explainability, and isolation** over open-ended AI capability.

---

## Core Capabilities

### Legacy Application Modernization Assistance

TechForce AI supports:
- Code understanding and summarization  
- Language-to-language code conversion  
- Monolith-to-microservices migration guidance  
- Code optimization and review suggestions  

This significantly reduces the time required to analyze and modernize legacy systems.

### Document Intelligence Chatbot (RAG Mode)

The platform includes a secure chatbot capable of:
- Ingesting large volumes of PDF documentation  
- Using Retrieval-Augmented Generation (RAG)  
- Answering queries strictly from indexed documents  

This enables rapid access to technical manuals, operational guidelines, and internal documentation.

### SQL Database Information Assistant

TechForce AI allows users to:
- Query SQL databases using natural language  
- Retrieve structured insights without writing SQL  
- Simplify access to mission-critical data  

This capability democratizes data access while preserving security controls.

### Secure, Air-Gapped Deployment

The entire platform operates:
- Without internet connectivity  
- Within isolated infrastructure  
- With role-based access control and encryption  

This ensures compliance with defense-grade security requirements.

---

## Workflow / User Experience

1. Authorized user logs into the TechForce AI platform  
2. User selects use case: document query, database query, or code assistance  
3. AI processes the request using local models and indexed data  
4. Responses are generated with strict grounding and traceability  
5. User iterates through follow-up queries within the same context  
6. All interactions remain fully contained within the air-gapped system  

The experience was designed to be intuitive while maintaining strict access control.

---

## Technology Foundation

TechForce AI was deployed on **high-performance, on-prem infrastructure** optimized for Generative AI workloads:

- **LLM:** Microsoft Phi-3 Large Language Model  
- **Architecture:** Air-gapped, disconnected container deployment  
- **CPU:** Dual Intel Xeon Platinum (64 cores)  
- **GPU:** 2× NVIDIA A100 (80GB VRAM each)  
- **Memory:** 512 GB DDR4 ECC  
- **Storage:** NVMe SSD + HDD/NAS with RAID  
- **Security:** RBAC, encryption, full network isolation  

The platform was sized to support **50 users with up to 20 concurrent queries** while maintaining low latency.

---

## Impact / Outcomes

- Accelerated understanding of legacy systems  
- Reduced dependency on manual document search  
- Faster access to structured database insights  
- Improved productivity of engineering and operations teams  
- Demonstrated safe adoption of Generative AI in defense environments  
- Created a scalable foundation for future AI-enabled defense systems  

---

## Key Learnings

- In defense systems, **security and isolation override convenience**
- Air-gapped AI deployments are viable with the right architecture
- Document-grounded AI builds trust in high-risk environments
- Generative AI can significantly accelerate modernization efforts
- Clear scope boundaries are essential for mission-critical AI adoption