/**
 * ─────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT — edit this file to update the whole site.
 *  Anything marked "TODO" is something to confirm or fill in.
 * ─────────────────────────────────────────────────────────────
 */

export const site = {
  url: "https://your-domain.com", // TODO: your deployed URL (used for SEO)
  name: "Dineth Sewmina",
  title: "Cybersecurity Undergraduate · SLIIT",
  description:
    "Portfolio of Dineth Sewmina — BSc (Hons) Information Technology undergraduate at SLIIT, specialising in Cyber Security, with hands-on interest in wireless and network security.",
  cvPath: "/cv.pdf",
  profileImage: "/profile-cutout.png", // transparent PNG in /public works best (original: /profile.jpg)
  location: "Sri Lanka",
  availability: "Open to internships & opportunities",
};

export const socials = {
  email: "dinethsewminayma724@gmail.com",
  linkedin: "https://www.linkedin.com/in/dineth-sewmina-aa0a5b314",
  github: "https://github.com/sewwwaaa",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#credentials" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  greeting: "> Hello World, I'm",
  // Cycled by the typing effect under your name.
  roles: ["Cybersecurity Undergraduate", "Aspiring Penetration Tester", "TryHackMe Learner"],
  intro:
    "I'm a third-year BSc (Hons) Information Technology undergraduate at SLIIT, specialising in Cyber Security. I enjoy learning how systems are attacked and how to defend them — from wireless network security and traffic analysis to hands-on labs on TryHackMe.",
  focus: ["Wireless Security", "Network Traffic Analysis", "Kali Linux", "Security Testing"],
};

export const about = {
  paragraphs: [
    "I'm Dineth, a BSc (Hons) Information Technology undergraduate at the Sri Lanka Institute of Information Technology (SLIIT), specialising in Cyber Security and currently in my third year.",
    "Through academic projects I've built practical knowledge in wireless network security — including an analysis of Wi-Fi deauthentication attacks using Kali Linux, Aircrack-ng and Wireshark. I keep sharpening my skills with ongoing hands-on training on TryHackMe, and I've also gained exposure to security testing, DevOps and QA automation in a professional setting.",
    "Before moving into security, I worked as a Payment Officer, where I processed financial transactions, reconciled records and worked within strict compliance procedures — experience that taught me accuracy and attention to detail. Outside tech, I play for the SLIIT Cricket Team, which keeps my teamwork, leadership and time management sharp.",
  ],
  highlights: [
    {
      title: "Cyber Security Studies",
      text: "BSc (Hons) IT specialising in Cyber Security at SLIIT — 3rd year.",
    },
    {
      title: "Wireless & Network Security",
      text: "Analysed Wi-Fi deauthentication attacks with packet capture and monitoring tools.",
    },
    {
      title: "Hands-on Labs",
      text: "Ongoing cybersecurity training on TryHackMe using Kali Linux toolsets.",
    },
    {
      title: "Teamwork & Leadership",
      text: "SLIIT Cricket Team member, representing the university in inter-university tournaments.",
    },
  ],
};

export type SkillCategory = {
  id: "security" | "devops" | "qa" | "monitoring" | "soft";
  title: string;
  blurb: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "security",
    title: "Cybersecurity",
    blurb: "Tools and techniques for finding and understanding security weaknesses.",
    skills: [
      "Kali Linux",
      "Aircrack-ng",
      "Wireshark",
      "Wireless Network Security",
      "Vulnerability Assessment",
      "Penetration Testing",
      "OWASP Top 10",
      "Burp Suite",
      "OWASP ZAP",
      "Nmap",
      "Grype",
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    blurb: "Building, deploying and running infrastructure.",
    skills: [
      "AWS (EC2, S3, ALB, AMI)",
      "Docker",
      "Linux",
      "Git & GitHub",
      "Terraform",
      "Nginx",
      "CI/CD",
      "Cloudflare",
    ],
  },
  {
    id: "qa",
    title: "QA Automation",
    blurb: "Automated tests that make releases more reliable.",
    skills: [
      "Playwright",
      "JavaScript / TypeScript",
      "API Testing",
      "Postman",
      "Regression Testing",
      "Page Object Model (POM)",
    ],
  },
  {
    id: "monitoring",
    title: "Monitoring",
    blurb: "Visibility into production so issues are caught early.",
    skills: ["New Relic", "PM2", "PagerDuty", "Application Performance Monitoring"],
  },
  {
    id: "soft",
    title: "Soft Skills",
    blurb: "How I work with people and get things done.",
    skills: ["Commitment", "Teamwork", "Communication", "Leadership", "Organization", "Creativity"],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
  responsibilities: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: "Cybersecurity Intern",
    company: "AMERCK CARE (PRIVATE) LIMITED",
    period: "2026 — Present", // TODO: confirm start month
    summary:
      "Hands-on internship gaining practical experience across security, DevOps and QA automation.",
    responsibilities: [
      "Supporting vulnerability assessments and security testing of web applications.",
      "Assisting with application deployment and infrastructure management on AWS.",
      "Working on automated tests using Playwright.",
      "Helping monitor application performance and alerting.",
    ],
    tags: ["Security Testing", "AWS", "Playwright", "New Relic", "Linux"],
  },
  {
    role: "Payment Officer",
    company: "PortCity BPO",
    period: "05/2025 — 04/2026",
    location: "Havelock City",
    summary:
      "Handled daily financial transaction processing, record keeping and reporting in a compliance-driven environment.",
    responsibilities: [
      "Processed daily financial transactions, including deposits and withdrawals.",
      "Maintained accurate transaction records and reconciled payment data.",
      "Managed and updated financial reports using Google Sheets.",
      "Verified transaction details and resolved discrepancies promptly.",
      "Ensured compliance with company policies and financial procedures.",
    ],
    tags: ["Transaction Processing", "Reconciliation", "Google Sheets", "Compliance"],
  },
  {
    role: "Quality Checker",
    company: "Laundromat",
    period: "08/2024",
    summary: "Quality checking of sheets before delivery.",
    responsibilities: ["Inspected sheets to ensure they met quality standards."],
    tags: ["Quality Control", "Attention to Detail"],
  },
];

