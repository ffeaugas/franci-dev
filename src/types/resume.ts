import { ReactNode } from "react";

interface WithTitle {
  title: string;
}

export type Technology =
  | "C++"
  | "Qt"
  | "OpenCV"
  | "Typescript"
  | "React"
  | "Remix"
  | "GraphQl"
  | "Express.js"
  | "jQuery"
  | "Pug"
  | "MySQL"
  | "AWS"
  | "Next.js"
  | "Postgres"
  | "Lemonway"
  | "Nest.js"
  | "Golang"
  | "Three.js"
  | "PHP"
  | "Wordpress"
  | "Javascript"
  | "C"
  | "Docker"
  | "PostgreSQL"
  | "Python"
  | "VBA"
  | "WebGL"
  | "Vercel";

export interface PresentationCard {
  icon: string;
  title: string;
  description: string;
}

export interface Presentation extends WithTitle {
  description: string;
  cards: PresentationCard[];
}

export interface Client {
  name: string;
  description: string;
  technologies: Technology[];
  link?: string;
}

export interface ExperienceFooter {
  name: string;
  description: string;
  technologies: Technology[];
}

export interface Experience extends WithTitle {
  company: string;
  year: string;
  description?: ReactNode;
  clients?: Client[];
  footer?: ExperienceFooter;
  link?: string;
}

export interface Experiences {
  title: string;
  cards: Experience[];
}

export interface Project extends WithTitle {
  description: string;
  year: string;
  technologies: Technology[];
  link?: string;
}

export interface Projects {
  title: string;
  cards: Project[];
}

export interface Formation extends WithTitle {
  description: string;
  year: string;
  technologies: Technology[];
}

export interface Formations {
  title: string;
  cards: Formation[];
}

export interface ResumeData {
  presentation: Presentation;
  experiences: Experiences;
  projects: Projects;
  formation: Formations;
}

export type ResumeSectionType = keyof ResumeData;

export const resumeSections: ResumeSectionType[] = [
  "presentation",
  "experiences",
  "projects",
  "formation",
];
