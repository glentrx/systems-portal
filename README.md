# Systems Portal

A structured systems portal for organising playbooks, scripts, and infrastructure workflows.

---

## Purpose

This repository serves as the backbone for the **Systems Portal**.

It is intended to act as a simple, structured space for organising:

* infrastructure playbooks
* deployment workflows (Golden Path)
* checklists and quick references
* runbooks and coordination frameworks
* architecture and validation templates
* basic decision frameworks

The portal follows a layered approach to support:

* execution
* coordination
* validation
* decision-making

The content is developed progressively as part of ongoing work and learning in infrastructure deployment.

---

## Access Modes

The Systems Portal is designed to be:

* 🌐 Accessible as a **GitHub Pages site**
* 📱 Potentially extendable into a **future packaged mobile/web application**, as the structure stabilises

---

## Current Structure

```text id="r1b7ne"
systems-portal/
├── index.html
├── style.css
├── script.js
├── README.md
├── data/
│   ├── golden-path-playbook.txt
│   ├── shell-bash-playbook.txt
│   ├── powershell-playbook.txt
│   └── command-prompt-playbook.txt
└── playbooks/
    ├── index.html
    ├── golden-path.html
    ├── shell-bash.html
    ├── powershell.html
    └── command-prompt.html
```

---

## Planned Structure (In Progress)

The portal may expand into a category-based structure as more content is added:

```text id="d0e0gq"
systems-portal/
├── index.html
├── style.css
├── script.js
├── README.md
│
├── data/
│   ├── playbooks/
│   ├── checklists/
│   ├── references/
│   ├── runbooks/
│   ├── architecture/
│   └── management/
│
├── playbooks/
├── checklists/
├── references/
├── runbooks/
├── architecture/
├── management/
│
└── assets/
```

---

## Category Overview

### Playbooks

Structured guides for execution and workflows:

* Golden Path (core workflow for Day 1 deployment)
* Command Playbooks (Shell Bash, PowerShell, Command Prompt)
* Troubleshooting Playbooks (planned)

---

### Checklists & References

Quick-access materials for execution and validation:

* Deployment Checklist
* Validation Checklist
* Quick Reference Sheets

---

### Runbooks & Coordination

Resources to support structured deployment and coordination:

* Deployment Runbook
* Environment Readiness
* Dependency Mapping
* Risk & Rollback
* Automation Strategy

---

### Architecture & Validation

Templates to support system alignment and validation:

* Acceptance Criteria
* Operational Readiness
* Traceability Matrix
* Validation Plan
* Change Impact Assessment
* Environment Constraints

---

### Management

Basic framework for decision-making:

* Go / No-Go Decision Framework

---

## Design Principles

The Systems Portal is built with the following principles:

* **Separation of concerns**

  * `data/` stores source content
  * category folders provide the presentation layer

* **Scalability**
  The structure allows for incremental expansion without major restructuring

* **Clarity**
  Content is organised by function to support navigation and usability

* **Reusability and non-sensitivity**
  Documents are written as general templates rather than tied to specific environments, ensuring they remain reusable and do not contain sensitive information

---

## Vision

The Systems Portal is intended to evolve over time from:

```text id="xxb3z5"
Reference Site → Structured Tool → Expanded Portal
```

Its focus is to provide a clean and structured environment for working through
**Day 1 infrastructure deployment workflows**.

---
