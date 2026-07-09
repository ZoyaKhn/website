export const personal = {
  name: "Zoya Khan",
  tagline:
    "Mechanical Engineering Student | Process Engineering | Data Analytics | Product & Strategy",
  intro:
    "I'm an ambitious honours engineering student at the University of Toronto, pursuing a minor in Engineering Business with Rotman. I have a passion for design, problem solving, and consulting — and I'm building a career at the intersection of mechanical engineering, business, and technology. From redesigning workflows at Canada's largest banks to designing gearboxes and deep learning models, I bring analytical rigor, stakeholder empathy, and a collaborative spirit to everything I do.",
  objective:
    "To combine my engineering, design, and problem-solving skills with business acumen to deliver innovative, measurable solutions — whether that's optimizing a process, winning a case competition, or building technology that makes a difference.",
  email: "zoyak.khan@mail.utoronto.ca",
  linkedin: "https://www.linkedin.com/in/zoya-k",
  linkedinHandle: "in/zoya-k",
  github: "https://github.com/ZoyaKhn",
  githubHandle: "ZoyaKhn",
  location: "Toronto, ON",
  resumePath: "/Zoya_Khan_Resume.pdf",
};

export const about = `I'm a Mechanical Engineering student at the University of Toronto with an Engineering Business minor through Rotman, on the Dean's Honour List and recognized with $50K+ in merit scholarships. My experience spans process engineering at CIBC, data analytics at BMO, and continuous improvement at Mother Parkers — alongside leadership in UTESCA, WISE, and UTCA. Whether I'm redesigning exception workflows, analyzing 170+ banking KPIs, designing a 3D printer in SolidWorks, or building CNN models in PyTorch, I bring the same focus: understand the problem deeply, engage stakeholders, and deliver measurable results.`;

export const languages = [
  { name: "English", level: "Native / Bilingual" },
  { name: "French", level: "Professional Working Proficiency" },
  { name: "Urdu", level: "Limited Working Proficiency" },
];

export const experience = [
  {
    company: "CIBC",
    role: "Process Engineering Analyst",
    team: "Real Estate Secured Lending",
    period: "May 2025 – Present",
    location: "Toronto, ON",
    highlights: [
      "Redesigned exception workflow with Product, generating $653K/year in savings through process maps, failure mode analyses, and Figma prototypes",
      "Analyzed 10K+ system fields via Power Query, identifying ~70% field misalignment and a 15% reduction opportunity",
      "Redesigned routing logic from operator insights, eliminating duplicate reviews and generating $2.63M annually",
      "Built Python scripts to analyze 6K+ deals and developed a Foreign Income indicator to mitigate policy gaps",
      "Led system integration for a platform used by 400+ users, prioritizing pain points through Power Automate workflows",
    ],
    metrics: ["$653K/yr", "$2.63M/yr", "10K+ fields", "6K+ deals"],
  },
  {
    company: "BMO",
    role: "Data Analyst",
    team: "Customer Insights & Reporting",
    period: "May – Aug. 2024",
    location: "Toronto, ON",
    highlights: [
      "Developed SAS PROC SQL queries across 20+ databases to analyze 170+ banking KPIs",
      "Identified trends across revenue, balances, delinquency, credit score, and charge-off patterns",
      "Built Excel-based analytical models using customer snapshots and 2-year trend datasets",
      "Led partner meetings and presented insights through data storytelling for strategic initiatives",
    ],
    metrics: ["170+ KPIs", "20+ databases"],
  },
  {
    company: "Mother Parkers Tea & Coffee",
    role: "Engineering Intern",
    team: "Continuous Improvement",
    period: "May – Aug. 2023",
    location: "Mississauga, ON",
    highlights: [
      "Developed Power BI dashboards tracking OEE for 100+ machine lines",
      "Applied Six Sigma methodology to identify bottlenecks, leading to $90K+ in annual savings",
      "Created Excel models for machine runtime calculations based on OEE percentages",
      "Led SME meetings to develop SOPs, enhancing operational efficiency by 60%",
    ],
    metrics: ["$90K+ savings", "60% efficiency", "100+ lines"],
  },
];

