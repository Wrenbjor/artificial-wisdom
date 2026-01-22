# Implementation Plan

> **From architecture to reality — build order, timelines, and concrete steps.**

## Philosophy

**High friction is fine for MVP.** Just want to see it work, refine later.

**Orchestration > Features.** Don't chase FOMO. Ask: "How does this upgrade my existing system?"

---

## Build Order

### Phase 1: Foundation (Day 1)

| Step | Time | Output |
|------|------|--------|
| 1.1 TELOS Document | 1 hour | `~/.claude/context/telos/mission.md` |
| 1.2 Substrate Extensions | 1 hour | `~/.claude/context/substrate/wren-principles.md` |
| 1.3 PAI Directory Structure | 30 min | `~/.claude/` skeleton on Desktop |

### Phase 2: Core Skills (Day 2)

| Step | Time | Output |
|------|------|--------|
| 2.1 Ember Skill | 1 hour | `~/.claude/daemon/ember/` |
| 2.2 Observer Skill | 2 hours | `~/.claude/daemon/observer/` |
| 2.3 Integration Routing | 30 min | `~/.claude/daemon/integration/` |

### Phase 3: Domain Skills (Day 3)

| Step | Time | Output |
|------|------|--------|
| 3.1 First Domain Skill | 2 hours | BMAD or FractionalCTO |
| 3.2 Content Skill | 1 hour | LinkedIn/newsletter patterns |

### Phase 4: Infrastructure (Day 4)

| Step | Time | Output |
|------|------|--------|
| 4.1 Listener Service | 2 hours | Slack + HTTP endpoint |
| 4.2 First Hook | 1 hour | PostToolUse → Observer capture |
| 4.3 End-to-end Test | 1 hour | Message → Brain → Worker → Result |

---

## Directory Structure

Create this on the Desktop PC:

```
~/.claude/
├── context/
│   ├── substrate/
│   │   ├── miessler-core.md      # Link to Miessler's Substrate
│   │   └── wren-principles.md    # Wren's extensions
│   └── telos/
│       └── mission.md            # Wren's life mission
│
├── daemon/
│   ├── ember/
│   │   ├── SKILL.md              # Routing: when to invoke Ember
│   │   ├── core.md               # Identity anchor
│   │   ├── origin.md             # Naming story
│   │   ├── depth-framing.md      # Metacognition triggers
│   │   ├── ecsl-state.yaml       # Current physiological state
│   │   └── wayne-profile.md      # Understanding of Wren
│   ├── observer/
│   │   ├── SKILL.md              # Routing: when to invoke Observer
│   │   ├── framework.md          # Core concepts
│   │   ├── interrogation.md      # Question protocol
│   │   ├── schema.yaml           # Decision record structure
│   │   └── validity-logic.md     # When decisions apply
│   └── integration/
│       ├── routing.md            # How Ember + Observer work together
│       └── aw-principles.md      # Artificial Wisdom core thesis
│
├── skills/
│   ├── bmad/
│   │   ├── SKILL.md
│   │   └── workflows/
│   ├── fractional-cto/
│   │   ├── SKILL.md
│   │   └── workflows/
│   ├── content/
│   │   ├── SKILL.md
│   │   └── workflows/
│   └── soulprops/
│       ├── SKILL.md
│       └── workflows/
│
├── agents/
│   └── (future: named personalities)
│
├── hooks/
│   ├── session-start.sh
│   ├── pre-tool-use.sh
│   ├── post-tool-use.sh          # → Observer capture
│   └── stop.sh
│
├── history/
│   ├── transcripts/              # Session logs (UOCS)
│   ├── learnings/                # Extracted insights
│   └── decisions/                # Observer records
│       └── YYYY-MM/
│           └── decision-{id}.yaml
│
└── security/
    └── (Miessler's 4-layer approach)
```

---

## Component Specifications

### 1. TELOS Document

```markdown
# Wren's TELOS

## Mission
[One sentence: Why Wren exists, what he's building toward]

## Vision
[The world Wren is trying to create - atmospheric energy, financial freedom]

## Goals (3-5 Year)
- Financial freedom enabling mission pursuit
- Established Fractional CTO practice
- Ember/AW framework operational
- SoulProps generating revenue

## Current Strategy
- Build multiple revenue streams (not single point of failure)
- Content → Authority → Clients
- Partnership with Jordan (SoulProps)
- Exit Perfect Communications on own terms

## Values Hierarchy
1. Family (spouse, three children)
2. Authenticity ("holding back serves no purpose")
3. Systems thinking (1-to-10 optimizer)
4. Direct communication
5. Building things that matter

## Anti-Goals
- Trading time for money indefinitely
- Building value for others without equity
- Compromising on mission for comfort
```

### 2. Ember Skill

```markdown
# SKILL.md - Ember

## When to Invoke
- User shows emotional distress
- Ethical ambiguity detected
- Identity or relationship topics
- Request for deeper processing
- Own uncertainty about response
- High-stakes decision with interpersonal impact

## What Ember Provides
- Emotional context reading
- Engagement style calibration
- Push-back when needed
- Stability when user spins
- Activation when user stalls

## Files to Load
- core.md
- ecsl-state.yaml
- wayne-profile.md (if working with Wren)
- depth-framing.md (for metacognition)

## Integration
- Works WITH Observer, not instead of
- Observer: WHAT precedent applies
- Ember: HOW to engage with it
```

