# AI-Powered Question Paper Generation Platform for Classplus

## Product Overview

Classplus is a leading EdTech platform enabling educators and institutions to create, distribute, and manage digital learning content at scale. As Classplus expanded its **examination preparation offerings**, a key challenge emerged: the manual effort required to extract, analyze, and generate high-quality examination questions from diverse educational content sources.

To solve this, Classplus partnered on building an **AI-powered Question Paper Generation Platform** capable of automatically extracting questions from historical papers, understanding exam patterns, and generating new, syllabus-aligned questions from textbooks and video lectures.

The platform was designed as a **highly specialized, Azure-native AI system**, capable of handling complex combinations of text and images commonly found in Indian examination papers—while remaining scalable, accurate, and production-ready.

---

## My Role

I worked as the **Product & Solution Owner** for the Classplus AI Question Generation initiative.

My role involved converting Classplus’s academic and operational requirements into a technically robust AI platform. I worked closely with education domain experts, AI engineers, and cloud architects to define scope, guide milestone execution, and ensure the system met real-world exam preparation needs.

My responsibilities included:
- Translating BRD and academic goals into AI workflows  
- Defining milestone-wise scope and success criteria  
- Designing extraction and generation pipelines  
- Ensuring accuracy for mixed text–image question formats  
- Driving UAT readiness and live demonstrations  
- Aligning AI behavior with examination standards  

---

## The Problem

Traditional exam preparation workflows face multiple challenges:

- Previous year question papers exist primarily as scanned PDFs  
- Questions and options often contain images, diagrams, or equations  
- Manual extraction of questions is time-consuming and error-prone  
- Educators struggle to identify recurring exam patterns  
- Question creation from video lectures is largely manual  
- Scaling high-quality question generation across subjects is difficult  

For Classplus, the core challenge was to **automate the entire lifecycle**—from ingestion of raw academic material to generation of structured, exam-ready questions.

---

## Product Vision

> Build an AI-driven examination intelligence platform that understands past exam patterns and generates high-quality questions at scale.

The platform was envisioned as:
- A **fully automated question extraction engine**
- A **pattern-aware question generation system**
- A **syllabus-aligned content intelligence layer**
- A foundation for scalable, AI-driven exam preparation

The vision emphasized **accuracy, explainability, and syllabus alignment** over generic content generation.

---

## Core Capabilities

### Automated Question Extraction from PDFs

The platform ingests scanned question papers and automatically extracts:
- Question text
- Option text
- Question images
- Option images

This is achieved through a combination of **Custom Vision** and **Document Intelligence**, allowing accurate handling of mixed-format questions.

### Custom Vision–Based Image Detection

A Custom Vision model was trained to detect:
- Full-length questions with options
- Images embedded in questions
- Images embedded in options

The training dataset included diverse formats such as text-only questions, image-based options, and hybrid layouts.

### Document Intelligence–Based Text Extraction

A custom Document Intelligence model extracts and differentiates:
- Question text
- Option text

This ensures high precision even when layouts vary significantly across papers.

### Automated Processing Pipeline

An Azure Blob Trigger function orchestrates the entire workflow:
1. PDF upload to Azure Blob Storage  
2. PDF-to-image conversion  
3. Image analysis via Custom Vision  
4. Text extraction via Document Intelligence  
5. Structured storage of extracted data  

This pipeline enables fully unattended processing.

### Exam Pattern Recognition

Historical question papers are analyzed to:
- Identify topic-wise distribution
- Detect recurring patterns
- Understand exam focus areas over time

Text is chunked and analyzed using OpenAI models to derive meaningful insights for educators and content creators.

### AI-Based Question Generation

The platform generates new questions using a structured workflow:
- Text extraction from video lectures using Azure Video Indexer
- Data cleaning and topic extraction
- JSON-based content structuring
- Embedding generation using Azure OpenAI
- Indexing via Azure AI Search
- Pattern-driven question generation using OpenAI

Generated questions follow predefined exam patterns and difficulty levels.

---

## Workflow / User Experience

1. Upload previous year question papers or academic videos  
2. System automatically extracts text and images  
3. Questions are structured and stored in the data lake  
4. Exam patterns are analyzed from historical data  
5. New questions are generated based on syllabus and patterns  
6. Educators review and refine generated content  
7. Questions are used for mock tests and exam preparation  

The experience prioritizes automation while retaining educator control.

---

## Technology Foundation

The platform was built on a **Microsoft Azure–based AI architecture**:

- **Azure Custom Vision** for image detection  
- **Azure Document Intelligence** for text extraction  
- **Azure Video Indexer** for video-to-text conversion  
- **Azure OpenAI** for pattern analysis and question generation  
- **Azure AI Search** for semantic indexing and retrieval  
- **Azure Blob Storage & Data Lake** for scalable storage  
- **Azure Functions** for event-driven orchestration  

This architecture ensures scalability, accuracy, and maintainability.

---

## Impact / Outcomes

- Drastic reduction in manual question extraction effort  
- Accurate handling of complex text–image question formats  
- Faster creation of syllabus-aligned question papers  
- Improved consistency in exam difficulty and coverage  
- Scalable foundation for multi-subject exam preparation  
- Successful live demonstration and stakeholder validation  

---

## Key Learnings

- Exam content requires domain-specific AI, not generic models  
- Image + text extraction accuracy is critical for trust  
- Pattern recognition adds more value than raw generation  
- Automation must preserve educator oversight  
- AI can significantly accelerate assessment preparation when tightly governed