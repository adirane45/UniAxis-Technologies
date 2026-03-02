import {
  Blocks,
  Bot,
  Briefcase,
  ChartNoAxesColumn,
  Cloud,
  Cpu,
  FileCode2,
  Fingerprint,
  Layers,
  MapPin,
  MessageSquare,
  Rocket,
  Server,
  Shield,
  Sparkles,
  Workflow,
  type LucideIcon,
} from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ServiceItem {
  title: string;
  summary: string;
  icon: LucideIcon;
  category: 'Platform' | 'Infrastructure' | 'Security';
}

export interface ProjectItem {
  name: string;
  type: string;
  summary: string;
  metrics: string[];
  stack: string[];
}

export interface ValueItem {
  title: string;
  summary: string;
  icon: LucideIcon;
}

export interface InternshipTrack {
  title: string;
  duration: string;
  mode: string;
}

export const navItems: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Internship', href: '#internship' },
  { label: 'Company', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const heroStats: StatItem[] = [
  { value: '65+', label: 'Solutions Delivered' },
  { value: '28', label: 'Active Retainers' },
  { value: '99.9%', label: 'Service Uptime' },
  { value: '<2h', label: 'Critical Response' },
];

export const serviceItems: ServiceItem[] = [
  {
    title: 'Infrastructure Engineering',
    summary: 'Hybrid cloud setup, hardened networking, and managed observability for business-critical workloads.',
    icon: Server,
    category: 'Infrastructure',
  },
  {
    title: 'Cyber Defense Stack',
    summary: 'Threat monitoring, access controls, and endpoint governance aligned to modern compliance requirements.',
    icon: Shield,
    category: 'Security',
  },
  {
    title: 'SaaS Product Delivery',
    summary: 'End-to-end product engineering from UX, architecture, APIs, billing, and production deployment.',
    icon: Layers,
    category: 'Platform',
  },
  {
    title: 'Automation Workflows',
    summary: 'Operational automation with event-driven jobs, integrations, and internal tools for faster execution.',
    icon: Workflow,
    category: 'Platform',
  },
  {
    title: 'Cloud Performance Tuning',
    summary: 'Resource optimization, bottleneck diagnostics, and performance budgets to control cost and speed.',
    icon: Cloud,
    category: 'Infrastructure',
  },
  {
    title: 'Secure Access Programs',
    summary: 'Identity-first security architecture with policy-based access and audit-ready implementation.',
    icon: Fingerprint,
    category: 'Security',
  },
];

export const projectItems: ProjectItem[] = [
  {
    name: 'Campus Ping',
    type: 'Multi-tenant SaaS Platform',
    summary: 'Institution communication platform with role-aware publishing, alerts, and analytics.',
    metrics: ['11 departments onboarded', '95% notification visibility', 'Single-click publishing'],
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
  },
  {
    name: 'Mirror Leech Bot',
    type: 'Automation Product',
    summary: 'Transfer orchestration bot for high-volume file movement across cloud providers.',
    metrics: ['Parallel transfer pipelines', 'Automated retry strategy', 'Ops dashboard telemetry'],
    stack: ['Python', 'Telegram API', 'aria2c', 'GDrive API', 'Containerized Runtime'],
  },
  {
    name: 'Ops Control Console',
    type: 'Internal Reliability Suite',
    summary: 'Monitoring and escalation dashboard for infrastructure health and incident response playbooks.',
    metrics: ['Realtime event stream', 'SLA breach alerting', 'Weekly performance reports'],
    stack: ['React', 'Node.js', 'Timeseries DB', 'Prometheus'],
  },
];

export const valueItems: ValueItem[] = [
  {
    title: 'System Thinking',
    summary: 'We design every engagement as an evolving system, not just a one-time build.',
    icon: Cpu,
  },
  {
    title: 'Execution Quality',
    summary: 'Production discipline, measurable milestones, and transparent delivery cadence.',
    icon: ChartNoAxesColumn,
  },
  {
    title: 'Partnership Mindset',
    summary: 'Collaboration-first workflows with frequent demos, checkpoints, and priority alignment.',
    icon: MessageSquare,
  },
  {
    title: 'Future Ready',
    summary: 'Architectures built for growth, modularity, and secure long-term operations.',
    icon: Rocket,
  },
];

export const internshipTracks: InternshipTrack[] = [
  { title: 'Cybersecurity Operations', duration: '10 Weeks', mode: 'Hybrid' },
  { title: 'Cloud & DevOps Foundations', duration: '8 Weeks', mode: 'Remote' },
  { title: 'Full-Stack Product Engineering', duration: '12 Weeks', mode: 'On-site' },
  { title: 'Applied AI Tooling', duration: '6 Weeks', mode: 'Hybrid' },
];

export const internshipHighlights = [
  'Mentored by active project engineers',
  'Structured sprint-based learning model',
  'Hands-on ownership of production-grade tasks',
  'Performance review and completion certification',
];

export const companyPillars = [
  { label: 'Infrastructure & Cloud', icon: Blocks },
  { label: 'Security Engineering', icon: Shield },
  { label: 'Product & SaaS', icon: FileCode2 },
  { label: 'Automation Systems', icon: Bot },
];

export const contactItems = [
  { label: 'Location', value: 'Jalgaon, Maharashtra, India', icon: MapPin },
  { label: 'Business Email', value: 'support@uniaxis.tech', href: 'mailto:support@uniaxis.tech', icon: Briefcase },
  { label: 'Discovery Call', value: 'Book a consultation via email', icon: Sparkles },
];