export type Project = {
  title: string;
  category: "Security" | "DevOps" | "QA" | "Monitoring";
  description: string;
  points?: string[];
  tech: string[];
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Wi-Fi Deauthentication Attack Analysis",
    category: "Security",
    description:
      "An in-depth study of wireless network vulnerabilities, analysing how deauthentication attacks affect network availability and user connectivity, and evaluating controls to prevent them.",
    tech: ["Kali Linux", "Aircrack-ng", "Wireshark", "Packet Capture"],
    github: "https://github.com/sewwwaaa", // TODO: link the project repo if public
  },
  {
    title: "Playwright QA Automation Framework",
    category: "QA",
    description:
      "An end-to-end test automation framework built with Playwright and TypeScript using the Page Object Model, covering UI flows, API checks and regression suites.",
    tech: ["Playwright", "TypeScript", "POM", "API Testing"],
    github: "https://github.com/sewwwaaa", // TODO: repo link
  },
  {
    title: "Web Application Vulnerability Assessment",
    category: "Security",
    description:
      "A security assessment of a web application against OWASP Top 10 risks using automated scanning and manual testing, with findings documented for remediation.",
    tech: ["Burp Suite", "OWASP ZAP", "Nmap", "Grype"],
    github: "https://github.com/sewwwaaa", // TODO: repo link
  },
  {
    title: "AWS Infrastructure & Deployment",
    category: "DevOps",
    description:
      "Cloud infrastructure for hosting applications on AWS — EC2 instances behind an Application Load Balancer, S3 storage, custom AMIs and Nginx as a reverse proxy.",
    tech: ["AWS EC2", "ALB", "S3", "AMI", "Nginx", "Terraform"],
    github: "https://github.com/sewwwaaa", // TODO: repo link
  },
  {
    title: "Application Monitoring with New Relic",
    category: "Monitoring",
    description:
      "Application performance monitoring set up with New Relic and PM2, with alerting routed through PagerDuty to surface errors and slowdowns.",
    tech: ["New Relic", "PM2", "PagerDuty", "APM"],
    github: "https://github.com/sewwwaaa", // TODO: repo link
  },
  {
    title: "CI/CD & Deployment Automation",
    category: "DevOps",
    description:
      "Automated build, test and deployment pipeline that runs tests and security checks on every push and ships containerised applications.",
    tech: ["CI/CD", "GitHub", "Docker", "Linux", "Cloudflare"],
    github: "https://github.com/sewwwaaa", // TODO: repo link
  },
];

export type Credential = {
  title: string;
  issuer: string;
  date: string;
  note?: string;
  link?: string;
  placeholder?: boolean;
};

export const education: Credential[] = [
  {
    title: "BSc (Hons) Information Technology — Cyber Security",
    issuer: "Sri Lanka Institute of Information Technology (SLIIT)",
    date: "2024 — Present",
    note: "3rd year undergraduate",
  },
  {
    title: "G.C.E. Advanced Level — Engineering Technology",
    issuer: "C.W.W. Kannangara College, Matugama",
    date: "2023",
  },
  {
    title: "Certificate Course in Information Technology",
    issuer: "INFO NET, Payagala",
    date: "2015",
    note: "Completed",
  },
  {
    title: "Basic Course in IT",
    issuer: "Divisional Secretariat, Beruwala",
    date: "2015",
    note: "Completed",
  },
];

export const training: Credential[] = [
  {
    title: "Cybersecurity Training",
    issuer: "TryHackMe",
    date: "Ongoing",
    note: "Hands-on labs and learning paths",
    link: "", // TODO: your TryHackMe public profile URL
  },
];

export const certifications: Credential[] = [
  {
    title: "Add your first certification",
    issuer: "e.g. CompTIA Security+, eJPT, (ISC)² CC",
    date: "—",
    placeholder: true,
  },
];

export const activities: Credential[] = [
  {
    title: "Cricketer — SLIIT Cricket Team",
    issuer: "Representing SLIIT in inter-university cricket tournaments",
    date: "2024 — Present",
  },
  {
    title: "5th Battle of Raigam Pasdun",
    issuer: "Played for the 1st XI Cricket Team",
    date: "2023",
  },
  {
    title: "Easter Band Member",
    issuer: "Royal College, Panadura",
    date: "2018 — 2021",
  },
];
