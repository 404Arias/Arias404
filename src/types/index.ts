export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  category: "web" | "automation";
  results?: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  description?: string;
}

export interface Skill {
  id: string;
  name: string;
  icon: string;
  level: number;
  category: "frontend" | "backend" | "tools" | "design";
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
