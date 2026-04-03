// import {animate, query, stagger, style, transition, trigger} from '@angular/animations';
import {Component, DOCUMENT, HostListener, Inject, signal} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [MatIcon],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  responsiveMenuVisible = signal(false);
  pageYPosition = signal(0);
  activeSection = signal('about');

  menuItems = [
    {id: 'about', label: 'About'},
    {id: 'jobs', label: 'Experience'},
    {id: 'projects', label: 'Projects'},
    {id: 'contact', label: 'Contact'},
  ];

  constructor(
    private router: Router,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  toggleMenu() {
    this.responsiveMenuVisible.update(v => !v);
  }

  scroll(id: string) {
    const el = this.document.getElementById(id);

    if (el) {
      el.scrollIntoView({behavior: 'smooth'});
    } else {
      this.router.navigate(['/home']).then(() => {
        this.document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
      });
    }

    this.responsiveMenuVisible.set(false);
    this.activeSection.set(id); // ✅ highlight active
  }

  @HostListener('window:scroll')
  onScroll() {
    this.pageYPosition.set(window.scrollY);

    // detect active section
    this.menuItems.forEach(item => {
      const el = this.document.getElementById(item.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection.set(item.id);
        }
      }
    });
  }
}
