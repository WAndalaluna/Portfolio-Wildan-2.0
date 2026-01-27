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
  // Add your certificates here.
  // Example:
  // {
  //   id: "bangkit-ml-2024",
  //   title: "Bangkit Academy — Machine Learning",
  //   issuer: "Bangkit Academy",
  //   year: "2024",
  //   href: "https://...",
  // }
];

export const SKILL_CATEGORIES = [
  {
    title: "Programming",
    items: ["PHP", "Python", "C++"],
  },
  {
    title: "Web Programming",
    items: ["Next.js", "React", "Tailwind CSS", "Laravel", "CodeIgniter"],
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
    title: "Backend & APIs",
    items: ["Node.js", "FastAPI", "REST APIs"],
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
    id: "noteboost",
    title: "NoteBoost",
    subtitle: "AI-powered note-taking platform",
    description:
      "Intelligent capture and summarization with semantic search. Focus on retrieval efficiency & low-latency inference.",
    tags: ["Python", "FastAPI", "Vector DB", "Tailwind"],
    cta: { label: "Repository", href: "https://github.com/raythrp/NoteBoost.git", variant: "default" },
  },
  {
    id: "ping",
    title: "Ping! Tracker",
    subtitle: "Street food discovery & nutrition",
    description:
      "Hybrid recommendation engine combining collaborative & content-based filtering for personalized suggestions.",
    tags: ["Python", "TensorFlow", "RecSys", "GCP"],
    cta: { label: "Repository", href: "https://github.com/Bangkit-KakiLima/Bangkit-KakiLima-Main.git", variant: "default" },
  },
  {
    id: "cluster",
    title: "Image Clustering",
    subtitle: "Visual grouping pipeline",
    description:
      "Applied unsupervised learning (K-Means + DBSCAN) for pattern grouping and anomaly spotting in image sets.",
    tags: ["Streamlit", "scikit-learn", "DBSCAN", "K-Means"],
    cta: { label: "Repository", href: "https://github.com/WAndalaluna/Clustering-web-app.git", variant: "default" },
  },
];
