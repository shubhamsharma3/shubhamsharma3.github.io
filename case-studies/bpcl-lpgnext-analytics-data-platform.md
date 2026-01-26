# LPGNext Analytics Data Platform for BPCL

## Product Overview

Bharat Petroleum Corporation Limited (BPCL) manages millions of domestic and commercial LPG customers across India through its LPGNext application. Over time, LPGNext evolved into a mission-critical operational system backed by on-premise databases and tightly coupled application logic. As BPCL planned a strategic migration to SAP Hybris on Azure, the absence of a centralized analytics platform became a major bottleneck.

To support this transformation, BPCL initiated a **proof-of-concept for an enterprise analytics data platform** that could ingest LPGNext and SAP Hybris data into Azure, standardize it, and make it analytics-ready. The objective was not only data migration, but also the creation of a **future-ready data lake and warehouse foundation** for reporting and decision-making.

The platform was designed using Microsoft’s analytics stack, with a strong focus on reliability, traceability, and alignment with BPCL’s operational workflows. :contentReference[oaicite:0]{index=0}

---

## My Role

I worked as the **Data & AI Project Manager and Product Owner** for the BPCL LPGNext Analytics PoC.

My role involved translating BPCL’s operational and reporting needs into a scalable Azure data platform design. I worked closely with BPCL stakeholders, Azure architects, data engineers, and BI developers to define scope, sequence milestones, and ensure on-time delivery of the PoC.

Key responsibilities included:
- Requirement gathering and BRD finalization  
- Data platform architecture design  
- Milestone planning and delivery governance  
- Stakeholder coordination across BPCL and delivery teams  
- Validation of analytics outputs and KPIs  
- Knowledge transfer and documentation delivery  

---

## The Problem

BPCL faced multiple data challenges during its LPGNext modernization journey:

- LPGNext data existed in on-premise SQL systems with limited analytics capability  
- SAP Hybris migration required clean, structured, and validated data feeds  
- No centralized data lake for historical and analytical data  
- Analytics and reporting required heavy manual effort  
- Lack of standardized KPIs across business teams  

Without a unified data platform, analytics remained fragmented and tightly coupled to operational systems, limiting scalability and insight generation. :contentReference[oaicite:1]{index=1}

---

## Product Vision

> Build a scalable analytics data platform that enables BPCL to migrate, unify, and analyze LPGNext and SAP Hybris data with confidence.

The platform vision focused on:
- Treating data as a **strategic enterprise asset**  
- Enabling seamless coexistence of operational and analytical systems  
- Providing a governed foundation for future analytics and AI use cases  
- Reducing dependency on source systems for reporting  

---

## Core Capabilities

### Centralized Azure Data Lake

A multi-container Azure Data Lake Gen2 architecture was designed to store:
- Raw LPGNext data
- Transformed Hybris-ready datasets
- Curated analytics-ready data  

This ensured separation of concerns, traceability, and auditability.

### End-to-End Data Ingestion Pipelines

Azure Data Factory and Synapse pipelines were built to:
- Ingest LPGNext data from Blob storage
- Pull SAP Hybris data from read-replica databases
- Support both full and incremental loads
- Automate execution through scheduled triggers  

### Transformation & Data Preparation

Azure Databricks was used to:
- Apply BPCL-defined business logic
- Clean and standardize master and transactional data
- Prepare datasets for analytics and warehousing  

### Enterprise Data Warehouse

A Synapse Dedicated SQL Pool was implemented to serve as the analytics warehouse, enabling:
- Structured reporting
- Consistent KPI definitions
- High-performance analytical queries  

### Business Intelligence & KPIs

A Power BI dashboard was developed showcasing **4–5 key business KPIs**, demonstrating how curated data could be directly consumed by business users. :contentReference[oaicite:2]{index=2}

---

## Workflow / User Experience

1. LPGNext data is pushed to Azure Blob Storage  
2. Data is ingested into ADLS Container 1  
3. Transformation logic prepares Hybris-ready datasets  
4. Combined LPGNext and Hybris data is stored in ADLS Container 2  
5. Curated data is loaded into Synapse Data Warehouse  
6. Power BI consumes warehouse tables for KPI reporting  

This workflow ensured clean separation between ingestion, transformation, and consumption layers.

---

## Technology Foundation

The BPCL analytics platform was built on Microsoft Azure using:

- **Azure Blob Storage** for initial data landing  
- **Azure Data Lake Gen2** for raw and curated storage  
- **Azure Data Factory & Synapse Pipelines** for orchestration  
- **Azure Databricks** for transformations  
- **Azure Synapse Analytics** for data warehousing  
- **Power BI** for visualization  

The architecture was designed for scalability, governance, and enterprise security. :contentReference[oaicite:3]{index=3}

---

## Impact / Outcomes

- Successful migration of LPGNext and SAP Hybris datasets to Azure  
- Established a governed analytics data lake for BPCL  
- Reduced dependency on operational systems for reporting  
- Enabled standardized KPI reporting across teams  
- Created a repeatable blueprint for future BPCL analytics initiatives  
- Delivered complete documentation and knowledge transfer  

---

## Key Learnings

- Data migration is most effective when paired with analytics enablement  
- Medallion-style data lake design simplifies governance  
- Early KPI alignment prevents rework later  
- Incremental loading is critical for operational systems  
- Strong documentation accelerates enterprise adoption  