import {Component, signal} from '@angular/core';
import {MatIcon} from '@angular/material/icon';

const skills = ['Angular', 'Javascript', 'TypeScript', 'HTML & (S)CSS', 'RxJS', 'CI/CD'];
@Component({
  selector: 'app-about',
  imports: [MatIcon],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  skillsList = signal<string[]>([
    'Angular',
    'React',
    'TypeScript',
    'JavaScript',
    'ASP.NET Core',
    'Node.js',
    'RxJS',
    'REST APIs',
    'MongoDB',
    'Material UI',
    'Webpack',
    'Git',
  ]);

  highlights = [
    {value: '4+', label: 'Years Experience'},
    {value: '200+', label: 'Stakeholders Served'},
    {value: '50+', label: 'Components Built'},
    {value: '10K+', label: 'Users Impacted'},
  ];

  techStack = [
    {name: 'Angular', icon: 'angular'},
    {name: 'React', icon: 'react'},
    {name: 'TypeScript', icon: 'typescript'},
    {name: 'Node.js', icon: 'nodejs'},
    {name: '.NET Core', icon: 'dotnet'},
    {name: 'JavaScript', icon: 'javascript'},
  ];
}
