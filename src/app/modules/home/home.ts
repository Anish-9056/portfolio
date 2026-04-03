import {Component} from '@angular/core';
import {About} from './about/about';
import {Banner} from './banner/banner';
import {Contact} from './contact/contact';
import {Experience} from './experience/experience';
import {Projects} from './projects/projects';

@Component({
  selector: 'app-home',
  imports: [About, Experience, Contact, Banner, Projects],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
