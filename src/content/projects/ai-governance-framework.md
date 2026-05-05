---
title: "AI Governance Framework"
description: "Watsonx.governance proof of concept for governing third-party ML and GenAI model endpoints."
date: 2024-08-01
tags:
  - Watsonx.governance
  - FastAPI
  - Azure OpenAI
featured: true
status: "Draft case study"
tools:
  - Watsonx.governance
  - Watsonx.ai
  - IBM Code Engine
  - Azure GPU VM
  - Azure OpenAI
  - AWS SageMaker
  - LocalAI
  - Llama 3.1
  - Elasticsearch
  - FastAPI
  - Python
  - Docker
  - CP4D
  - DB2
---

## Context

Public-sector proof-of-concept work focused on Watsonx.governance and third-party model governance. The work explored governance for models running outside Watsonx, including Azure OpenAI, AWS SageMaker, and self-hosted or containerized models.

## Problem

The client needed a centralized way to govern AI models across multiple platforms and clouds. The proof of concept needed to connect hosted and containerized model endpoints into governance workflows while supporting prompt and payload visibility.

## My contributions

- Helped design and deliver a Watsonx.governance proof of concept for third-party model governance.
- Provisioned CP4D and Watsonx.governance environments through IBM TechZone and ROKS.
- Built and containerized FastAPI model-serving endpoints.
- Deployed model-serving workloads to IBM Code Engine and worked with Azure GPU VM-based LocalAI/Llama 3.1 patterns.
- Supported Elasticsearch-backed RAG flow integration and live prompt/payload logging.
- Resolved CP4D, DB2, firewalld, and network blockers during the build.

## Technical approach

The approach connected Watsonx.governance to third-party model endpoints, including Azure OpenAI, AWS SageMaker, and self-hosted/containerized model patterns. Work included FastAPI endpoints, Docker containers, IBM Code Engine deployment, LocalAI/Llama 3.1 exploration on an Azure GPU VM, Elasticsearch-backed RAG flow support, and live prompt/payload logging.

## Outcome

The proof of concept demonstrated platform-agnostic AI governance patterns, connected hosted and containerized endpoints to Watsonx.governance, and created reusable internal knowledge for future governance engagements.

## Tools used

- Watsonx.governance
- Watsonx.ai
- IBM Code Engine
- Azure GPU VM
- Azure OpenAI
- AWS SageMaker
- LocalAI
- Llama 3.1
- Elasticsearch
- FastAPI
- Python
- Docker
- CP4D
- DB2
