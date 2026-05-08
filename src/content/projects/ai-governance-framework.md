---
title: "AI Governance for External Models"
description: "Proof of concept to connect Azure OpenAI, AWS SageMaker, and self-hosted model endpoints into a centralized governance flow using watsonx.governance."
date: 2024-08-01
tags:
  - FastAPI
  - Azure OpenAI
  - watsonx.governance
featured: true
status: "Project case study"
tools:
  - watsonx.governance
  - watsonx.ai
  - IBM Code Engine
  - Azure GPU VM
  - Azure OpenAI
  - AWS SageMaker
  - LocalAI
  - Elasticsearch
  - FastAPI
  - Python
  - CP4D
  - DB2
---

## Context

This public-sector proof of concept focused on using watsonx.governance to govern models running outside the watsonx platform. The work covered Azure OpenAI, AWS SageMaker, and self-hosted or containerized model endpoints.

## Problem

The client needed a centralized way to govern AI models across multiple platforms and clouds. The proof of concept connected hosted and containerized model endpoints into governance workflows while supporting prompt and payload visibility.

## My contributions

- Helped design and deliver a watsonx.governance proof of concept for third-party model governance.
- Provisioned CP4D and watsonx.governance environments through IBM TechZone and ROKS.
- Built and containerized FastAPI model-serving endpoints.
- Deployed model-serving workloads to IBM Code Engine and worked with Azure GPU VM-based LocalAI/Llama 3.1 patterns.
- Supported Elasticsearch-backed RAG flow integration and live prompt/payload logging.
- Resolved CP4D, DB2, firewalld, and network blockers during the build.

## Technical approach

The approach connected watsonx.governance to third-party model endpoints, including Azure OpenAI, AWS SageMaker, and self-hosted/containerized model patterns. Work included FastAPI endpoints, Docker containers, IBM Code Engine deployment, LocalAI/Llama 3.1 exploration on an Azure GPU VM, Elasticsearch-backed RAG flow support, and live prompt/payload logging.

## Outcome

The proof of concept demonstrated platform-agnostic AI governance patterns, connected hosted and containerized endpoints to watsonx.governance, and created reusable internal knowledge for future governance engagements.

## Tools used

- watsonx.governance
- watsonx.ai
- IBM Code Engine
- Azure GPU VM
- Azure OpenAI
- AWS SageMaker
- LocalAI
- Elasticsearch
- FastAPI
- Python
- Docker
- CP4D
- DB2
