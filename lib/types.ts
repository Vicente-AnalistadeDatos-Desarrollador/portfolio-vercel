export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  bio: string;
  summary: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured: boolean;
  category: 'data-science' | 'analytics' | 'machine-learning' | 'visualization' | 'other';
  notebookId?: string; // ID del notebook relacionado para enlace directo
  sqlFileUrl?: string; // URL del archivo SQL para proyectos de bases de datos
  notebookIds?: string[]; // IDs de múltiples notebooks relacionados
}

export interface JupyterNotebook {
  id: string;
  title: string;
  description: string;
  notebookUrl: string;
  githubUrl?: string;
  technologies: string[];
  date: string;
  tags: string[];
  featured: boolean;
}
