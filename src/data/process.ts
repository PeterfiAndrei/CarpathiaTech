/** "How we work" — the engagement process, in order. */

export type Step = {
  title: string;
  description: string;
};

export const process: Step[] = [
  {
    title: 'Intro call',
    description:
      'A short call to understand your product, your stack and where quality hurts most. No cost, no obligation.',
  },
  {
    title: 'NDA & scope',
    description:
      'We sign an NDA before any access, then agree on scope, which engineer(s) join, and how we measure success.',
  },
  {
    title: 'Onboarding into your tools',
    description:
      'We join your Slack, Jira and standups and get least-privilege access to the repos and environments we need — nothing more.',
  },
  {
    title: 'Delivery',
    description:
      'We work embedded in your team: building automation, running test cycles and raising quality alongside your developers.',
  },
  {
    title: 'Reporting & scaling',
    description:
      'Regular, transparent reporting on coverage and risk — and the flexibility to scale the team up or down as your roadmap changes.',
  },
];