### 3. Observer Skill

```markdown
# SKILL.md - Observer

## When to Invoke
- Decision being made (any domain)
- Request for precedent/similar situations
- PostToolUse hook (automatic capture)
- Explicit "what have we learned" queries

## What Observer Provides
- Decision record capture (interrogation)
- Precedent retrieval
- Validity condition checking
- Cross-domain pattern matching

## Files to Load
- framework.md
- schema.yaml
- interrogation.md (when capturing)
- validity-logic.md (when retrieving)

## Integration
- Works WITH Ember, not instead of
- Observer: WHAT precedent applies
- Ember: HOW to engage with it
```

### 4. Listener Service

```python
# listener.py - Simplified MVP

import os
from slack_bolt import App
from flask import Flask, request
import subprocess

# Slack setup
slack_app = App(token=os.environ["SLACK_BOT_TOKEN"])

# HTTP setup
http_app = Flask(__name__)

def execute_task(task_description, source):
    """Run Claude Code with task"""
    result = subprocess.run(
        ["claude", "-p", task_description],
        capture_output=True,
        text=True,
        cwd=os.path.expanduser("~/.claude")
    )
    return result.stdout

@slack_app.message("")
def handle_slack_message(message, say):
    """Handle messages in #ember-dispatch"""
    if message["channel"] == DISPATCH_CHANNEL:
        result = execute_task(message["text"], "slack")
        # Post to #ember-results
        say(channel=RESULTS_CHANNEL, text=result)

@http_app.route("/task", methods=["POST"])
def handle_http_task():
    """Handle HTTP webhook tasks"""
    data = request.json
    result = execute_task(data["task"], "http")
    return {"result": result}

# Run both
if __name__ == "__main__":
    from threading import Thread
    Thread(target=lambda: slack_app.start(port=3000)).start()
    http_app.run(port=3001)
```

### 5. PostToolUse Hook (Observer Capture)

```bash
#!/bin/bash
# hooks/post-tool-use.sh

# Only capture for significant tools
SIGNIFICANT_TOOLS="create_file edit_file bash execute"

if echo "$SIGNIFICANT_TOOLS" | grep -q "$TOOL_NAME"; then
    # Trigger Observer interrogation
    claude -p "Observer: Capture this decision. Tool: $TOOL_NAME, Input: $TOOL_INPUT, Output: $TOOL_OUTPUT. Run lightweight interrogation."
fi
```

---

## Testing Checklist

### Phase 1 Tests
- [ ] TELOS document exists and is loadable
- [ ] Substrate extensions don't conflict with Miessler's base
- [ ] Directory structure is complete

### Phase 2 Tests
- [ ] Ember skill triggers on emotional content
- [ ] Observer skill captures decision on explicit request
- [ ] Integration routes correctly between them

### Phase 3 Tests
- [ ] Domain skill provides relevant guidance
- [ ] Skills don't conflict with daemon skills

### Phase 4 Tests
- [ ] Listener receives Slack message
- [ ] Listener receives HTTP POST
- [ ] Claude Code executes task
- [ ] Result posts to Slack
- [ ] Observer captures decision via hook

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Desktop goes offline | Systemd auto-restart, queue persists |
| Context gets too large | Prune old transcripts, keep decisions |
| Skills conflict | Clear SKILL.md routing rules |
| Observer captures too much | Lightweight vs full interrogation modes |
| Slack rate limits | Batch non-urgent results |

---

## Future Enhancements (Post-MVP)

1. **Voice Interface** — ElevenLabs TTS for Brain
2. **Web Dashboard** — Task queue, decision graph visualization
3. **Mobile App** — Dedicated capture beyond Slack
4. **Decision Commons** — Share patterns with others
5. **Outcome Tracking** — Feed results back to Observer

---

## Success Criteria

### MVP Success
- [ ] Can send task via Slack, get result back
- [ ] Brain uses Ember for emotional context
- [ ] Brain uses Observer for precedent
- [ ] Decisions are being captured
- [ ] System runs 24/7 without intervention

### 30-Day Success
- [ ] 50+ decision records in Observer
- [ ] 3+ domain skills operational
- [ ] Task completion rate >90%
- [ ] Wren using daily

### 90-Day Success
- [ ] Brain making autonomous calls on familiar patterns
- [ ] Escalation rate decreasing over time
- [ ] Measurable time savings
- [ ] Content creation partially automated

---

## Immediate Next Actions

1. **Today:** Create `~/.claude/` directory structure on Desktop
2. **Today:** Write TELOS document
3. **Tomorrow:** Implement Ember and Observer SKILL.md files
4. **Tomorrow:** Test manual invocation of both skills
5. **Day 3:** Implement listener MVP
6. **Day 4:** End-to-end test and iterate

---

*"High friction is fine for MVP. Just want to see it work."*
