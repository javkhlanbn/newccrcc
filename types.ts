export type Language = 'mn' | 'en';

export interface NavItem {
  id: string;
  label: string;
  path?: string;
  children?: NavItem[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  summary: string;
  image: string;
  objectives: string[];
  activities: string[];
  outputs: string[];
  status: 'Ongoing' | 'Completed' | 'Planned';
}

export interface DocumentItem {
  id: string;
  title: string;
  type: 'PDF' | 'XLSX' | 'DOCX';
  date: string;
  size: string;
  category: 'Budget' | 'Audit' | 'Plan' | 'Report';
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  photoUrl: string;
}