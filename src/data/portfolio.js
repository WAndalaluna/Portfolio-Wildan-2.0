export const SITE = {
  name: "Wildan Andalaluna",
  email: "wildanandalaluna@gmail.com",
  linkedInUrl: "https://www.linkedin.com/in/andalaluna27/",
  githubUrl: "https://github.com/WAndalaluna",
  instagramUrl: "https://www.instagram.com/wandalaluna/",
};

export const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export const HERO = {
  heading: "Hi, I'm Wildan",
  typewriterText: "A Passionate Junior Developer",
  paragraph1:
    "I build reliable, human-centered digital experiences. With foundations in machine learning, web engineering, and product collaboration, I translate complex ideas into intuitive solutions that create measurable value.",
  paragraph2:
    "Driven by curiosity and impact, I explore emerging tools while maintaining clean, accessible, and scalable code standards.",
  primaryCta: { href: "#projects", label: "View My Work" },
  secondaryCta: { href: `mailto:${SITE.email}`, label: "Let's Connect" },
};

export const ABOUT = {
  paragraphs: [
    "Final-year Informatics Engineering student at Universitas Padjadjaran with strong interests in software development and data-driven systems.",

    "Experienced in building web applications, machine learning models, and AI-powered systems, with exposure to structured development environments and cross-functional collaboration.",
  ],
};

export const CERTIFICATES = [
  {
    id: "bangkit-2024-batch-2",
    title: "Bangkit Academy 2024 — Batch 2 Certificate",
    issuer: "Bangkit Academy",
    year: "2024",
    href: "/%5BBangkit%202024%20Batch%202%5D%20Certificate%20-%20M011B4KY4483.pdf",
    description: "Credential ID: M011B4KY4483",
  },
  {
    id: "certificate-1752404447983",
    title: "HCIA-AI V3.5 Course (Indonesian)",
    issuer: "Huawei Talent Online",
    year: "2024",
    href: "/1752404447983.jpg",
    description: "Issued: 2024-06-22",
  },
  {
    id: "certificate-1756404286999-1",
    title: "Anaconda Python for Data Science — Professional Certificate",
    issuer: "LinkedIn Learning × Anaconda",
    year: "2025",
    href: "/1756404286999%20(1).jpg",
    description: "Completed: 2025-08-28",
  },
];

export const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    items: ["PHP", "Python", "C++"],
  },
  {
    title: "Web Programming",
    items: ["Next.js", "React", "Node.js", "REST APIs", "Tailwind CSS", "Laravel", "CodeIgniter"],
  },
  {
    title: "Machine Learning",
    items: ["Recommendation Systems", "Supervised Learning", "Unsupervised Learning", "Model Evaluation"],
  },
  {
    title: "Data & Analytics",
    items: ["Python", "Pandas", "NumPy", "scikit-learn"],
  },
  {
    title: "Databases",
    items: ["MySQL"],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Git/GitHub",
      "Streamlit",
      "Canva",
      "Google & Microsoft Environment",
    ],
  },
];

export const PROJECTS = [
  {
    id: "Hanglekiu",
    title: "Hanglekiu Dental Clinic Website",
    subtitle: "Clinic website & booking",
    description:
      "Dynamic clinic website using Laravel & MySQL with online booking and patient management.",
    tags: ["Laravel", "MySQL"],
    cta: { label: "Repository", href: "https://github.com/isactofficial/HangLeKiuDental.git", variant: "default" },
  },
  {
    id: "ping",
    title: "Ping! - Kaki Lima Tracking App Recommendation System",
    subtitle: "Weather-aware street food recommender",
    description:
      "Personalized street-food recommendations based on weather, temperature, and user ratings.",
    tags: ["Python", "scikit-learn", "TensorFlow", "Recommender System"],
    cta: { label: "Repository", href: "https://github.com/Bangkit-KakiLima/Bangkit-KakiLima-Main.git", variant: "default" },
  }
];
