/**
 * Tech stack, grouped and ordered web-first. Built from the team's resumes.
 * These are rendered as text badges (no third-party logos → no trademark /
 * attribution concerns, and nothing to go stale).
 */

export type TechGroup = {
  label: string;
  items: string[];
};

export const techStack: TechGroup[] = [
  {
    label: 'Web',
    items: ['Playwright', 'Selenium', 'Cucumber', 'Mocha', 'Cross-browser'],
  },
  {
    label: 'API',
    items: ['Postman', 'RestAssured', 'Swagger / OpenAPI', 'REST'],
  },
  {
    label: 'Mobile',
    items: ['Detox', 'Appium', 'Xcode', 'Android Studio'],
  },
  {
    label: 'Languages',
    items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'Kotlin'],
  },
  {
    label: 'CI/CD & Cloud',
    items: ['GitHub Actions', 'Jenkins', 'GitLab CI', 'AWS', 'Codemagic'],
  },
  {
    label: 'Tools',
    items: ['Jira', 'Confluence', 'Git', 'Maven / Gradle', 'MySQL / MongoDB'],
  },
  {
    label: 'Beyond web',
    items: ['CANoe / CAPL', 'Vector tools', 'Polarion', 'DOORS', 'HIL'],
  },
];
