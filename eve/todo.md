# Project Todo

## Progress

- Total Tasks: 126
- Completed: 79 (foundation and homepage implementation verified with `npm run build`)
- Remaining: 47
- Current Phase: Responsive, accessibility, and browser QA

## 1. Project Preparation

- [x] [P0] Review the current project structure and verify all existing files before implementation.
- [ ] [P0] Verify the approved stack and deployment assumptions against `tech_stack.md` and `ai_execution.md`.
  - [ ] Record and resolve the missing stack specification in `tech_stack.md` before relying on any unconfirmed stack detail.
  - [x] Preserve the existing Vite frontend, Netlify deployment compatibility, and future Supabase BaaS direction stated in `ai_execution.md`.
- [x] [P0] Check current dependencies; do not add unnecessary dependencies or replace libraries without approval.
- [x] [P0] Identify reusable components, existing assets, pages, configurations, and working functionality.
- [x] [P0] Confirm the planned frontend remains simple to deploy to Netlify.
- [x] [P0] Before any major, architectural, or destructive change, document the proposed change, reason, impact, and whether approval is required.
- [ ] [APPROVAL REQUIRED] Change project structure, replace libraries, introduce a framework, or make another major architectural decision.
- [ ] [APPROVAL REQUIRED] Delete or replace existing pages, components, assets, configuration, database objects, or working functionality.

## 2. Base Frontend Setup

- [x] [P0] Verify the React + Vite + TypeScript setup before frontend work.
- [x] [P0] Establish global CSS, reset/base styles, and a consistent modern sans-serif typography system.
- [x] [P0] Define design tokens for the approved white-and-blue palette: white/near-white foundations, light/pale/soft/medium/royal blues, dark-navy text, subtle borders, and soft blue-gray shadows.
  - [x] Keep white/near-white dominant; use light blues for backgrounds and supporting visuals, royal blue for key actions/emphasis, and dark navy selectively for contrast.
  - [x] Use blue gradients selectively for visual graphics or selected emphasis; do not apply them to every card or button.
  - [x] Keep charts in the blue family unless additional semantic colors become genuinely necessary for market meaning.
- [x] [P0] Create a centered container system: 1200–1380px maximum width with responsive side padding (desktop 60–120px, tablet 32–48px, mobile 18–24px).
- [x] [P0] Define the 4px-based spacing system (4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 120px) and responsive section spacing.
- [x] [P0] Define the shared border-radius system: small UI 10–14px, cards 18–24px, feature cards 24–32px, buttons 20–28px, and pills fully rounded.
- [x] [P0] Define responsive breakpoints for large desktop, standard desktop, tablet, mobile, and small mobile.
- [x] [P1] Organize assets so illustrations, device/dashboard visuals, chart graphics, icons, and image variants remain reusable and optimized.
- [x] [P1] Use intentional 2D/2.5D fintech illustrations, layered interfaces, dashboards, device mockups, and limited coin renders; avoid artificial-looking scenes, gaming visuals, emoji, and cartoon iconography.

## 3. Global Components

- [x] [P0] Build a reusable lightweight navbar with logo, desktop navigation, account actions, and sticky-state styling if used.
- [x] [P0] Build primary and secondary button components with the approved blue, border, radius, and hover states.
- [x] [P0] Build reusable section-label/eyebrow, hero-heading, section-heading, and body-text components with a clear heading hierarchy.
- [ ] [P1] Build reusable feature, market, statistic, floating-information, image, and CTA-card components.
  - [ ] Use generous padding, subtle borders/shadows, rounded corners, clean typography, and varied editorial card sizing rather than identical generic boxes.
- [x] [P1] Build CTA block and reusable footer-column components.
- [x] [P0] Build accessible mobile navigation with logo, menu control, optional compact account CTA, and a white slide/fade panel.
- [x] [P1] Apply a consistent minimal outline or solid icon style with approved blue-scale colors and consistent stroke weight.

## 4. Homepage Development

- [x] [P0] Build the homepage in the PRD sequence, with purposeful whitespace and the hierarchy: eyebrow, heading, supporting content, then CTA or visual content.
- [x] [P0] Build navbar section.
  - [x] Add Home, About, Services, Markets, and Contact navigation links; Register and Sign In account actions.
  - [x] Keep the 70–90px header visually lightweight, white/slightly transparent, and free of heavy borders or shadows.
- [x] [P0] Build hero section.
  - [x] Add a pill label, controlled-width headline/copy, primary CTA, and optional secondary CTA.
  - [x] Use approximately 45% content / 55% visual composition on desktop; keep the hero predominantly white.
  - [x] [P1] Integrate the local Bitcoin MP4 as the dominant, responsive hero visual without overlay cards; verified with `npm run build`.
  - [x] [P1] Tighten the Hero-to-Who We Are transition with content-based hero spacing and responsive About top padding; verified with `npm run build`.
