import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.css'
})
export class ProfilComponent {

  public profil: {title: string, content: string}[] = [
    {
      title: 'Intro',
      content: `
            I'm a junior Backend developper, I've built a website and mobile app specializes in JavaScript and php. I am dedicated to learning something new every day, always focused and interested in exploring new things.
      `
    },
    {
      title: 'Phone',
      content: '+261 32 41 109 23'
    },
    {
      title: 'State',
      content: 'Madagascar'
    }
  ]

}
