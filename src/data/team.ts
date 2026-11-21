/**
 * Team members. First names only (public). Experience is described by
 * industry / project type, never by client name. "previously at <employer>"
 * is allowed because each employer is listed on the person's own resume.
 *
 * Photos: drop a square image at public/team/<photo> when available; until
 * then the <Avatar> component renders neutral initials. (TODO: real photos.)
 */

export type TeamMember = {
  firstName: string;
  role: string;
  /** Approximate years of experience, for the card. */
  years: string;
  /** 3–5 key skills. */
  skills: string[];
  /** Short bio, ~2 sentences. */
  bio: string;
  /** Filename under public/team/ — may not exist yet (Avatar falls back). */
  photo: string;
};

export const team: TeamMember[] = [
  {
    firstName: 'Andrei',
    role: 'Senior QA Automation Engineer',
    years: '10+ years',
    skills: ['Playwright', 'Selenium', 'Java / TypeScript', 'Mobile (Detox)', 'CI/CD'],
    bio: 'Senior automation engineer who has led QA teams of around thirty engineers and owned release processes end to end. Previously at Betfair, Endava and NTT Data; Oracle Certified Java SE 8 Programmer.',
    photo: 'andrei.jpg',
  },
  {
    firstName: 'Calin',
    role: 'QA Automation Engineer',
    years: '8+ years',
    skills: ['Selenium', 'Playwright', 'RestAssured (API)', 'Framework design', 'CI/CD stability'],
    bio: 'Automation engineer focused on building modular UI and API test frameworks and keeping CI/CD pipelines green. Previously at OpenText, AROBS and Porsche Engineering, with deep roots in safety-critical embedded testing.',
    photo: 'calin.jpg',
  },
  {
    firstName: 'Radu',
    role: 'Senior QA Engineer',
    years: '8+ years',
    skills: ['Playwright', 'Selenium', 'API testing', 'Mobile (iOS/Android)', 'Release QA'],
    bio: 'Senior QA engineer who owns release processes and automated regression for high-traffic web and mobile products. Previously at Betfair, Cognizant Softvision and NTT Data; mentors new joiners and runs technical interviews.',
    photo: 'radu.jpg',
  },
  {
    firstName: 'Flaviu',
    role: 'QA Automation Engineer',
    years: '4+ years',
    skills: ['Java / TypeScript', 'API & backend', 'AWS', 'Selenium', 'CI/CD'],
    bio: 'Automation engineer with strong backend and cloud depth, having worked on highly available platforms serving millions of users. Previously at Betfair, Cognizant Softvision and Netex; AWS Certified Solutions Architect – Associate.',
    photo: 'flaviu.jpg',
  },
];
