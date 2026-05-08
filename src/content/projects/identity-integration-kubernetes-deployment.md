---
title: "Identity Integration & Kubernetes Deployment"
description: "Integrated IBM Security Verify with a React/Node.js web application, including login, logout, session handling, custom attributes, and repeatable Kubernetes deployment assets."
date: 2025-02-02
tags:
  - IBM Security Verify
  - Kubernetes
  - React/Node.js
featured: true
status: "Project case study"
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

This Data Fabric proof of concept supported a Single View of Client experience using synthetic data. The demo required secure login, session handling, custom user attributes, and deployment-ready application packaging.

## Problem

The proof of concept needed a secure application flow for login, logout, session handling, and custom attribute-based data filtering in a public-sector-aligned demo environment.

## My contributions

- Integrated IBM Security Verify with a React/Node.js web application, including login, logout, and session handling.
- Configured and tested custom user attributes to support personalized data filtering.
- Containerized the application with Docker and published the image to Quay.io.
- Created Kubernetes manifests for config, deployment, namespace, route, secret, service, and ingress resources.
- Validated the deployment on Minikube and resolved local deployment issues.

## Technical approach

The application was packaged with Docker, published through Quay.io, and validated locally on Minikube. Kubernetes manifests covered configuration, deployment, namespace, route, secret, service, and ingress resources. The identity flow used IBM Security Verify for login, logout, session handling, and custom user attributes.

## Outcome

Delivered secure login/logout, session handling, and custom-attribute based data filtering for the proof-of-concept application. The work also packaged the app with Docker and Kubernetes deployment assets, making it easier to validate locally and prepare for OpenShift transition.

## Tools used

- IBM Security Verify
- React
- Node.js
- Express.js
- Docker
- Kubernetes
- Minikube
- Quay.io
- Kubernets YAML
- Custom Attributes