- [x] [P1] Build About / Who We Are section.
  - [x] Include eyebrow, large heading, concise company/value content, and an appropriate supporting visual or statistics in a 60/40 or 50/50 desktop layout.
- [x] [P1] Build Services section.
  - [ ] Present Crypto Assets, Market Intelligence, Institutional Solutions, Secure Transactions, Portfolio Insights, and Compliance only if these labels/content are selected for the page.
  - [x] Use large feature cards with varied internal layouts, concise copy, icons, and small visuals; do not make every card dark blue.
  - [x] [P1] Refine the three-card surface system with premium borders, luminous gradients, aligned sizing, and a Card 01 image-ready visual zone; verified with `npm run build`.
- [x] [P1] Build Market / Data visual section.
  - [x] Pair explanatory content with a strong static or animated dashboard mockup, such as chart, asset list, portfolio balance, performance indicator, or asset cards.
  - [x] Do not implement live market data; it is outside the PRD scope.
- [x] [P1] Build Trust / Security section.
  - [x] Use minimal large typography, modern blue security/compliance visuals, and supporting cards; avoid neon green and stereotypical giant padlocks.
- [x] [P1] Build Statistics section when included.
  - [x] Use large numbers, small labels, royal-blue emphasis, and whitespace rather than placing every statistic in a card.
- [x] [P1] Build final CTA section.
  - [x] Use a minimal light-blue treatment or a sparingly used royal-blue block with eyebrow, heading, paragraph, primary CTA, and optional secondary link.
- [x] [P1] Build footer.
  - [x] Include logo, short brand description, navigation, products/services, company, legal, social links, contact information, and copyright.
  - [x] Use either white with blue-gray dividers or deep navy as the final contrast section; avoid a fully saturated blue footer.

## 5. Hero Visual Composition

- [x] [P0] Build the hero as independently positioned layers, not one flattened image.
  - [x] Add a subtle background graphical layer (wave/grid, curved data lines, nodes, chart lines, geometric patterns, or transaction paths) that can extend beyond the container without harming text readability.
  - [x] Add main financial/crypto artwork using the approved blue visual direction.
  - [x] Add a separate device/dashboard interface layer.
  - [x] Add compact floating market/statistic/information cards with limited text, light surfaces, subtle borders, and controlled depth.
  - [x] Add small labels, accents, and any supporting illustration as separate layers.
  - [x] Preserve the prescribed depth order: background decoration, main artwork, secondary interface/device, floating cards, labels/accents.
- [x] [P1] Size and position the layered composition so all overlap is intentional and headline readability remains clear.
- [x] [P0] Build a responsive hero composition.
  - [x] At tablet sizes, reduce type, card scale, offsets, and spacing; collapse navigation when needed.
  - [x] On mobile, restructure into eyebrow, heading, paragraph, CTA, then visual composition rather than merely shrinking desktop.
  - [x] Keep main artwork at roughly 85–100% of available mobile width, retain useful floating cards within the viewport, and reduce decorative complexity.

## 6. Animation System

- [x] [P0] Use a restrained, consistent motion system with smooth easing (such as `cubic-bezier(.22, 1, .36, 1)`), primarily CSS transforms and opacity.
- [x] [P1] Create the page-load sequence: navbar, hero eyebrow, heading, supporting text, CTA, main artwork, floating cards, then secondary visual elements.
  - [x] Keep the sequence controlled so it does not delay usability or first paint.
  - [x] Reveal hero heading with opacity and 15–25px vertical transform over about 500–700ms.
  - [x] Reveal the main hero visual with opacity, scale from 0.96, and vertical transform over about 700–900ms.
  - [x] Reveal floating cards independently with fade/translate, 10–25px movement, and 80–150ms stagger.
- [ ] [P1] Implement section scroll reveals using Intersection Observer and native browser APIs.
  - [ ] Reveal eyebrow, heading, paragraph, and cards/visuals in order with 80–150ms stagger and 15–30px vertical movement.
- [x] [P1] Add subtle card, image, and button hover states.
  - [x] Card hover: 3–6px lift, optional 1.01 scale, and slightly stronger blue border over 200–300ms.
  - [x] Image hover: clipped 1.02 scale over 300–500ms.
  - [x] Button hover: 1–2px lift or 1.01–1.02 scale; primary buttons deepen slightly.
- [x] [P2] Add idle floating motion only to 1–3 selected hero elements (3–7px, 4–7 seconds, smooth loop).
- [ ] [P2] Add barely perceptible background-only hero parallax (maximum 15–30px over a large scroll range) if it supports the composition.
- [x] [P0] Implement `prefers-reduced-motion`.
  - [x] Remove idle motion and parallax; replace slide effects with simple fades and avoid large scale transitions.
- [x] [P0] Avoid bouncing, flashing, aggressive scaling, fast parallax, excessive rotation, and continuous motion throughout the page.

