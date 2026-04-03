import {Component, computed, signal} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
export interface Job {
  tab: string;
  title: string;
  date: string;
  shortDate: string;
  location: string;
  link: string;
  icon: string;
  description: string[];
  techUsed: string[];
}

const JOBS_DATA: Job[] = [
  {
    tab: 'RSK Business Solutions',
    title: 'Software Engineer',
    date: 'January 2022 – Present',
    shortDate: '2022 – Present',
    location: 'Visakhapatnam, India',
    link: '#',
    icon: 'security',
    description: [
      'Architected a Hazard Risk Management Platform from the ground up using React 18 and TypeScript, enabling compliance tracking and proactive risk mitigation for 200+ enterprise stakeholders.',
      'Engineered a scalable UI library containing 50+ custom components using Material UI and custom theming, slashing frontend development time by 40%.',
      'Built dynamic, high-performance data grids with server-side pagination, inline editing, and drag-and-drop column reordering, seamlessly rendering 10,000+ hazard records.',
      'Developed a custom column-level filtering system (multi-select popovers, real-time indicators) and granular Role-Based Access Control (RBAC), improving data discoverability by 60%.',
      'Led frontend development for a Cybersecurity Admin Platform (Angular 14, ASP.NET Core) processing 50,000+ monthly security events across 500+ clients.',
      'Optimized application performance by configuring Webpack with tree-shaking and lazy loading, reducing bundle size by 45% and accelerating initial load time by 3.2 seconds.',
      'Developed data visualization dashboards for Poseidon (security monitoring application) using amCharts5, serving 10,000+ active users.',
      'Leveraged advanced RxJS operators (switchMap, debounceTime, retry) to manage asynchronous data streams, reducing redundant API calls by 60%.',
      'Automated IT enrollment workflows for Lighthouse (remote support app), managing 1,000+ devices and reducing manual IT intervention by 35%.',
    ],
    techUsed: [
      'React 18',
      'Angular 14',
      'TypeScript',
      'ASP.NET Core',
      'RxJS',
      'amCharts 5',
      'Material UI',
      'Webpack',
    ],
  },
  {
    tab: 'Mobiloitte Technologies',
    title: 'Junior Software Engineer',
    date: 'July 2020 – December 2021',
    shortDate: '2020 – 2021',
    location: 'New Delhi, India',
    link: '#',
    icon: 'code',
    description: [
      'Spearheaded full-stack development for Blue Contractor, a recruitment platform supporting 5,000+ user profiles, integrating the Google Maps API for precise location-based searches.',
      'Implemented secure authentication flows utilizing JWT and refresh token rotation, securing data access across 3 distinct user roles.',
      'Developed and integrated modular RESTful APIs using Node.js, optimizing server architecture and improving API response times by 25%.',
      'Built a real-time Cryptocurrency Dashboard utilizing WebSockets for live price tracking, achieving an 85+ Lighthouse performance score and boosting customer engagement by 30%.',
      'Ensured fully responsive, cross-browser compatible UI/UX (Chrome, Firefox, Safari, Edge) across mobile, tablet, and desktop viewports for 4 distinct production applications.',
    ],
    techUsed: [
      'Node.js',
      'JavaScript',
      'MongoDB',
      'JWT',
      'WebSocket',
      'Google Maps API',
      'Chart.js',
      'REST APIs',
    ],
  },
];
@Component({
  selector: 'app-experience',
  imports: [MatIcon],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  activeIndex = signal(0);

  jobs = signal<Job[]>(JOBS_DATA);

  activeJob = computed(() => this.jobs()[this.activeIndex()]);

  selectTab(index: number): void {
    this.activeIndex.set(index);
  }
}
