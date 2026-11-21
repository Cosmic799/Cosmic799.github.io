// =====================================================================
//  EDIT THIS FILE to personalise the portfolio.
//  Everything shown on the site (name, photo, story, skills, experience,
//  projects, links, résumé) comes from here — no need to touch the HTML.
// =====================================================================

const PROFILE = {
  name: "Vasu Gupta",
  // Shown under the name, separated by " • "
  roles: ["Backend Engineer", "AI Engineer", "Software Developer"],

  photo: "./assets/img/profile.jpg",

  resume: "./assets/resume.pdf",

  links: {
    linkedin: "https://www.linkedin.com/in/vasugupta001",
    github: "https://github.com/Cosmic799",
    email: "hivasugupta04@gmail.com",
  },

  // "My Story" paragraph(s). Wrap words in **double asterisks** to make them bold.
  story: [
    "I'm Vasu Gupta, a Computer Science graduate from Delhi Technological University and a backend engineer " +
      "currently working at Happiest Minds Technologies.",
    "I work primarily with **Java, Spring Boot, REST APIs, PostgreSQL, and microservices**, building and debugging " +
      "backend systems for enterprise banking applications. My current work involves developing APIs, implementing " +
      "business logic, troubleshooting service interactions, and working with data and workflows across the Arttha " +
      "digital banking platform.",
    "Alongside backend engineering, I've explored **Python, machine learning, LLMs, and RAG**, and have built projects " +
      "ranging from AI-powered applications to machine learning systems. I enjoy understanding how systems work " +
      "end-to-end and turning ideas into practical, working products.",
    "I'm particularly interested in the intersection of **software engineering, AI, and business**, and I'm always " +
      "looking for opportunities to build things that are technically solid and genuinely useful.",
  ],

  // Tech stack cards. Each logo has an `icon` from https://devicon.dev (class without "devicon-")
  // and the `name` shown under it. An icon ending in .svg is shown as an image instead.
  skills: [
    {
      title: "Languages",
      icons: [
        { icon: "java-plain", name: "Java" },
        { icon: "python-plain", name: "Python" },
        { icon: "cplusplus-plain", name: "C++" },
        { icon: "javascript-plain", name: "JavaScript" },
      ],
      text: "My favorite languages for backend development, problem solving, and AI/ML work.",
    },
    {
      title: "Back-End",
      icons: [
        { icon: "postgresql-plain", name: "PostgreSQL" },
        { icon: "spring-original", name: "Spring Boot" },
        { icon: "mongodb-plain", name: "MongoDB" },
        { icon: "flask-original", name: "Flask" },
      ],
      text: "My preferred technologies for back-end programming and database architecture.",
    },
    {
      title: "AI / ML",
      icons: [
        { icon: "jupyter-plain", name: "Jupyter" },
        { icon: "fastapi-plain", name: "FastAPI" },
        { icon: "tensorflow-original", name: "TensorFlow" },
        { icon: "./assets/img/icons/langchain.svg", name: "LangChain" },
      ],
      text: "My go-to technologies for building machine learning models and LLM-powered applications.",
    },
    {
      title: "Tools",
      icons: [
        { icon: "git-plain", name: "Git" },
        { icon: "postman-plain", name: "Postman" },
        { icon: "grafana-plain", name: "Grafana" },
        { icon: "vscode-plain", name: "VS Code" },
      ],
      text: "My favorite tools for version control, API testing, monitoring, and code editing.",
    },
  ],

  // Work experience (newest first)
  experience: [
    {
      role: "Backend Developer",
      company: "Happiest Minds Technologies Ltd.",
      location: "Noida, Uttar Pradesh",
      period: "June 2026 – Present",
      points: [
        "Developed 25+ backend APIs and modules for enterprise banking applications using Java and Spring Boot, covering the Configuration and Payout modules.",
        "Enhanced the Arttha digital banking platform's microservices by integrating services and root-causing API, validation and data-flow issues.",
        "Built secure, configurable systems with role-based access control, Maker-Checker workflows, pagination, filtering and tenant-level data controls.",
      ],
    },
    {
      role: "Software Development Intern – Backend & API Engineering",
      company: "Ingenuity Gaming Pvt. Ltd.",
      location: "Noida, Uttar Pradesh",
      period: "June 2025 – August 2025",
      points: [
        "Implemented and integrated RESTful APIs and backend game-logic services across 3 online slot games.",
        "Designed and ran unit tests for backend APIs, catching defects early and improving regression reliability.",
      ],
    },
  ],

  // Featured projects. Put screenshots in assets/img/projects/
  // `tech` uses the same { icon, name } format as the skill cards
  projects: [
    {
      title: "TradeSmart: AI Trading Advisor",
      image: "./assets/img/projects/tradesmart.png",
      tech: [
        { icon: "java-plain", name: "Java" },
        { icon: "spring-original", name: "Spring Boot" },
        { icon: "postgresql-plain", name: "PostgreSQL" },
      ],
      description:
        "A full-stack financial application built with Java, Spring Boot and PostgreSQL. It runs a modular " +
        "7-stage request orchestration pipeline that integrates external APIs, and streams real-time portfolio, " +
        "position and order data over Server-Sent Events. Hybrid intent classification and dynamic context " +
        "management keep responses low-latency.",
      link: "",
    },
    {
      title: "BuildWise: Hardware Recommendation System",
      image: "./assets/img/projects/buildwise.png",
      tech: [
        { icon: "python-plain", name: "Python" },
        { icon: "flask-original", name: "Flask" },
        { icon: "pandas-plain", name: "Pandas" },
      ],
      description:
        "A multi-stage RAG pipeline that uses the OpenAI API to turn natural-language requests into a structured " +
        "6-factor hardware requirement profile. A few-shot classification layer normalizes laptop descriptions " +
        "into performance tiers, so requirements can be matched to hardware automatically.",
      link: "https://github.com/Cosmic799/BuildWise",
    },
    {
      title: "Resume Matching System",
      image: "./assets/img/projects/resume-matching.webp",
      tech: [
        { icon: "python-plain", name: "Python" },
        { icon: "streamlit-plain", name: "Streamlit" },
        { icon: "sqlite-plain", name: "SQLite" },
      ],
      description:
        "A Streamlit app that parses PDF and DOCX résumés, extracts structured data with Groq LLMs, and ranks " +
        "candidates against a job description using section-wise Sentence Transformer embeddings and weighted " +
        "cosine similarity.",
      link: "https://github.com/Cosmic799/Resume-matching-system",
    },
    {
      title: "PDF Analyzer",
      image: "./assets/img/projects/pdf-analyzer.webp",
      tech: [
        { icon: "python-plain", name: "Python" },
        { icon: "streamlit-plain", name: "Streamlit" },
      ],
      description:
        "A Retrieval-Augmented Generation app for asking questions about uploaded PDFs in plain language. It " +
        "uses LangChain to split, embed and retrieve text from a FAISS vector store, then generates grounded " +
        "answers with an LLM.",
      link: "https://github.com/Cosmic799/Pdf-Analyzer-",
    },
  ],
};
