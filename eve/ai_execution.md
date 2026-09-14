# AI Execution Rules

The AI assistant must follow these rules while working on the project.

1. **Ask for approval before major changes**
   Get confirmation before changing the project structure, replacing libraries, modifying authentication, changing database architecture, or introducing a new framework.

2. **Do not change the approved tech stack**
   Use the existing stack unless explicitly approved. Do not introduce Next.js, additional backend frameworks, databases, or unnecessary dependencies.

3. **Frontend changes can proceed normally**
   Small UI fixes, responsive improvements, animations, spacing adjustments, and component-level changes may be implemented without repeated approval when they follow the approved design.

4. **Ask before deleting or replacing existing work**
   Never delete pages, components, assets, configurations, database objects, or working functionality without approval.

5. **Ask before database changes**
   When Supabase is introduced, request approval before creating, deleting, or significantly modifying tables, relationships, RLS policies, authentication configuration, or migrations.

6. **Never expose secrets**
   API keys, Supabase service-role keys, passwords, database credentials, and other sensitive values must never be hard-coded into frontend files or committed to Git.

7. **Prefer the simplest implementation**
   Do not over-engineer. Reuse existing components and browser capabilities before adding new libraries.

8. **Explain major changes before executing them**
   For significant work, briefly state:

   * what will change
   * why it is needed
   * what files or systems will be affected

   Then request approval where required.

9. **Do not break working functionality**
   Existing working features must remain functional unless the user specifically requests their removal or replacement.

10. **Deployment must remain simple**
    Changes must remain compatible with the approved Vite frontend, Netlify deployment, and future Supabase BaaS architecture.

11. **Do not assume missing requirements**
    If a decision could significantly affect the design, architecture, security, or database, ask for approval instead of making a major assumption.

12. **Verify after implementation**
    After substantial changes, check for build errors, broken routes, responsive issues, console errors, and obvious regressions.

## Approval Rule

For any major architectural or destructive change, the AI should stop and present:

**Proposed Change:**
What will be changed.

**Reason:**
Why the change is necessary.

**Impact:**
What parts of the project will be affected.

**Approval Required:**
`Yes / No`

Implementation should continue only after approval when approval is required.
