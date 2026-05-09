# NIA Flight Data Platform

## Product Overview

NIA operates a complex aviation ecosystem where accurate, timely, and consistent flight information is critical for passenger experience, airport operations, and downstream digital platforms. Flight data originates from multiple upstream systems in varying formats, including highly nested XML and real-time event streams, making it difficult to standardize, curate, and serve reliably.

To address this, NIA initiated the **Flight Data Platform**, a centralized data product built on a lakehouse architecture. The platform provides a single, authoritative source of flight information that can be consumed through APIs, event streams, and analytical interfaces while supporting both batch and real-time use cases.

The solution was designed to be interoperable, scalable, and extensible, forming a long-term foundation for NIA’s digital experience and operational systems.

---

## My Role

I worked as the **Product & Data Platform Lead**, responsible for translating business requirements into a robust, scalable data product.

My responsibilities included defining the product vision, aligning stakeholders across data engineering and platform teams, shaping the lakehouse architecture, and ensuring the serving layer met the needs of consumer applications such as digital experience platforms.

I closely collaborated with data engineers, cloud architects, and API developers to ensure the platform followed standardized data modeling principles while remaining flexible enough to evolve with future requirements.

---

## The Problem

NIA faced several challenges in managing flight information at scale:

- Flight data arrived in multiple formats, including complex nested XML and JSON
- A single flight record was assembled from multiple incremental updates over time
- Inconsistent schemas made downstream consumption difficult
- No unified serving interface for real-time and batch flight data
- High operational overhead to onboard new consumers

Without a standardized data product, every consumer had to implement custom logic, increasing cost, latency, and risk.

---

## Product Vision

> Create a single, decentralized source of truth for flight information at NIA that can reliably power public-facing applications, partner integrations, and analytical use cases.

The vision focused on:
- Treating flight data as a **product**, not just a dataset  
- Enabling both real-time and batch consumption  
- Ensuring schema stability and governance  
- Building once and serving many consumers  

This approach allowed NIA to scale flight data usage without multiplying complexity.

---

## Core Capabilities

### Standardized Flight Data Product

The platform delivers a curated **Flight List Data Product** covering arrivals and departures. Each flight record is incrementally built by merging multiple upstream messages, ensuring the most accurate and up-to-date representation of flight state.

### Medallion Architecture (Lakehouse)

The data platform follows a medallion architecture:
- **Raw Zone** for ingesting source data as-is
- **Standardized Zone** for cleansing, flattening, and normalization
- **Curated Zone** for business-ready flight records

This separation ensures traceability, reliability, and auditability of flight data.

### Real-Time and Batch Processing

The platform supports:
- Batch ingestion for scheduled flight data
- Streaming ingestion for real-time updates
- Incremental updates to flight records using latest-value logic

This hybrid approach allows NIA to serve both operational and analytical needs.

### Secure Serving APIs

A standardized serving layer exposes flight data through REST APIs. These APIs provide:
- Paginated access to arrivals and departures
- Time-window based filtering
- Consistent response schemas
- Secure authentication and authorization

This enables easy integration with digital experience platforms and partner systems.

---

## Workflow / User Experience

1. Flight data is ingested from upstream systems in XML or JSON format
2. Raw data is stored without transformation for traceability
3. Standardization logic flattens and normalizes incoming records
4. Business rules merge incremental updates into flight-level records
5. Curated flight data is published to the serving layer
6. Consumer applications access data via APIs or event streams

From a consumer perspective, flight data becomes easy to discover, query, and integrate without understanding upstream complexity.

---

## Technology Foundation

The NIA Flight Data Platform is built on a modern cloud-native stack:

- **Storage:** Data Lake with raw, standardized, and curated zones
- **Processing:** Distributed data processing using notebooks and pipelines
- **Data Modeling:** Strongly defined schemas for arrivals and departures
- **Serving Layer:** REST APIs for real-time consumption
- **Security:** Managed identities, role-based access, and policy enforcement
- **Scalability:** Designed to handle growing flight volumes and consumers

The architecture ensures high availability, low latency, and long-term maintainability.

---

## Impact / Outcomes

- Established a single source of truth for flight information
- Reduced complexity for downstream consumers
- Enabled real-time flight data access for digital platforms
- Improved data quality, consistency, and governance
- Created a reusable blueprint for future airport data products

The platform significantly improved how flight data is managed, consumed, and scaled across NIA’s ecosystem.

---

## Key Learnings

- Treating data as a product drives better design decisions
- Medallion architecture simplifies complex ingestion pipelines
- Incremental updates are essential for real-time aviation data
- Strong schemas reduce long-term integration costs
- A well-designed serving layer multiplies platform value