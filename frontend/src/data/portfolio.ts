export type NavItem = {
  label: string
  href: string
}

export type SkillCategory = {
  category: string
  items: string[]
  proficiency: number
}

export type Project = {
  title: string
  description: string
  tags: string[]
  impact: string
  demo: string
  repo: string
}

export type ExperienceItem = {
  title: string
  company: string
  timeline: string
  description: string
  type: 'work' | 'education'
}

export type Testimonial = {
  name: string
  role: string
  company: string
  quote: string
}

export type SocialLink = {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'React Three Fiber'],
    proficiency: 94,
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'NestJS', 'GraphQL', 'REST APIs'],
    proficiency: 88,
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma', 'Supabase'],
    proficiency: 86,
  },
  {
    category: 'Cloud',
    items: ['AWS', 'Vercel', 'Netlify', 'Docker', 'Terraform'],
    proficiency: 82,
  },
  {
    category: 'AI/ML',
    items: ['Python', 'LangChain', 'OpenAI', 'Data Pipelines', 'Prompt Engineering'],
    proficiency: 76,
  },
  {
    category: 'DevOps',
    items: ['CI/CD', 'GitHub Actions', 'Kubernetes', 'Monitoring', 'Observability'],
    proficiency: 80,
  },
]

export const projects: Project[] = [
  {
    title: 'Aegis Studio',
    description: 'A polished product experience for an enterprise SaaS launch, blending immersive motion with highly optimized modular architecture.',
    tags: ['React', 'Tailwind', 'Vercel', 'GSAP'],
    impact: 'Improved conversion velocity by 38% and reduced time-to-market through automated UI patterns.',
    demo: 'https://aegis-studio.example.com',
    repo: 'https://github.com/your-handle/aegis-studio',
  },
  {
    title: 'Nexa Finance',
    description: 'A secure fintech dashboard with advanced data visualization, real-time sync, and accessible interactions for elite financial workflows.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'GraphQL'],
    impact: 'Delivered a premium analytics platform used by teams across 4 regions with sub-second dashboard latency.',
    demo: 'https://nexa-finance.example.com',
    repo: 'https://github.com/your-handle/nexa-finance',
  },
  {
    title: 'Luna Launch',
    description: 'A launch campaign experience with cinematic scrolling, magnetic interactions, and storytelling-driven product case studies.',
    tags: ['React', 'GSAP', 'R3F', 'Cloud'],
    impact: 'Generated a 51% uplift in early access signups through refined motion and premium brand presentation.',
    demo: 'https://luna-launch.example.com',
    repo: 'https://github.com/your-handle/luna-launch',
  },
]

export const experienceTimeline: ExperienceItem[] = [
  {
    title: 'Principal Software Engineer',
    company: 'Apex Labs',
    timeline: '2024 — Present',
    description: 'Leading product engineering at the intersection of AI-driven platforms, developer experience, and cloud-native architecture.',
    type: 'work',
  },
  {
    title: 'Founding Engineer',
    company: 'Verity Collective',
    timeline: '2021 — 2024',
    description: 'Built the core platform, launch systems, and observability pipelines that supported fast-paced growth and technical reliability.',
    type: 'work',
  },
  {
    title: 'M.S. Computer Science',
    company: 'Stanford University',
    timeline: '2019 — 2021',
    description: 'Focused on distributed systems, human-centered AI, and product-focused design systems.',
    type: 'education',
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Amina Ali',
    role: 'CEO, Aegis Studio',
    company: 'Aegis Studio',
    quote: 'Their product leadership is impeccable—every interaction feels intentional, elegant, and built to scale.',
  },
  {
    name: 'Michael Chen',
    role: 'Head of Product',
    company: 'Nexa Finance',
    quote: 'A rare combination of technical excellence and polished design execution. Delivered faster than expected with premium quality.',
  },
  {
    name: 'Sofia Ramos',
    role: 'Founder',
    company: 'Luna Launch',
    quote: 'A visionary collaborator who turned complex product ambitions into a world-class digital experience.' ,
  },
]

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Github', href: 'https://github.com/' },
  { label: 'Email', href: 'mailto:hello@example.com' },
]