export const leadership = [
  {
    org: "UTESCA",
    title: "VP Finance & Events",
    fullName: "UofT Engineering Consulting Association",
    period: "Sep. 2024 – Apr. 2026",
    highlights: [
      "Managed finances within 5% of projections; coordinated vendors for 200+ student events",
      "Executed 6 workshops and case competitions with Big 4 consulting firm partnerships",
      "Led 10 directors with 85%+ meeting attendance and 95% leadership rating",
    ],
  },
  {
    org: "WISE",
    title: "Director Finance & Mentorship",
    fullName: "UofT Women in Science & Engineering",
    period: "Jun. 2024 – Apr. 2026",
    highlights: [
      "Secured $75K in sponsorships for the National Conference (500+ delegates)",
      "Led mentorship program pairing 80+ high school students with UofT STEM mentors",
    ],
  },
  {
    org: "UTCA",
    title: "Associate Professional Development",
    fullName: "UofT Consulting Association",
    period: "Jun. 2025 – Apr. 2026",
    highlights: [
      "Created and led case prep workshops on Profitability, Market Entry, and M&A for 50+ students",
      "Prepared students for the UTCA Case Camp through structured consulting frameworks",
    ],
  },
];

export type Project = {
  title: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  award?: string;
};

export type ProjectCategory = {
  id: string;
  label: string;
  description: string;
  projects: Project[];
};

export const projectCategories: ProjectCategory[] = [
  {
    id: "engineering",
    label: "Engineering Projects",
    description:
      "Mechanical design, CAD, prototyping, and hands-on engineering from coursework and competitions.",
    projects: [
      {
        title: "MIE 243: Right-Angle Gearbox",
        role: "Mechanical Design · Team Project",
        period: "2024",
        description:
          "Designed and manufactured a right-angle gearbox with intersecting 90° input/output shafts and a 3:1 speed reduction. Incorporated bevel and spur gears in SolidWorks CAD, achieving successful 3D-printed prototypes that passed all speed tests within 30 seconds.",
        tags: ["SolidWorks", "CAD", "Gear Design", "3D Printing"],
      },
      {
        title: "MIE 243: 3D Printer Design",
        role: "Design Engineer · Team Project",
        period: "Sep. – Dec. 2023",
        description:
          "Designed a speed-focused FDM 3D printer for hobbyists, selecting ball screws, NEMA 17 steppers, Bowden extrusion, and a heated bed. Optimized for precision, reduced vibrations, and rapid prototyping within a compact 26×26×26 cm frame.",
        tags: ["Mechanical Design", "3D Printing", "NEMA 17", "Product Design"],
      },
      {
        title: "Praxis I: Wet Umbrella Mitigation",
        role: "Design Engineer · ESC 101",
        period: "2022",
        description:
          "Applied the engineering design process to solve wet-umbrella handling on campus. Conducted primary research, built prototypes, and converged on a hydrophobic polypropylene coating inspired by lotus-leaf biomimicry — validated through Pugh charts and contact-angle testing.",
        tags: ["Design Process", "Biomimicry", "Prototyping", "User Research"],
      },
      {
        title: "Praxis II: Touch Trail for Blind Climbers",
        role: "Product Manager · ESC 102",
        period: "Jan. – Apr. 2023",
        description:
          "Partnered with BaseCamp Climbing to enable independent rock climbing for blind individuals. Developed three prototypes — Touch Trail tactile wall paths, an Arduino/IR colour-detecting helmet, and a belt-mounted Mini Model tactile map — with direct stakeholder feedback from blind climbers at Showcase.",
        tags: ["Arduino", "Accessibility", "CAD", "Stakeholder Design"],
        award: "Stakeholder: BaseCamp Climbing",
      },
      {
        title: "2nd Place Winner | RSX Mars Rover Hackathon",
        role: "Team Lead · Robotics",
        period: "Mar. 2023",
        description:
          "Competed in an 8-hour Robotics for Space Exploration hackathon, designing an autonomous rover to navigate smooth and sandy terrain using Arduino, sensors, DC motors, PID control, and Bluetooth. Led systematic framing, task delegation, and team coordination.",
        tags: ["Arduino", "PID Control", "Sensors", "Robotics"],
        award: "2nd Place out of ~40 teams",
      },
      {
        title: "CIV102 Bridge Design Competition",
        role: "Structural Engineer · Team Project",
        period: "Oct. – Nov. 2022",
        description:
          "Collaborated on a small-scale bridge design targeting 400 N load capacity. Proposed 9 diaphragms for structural support, performed hand calculations for tension, compression, and buckling, and wrote a MATLAB script to optimize cross-sections. Bridge withstood 660 N on testing day.",
        tags: ["Structural Engineering", "MATLAB", "Hand Calculations", "Teamwork"],
        award: "660 N load capacity (target: 400 N)",
      },
    ],
  },
  {
    id: "case-studies",
    label: "Case Studies",
    description:
      "Consulting case competitions and business strategy challenges at the intersection of engineering and business.",
    projects: [
      {
        title: "1st Place Winner | Deloitte Ace the Case",
        role: "Case Competition · UofT",
        period: "Jan. 2026",
        description:
          "Competed in Deloitte's Ace the Case competition at the University of Toronto, structuring a strategic recommendation under time pressure and presenting to industry judges with clear frameworks and data-driven insights.",
        tags: ["Strategy", "Consulting", "Presentation", "Frameworks"],
        award: "1st Place",
      },
      {
        title: "2nd Place Winner | CIBC AI & Tech Spark Hackathon",
        role: "Hackathon · CIBC",
        period: "Apr. 2026",
        description:
          "Developed an innovative AI/tech solution during CIBC's internal Spark Hackathon, collaborating with co-op peers to ideate, prototype, and pitch a technology-driven business case to leadership.",
        tags: ["AI", "Innovation", "Pitching", "FinTech"],
        award: "2nd Place",
      },
      {
        title: "2nd Place Winner | Sardo Foods Case Competition",
        role: "Case Competition · UofT Engineering Business",
        period: "Sep. 2023",
        description:
          "Analyzed a real-world business case for Sardo Foods in UofT's Engineering Business Case Competition, developing profitability and market-entry recommendations and presenting to industry partners.",
        tags: ["Business Strategy", "Market Analysis", "Profitability"],
        award: "2nd Place",
      },

    ],
  },
  {
    id: "software",
    label: "Software Projects",
    description:
      "Coding projects in Python, C, deep learning, and web development.",
    projects: [
      {
        title: "Waste Classification Deep Learning",
        role: "Technical Project Lead · APS360",
        period: "Jul. – Aug. 2024",
        description:
          "Programmed a CNN in PyTorch and Python to classify 15K+ images across 12 waste categories. Tuned hyperparameters and model architecture to achieve 90% classification accuracy.",
        tags: ["PyTorch", "Python", "CNN", "Computer Vision"],
      },
      {
        title: "Python Applications",
        role: "Personal Projects · ESC180",
        period: "Oct. 2022 – Apr. 2023",
        description:
          "Built a credit card transaction simulator tracking purchases, interest, and fraud detection. Developed a Gomoku AI engine for strategic move selection and a word-similarity system to approximate synonym closeness.",
        tags: ["Python", "AI", "Simulation", "Algorithms"],
      },
      {
        title: "C: Data Structures & Image Processing",
        role: "Personal Projects · ESC190",
        period: "Oct. 2022 – Apr. 2023",
        description:
          "Implemented an autocomplete engine using weighted term lists, qsort, and binary search with manual memory allocation. Built a seam-carving image resizer using dual-gradient energy and dynamic programming to preserve visual features.",
        tags: ["C", "Dynamic Programming", "Memory Management", "Algorithms"],
      },
    ],
  },
];

