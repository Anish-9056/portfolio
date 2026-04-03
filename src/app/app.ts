import {Component, inject} from '@angular/core';
import {MatIconModule, MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {RouterOutlet} from '@angular/router';
import {Footer} from './modules/layout/footer/footer';
import {Header} from './modules/layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, MatIconModule, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'portfolio';
  private iconRegistry = inject(MatIconRegistry);
  private domSanitizer = inject(DomSanitizer);

  constructor() {
    this.iconRegistry.addSvgIcon('github', this.setIconPath('assets/icons/github.svg'));
    this.iconRegistry.addSvgIcon('linkedin', this.setIconPath('assets/icons/linkedin.svg'));
    this.iconRegistry.addSvgIcon('angular', this.setIconPath('assets/icons/angular.svg'));
    this.iconRegistry.addSvgIcon('react', this.setIconPath('assets/icons/react.svg'));
    this.iconRegistry.addSvgIcon('dotnet', this.setIconPath('assets/icons/dotnet.svg'));
    this.iconRegistry.addSvgIcon('nodejs', this.setIconPath('assets/icons/nodedotjs.svg'));
    this.iconRegistry.addSvgIcon('typescript', this.setIconPath('assets/icons/typescript.svg'));
    this.iconRegistry.addSvgIcon('javascript', this.setIconPath('assets/icons/javascript.svg'));
  }

  // http://127.0.0.1:5500/src/assets/icons/github.svg

  // http://localhost:4201/assets/icons/github.svg

  private setIconPath(url: string): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
