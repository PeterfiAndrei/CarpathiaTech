/**
 * Anonymized case studies. Rules:
 *  - no client names, no logos
 *  - only outcomes actually described in the resumes
 *  - described by industry / project type
 *  - web-led ordering (web first, "beyond web" later)
 */

export type CaseStudy = {
  id: string;
  /** e.g. "Web", "Backend at scale", "Automotive" — used as a tag. */
  tag: string;
  title: string;
  context: string;
  challenge: string;
  what: string;
  outcome: string;
  /** `true` for the web-led lead studies. */
  featured?: boolean;
};

export const caseStudies: CaseStudy[] = [
  {
    id: 'betting-web',
    tag: 'Web',
    title: 'Release QA for a high-traffic betting platform',
    context:
      'A European online betting / sports platform serving a very large consumer web audience, releasing frequently.',
    challenge:
      'Frequent releases of a consumer-facing web app needed fast, trustworthy regression coverage without slowing delivery.',
    what:
      'Owned the release QA process and built end-to-end, regression and component automation with Selenium and Playwright, maintaining the CI automation infrastructure that ran it.',
    outcome:
      'Smoother, defect-free releases with automated regression integrated into the delivery pipeline and maintained CI runners.',
    featured: true,
  },
  {
    id: 'banking-web-api',
    tag: 'Web / API',
    title: 'Core functionality & API testing for a banking platform',
    context: 'A banking platform where correctness and data integrity are non-negotiable.',
    challenge:
      'Core banking functionality and the APIs behind it had to be validated thoroughly, including data consistency across services.',
    what:
      'Designed and executed manual and automated tests for core flows, validated APIs with Postman/Swagger, and ran extensive database and data-integrity testing.',
    outcome:
      'Reliable validation of core banking functionality and inter-service communication, with verified data consistency.',
    featured: true,
  },
  {
    id: 'verification-scale',
    tag: 'Backend at scale',
    title: 'Quality for a verification platform serving 9M+ users',
    context:
      'A safer-gambling verification platform built as a highly available, distributed and scalable system.',
    challenge:
      'A platform serving more than nine million users had to stay highly available while verification and monitoring logic evolved.',
    what:
      'Contributed to the design and delivery of the verification platform and rebuilt an existing tool into a scalable monitoring system, with on-call support for live reliability.',
    outcome:
      'A highly available verification platform serving 9M+ users, backed by a scalable monitoring system for user-behaviour analysis.',
  },
  {
    id: 'automotive-hil',
    tag: 'Automotive',
    title: 'Test automation for safety-critical vehicle modules',
    context:
      'Embedded, safety-critical automotive control modules validated against real hardware (clusters and test benches).',
    challenge:
      'Vehicle control functions had to be verified for correctness and traceability against formal requirements, on hardware.',
    what:
      'Designed requirement-based test cases and automated system and integration (HIL) tests with CANoe and CAPL, maintaining full traceability from requirements to results.',
    outcome:
      'Automated, requirement-traceable test coverage for safety-critical vehicle modules, validated on hardware.',
  },
];
