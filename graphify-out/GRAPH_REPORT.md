# Graph Report - .  (2026-05-04)

## Corpus Check
- 41 files · ~77,244 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 48 nodes · 24 edges · 24 communities detected
- Extraction: 83% EXTRACTED · 17% INFERRED · 0% AMBIGUOUS · INFERRED: 4 edges (avg confidence: 0.8)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Page Component|Page Component]]
- [[_COMMUNITY_Badge Component|Badge Component]]
- [[_COMMUNITY_Card Component|Card Component]]
- [[_COMMUNITY_Layout Component|Layout Component]]
- [[_COMMUNITY_Layout Component|Layout Component]]
- [[_COMMUNITY_Layout Component|Layout Component]]
- [[_COMMUNITY_Layout Component|Layout Component]]
- [[_COMMUNITY_Page Component|Page Component]]
- [[_COMMUNITY_Button Component|Button Component]]
- [[_COMMUNITY_Separator Component|Separator Component]]
- [[_COMMUNITY_Input Component|Input Component]]
- [[_COMMUNITY_Textarea Component|Textarea Component]]
- [[_COMMUNITY_Section Component|Section Component]]
- [[_COMMUNITY_Overview Component|Overview Component]]
- [[_COMMUNITY_Snippet Component|Snippet Component]]
- [[_COMMUNITY_Config Component|Config Component]]
- [[_COMMUNITY_D Component|D Component]]
- [[_COMMUNITY_Config Component|Config Component]]
- [[_COMMUNITY_Config Component|Config Component]]
- [[_COMMUNITY_Header Component|Header Component]]
- [[_COMMUNITY_Footer Component|Footer Component]]
- [[_COMMUNITY_Section Component|Section Component]]
- [[_COMMUNITY_Section Component|Section Component]]
- [[_COMMUNITY_Fonts Component|Fonts Component]]

## God Nodes (most connected - your core abstractions)
1. `useScrollReveal()` - 4 edges
2. `HomePage()` - 2 edges
3. `ServicesPage()` - 2 edges
4. `AboutPage()` - 2 edges
5. `Badge()` - 2 edges
6. `cn()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `HomePage()` --calls--> `useScrollReveal()`  [INFERRED]
  app/page.tsx → hooks/use-scroll-reveal.ts
- `ServicesPage()` --calls--> `useScrollReveal()`  [INFERRED]
  app/services/page.tsx → hooks/use-scroll-reveal.ts
- `AboutPage()` --calls--> `useScrollReveal()`  [INFERRED]
  app/about/page.tsx → hooks/use-scroll-reveal.ts
- `Badge()` --calls--> `cn()`  [INFERRED]
  components/ui/badge.tsx → lib/utils.ts

## Communities

### Community 0 - "Page Component"
Cohesion: 0.25
Nodes (4): AboutPage(), HomePage(), ServicesPage(), useScrollReveal()

### Community 1 - "Badge Component"
Cohesion: 0.5
Nodes (2): Badge(), cn()

### Community 2 - "Card Component"
Cohesion: 0.67
Nodes (0): 

### Community 3 - "Layout Component"
Cohesion: 1.0
Nodes (0): 

### Community 4 - "Layout Component"
Cohesion: 1.0
Nodes (0): 

### Community 5 - "Layout Component"
Cohesion: 1.0
Nodes (0): 

### Community 6 - "Layout Component"
Cohesion: 1.0
Nodes (0): 

### Community 7 - "Page Component"
Cohesion: 1.0
Nodes (0): 

### Community 8 - "Button Component"
Cohesion: 1.0
Nodes (0): 

### Community 9 - "Separator Component"
Cohesion: 1.0
Nodes (0): 

### Community 10 - "Input Component"
Cohesion: 1.0
Nodes (0): 

### Community 11 - "Textarea Component"
Cohesion: 1.0
Nodes (0): 

### Community 12 - "Section Component"
Cohesion: 1.0
Nodes (0): 

### Community 13 - "Overview Component"
Cohesion: 1.0
Nodes (0): 

### Community 14 - "Snippet Component"
Cohesion: 1.0
Nodes (0): 

### Community 15 - "Config Component"
Cohesion: 1.0
Nodes (0): 

### Community 16 - "D Component"
Cohesion: 1.0
Nodes (0): 

### Community 17 - "Config Component"
Cohesion: 1.0
Nodes (0): 

### Community 18 - "Config Component"
Cohesion: 1.0
Nodes (0): 

### Community 19 - "Header Component"
Cohesion: 1.0
Nodes (0): 

### Community 20 - "Footer Component"
Cohesion: 1.0
Nodes (0): 

### Community 21 - "Section Component"
Cohesion: 1.0
Nodes (0): 

### Community 22 - "Section Component"
Cohesion: 1.0
Nodes (0): 

### Community 23 - "Fonts Component"
Cohesion: 1.0
Nodes (0): 

## Knowledge Gaps
- **Thin community `Layout Component`** (2 nodes): `layout.tsx`, `RootLayout()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Layout Component`** (2 nodes): `layout.tsx`, `ServicesLayout()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Layout Component`** (2 nodes): `layout.tsx`, `AboutLayout()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Layout Component`** (2 nodes): `layout.tsx`, `ContactLayout()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Page Component`** (2 nodes): `page.tsx`, `handleSubmit()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Button Component`** (2 nodes): `cn()`, `button.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Separator Component`** (2 nodes): `separator.tsx`, `cn()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Input Component`** (2 nodes): `input.tsx`, `Input()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Textarea Component`** (2 nodes): `textarea.tsx`, `cn()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Section Component`** (2 nodes): `hero-section.tsx`, `HeroSection()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Overview Component`** (2 nodes): `services-overview.tsx`, `ServicesOverview()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Snippet Component`** (2 nodes): `AboutSnippet()`, `about-snippet.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Config Component`** (1 nodes): `eslint.config.mjs`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `D Component`** (1 nodes): `next-env.d.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Config Component`** (1 nodes): `next.config.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Config Component`** (1 nodes): `postcss.config.mjs`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Header Component`** (1 nodes): `header.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Footer Component`** (1 nodes): `footer.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Section Component`** (1 nodes): `testimonials-section.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Section Component`** (1 nodes): `cta-section.tsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Fonts Component`** (1 nodes): `fonts.ts`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Are the 3 inferred relationships involving `useScrollReveal()` (e.g. with `HomePage()` and `ServicesPage()`) actually correct?**
  _`useScrollReveal()` has 3 INFERRED edges - model-reasoned connections that need verification._