## 7. Responsive Development

- [ ] [P0] Verify large-desktop layout: full navigation, two-column hero, generous whitespace, and stable layered elements.
- [ ] [P0] Verify standard-desktop layout: container width, type scale, content hierarchy, grids, and card composition.
- [ ] [P0] Verify tablet layout: adjusted spacing/type, viable hero columns, reduced visual offsets, and navigation collapse behavior.
- [ ] [P0] Verify mobile layout: composed hero order, mobile navigation, one-column content where needed, reduced visual complexity, and non-overflowing floating cards.
- [ ] [P0] Verify small-mobile layout: typography, spacing, image sizing, cards/grids, section gaps, and 44px minimum touch targets.

## 8. Accessibility

- [ ] [P0] Use semantic HTML and a correct, sequential heading hierarchy.
- [ ] [P0] Ensure keyboard navigation, visible focus states, accessible buttons/links, and accessible mobile-menu controls.
- [ ] [P0] Add meaningful alt text to informative images and appropriate treatment for decorative visuals.
- [ ] [P0] Verify sufficient contrast for blue text on white, readable typography, clear CTA hierarchy, and no color-only status communication.
- [ ] [P0] Maintain approximately 44px minimum touch targets.
- [ ] [P0] Verify reduced-motion support across animated elements.

## 9. Performance

- [ ] [P0] Optimize images and visual assets; prefer WebP/AVIF where appropriate, use SVG for suitable graphics, and use optimized transparent PNG only where needed.
- [ ] [P1] Lazy-load non-critical images and avoid large autoplay video usage.
- [ ] [P0] Reduce unnecessary JavaScript and dependencies; reuse existing components and native browser capabilities before adding a library.
- [ ] [P0] Keep animation performant by animating transform/opacity rather than layout properties and avoiding layout-shifting animations.
- [ ] [P1] Verify build size and production performance, including smooth scrolling/animation behavior where practical.

## 10. Supabase Preparation

- [ ] [P1] Keep frontend UI decoupled from future backend concerns; do not implement backend, API, database, authentication, payment, trading, real-time market-data, admin, or server features at this frontend stage.
- [ ] [P1] When backend work is approved, create a clean, isolated Supabase client location and keep data services separate from UI components.
- [ ] [P1] When authentication work is approved, prepare integration architecture without embedding authentication logic in presentational components.
- [x] [P0] Use environment variables for Supabase configuration; never hard-code or commit API keys, passwords, database credentials, or service-role keys in frontend code.
- [ ] [APPROVAL REQUIRED] Modify authentication architecture or Supabase authentication configuration.
- [ ] [APPROVAL REQUIRED] Create, delete, or significantly modify Supabase tables, relationships, schema, migrations, or Row Level Security policies.
  - [ ] Apply RLS requirements when approved database work begins.

## 11. Deployment

- [x] [P0] Verify a production build succeeds and remains compatible with Netlify.
- [x] [P1] Confirm the Vite build command and publish directory from the existing project configuration; do not assume unrecorded values.
- [ ] [P1] Add SPA redirect handling only if routing requires it and the existing deployment setup does not already provide it.
- [ ] [P1] Configure deployment environment variables only when backend configuration is approved; never expose secrets.
- [ ] [P0] Test routes, static assets, and production console output in the deployment build.

## 12. Testing and QA

- [ ] [P0] Run the development build and production build after substantial implementation changes.
- [ ] [P0] Check browser console, broken imports, broken links, route behavior, and obvious regressions.
- [ ] [P0] Test desktop/mobile navigation, CTA interactions, hover states, animations, and reduced-motion behavior.
- [ ] [P0] Test responsive layouts at all defined breakpoints, including hero composition, grids, image sizes, cards, spacing, touch targets, overflow, and overlapping layers.
- [ ] [P0] Test keyboard navigation, focus visibility, semantic structure, contrast/readability, and image/asset loading.
- [ ] [P0] Test the Netlify-targeted deployment build and verify it has no production console errors.

## 13. Final Review

- [ ] [P0] Compare the completed frontend against `prd.md`, including the premium minimal fintech direction, layered hero, white/blue color system, typography, reusable components, responsive behavior, and subtle motion.
- [ ] [P0] Compare implementation against `tech_stack.md`; obtain clarification for its currently empty specification before asserting full stack compliance.
- [ ] [P0] Verify compliance with `ai_execution.md`, including approvals, simple implementation, secret handling, regression protection, verification, and deployment compatibility.
- [ ] [P0] Confirm no unapproved framework, backend, database, library replacement, or unnecessary dependency was introduced.
- [ ] [P0] Confirm no existing working functionality, assets, configurations, pages, or components were accidentally removed or replaced.
- [ ] [P0] Confirm the project remains easy to deploy to Netlify and ready for a future, approval-gated Supabase/BaaS integration.
