# CONTENT_PLAN.md ?" Manoj Goli Portfolio

## 1. Core Brand \u0026 Narrative
Manoj Goli is a Platform  Observability Engineer focused on building reliable, automated, and observable cloud-native systems. The site should emphasize:
- **Reliability**: Systems that don\u0027t break, or tell you exactly why they did.
- **Automation**: CI/CD and GitOps as a baseline, not a feature.
- **Practical AI**: RAG and governance prototypes that solve real workflow problems.
- **Clarity**: Technical concepts explained simply and visually.

---

## 2. Page Content Structure

### 2.1 Home Page (index.astro)
- **Hero**: 
  - Headline: "Manoj Goli"
  - Subheadline: "Platform  Observability Engineer"
  - Punchline: "Building reliable, observable systems at scale."
  - Primary CTA: "View My Work" (links to /projects)
  - Secondary CTA: "Download Resume" (links to /resume)
- **The Pitch (About Intro)**: "Engineering platforms that teams can trust." 2-paragraph summary of expertise in Kubernetes, monitoring, and automation.
- **Focus Areas (3-4 Cards)**:
  - **Cloud Platform**: Kubernetes-native engineering.
  - **Reliability (SLOs)**: Enterprise-scale observability.
  - **Automation**: CI/CD and repeatable delivery.
  - **AI Proof of Concepts**: RAG and AI governance prototypes.
- **Featured Projects**: 3 latest/most impactful projects from Content Collection.
- **Final CTA**: "Let\u0027s Connect."

### 2.2 About Page (about.astro)
- **Bio**: Detailed professional journey (IBM Client Engineering experience mentioned generally).
- **Core Values**: Reliability, Developer Experience, Continuous Learning.
- **Personal**: Brief mention of interests (e.g., tech community, specific tools).
- **Photo**: Professional portrait placeholder.

### 2.3 Experience Page (experience.astro)
- **Timeline Component**:
  - **IBM Client Engineering (Current)**: Focus on platform reliability, AI RAG prototypes, and client-facing technical leadership.
  - **Previous Roles**: Focus on SRE, DevOps, and Platform Engineering outcomes.
- **Key Achievements**: Bulleted lists highlighting measurable impacts (e.g., "Reduced deployment time by 40%", "Implemented SLO-based alerting for 50+ services").

### 2.4 Projects Page (projects.astro)
- **Listing**: Card grid with tag filtering (Platform, AI, Observability, DevOps).
- **Project Schema (Content Collection)**:
  - `title`: Project name
  - `description`: 1-sentence summary
  - `tags`: Array of technologies
  - `thumbnail`: Image URL
  - `featured`: Boolean
  - `github`: URL (optional)
  - `demo`: URL (optional)
  - `status`: "Completed", "Active", "PoC"
- **Detail Pages**: MDX templates for deep-dives into Architecture, Challenges, and Outcomes.

### 2.5 Skills Page (skills.astro)
- **Technical Stack**: 
  - **Infrastructure**: Kubernetes, Terraform, OpenShift, AWS/Azure/IBM Cloud.
  - **Observability**: Instana, Grafana, Prometheus, ELK, New Relic.
  - **Languages/Tools**: Python, Go, Bash, GitHub Actions, ArgoCD, Helm.
  - **AI**: LangChain, Vector DBs, RAG patterns.
- **Certifications**: List of active certifications with dates.

### 2.6 Contact Page (contact.astro)
- **Form**: Netlify-integrated contact form (Name, Email, Message, Subject).
- **Direct Links**: Email, LinkedIn, GitHub.

### 2.7 Resume Page (resume.astro)
- **PDF Embed**: Interactive PDF viewer.
- **Direct Download**: Button to download latest PDF.
- **Web-friendly Summary**: High-level version of the resume for quick scanning.

---

## 3. SEO \u0026 Metadata

### 3.1 Global Metadata
- **Site Name**: Manoj Goli | Platform  Observability
- **Description**: Personal portfolio of Manoj Goli, Platform and Observability Engineer. Specialized in Kubernetes, CI/CD, SLOs, and AI RAG prototypes.
- **Keywords**: Platform Engineering, Observability, SRE, DevOps, Manoj Goli, IBM Client Engineering, Kubernetes, RAG AI.

### 3.2 Page Specific Titles
- **Home**: Manoj Goli - Platform  Observability Engineer
- **About**: About Manoj Goli - Engineering Reliable Platforms
- **Experience**: Technical Experience - Manoj Goli
- **Projects**: Portfolio Projects - Platform  AI Prototypes
- **Skills**: Technical Skills  Certifications
- **Contact**: Contact Manoj Goli
- **Resume**: Professional Resume - Manoj Goli

---

## 4. Voice \u0026 Tone
- **Professional**: Authoritative but accessible.
- **Impact-focused**: Every item should answer "What was the result?"
- **Clean**: No fluff; technical precision.
- **Transparent**: Highlights process and learning as much as final results.
