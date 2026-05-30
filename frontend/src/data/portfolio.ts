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
  tagline: string
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
    category: 'Web',
    items: ['React', 'TypeScript', 'Tailwind', 'Vite', 'Responsive UI'],
    proficiency: 92,
  },
  {
    category: 'AI',
    items: ['Python', 'OpenAI', 'Prompt Design', 'Agent workflows', 'Data logic'],
    proficiency: 84,
  },
  {
    category: 'Robotics',
    items: ['Arduino', 'Sensors', 'Circuit design', 'Control logic', 'Prototyping'],
    proficiency: 78,
  },
]

export const projects: Project[] = [
  {
    title: 'AI Study Buddy',
    tagline: 'Learning companion',
    description: 'An intelligent study assistant that helps classmates organize tasks, review concepts, and generate quick study summaries with prompts tuned for students.',
    tags: ['React', 'AI', 'Chatbot', 'Study tools'],
    impact: 'Helped streamline daily study routines and turned hard school topics into clear, friendly explanations.',
    demo: 'https://example.com/ai-study-buddy',
    repo: 'https://github.com/fatuma-tahir/ai-study-buddy',
  },
  {
    title: 'Child Guard Necklace',
    tagline: 'Safety prototype',
    description: 'A wearable tracking concept that combines sensors, alerts, and location-aware logic to support child safety and peace of mind for families.',
    tags: ['IoT', 'Wearables', 'Safety', 'Prototype'],
    impact: 'Demonstrated an early safety product idea for community use and hands-on robotics learning.',
    demo: 'https://example.com/child-guard-necklace',
    repo: 'https://github.com/fatuma-tahir/child-guard-necklace',
  },
  {
    title: 'Robotics Lab Dashboard',
    tagline: 'Project tracker',
    description: 'A dashboard for managing robotics builds, tracking parts, and visualizing project progress through a clean student-focused interface.',
    tags: ['TypeScript', 'UI Design', 'Data', 'Productivity'],
    impact: 'Organized team workflows and made robotics projects easier to manage for school teammates.',
    demo: 'https://example.com/robotics-lab-dashboard',
    repo: 'https://github.com/fatuma-tahir/robotics-lab-dashboard',
  },
]

export const experienceTimeline: ExperienceItem[] = [
  {
    title: 'Grade 10 Developer',
    company: 'Still I Rise International School',
    timeline: '2024 — Present',
    description: 'Building AI and robotics projects as part of school innovation classes and extracurricular tech labs.',
    type: 'education',
  },
  {
    title: 'AI Agent Research',
    company: 'School innovation project',
    timeline: '2024',
    description: 'Designed an AI-agent workflow that supports study planning, quick concept recall, and research note generation.',
    type: 'work',
  },
  {
    title: 'Child Tracking Necklace',
    company: 'Community safety prototype',
    timeline: '2024',
    description: 'Built a wearable idea using sensors and alerts to explore safer mobility for children and families.',
    type: 'work',
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Ms. Amina Hussein',
    role: 'Technology Teacher',
    company: 'Still I Rise International School',
    quote: 'Fatuma is a bright student with a natural curiosity for AI and robotics. Her projects feel practical, thoughtful, and full of energy.',
  },
  {
    name: 'Eng. Hassan Ibrahim',
    role: 'Robotics Mentor',
    company: 'School Innovation Lab',
    quote: 'She approaches each design challenge with care and a strong eye for how technology can support students and families.',
  },
  {
    name: 'Ms. Leila Osman',
    role: 'Classroom Coordinator',
    company: 'Still I Rise International School',
    quote: 'Fatuma’s work brings school learning to life. She quickly turns ideas into prototypes with great attention to detail.',
  },
]

export const socialLinks: SocialLink[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'GitHub', href: 'https://github.com/fatuma-tahir' },
  { label: 'Email', href: 'mailto:fatuma.tahir@example.com' },
]
