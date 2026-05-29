export interface Experience {
  company: string;
  role: string;
  duration: string;
  description: string[];
  logo: string;
  color?: string;
  backgroundImage?: string;
}

export interface Project {
  title: string;
  tech: string[];
  description: string;
  details?: string[];
  link?: string;
  image?: string; 
  color?: string; 
}

export interface Achievement {
  title: string;
  description: string;
  icon?: any;
  color?: string;
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  gpa: string;
  courses?: string[];
}

