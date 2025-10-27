import { Project, Experience, Education, Skill, SocialLink } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "TherapyMentorAI",
    description:
      "Therapy Mentor es una app que recrea la experiencia de una sesión psicológica a través de una IA. Ofrece interacción conversacional empática, sin necesidad de agendar horarios, y funciona como herramienta de apoyo emocional accesible y sin juicios. Ideal como recurso complementario para reflexionar o expresarse cuando lo necesites.",
    image: "/images/therapymentor.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "LemonSqueezy",
    ],
    githubUrl: "https://github.com/usuario/therapymentor",
    liveUrl: "https://therapymentor.vercel.app/",
    featured: true,
    category: "web",
  },
  {
    id: "2",
    title: "AQ Test",
    description:
      "lataforma digital que ofrece la posibilidad de completar los cuestionarios AQ-10 y AQ-50 en línea. Con un diseño claro y funcional, brinda resultados inmediatos que sirven como herramienta de autoexploración y educación, sin reemplazar la valoración profesional.",
    image: "/images/image.png",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/usuario/task-manager",
    liveUrl: "https://aq-check.vercel.app/",
    featured: true,
    category: "web",
  },
  {
    id: "3",
    title: "WitheList Page",
    description:
      "Dashboard de análisis meteorológico con visualizaciones interactivas y predicciones basadas en ML.",
    image: "/images/WhiteList.png",
    technologies: ["Next.js", "Tailwind", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/404arias",
    liveUrl: "https://white-list-page.vercel.app/",
    category: "web",
  },
  {
    id: "8",
    title: "Base de Conocimiento Conversacional en WhatsApp",
    description:
      "Sistema avanzado que convierte una carpeta de Google Drive en una base de conocimiento inteligente, accesible mediante WhatsApp y potenciada con IA.",
    image: "/images/RAG-AI.png",
    technologies: [
      "n8n",
      "Supabase",
      "PostgreSQL",
      "Google Drive API",
      "WhatsApp Business API",
    ],
    category: "automation",
    results: [
      "Respuestas basadas exclusivamente en documentos propios",
      "Actualización automática sin intervención manual",
      "Experiencia conversacional con memoria persistente",
    ],
  },
  {
    id: "5",
    title: "WhatsApp Business Automation",
    description:
      "Flujo automatizado para envío de mensajes masivos, respuestas automáticas y seguimiento de conversaciones.",
    image: "/images/WP-AU.png",
    technologies: ["N8N", "WhatsApp Business API", "ManyChat", "Redis"],
    featured: true,
    category: "automation",
    results: [
      "+60% engagement rate",
      "Ahorro de 15 horas/semana",
      "Respuesta 24/7 automática",
    ],
  },
  {
    id: "7",
    title: "Sistema Integral de Automatización de Ventas",
    description:
      "Automatización completa del ciclo de vida de un lead, desde la captación en WhatsApp hasta el seguimiento y gestión en Telegram y Google Sheets.",
    image: "/images/Ventas-AI.png",
    technologies: [
      "n8n",
      "Google Sheets",
      "Google Calendar",
      "Telegram Bot API",
      "WhatsApp Business API",
    ],
    category: "automation",
    results: [
      "Optimización del ciclo de ventas",
      "Ahorro de más de 6 horas semanales",
      "Mayor tasa de conversión y seguimiento efectivo",
    ],
  },
];

export const experience: Experience[] = [
  {
    id: "1",
    title: "Freelance Full-Stack & Automation Developer",
    company: "Asunción",
    period: "2023 - Actualidad",
    description:
      "Creación de automatizaciones con n8n. Integración de sistemas mediante APIs REST, OAuth 2.0 y webhooks. Desarrollo de flujos conversacionales con Klirk, logrando hasta +40% de conversión de leads. Modelado de bases de datos, con integraciones personalizadas para CRM. Transformación y orquestación de datos con JavaScript/TypeScript. Configuración de tracking de métricas y dashboards para campañas de marketing digital.",
    technologies: [
      "n8n",
      "Make.com",
      "JavaScript",
      "TypeScript",
      "APIs REST",
      "OAuth 2.0",
      "Webhooks",
      "Klirk",
      "CRM",
    ],
  },
  {
    id: "2",
    title: "Asistente de Webmaster / Colaborador en Gestión Web",
    company: "Unidad de Informática de la Universidad Autonoma de Asunción",
    period: "2025 - Presente",
    description:
      "Colaboro en la gestión, mantenimiento y optimización de sitios web, apoyando en tareas técnicas y de contenido para asegurar un funcionamiento correcto y una experiencia de usuario eficiente.",
    technologies: ["PHP", "SQL", "HTML", "CSS", "JavaScript"],
  },
];

