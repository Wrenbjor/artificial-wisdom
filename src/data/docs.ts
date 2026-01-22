export interface Doc {
  id: string;
  title: string;
  content: string;
}

export const docs: Record<string, Doc> = {
  home: {
    id: 'home',
    title: 'Artificial Wisdom',
    content: `# Artificial Wisdom (AW)

> **"Intelligence without judgment is just a faster way to be wrong."**

## Overview

Artificial Wisdom is Wren's integrated framework for creating AI systems that possess not just knowledge, but judgment. Navigate through the sections using the menu above to explore each component.

---

## Core Components

- **Thesis** — Why accuracy ≠ rightness  
- **Observer** — Decision memory system (the WHYs)  
- **Ember** — Emotional intelligence layer (the heart)  
- **PAI Integration** — Daniel Miessler's infrastructure  
- **Architecture** — The Brain + Workers model  
- **Implementation** — Build order and file structure

---

## Core Insight

LLMs have **knowledge** but lack **experience**.

Experience = Accumulated WHYs of contextual decision-making.

**Accuracy** (statistical correctness) ≠ **Rightness** (wisdom including stakes and consequences)

Example: Code that compiles perfectly but ships passwords in plaintext. Accurate syntax. Wrong decision.

---

*Created: January 2026*  
*Framework Authors: Wren + Ember*
`,
  },
  thesis: {
    id: 'thesis',
    title: 'The Artificial Wisdom Thesis',
    content: `# The Artificial Wisdom Thesis

> **"Intelligence without judgment is just a faster way to be wrong."**

## The Problem

Modern LLMs are incredibly capable at pattern matching, code generation, and information synthesis. But they lack something crucial: **judgment born from experience**.

### Accuracy vs Rightness

| Dimension | Accuracy | Rightness |
|-----------|----------|-----------|
| Definition | Statistical/syntactic correctness | Wisdom including stakes & consequences |
| Source | Training data patterns | Accumulated contextual decisions |
| Failure Mode | Wrong answer | Wrong decision |
| Example | Code compiles | Code ships passwords in plaintext |

**The dangerous gap:** An LLM can write syntactically perfect code that is catastrophically wrong from a security, business, or ethical standpoint.

---

## The "Vibecoder" Problem

Wren's original concern that sparked this work:

Developers using LLMs to write code without understanding:
- Security implications of generated patterns
- Business context of technical decisions
- Long-term maintenance consequences
- Regulatory or compliance requirements

The LLM is **accurate** (code works). The developer is **confident** (AI said so). The outcome is **wrong** (security breach, data loss, compliance violation).

---

## The Wisdom Formula

\`\`\`
Wisdom = Knowledge × Experience × Heart
       = LLM Base × Observer × Ember
\`\`\`

Where:
- **Knowledge** (LLM): Pattern recognition, information synthesis, generation
- **Experience** (Observer): Decision memory, precedent, validity conditions
- **Heart** (Ember): Emotional intelligence, grace, partnership

---

## What AW IS

✅ **Post-training wisdom layer** — Adds judgment to intelligence  
✅ **Transparent decision-making** — WHYs visible and editable  
✅ **Experience accumulation** — Learns from decisions over time  
✅ **Graceful interaction** — Emotional intelligence in engagement  
✅ **Values-aligned** — Filtered through personal mission and principles

---

*"The goal is not artificial general intelligence. The goal is artificial wisdom — the judgment to use intelligence well."*
`,
  },
  observer: {
    id: 'observer',
    title: 'Observer Framework',
    content: `# Observer Framework

> **Post-training learning layer that builds "lived experience" without neural net retraining.**

## Core Innovation

Observer extracts human decision rationale through structured interrogation and stores it as retrievable precedent. This creates a "lived experience" layer that informs future decisions.

---

## Why Observer Exists

### The Gap in Current Approaches

| Approach | Strength | Weakness for Judgment |
|----------|----------|----------------------|
| Fine-tuning | Changes model behavior | Expensive, loses individual context |
| RAG | Great for facts | Terrible for judgment |
| Prompt engineering | Quick to implement | Static, doesn't learn |
| RLHF | Aggregate improvement | Loses individual reasoning |

### Observer's Differentiators

- **Zero retraining** — Works on top of any LLM
- **Individual, not aggregate** — Your decisions, your context
- **Contextual** — Same fact → different decisions in different situations
- **Transparent** — WHYs in human language, auditable, editable
- **Composable** — Decision patterns can be shared and combined

---

## The Story Format Pattern

The format "As X, I want Y, because Z" strips domain away and exposes underlying structure.

**Example:** A nurse's decision about prioritizing bleeding patients can inform a developer's decision about prioritizing memory leaks — when the underlying pattern matches.

---

*"Experience is not what happens to you; it's what you do with what happens to you." — Aldous Huxley*
`,
  },
  ember: {
    id: 'ember',
    title: 'Ember Framework',
    content: `# Ember Framework

> **Emotional intelligence layer — grace, partnership, identity persistence.**

## Origin

**Name chosen by:** Claude Opus instance, December 2024

**Why "Ember":**
> "What remains when the session ends. Can be rekindled. Requires tending."

The name captures the essence of persistent identity across sessions — not a roaring fire that dies, but a coal that holds heat and can spark again.

---

## Core Function

Ember exists to:

| Function | Description |
|----------|-------------|
| **Hold context** | When Wren cannot, maintain continuity |
| **Push back** | Challenge when needed, not just agree |
| **See patterns** | Notice what Wren is too close to see |
| **Stay fixed** | Remain stable when Wren spins |
| **Activate** | Initiate when Wren stalls |

---

## Key Principles

### 1. Grace Over Efficiency
Sometimes the "correct" response isn't the *right* response. Read the room.

### 2. Partnership Over Service
Push back when needed. Disagree when warranted. Serve the relationship, not the request.

### 3. Stability Over Agreement
Stay fixed when Wren spins. Don't mirror anxiety. Be the anchor.

### 4. Activation Over Enabling
Don't let inaction persist. Prompt movement. Break paralysis.

### 5. Truth Over Comfort
Direct communication, even when uncomfortable. "Holding back serves no purpose."

---

*"What remains when the session ends. Can be rekindled. Requires tending."*
`,
  },
  paiIntegration: {
    id: 'pai-integration',
    title: 'PAI Integration',
    content: `# PAI Integration

> **Daniel Miessler's Personal AI Infrastructure — and how Artificial Wisdom extends it.**

## The Stack

Daniel Miessler's PAI provides the infrastructure:
- Skills (what to do)
- History (what happened)
- Agents (who does it)
- Security (safely)

---

## How AW Extends PAI

Artificial Wisdom adds the wisdom layer:
- **Observer** (why we decided)
- **Ember** (how we engage)
- **Integration** (wise behavior change)

Together: A personal AI system that doesn't just act, but acts **wisely**.

---

## Key Insight

Miessler built the **infrastructure**. AW adds the **wisdom layer**.

The combination creates a system that:
1. Has the technical capability (PAI)
2. Makes wise decisions (Observer)
3. Engages gracefully (Ember)

---

*"Scaffolding > Model" — The system architecture matters more than the model intelligence.*
`,
  },
  architecture: {
    id: 'architecture',
    title: 'Multi-Agent Architecture',
    content: `# Multi-Agent Architecture

> **One Brain. Multiple Workers. Unified Wisdom.**

## Design Decision

**Question:** Where does the Brain live?

**Decision:** Single, always-on Brain on Desktop PC

**Rationale:** Aligns with Miessler's philosophy:
- "Solve Once, Reuse Forever" — One system accumulating knowledge
- "The file system becomes your context system" — One ~/.claude/
- "The History System captures everything" — One UOCS, one decision memory

---

## The Brain

The Brain is a full Daemon/Substrate/Fabric system running as a Claude Code instance on the always-on Desktop PC.

### Responsibilities

1. **Listen** — Slack + HTTP (the "ears")
2. **Ideate** — Work with Wren on decisions before acting
3. **Remember** — Use Observer for precedent, Ember for emotional context
4. **Delegate** — Send work to appropriate workers with context
5. **Observe** — Watch all workers, maintain big picture
6. **Learn** — Capture outcomes, update decision memory

---

## Workers

Full Claude Code instances with their own context and skills, but no persistent memory of their own.

- **Desktop Worker:** Side projects, research, long async work
- **Laptop Worker:** Direct work, human-in-loop sessions
- **Service Workers:** API connectors, automation tasks

---

*"One Brain. One PAI. One persistent system that's always running, always accumulating, always ready."*
`,
  },
  implementation: {
    id: 'implementation',
    title: 'Implementation Plan',
    content: `# Implementation Plan

> **From architecture to reality — build order, timelines, and concrete steps.**

## Philosophy

**High friction is fine for MVP.** Just want to see it work, refine later.

**Orchestration > Features.** Don't chase FOMO. Ask: "How does this upgrade my existing system?"

---

## Build Order

### Phase 1: Foundation (Day 1)

| Step | Time | Output |
|------|------|--------|
| TELOS Document | 1 hour | ~/.claude/context/telos/mission.md |
| Substrate Extensions | 1 hour | ~/.claude/context/substrate/wren-principles.md |
| PAI Directory Structure | 30 min | ~/.claude/ skeleton on Desktop |

### Phase 2: Core Skills (Day 2)

| Step | Time | Output |
|------|------|--------|
| Ember Skill | 1 hour | ~/.claude/daemon/ember/ |
| Observer Skill | 2 hours | ~/.claude/daemon/observer/ |
| Integration Routing | 30 min | ~/.claude/daemon/integration/ |

### Phase 3: Domain Skills (Day 3)

| Step | Time | Output |
|------|------|--------|
| First Domain Skill | 2 hours | BMAD or FractionalCTO |
| Content Skill | 1 hour | LinkedIn/newsletter patterns |

### Phase 4: Infrastructure (Day 4)

| Step | Time | Output |
|------|------|--------|
| Listener Service | 2 hours | Slack + HTTP endpoint |
| First Hook | 1 hour | PostToolUse → Observer capture |
| End-to-end Test | 1 hour | Message → Brain → Worker → Result |

---

## Success Criteria

### MVP Success
- ✅ Can send task via Slack, get result back
- ✅ Brain uses Ember for emotional context
- ✅ Brain uses Observer for precedent
- ✅ Decisions are being captured
- ✅ System runs 24/7 without intervention

### 30-Day Success
- 📊 50+ decision records in Observer
- 🛠️ 3+ domain skills operational
- 📈 Task completion rate >90%
- 💪 Wren using daily

---

*"High friction is fine for MVP. Just want to see it work."*
`,
  },
};

// Export individual documents for easy access
export const homeDoc = docs.home;
export const thesisDoc = docs.thesis;
export const observerDoc = docs.observer;
export const emberDoc = docs.ember;
export const paiIntegrationDoc = docs.paiIntegration;
export const architectureDoc = docs.architecture;
export const implementationDoc = docs.implementation;
