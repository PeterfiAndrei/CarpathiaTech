/**
 * Single source of truth for all editable business values.
 * Change the company name, contact details, scheduling and form IDs here —
 * nowhere else in the codebase should hardcode these.
 */

export const config = {
  /** Company / brand — a general software-engineering brand, not QA-specific. */
  company: {
    name: 'Carpathia Tech',
    /** Short wordmark used in the logo (kept identical to `name` for now). */
    wordmark: 'Carpathia Tech',
    tagline: 'Software engineering partner from the heart of Europe',
    /** QA is our FIRST practice — the company will add more practices later. */
    firstPractice: 'QA & Test Automation',
    location: 'Cluj-Napoca, Romania (EU)',
    /** Used in <meta description> and Open Graph — describes the *company*, not just QA. */
    metaDescription:
      'Carpathia Tech is a software engineering partner from the EU. Our first practice is QA & Test Automation: senior engineers who embed in your product team, with web test automation as the core strength.',
  },

  /** Primary contact + calls to action. Replace the TODO placeholders. */
  contact: {
    // TODO: replace with the real business email address.
    email: 'hello@carpathia.tech',
    // TODO: replace with the real Calendly (or other scheduler) URL.
    calendlyUrl: 'https://calendly.com/your-handle/intro-call',
    // TODO: paste the Formspree form ID (e.g. 'xayzwklm'). Form posts to
    //       https://formspree.io/f/<FORMSPREE_FORM_ID>
    formspreeFormId: 'FORMSPREE_FORM_ID',
  },

  /** Social / external links. */
  social: {
    // TODO: replace with the real company LinkedIn URL.
    linkedin: 'https://www.linkedin.com/company/carpathia-tech',
  },

  /**
   * Headline positioning numbers.
   * Experience is presented as "experienced engineers, 10+ years" — not a
   * combined-years figure. All values are supportable from the team resumes.
   */
  stats: {
    engineers: 4,
    yearsLabel: '10+',
    /** Distinct tools/frameworks across web, API, mobile, CI/CD, embedded. */
    technologies: '25+',
  },
} as const;

/** Convenience: fully-formed Formspree endpoint for the contact form. */
export const formspreeEndpoint = `https://formspree.io/f/${config.contact.formspreeFormId}`;
