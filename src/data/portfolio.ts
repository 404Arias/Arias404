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
  },
  {
    id: "3",
    title: "Weather Analytics",
    description:
      "Dashboard de análisis meteorológico con visualizaciones interactivas y predicciones basadas en ML.",
    image: "/images/project3.jpg",
    technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "TensorFlow"],
    githubUrl: "https://github.com/usuario/weather-analytics",
    liveUrl: "https://weather-analytics.vercel.app",
  },
];

export const experience: Experience[] = [
  {
    id: "1",
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
    degree: "Full Stack Web Development",
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
  name: "Arias404",
  title: "Full Stack Developer Junior",
  tagline: "Creando experiencias digitales excepcionales",
  description:
    "Soy un desarrollador full-stack apasionado por crear soluciones web innovadoras y escalables. Tengo 1 año de experiencia en desarrollo web y me especializo en React, Next.js y tecnologías modernas del ecosistema JavaScript.",
  avatar: "/images/Perfil.jpg",
  location: "Asunción, Paraguay",
  availability: "Disponible para proyectos freelance",
};
