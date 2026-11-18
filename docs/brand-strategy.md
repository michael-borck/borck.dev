# Brand & Presence Strategy

**Date:** 2026-08-23 · **Owner:** Michael Borck · **Status:** Working strategy — revisit quarterly or when a new property/brand is proposed.

The decisions in one paragraph: **one trunk (Michael Borck / borck.dev), four destination brands** (borck.consulting, borck.education, LocoLabo, RetroVerse Studios), one signing identity (the ABN legal entity), and a LinkedIn system that documents shipped work instead of creating content.

---

## 1. The map

| Property | Audience | Job |
|---|---|---|
| **borck.dev** | everyone | The trunk — "builder, educator, researcher, consultant". **The index**: artifact tiles (books, tools, research, teaching, resume, play) linking out. Register-neutral, one screenful. |
| **bigpicture.borck.dev** | Curtin colleagues, evaluation panels | **The argument** — twelve honest threads ("what worked, what didn't"), co-built evidence across Curtin, current explorations. Owns narrative and institutional context; the trunk owns listing. Redefined 2026-11-18 after the hub-wall rebuild. |
| **borck.consulting** | regulated AU small firms (law, medical, accounting, advisory) | Revenue — fixed-scope diagnostics, three tiers |
| **borck.education** (+ tools./books./minimum. subdomains) | educators / students | Proof-of-work at scale — 25+ free tools, 27 works (4 books) |
| **locolabo.org** | academics / research | Evidence — "we document the floor" (six projects on consumer hardware) |
| **retroverse.studio** | players / retro hobbyists | Play — separate register, separate GitHub org |
| **resume.borck.dev** | recruiters / developers | Portfolio piece in itself (one YAML → twelve ways, including an MCP server) |
| **eduserver.au** | nobody | Plumbing — deliberately unbranded app hosting. Keep it that way. |

**The through-line (already true — now deliberate):** one thesis in four registers. *Conversation-not-Delegation* (books) → privacy-first classroom tools (education) → data-sovereignty advisory (consulting) → local models on consumer hardware (LocoLabo). Even RetroVerse is "8-bit worlds, modern intelligence." The strategy is to stop treating this as sprawl and start compounding it.

## 2. Architecture: trunk + destination brands

- **Michael Borck / borck.dev is the trunk.** All authority (SEO, LinkedIn, GitHub) compounds on the person. People hire people; institutions cite people. Since the 2026-11 wall rebuild, the trunk renders the artifact index; bigpicture.borck.dev stays separate as the Curtin-facing argument (see §1) — its dialogs link only deep artifacts the trunk's tiles don't already cover.
- **Keep the four destination brands.** Their audiences would bounce off each other's registers — a law-firm partner and an Atari hobbyist need different rooms. Don't merge them; **don't add new ones**.
- **Wire the endorsement explicitly.** Every product page names its home brand and links the trunk: "a Borck Education tool, by Michael Borck" / "RetroVerse Studios — a Michael Borck project". tools.borck.education already does this; RetroVerse currently doesn't name its owner at all.
  - *RetroVerse is the accepted exception:* players don't care who's behind a game. If it stays unattributed, accept that it builds its own equity and don't expect spillover into the professional brand. If you want the spillover, add the one-line "a Michael Borck project" footer.
- **LocoLabo stays research — but isn't isolated.** It's the evidence locker for consulting Tier 3 (data sovereignty). "Runs a personal local-AI research lab on his own hardware" is the best consulting line on the site; cite LocoLabo findings in Tier 3 proposals.
- **eduserver.au** remains a generic host. No brand decisions needed there.

## 3. Signing identity (feeds document-lens ADR-0036)

Validate **Azure Artifact Signing as an organisation against the ABN**, with the **legal name** on the certificate:

- SmartScreen reputation accrues to the *identity*, so Document Lens, education desktop apps, dev tools, and any future RetroVerse desktop builds all build reputation on one publisher. One identity, compounding — same logic as the brand trunk.
- A product-brand cert (e.g. "RetroVerse Studios") would need separate validation and fragment reputation. A trading-name cert only works if the name is the ASIC-registered business name on the ABN — and your name is the better long-term asset anyway.
- **Don't wait to incorporate.** If a Pty Ltd happens later, re-validate then; reputation built on the sole-trader identity isn't transferable — another reason to start accumulating now.
- ABN is already public on borck.consulting — no privacy trade-off.

Operational runbook + CI wiring (dormant until `AZURE_SIGNING_ENABLED=true`): [document-lens ADR-0036](https://github.com/michael-borck/document-lens/blob/main/docs/adr/0036-windows-signing-azure-artifact-signing.md).

## 4. LinkedIn: the sustainable weekly system

**Funnel:** consulting diagnostics, with education/research as the authority engine. RetroVerse stays off LinkedIn (wrong register).

**Core rule: never create content for LinkedIn — document what already shipped.** The release cadence across the tools means the material already exists; the job is excerpting it.

1. **Fixed weekly slot.** Four-pillar rotation, roughly 40/25/25/10:
   - *Build log* — a tool, release, or hard-won fix (screenshot + lesson). Feeds borck.dev / borck.education.
   - *Practice* — Conversation-not-Delegation applied to a real workplace situation. Feeds books + consulting.
   - *Research note* — a LocoLabo data point, honestly framed ("what an 8B model actually does on a five-year-old GPU").
   - *Craft* — Tauri/CI/signing/infrastructure. Small but loyal audience.
2. **Repurpose only.** Each post excerpts an existing artifact: release notes, a manual section, a book paragraph, a lab log. Keep a backlog file; batch four posts at month start; 15–20 min each. (Dogfood Headline Hunter for paper → post.)
3. **Format:** hook line with a claim or number → 3–6 short lines → one screenshot → link in the first comment.
4. **Sell sparingly:** a soft pointer to the diagnostic at most every fourth post. The other three build the authority that makes the fourth convert.
5. **Review monthly:** which pillar drove follows/profile clicks → reweight the rotation.

**Profile:** headline = "Helping people work with AI, not around it." Featured: borck.consulting diagnostic, *Conversation, Not Delegation*, LocoLabo.

## 5. Hygiene punch list (next time you touch each site)

- [x] Canonical host is `bigpicture.borck.dev`. No live links to `bigpicture.borck.education` remain (checked 2026-10-31). Add a DNS redirect only if that host resolves.
- [x] borck.dev now says "twelve ways", matching the portal's twelve cards.
- [x] resume API consolidated to `api.resume.borck.dev` (2026-11-18). Legacy michaelborck.dev is NXDOMAIN, so all 20 repo references swept; CORS allowlist now borck.dev family + localhost. Pending infra: DNS record for api.resume.borck.dev → VPS, then `docker compose -f api/docker-compose.vps.yml up -d --build` + Caddy reload.
- [x] **LocoLab vs LocoLabo**: canonical spelling is LocoLabo. User-facing copy swept 2026-10-31.
- [ ] NUMERON is listed on tools.borck.education but credited to RetroVerse — settle which brand owns it deliberately (fine either way; make it consistent).

## 6. Revisit triggers

- Incorporation (Pty Ltd) → re-run the signing-identity decision (§3).
- A seventh brand/property is proposed → this doc says no by default; argue it here first.
- Consulting revenue > books+tools revenue clearly → reweight LinkedIn pillars toward B2B.
- RetroVerse starts selling → decide whether it keeps its standalone identity or takes the "a Michael Borck project" endorsement.
