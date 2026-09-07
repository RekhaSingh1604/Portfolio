// ────────────────────────────────────────────────────────────
// All editable site content lives here. Update your details,
// projects, and links in this one file — no need to touch
// component code for routine changes.
// ────────────────────────────────────────────────────────────

export const profile = {
  name: "Rekha Singh",
  title: "MERN Stack Developer",
  titleFull: "MERN Stack Developer | Full Stack Developer",
  tagline: "I build scalable, responsive, and user-focused web applications using modern JavaScript technologies.",
  heroDescription:
    "Passionate Full Stack Developer with 1+ years of experience building responsive, scalable and user-focused web applications using React, Next.js, Node.js, Express and MongoDB.",
  badge: "Available for Opportunities",
  email: "singhrekh5704@gmail.com",
  location: "India",
  resumeUrl: "/resume.pdf", // drop your resume PDF in /public as resume.pdf
  social: {
    github: "https://github.com/RekhaSingh1604/",
    linkedin: "https://www.linkedin.com/in/rekha-singh-35a22b309/",
    instagram: "https://www.instagram.com/rekha_singh1604",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const floatingTech = ["React", "JavaScript", "Node.js", "MongoDB"];

export const aboutStats = [
  { value: "1+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "MERN", label: "Full Stack" },
  { value: "100%", label: "Passion for Development" },
];

export const aboutFocus = [
  "Responsive interfaces",
  "Scalable applications",
  "Reusable components",
  "Clean, maintainable code",
  "User-friendly experiences",
];

export const skillCategories = [
  {
    category: "Frontend",
    skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Material UI"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "MySQL"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Vercel"],
  },
];

export const experience = [
  {
    role: "MERN Stack Developer",
    period: "1+ Years Experience",
    points: [
      "Developed responsive web applications using React.js and modern JavaScript.",
      "Built reusable UI components to speed up development across projects.",
      "Integrated REST APIs to connect frontend interfaces with backend services.",
      "Developed backend APIs using Node.js and Express.js.",
      "Worked with MongoDB and MySQL for data modeling and persistence.",
      "Implemented authentication and authorization flows.",
      "Fixed bugs and improved application performance.",
      "Collaborated on real-world web development projects end to end.",
      "Used Git and GitHub for version control and team collaboration.",
    ],
  },
];

export const projects = [
  {
    title: "RoomIt",
    subtitle: "Meeting Room Booking System",
    description:
      "A meeting room booking platform that allows users to view rooms, select available time slots and create bookings while preventing overlapping reservations.",
    tech: ["Next.js", "Node.js", "Express.js", "MongoDB"],
    features: ["Room management", "Time-slot booking", "Booking validation", "Cancellation", "MongoDB integration", "REST APIs"],
    live: null,
    github: "https://github.com/RekhaSingh1604/",
    tag: "Booking Platform",
  },
  {
    title: "Petrol Pump Management System",
    subtitle: "Operations & Records Management",
    description:
      "A management system designed to simplify petrol pump operations, records and business management.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    features: [],
    live: "https://amarneerfuelstationfrontend.vercel.app/",
    github: "https://github.com/RekhaSingh1604/",
    tag: "Business System",
  },
  {
    title: "Zanifest Insurance",
    subtitle: "Insurance Web Platform",
    description:
      "A responsive insurance-focused web platform with a modern user interface and structured content presentation.",
    tech: ["React.js", "JavaScript", "CSS"],
    features: [],
    live: "https://zanifestinsurance.com/",
    github: "https://github.com/RekhaSingh1604/",
    tag: "Business Website",
  },
  {
    title: "Facebook Lead Generation Website",
    subtitle: "Lead Capture & Management",
    description:
      "A responsive lead-generation website designed to capture and manage customer inquiries.",
    tech: ["React.js", "JavaScript", "APIs"],
    features: [],
    live: null,
    github: "https://github.com/RekhaSingh1604/",
    tag: "Lead Generation",
  },
  {
    title: "Undercover Social",
    subtitle: "Social-Focused Website",
    description:
      "A professionally designed social-focused website developed with WordPress and Elementor.",
    tech: ["WordPress", "Elementor"],
    features: [],
    live: null,
    github: "https://github.com/RekhaSingh1604/",
    tag: "WordPress",
  },
];

export const services = [
  {
    title: "Frontend Development",
    description: "Modern, responsive and interactive web interfaces using React.js and Next.js.",
  },
  {
    title: "Full Stack Development",
    description: "Complete web applications using React, Node.js, Express and MongoDB.",
  },
  {
    title: "API Development",
    description: "Secure and scalable REST APIs with authentication and database integration.",
  },
  {
    title: "Responsive Web Design",
    description: "Pixel-perfect responsive websites that work across desktop, tablet and mobile devices.",
  },
];

export const whyWorkWithMe = [
  {
    title: "Clean & Maintainable Code",
    description: "I focus on reusable components and organized code architecture.",
  },
  {
    title: "Responsive Design",
    description: "I build interfaces that provide a consistent experience across devices.",
  },
  {
    title: "Performance Focused",
    description: "I optimize applications for speed, usability and scalability.",
  },
  {
    title: "Problem Solving",
    description: "I enjoy converting complex requirements into practical technical solutions.",
  },
];

export const education = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    subtitle: "Degree",
    type: "degree",
  },
  {
    title: "Full Stack Development ",
    subtitle: "Aeron Digital Solutions",
    type: "certification",
  },
  {
    title: "Software Development Internship",
    subtitle: "QSpiders",
    type: "certification",
  },
];