export const volunteering = [
  {
    org: "WISE Mentorship Program",
    role: "Mentorship Outreach",
    period: "2024 – 2026",
    description:
      "Pair 80+ high school students with UofT STEM mentors for academic and career guidance, supporting the next generation of women in science and engineering.",
  },
  {
    org: "JA Canada — Espérer",
    role: "Co-Founder & VP Human Resources",
    period: "Jan. – Apr. 2022",
    description:
      "Co-founded a Junior Achievement clothing brand promoting mental health awareness, managing HR and team operations for a youth-led social enterprise supported by Cognizant.",
  },
  {
    org: "JA Canada — Kidsly",
    role: "Co-Founder & VP Finance",
    period: "Jan. – Apr. 2021",
    description:
      "Co-founded a virtual camp for children during the pandemic, managing finances and earning top 3 VP of Finance across all JA companies in Southwestern Ontario.",
  },
  {
    org: "JA Canada — Brain Bundle",
    role: "Co-Founder · Marketing & Sales",
    period: "Sep. – Dec. 2020",
    description:
      "Created an educational venture turning long videos into visual infographic study materials. Led pitching, cold outreach, and social media as a BETA Camp alumni venture.",
  },
];

export const skills = {
  "Data & Analytics": [
    "Excel & VBA",
    "Power BI",
    "Python",
    "SQL",
    "SAS",
    "R",
    "Power Query",
    "Minitab",
    "MATLAB",
    "FactSet",
  ],
  "Software & AI": [
    "C",
    "JavaScript",
    "HTML",
    "GitHub",
    "APIs",
    "Pandas",
    "NumPy",
    "Jupyter",
    "PyTorch",
    "AI Fluency (Cursor/Claude)",
  ],
  "Product & Business Tools": [
    "Jira",
    "Confluence",
    "Agile",
    "Figma",
    "Visio",
    "PowerPoint",
    "Power Automate",
    "SolidWorks",
  ],
  Certifications: [
    "PL-900: Microsoft Power Platform (2026)",
    "AI for Product Owners (2026)",
    "Lean Six Sigma Yellow Belt (2025)",
    "Certificate of Bilingual Studies: French (2022)",
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Leadership", href: "#leadership" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

