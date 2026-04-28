const githubPreview = (repo) =>
  `https://opengraph.githubassets.com/1/dilina-jayalath/${encodeURIComponent(
    repo
  )}`;

export const profileStats = [
  {
    value: "25+",
    label: "public repositories with coursework, products, and experiments",
  },
  {
    value: "5",
    label: "live demos published across GitHub Pages, Vercel, and Streamlit",
  },
  {
    value: "Web + AI + Mobile",
    label: "current focus across full-stack builds and practical prototypes",
  },
];

export const featuredProjects = [
  {
    id: 1,
    title: "Artisan Frontend",
    category: "Marketplace",
    year: "2026",
    language: "TypeScript",
    summary:
      "React and TypeScript marketplace frontend for artisan discovery, seller dashboards, cart flows, and polished responsive commerce UX.",
    stack: ["React 18", "TypeScript", "Tailwind CSS", "TanStack Query", "Shadcn UI"],
    highlights: ["Seller dashboard", "Product discovery", "Cart and checkout"],
    image: githubPreview("Artisan-Frontend"),
    codeLink: "https://github.com/dilina-jayalath/Artisan-Frontend",
    liveLink: "https://artisan-frontend-inky.vercel.app",
    liveLabel: "Live site",
  },
  {
    id: 2,
    title: "Turtlebot Simulation DQN",
    category: "Robotics",
    year: "2025",
    language: "Python",
    summary:
      "ROS 2 and Gazebo setup for TurtleBot maze navigation with DQN training loops, simulator tooling, and autonomous pathfinding experiments.",
    stack: ["Python", "ROS 2", "Gazebo", "DQN", "Navigation2"],
    highlights: ["Autonomous navigation", "Reinforcement learning", "Simulation tooling"],
    image: githubPreview("Turtlebot-Simulation-DQN"),
    codeLink: "https://github.com/dilina-jayalath/Turtlebot-Simulation-DQN",
  },
  {
    id: 3,
    title: "GenAI SQL Search",
    category: "AI Search",
    year: "2024",
    language: "Python",
    summary:
      "Natural-language database search workflow that connects a JavaScript frontend and backend with a LangChain-powered Python service.",
    stack: ["React", "Node.js", "Python", "LangChain", "SQL"],
    highlights: ["Natural language queries", "Service orchestration", "Google AI integration"],
    image: githubPreview("Gen-AI--SQL-Search"),
    codeLink: "https://github.com/dilina-jayalath/Gen-AI--SQL-Search",
    liveLink: "https://genai-xi.vercel.app",
    liveLabel: "Live demo",
  },
  {
    id: 4,
    title: "Chat With Your Document",
    category: "Document AI",
    year: "2024",
    language: "Python",
    summary:
      "PDF question-answering app that lets users upload documents and chat with the content through a Streamlit interface.",
    stack: ["Python", "Streamlit", "LangChain", "Gemini", "PDF parsing"],
    highlights: ["Document Q&A", "Streamlit interface", "Embeddings workflow"],
    image: githubPreview("pdf_handler"),
    codeLink: "https://github.com/dilina-jayalath/pdf_handler",
    liveLink: "https://aipdfbot.streamlit.app/",
    liveLabel: "Open app",
  },
  {
    id: 5,
    title: "Book Store",
    category: "Frontend App",
    year: "2025",
    language: "JavaScript",
    summary:
      "Book discovery interface built around the Google Books API with browsing, search, and reader-friendly product detail flows.",
    stack: ["React", "JavaScript", "REST APIs", "Google Books API"],
    highlights: ["API-powered search", "Catalog browsing", "Clean UI flow"],
    image: githubPreview("Book-Store"),
    codeLink: "https://github.com/dilina-jayalath/Book-Store",
    liveLink: "https://book-safari.vercel.app/",
    liveLabel: "Visit demo",
  },
  {
    id: 6,
    title: "Phone Shop",
    category: "Retail Web App",
    year: "2025",
    language: "JavaScript",
    summary:
      "JavaScript web application for a mobile phone shop, focused on product presentation, storefront structure, and retail-style flows.",
    stack: ["JavaScript", "Frontend UI", "Commerce Layouts", "Product Catalog"],
    highlights: ["Retail presentation", "Product catalog", "Shopping experience"],
    image: githubPreview("phone_shop"),
    codeLink: "https://github.com/dilina-jayalath/phone_shop",
  },
];

export const additionalProjects = [
  {
    id: 1,
    title: "Student Management MERN",
    year: "2024",
    type: "MERN",
    summary:
      "CRUD-based student management system covering structured forms, record handling, and admin-facing workflows.",
    codeLink: "https://github.com/dilina-jayalath/StudentManagement-MERN-",
  },
  {
    id: 2,
    title: "CTSE Lab 6 Microservices",
    year: "2026",
    type: "Java",
    summary:
      "Microservices lab work focused on distributed service structure and service-to-service integration patterns.",
    codeLink:
      "https://github.com/dilina-jayalath/CTSE-Lab6-Microservices-IT22588128",
  },
  {
    id: 3,
    title: "Uni Flipper App",
    year: "2024",
    type: "Kotlin",
    summary:
      "Mobile concept app built in Kotlin, adding Android product thinking to the portfolio alongside web work.",
    codeLink: "https://github.com/dilina-jayalath/Uni_Flipper_App",
  },
  {
    id: 4,
    title: "Task Manager Mobile App",
    year: "2024",
    type: "Kotlin",
    summary:
      "Task planning mobile application with Kotlin-focused UI and workflow implementation.",
    codeLink: "https://github.com/dilina-jayalath/TaskManager-MobileApp",
  },
  {
    id: 5,
    title: "Brick Breaker Mobile App",
    year: "2024",
    type: "Kotlin Game",
    summary:
      "Arcade-style Android game project that adds gameplay mechanics and animation work to the project mix.",
    codeLink: "https://github.com/dilina-jayalath/BrickBreaker-Mobile_App",
  },
  {
    id: 6,
    title: "Stock Management Web App",
    year: "2024",
    type: "Java",
    summary:
      "Inventory-focused web application for managing stock views, records, and operational UI flows.",
    codeLink:
      "https://github.com/dilina-jayalath/StockManagment-WebApplication",
  },
];
