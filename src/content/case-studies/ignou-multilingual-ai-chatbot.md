# Multilingual Generative AI Chatbot for IGNOU Swayam Portal

## Product Overview

Indira Gandhi National Open University (IGNOU), through its Swayam learning platform, serves millions of learners across India with diverse linguistic, academic, and socio-economic backgrounds. While IGNOU already had rich digital assets in the form of course documents and recorded lectures, students and faculty faced significant friction in **discovering, understanding, and reusing this content efficiently**.

To address this challenge, IGNOU initiated the development of a **Multilingual Generative AI–based educational chatbot** that could act as an intelligent learning companion for students and a productivity tool for teachers. The chatbot was designed to conversationally answer academic questions, generate question banks, and provide precise citations from course documents and video lectures—while supporting multiple Indian languages.

The solution was integrated directly into the **swayam.ignouonline.ac.in** platform and built with strict academic and governance controls, ensuring responses were grounded only in approved course material.

---

## My Role

I worked as the **Product & Solution Owner** for the IGNOU Generative AI Chatbot initiative.

My role involved translating academic and institutional requirements into a scalable AI product, while balancing pedagogical integrity, multilingual accessibility, and technical feasibility. I collaborated closely with IGNOU stakeholders, instructional designers, AI engineers, and cloud architects to define scope, prioritize features across milestones, and ensure delivery aligned with university expectations.

I owned:
- Product vision and milestone-wise scope definition  
- Feature prioritization across student and teacher personas  
- Multilingual and citation requirements  
- Governance, safety, and accuracy guardrails  
- UAT readiness and academic acceptance criteria  

---

## The Problem

Despite having high-quality course content, IGNOU faced several systemic challenges:

- Students struggled to search long PDFs and video lectures for specific doubts  
- Language barriers limited content accessibility for non-English learners  
- Teachers spent significant time manually creating question banks  
- No unified interface existed for conversational doubt resolution  
- Course content reuse across languages was operationally expensive  

The challenge was not content creation, but **content accessibility, personalization, and scale**—especially for a distance-learning model serving learners across regions and languages.

---

## Product Vision

> Create an AI-powered academic assistant that makes IGNOU’s learning content searchable, conversational, multilingual, and reusable—without compromising academic accuracy.

The chatbot was envisioned as:
- A **learning companion for students**
- A **content productivity tool for teachers**
- A **governed AI system** that only responds from course-approved material
- A foundation for future AI-led education services at IGNOU

---

## Core Capabilities

### Conversational Academic Q&A

Students can ask questions in natural language related to their selected subject. The chatbot responds using only course documents and video transcripts, ensuring academic correctness and consistency.

### Multilingual Support at Scale

The chatbot supports Hindi, English, Gujarati, Bangla, and Tamil. Users select their preferred language at the start of the session, and the same language is maintained throughout the interaction. Both documents and video transcripts are translated to ensure parity across languages.

### Video & Document Citations

Every response includes precise citations:
- Document references  
- Video references with contextual linkage  

This feature was critical for academic trust, allowing learners and faculty to verify answers directly from source material.

### Question Bank Generation for Teachers

Teachers and administrators can instruct the chatbot to generate:
- Objective-type questions  
- Descriptive-type questions  

Questions are generated from documents and video transcripts and can be **downloaded directly from the chatbot interface**, significantly reducing manual effort.

### Transcription & Translation Pipeline

- Course videos are transcribed into text  
- Transcripts are translated into supported languages  
- Existing PDFs are translated for multilingual reuse  

This created a unified, language-agnostic knowledge base for the chatbot.

---

## Workflow / User Experience

1. User logs into the Swayam IGNOU portal  
2. Chatbot is available within the course interface  
3. User selects subject and preferred language  
4. Student asks academic questions OR teacher requests question generation  
5. Chatbot retrieves information from documents and video transcripts  
6. Responses are generated with citations and references  
7. Teachers can download generated question banks directly  

The experience was designed to be simple, academic-focused, and non-distracting.

---

## Technology Foundation

The chatbot was built on a **cloud-native Azure architecture** optimized for education workloads:

- **Generative AI:** Azure OpenAI for conversational responses and question generation  
- **Search & Retrieval:** Document- and transcript-based retrieval pipeline  
- **Data Lake:** Azure Data Lake for documents, videos, transcripts, and translations  
- **Speech & Video:** Azure Video Indexer for transcription and translation  
- **Security:** Role-based access for student and teacher personas  
- **Integration:** Embedded within IGNOU’s Swayam platform  

The architecture ensured scalability for large student volumes while maintaining strict data isolation and governance.

---

## Impact / Outcomes

- Significantly improved student access to course content  
- Reduced language barriers across multiple Indian languages  
- Faster doubt resolution without manual search  
- Major productivity gains for teachers through automated question banks  
- Reusable multilingual content across courses  
- Established a strong blueprint for AI-driven education at IGNOU  

---

## Key Learnings

- In education, **accuracy and citation matter more than fluency**
- Multilingual AI must treat all languages as first-class citizens
- Teachers value AI most when it saves time, not when it replaces judgment
- Video content becomes exponentially more valuable when transcribed and indexed
- Successful EdTech AI products require close alignment with academic workflows
