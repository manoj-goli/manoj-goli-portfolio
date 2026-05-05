---
title: "Identity Integration & Kubernetes Deployment"
description: "IBM Security Verify integration with a React/Node.js sample application and repeatable Kubernetes deployment assets."
date: 2025-02-01
tags:
  - IBM Security Verify
  - Kubernetes
  - React/Node.js
featured: true
status: "Draft case study"
tools:
  - IBM Security Verify
  - React
  - Node.js
  - Express.js
  - Docker
  - Kubernetes
  - Minikube
  - Quay.io
  - YAML
  - Custom attributes
---

## Context

ESDC Data Fabric proof-of-concept work for a Single View of Client experience. The demo used synthetic data and required secure login, session handling, custom user attributes, and deployment readiness.

## Problem

The proof of concept needed a secure application flow where users could log in, log out, maintain sessions, and use custom identity attributes to support personalized data filtering in a public-sector-aligned demo environment.

## My contributions

- Integrated IBM Security Verify with a React and Node.js sample application.
- Developed login and logout flows and resolved login/session issues.
- Configured and tested custom user attributes for personalized data filtering.
- Built and tested a Dockerfile for the application.
- Created and refined Kubernetes manifests for configuration, deployment, namespace, route, secret, service, and ingress resources.
- Pushed the application image to Quay.io and validated deployment on Minikube.

## Technical approach

The application was containerized with Docker, published through Quay.io, and validated locally with Minikube. Kubernetes YAML covered configuration, deployment, namespace, route, secret, service, and ingress resources while the identity flow used IBM Security Verify custom attributes and session handling.

## Outcome

The work delivered secure login/logout and custom attribute flow for the proof-of-concept app, produced a containerized and locally deployable application ready for OpenShift transition, and helped stakeholders understand the identity setup, code, and deployment workflow.

## Tools used

- IBM Security Verify
- React
- Node.js
- Express.js
- Docker
- Kubernetes
- Minikube
- Quay.io
- YAML
- Custom attributes
