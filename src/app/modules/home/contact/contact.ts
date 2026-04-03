import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  imports: [MatButtonModule, MatIcon],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}
