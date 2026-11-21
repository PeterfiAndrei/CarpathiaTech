/** FAQ — the questions a US engineering manager actually asks. */

export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: 'How does engagement and contracting work?',
    answer:
      'We work as a flexible monthly engagement: one or more dedicated engineers embedded in your team, billed per engineer, with no long lock-in. You can scale the team up or down as your roadmap changes. We sign your contract and NDA before any work begins.',
  },
  {
    question: 'Which time zones do you cover?',
    answer:
      'We adapt to your hours. The team is EU-based but routinely works in client time zones, including full overlap with US hours (East and West Coast) for standups, pairing and releases.',
  },
  {
    question: 'How quickly can an engineer ramp up?',
    answer:
      'After an intro call and NDA, onboarding into your tools typically takes a few days. Because our engineers are senior and self-directed, they start contributing to test coverage early rather than needing lengthy hand-holding.',
  },
  {
    question: 'How do you communicate and report progress?',
    answer:
      'We join your existing channels — Slack, Jira, standups and sprint demos — so we work as part of your team, not a black box. You get regular, transparent reporting on coverage, risk and what shipped.',
  },
  {
    question: 'What if we need to replace or change an engineer?',
    answer:
      'Because quality lives in shared frameworks, documentation and your own tools rather than in one person, we can swap or add an engineer with minimal disruption. We handle the handover so your coverage never drops.',
  },
  {
    question: 'Who owns the tests and IP we pay for?',
    answer:
      'You do. All test code, frameworks, documentation and artifacts we produce for you are your property and live in your repositories. We bring expertise and reusable patterns, not lock-in.',
  },
  {
    question: 'How do you handle security and our data?',
    answer:
      'We sign an NDA before any engagement, work with least-privilege access, and keep client data inside client systems — nothing is copied out. As an EU-based team we are GDPR-aware by default.',
  },
  {
    question: 'Do you only do web testing?',
    answer:
      'Web test automation is our headline strength, but the team also covers mobile automation (iOS/Android), API and backend testing, and safety-critical embedded/automotive testing when a project needs it.',
  },
];
