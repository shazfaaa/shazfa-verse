export type ProjectCategory = 'all' | 'ui-design' | 'web-dev' | 'it-ba' | 'branding' | 'social-media' | 'editorial' | 'artwork' | 'ui-ux';

export interface DemoAccount {
  role: string;
  email: string;
  badge?: string;
}

export interface DemoCredentials {
  password: string;
  accounts: DemoAccount[];
  note?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: string;
  client: string;
  role: string;
  tools: string[];
  coverImage: string;
  galleryImages: string[];
  galleryLabels?: string[];
  summary: string;
  overview: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  colorPalette?: string[];
  accentColor?: string;
  stats?: { label: string; value: string }[];
  featured?: boolean;
  orientation?: 'landscape' | 'portrait' | 'square';
  // Specialized fields for Web Dev & BA
  liveUrl?: string;
  githubUrl?: string;
  figmaEmbedUrl?: string;
  figmaShareUrl?: string;
  methodologies?: string[];
  artifacts?: string[];
  metrics?: { label: string; value: string }[];
  demoCredentials?: DemoCredentials;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  category: string;
  date: string;
  readTime: string;
  coverImage: string;
  tags: string[];
}

export interface SocialProfile {
  platform: string;
  handle: string;
  url: string;
  iconName: string;
  followers?: string;
  description: string;
  accent: string;
}