export const education: Education[] = [
  {
    id: "1",
    degree: "Ingeniería en Informatica ",
    school: "Universidad Autonoma de Asunción",
    period: "2022 - Actualidad",
    description:
      "Cursando la carrera de Ingeniería en Informatica. Especialización en desarrollo de software y arquitectura de sistemas. .",
  },
  {
    id: "2",
    degree: "Certificación Google Ciberseguridad",
    school: "Google",
    period: "2025",
    description:
      "Certificación profesional en ciberseguridad. Curso realizado en la plataforma Coursera.",
  },
  {
    id: "3",
    degree: "BootCamp Full Stack Web Developer",
    school: "FullStackOpen - University of Helsinki",
    period: "2025",
    description:
      "Programa completo de desarrollo web full-stack con proyectos prácticos.",
  },
];

export const skills: Skill[] = [
  // Frontend
  { id: "1", name: "React", icon: "react", level: 95, category: "frontend" },
  { id: "2", name: "Next.js", icon: "nextjs", level: 90, category: "frontend" },
  {
    id: "3",
    name: "TypeScript",
    icon: "typescript",
    level: 70,
    category: "frontend",
  },
  {
    id: "4",
    name: "Tailwind CSS",
    icon: "tailwind",
    level: 92,
    category: "frontend",
  },

  // Backend
  { id: "6", name: "Node.js", icon: "nodejs", level: 85, category: "backend" },

  {
    id: "8",
    name: "PostgreSQL",
    icon: "postgresql",
    level: 80,
    category: "backend",
  },
  { id: "9", name: "MongoDB", icon: "mongodb", level: 78, category: "backend" },
  {
    id: "10",
    name: "GraphQL",
    icon: "graphql",
    level: 50,
    category: "backend",
  },

  // Tools
  { id: "11", name: "Git", icon: "git", level: 90, category: "tools" },
  { id: "12", name: "Docker", icon: "docker", level: 70, category: "tools" },
  { id: "14", name: "Vercel", icon: "vercel", level: 88, category: "tools" },

  // Design
  { id: "15", name: "Figma", icon: "figma", level: 85, category: "design" },

  // Automatización
  { id: "16", name: "n8n", icon: "zap", level: 92, category: "tools" },
  { id: "17", name: "Make.com", icon: "zap", level: 88, category: "tools" },
  {
    id: "18",
    name: "APIs REST",
    icon: "globe",
    level: 90,
    category: "backend",
  },
  {
    id: "19",
    name: "OAuth 2.0",
    icon: "shield",
    level: 85,
    category: "backend",
  },
  { id: "20", name: "Webhooks", icon: "link", level: 88, category: "backend" },
  {
    id: "21",
    name: "Klirk",
    icon: "message-circle",
    level: 90,
    category: "tools",
  },
  {
    id: "22",
    name: "CRM Integration",
    icon: "users",
    level: 85,
    category: "tools",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/404Arias",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mathias-arias-/",
    icon: "linkedin",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/mathias_arias",
    icon: "instagram",
  },
  {
    name: "Email",
    url: "mailto:mathi.fer069@gmail.com",
    icon: "mail",
  },
];

export const personalInfo = {
  name: "Mathias",
  title: "Desarrollador Full-Stack y Especialista en Automatizaciones",
  tagline:
    "Creando experiencias digitales excepcionales y automatizaciones inteligentes",
  description:
    "Soy un desarrollador full-stack apasionado por crear soluciones web innovadoras y automatizaciones que optimizan procesos empresariales. Tengo 3 años de experiencia en desarrollo web y me especializo en React, Next.js, n8n, Make.com y tecnologías modernas del ecosistema JavaScript.",
  avatar: "/images/Perfil.jpg",
  location: "Asunción, Paraguay",
  availability: "Disponible para proyectos freelance",
};
