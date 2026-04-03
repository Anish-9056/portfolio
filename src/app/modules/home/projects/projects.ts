import {Component, computed, signal} from '@angular/core';
import {MatIcon} from '@angular/material/icon';

export interface Project {
  id: number;
  title: string;
  company: string;
  role: string;
  description: string;
  highlights: string[];
  stack: string[];
  icon: string;
  gradient: string;
  category: 'enterprise' | 'saas' | 'realtime' | 'automation';
}

const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: 'Hazard Risk Management Platform',
    company: 'RSK Business Solutions',
    role: 'Lead Frontend Engineer',
    description:
      'Architected a ground-up enterprise platform using React 18 and TypeScript, enabling compliance tracking and proactive risk mitigation for 200+ stakeholders. Built 50+ custom components, dynamic data grids rendering 10,000+ records, and a custom column-level filtering system improving data discoverability by 60%.',
    highlights: [
      '200+ enterprise stakeholders',
      '50+ custom components',
      '10,000+ hazard records',
      '40% faster dev time',
    ],
    stack: ['React 18', 'TypeScript', 'Material UI', 'RBAC', 'Webpack', 'Custom Theming'],
    icon: 'shield',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    category: 'enterprise',
  },
  {
    id: 2,
    title: 'Cybersecurity Admin Console',
    company: 'RSK Business Solutions',
    role: 'Frontend Developer',
    description:
      'Led frontend development for a security admin platform processing 50,000+ monthly events across 500+ clients. Optimized performance with tree-shaking and lazy loading, reducing bundle size by 45% and accelerating load time by 3.2 seconds. Leveraged advanced RxJS operators reducing redundant API calls by 60%.',
    highlights: [
      '50,000+ monthly events',
      '500+ clients served',
      '45% smaller bundle',
      '3.2s faster load',
    ],
    stack: ['Angular 14', 'ASP.NET Core', 'RxJS', 'amCharts 5', 'Webpack', 'Lazy Loading'],
    icon: 'admin_panel_settings',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    category: 'enterprise',
  },
  {
    id: 3,
    title: 'Poseidon Security Dashboard',
    company: 'RSK Business Solutions',
    role: 'Frontend Developer',
    description:
      'Developed advanced data visualization dashboards for a security monitoring application using amCharts 5, serving 10,000+ active users. Built real-time monitoring views with interactive charts and drill-down capabilities for security analytics.',
    highlights: [
      '10,000+ active users',
      'Real-time monitoring',
      'Interactive visualizations',
      'Security analytics',
    ],
    stack: ['Angular', 'amCharts 5', 'RxJS', 'TypeScript', 'REST APIs'],
    icon: 'monitoring',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    category: 'realtime',
  },
  {
    id: 4,
    title: 'Lighthouse Remote Support',
    company: 'RSK Business Solutions',
    role: 'Frontend Developer',
    description:
      'Automated IT enrollment workflows for a remote support application, managing 1,000+ devices and reducing manual IT intervention by 35%. Streamlined device provisioning and support ticket management.',
    highlights: [
      '1,000+ devices managed',
      '35% less manual work',
      'Automated enrollment',
      'Remote management',
    ],
    stack: ['Angular', 'TypeScript', 'REST APIs', 'RxJS', 'Material UI'],
    icon: 'devices',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    category: 'automation',
  },
  {
    id: 5,
    title: 'Blue Contractor SaaS Platform',
    company: 'Mobiloitte Technologies',
    role: 'Full-Stack Developer',
    description:
      'Spearheaded full-stack development for a recruitment platform supporting 5,000+ user profiles. Integrated Google Maps API for precise location-based searches and implemented secure JWT authentication with refresh token rotation across 3 distinct user roles.',
    highlights: [
      '5,000+ user profiles',
      'Location-based search',
      'JWT + refresh tokens',
      '25% faster APIs',
    ],
    stack: ['Node.js', 'REST APIs', 'Google Maps API', 'MongoDB', 'JWT', 'Express'],
    icon: 'work',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    category: 'saas',
  },
  {
    id: 6,
    title: 'CryptoLive Trading Dashboard',
    company: 'Mobiloitte Technologies',
    role: 'Frontend Developer',
    description:
      'Built a real-time cryptocurrency dashboard utilizing WebSockets for live price tracking, achieving an 85+ Lighthouse performance score and boosting customer engagement by 30%. Ensured fully responsive, cross-browser compatible UI across all viewports.',
    highlights: [
      'Real-time WebSockets',
      '85+ Lighthouse score',
      '30% more engagement',
      'Cross-browser compatible',
    ],
    stack: ['WebSocket', 'JavaScript', 'Chart.js', 'Real-time Data', 'Responsive Design'],
    icon: 'currency_bitcoin',
    gradient: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)',
    category: 'realtime',
  },
];
@Component({
  selector: 'app-projects',
  imports: [MatIcon],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  activeCategory = signal<string>('all');

  projectCategories = [
    {id: 'all', label: 'All Work'},
    {id: 'enterprise', label: 'Enterprise'},
    {id: 'saas', label: 'SaaS'},
    {id: 'realtime', label: 'Real-time'},
    {id: 'automation', label: 'Automation'},
  ];

  filteredProjects = computed(() => {
    const cat = this.activeCategory();
    return cat === 'all' ? PROJECTS_DATA : PROJECTS_DATA.filter(p => p.category === cat);
  });

  setCategory(id: string): void {
    this.activeCategory.set(id);
  }

  getCategoryLabel(category: string): string {
    const labels: Record<string, string> = {
      enterprise: 'Enterprise',
      saas: 'SaaS',
      realtime: 'Real-time',
      automation: 'Automation',
    };
    return labels[category] || category;
  }
}
