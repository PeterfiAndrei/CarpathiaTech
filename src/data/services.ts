/**
 * Services, grouped by *practice* so new practices (e.g. Development, DevOps)
 * can be added later without restructuring. Today we ship one practice:
 * "QA & Test Automation". Web is intentionally ordered first.
 */

export type Service = {
  /** Short, stable id (used for anchors / keys). */
  id: string;
  title: string;
  /** The client problem this solves. */
  problem: string;
  /** What we actually do. */
  what: string;
  /** Typical deliverables the client receives. */
  deliverables: string[];
  /** Inline SVG icon key — see components/Icon.astro. */
  icon: string;
  /** `true` → highlighted / leads the grid (web-first). */
  featured?: boolean;
};

export type Practice = {
  id: string;
  name: string;
  /** Short note shown under the practice heading. */
  blurb: string;
  services: Service[];
};

export const practices: Practice[] = [
  {
    id: 'qa',
    name: 'QA & Test Automation',
    blurb:
      'Our first practice. Senior QA engineers who join your product team and make quality a continuous, measurable part of delivery — led by web test automation.',
    services: [
      {
        id: 'qa-team-on-demand',
        title: 'QA Team on Demand',
        problem:
          'You need senior QA capacity now — without the months-long hiring cycle or the overhead of a permanent headcount.',
        what:
          'Dedicated senior QA engineers embed directly in your product team: your Slack, your Jira, your standups. They own quality alongside your developers and scale up or down as your roadmap shifts.',
        deliverables: [
          'One or more dedicated engineers, ramped into your workflow',
          'Full overlap with your working hours, including US time zones',
          'Flexible monthly engagement — scale the team up or down',
        ],
        icon: 'users',
        featured: true,
      },
      {
        id: 'web-test-automation',
        title: 'Web Test Automation',
        problem:
          'Manual regression is slow and flaky releases erode trust. Your web app needs fast, reliable automated coverage.',
        what:
          'We design and build maintainable UI, end-to-end, component and API-behind-the-web test suites with Selenium and Playwright — cross-browser, data-driven, and wired into your pipeline.',
        deliverables: [
          'Modular, maintainable automation framework (Page Object / fixtures)',
          'E2E, component and cross-browser coverage of critical flows',
          'API checks behind the UI for faster, more stable tests',
        ],
        icon: 'browser',
        featured: true,
      },
      {
        id: 'cicd-stabilization',
        title: 'CI/CD Test Integration & Stabilization',
        problem:
          'Tests that pass locally but fail in CI — or a suite so flaky the team stops trusting it — block every release.',
        what:
          'We integrate your suites into GitHub Actions, Jenkins or GitLab, then hunt down and repair flaky tests so the pipeline stays green for the right reasons.',
        deliverables: [
          'Automated tests running on every pull request',
          'Flaky-test triage and root-cause fixes',
          'Faster, parallelised, trustworthy pipelines',
        ],
        icon: 'pipeline',
        featured: true,
      },
      {
        id: 'qa-audit',
        title: 'QA Audit & Test Strategy',
        problem:
          "You are not sure where your coverage gaps, risks or process bottlenecks are — or how to set up QA from scratch.",
        what:
          'We review your current testing, coverage and release process, then deliver a prioritised test strategy: what to automate, what to keep manual, and how to structure the release cycle.',
        deliverables: [
          'Coverage & risk assessment with prioritised findings',
          'Test strategy and automation roadmap',
          'Test-case design and release-process recommendations',
        ],
        icon: 'audit',
      },
      {
        id: 'manual-release-qa',
        title: 'Manual & Exploratory + Release QA',
        problem:
          'Some things still need a sharp human eye — exploratory testing, release validation and data-integrity checks before you ship.',
        what:
          'We run structured manual and exploratory testing, regression and release validation, including database / data-integrity checks, so every release goes out with confidence.',
        deliverables: [
          'Exploratory & regression test cycles',
          'Release validation and sign-off support',
          'Database / data-integrity verification',
        ],
        icon: 'check',
      },
    ],
  },
];

/**
 * "Beyond web" — real capabilities we keep as secondary: mentioned, not hidden.
 * Pulled from the team's resumes.
 */
export const beyondWeb: { title: string; description: string; icon: string }[] = [
  {
    title: 'Mobile automation',
    description:
      'Native iOS & Android automated testing with Detox and Appium, built and run on real device infrastructure.',
    icon: 'mobile',
  },
  {
    title: 'API & backend (SDET)',
    description:
      'API automation with RestAssured and Postman, plus backend and SDET depth on high-availability, high-scale platforms.',
    icon: 'api',
  },
  {
    title: 'Embedded & automotive',
    description:
      'Safety-critical embedded testing — HIL, CANoe/CAPL, system and integration testing against real hardware.',
    icon: 'chip',
  },
];
