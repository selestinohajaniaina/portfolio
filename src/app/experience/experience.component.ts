import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  public experiences: {entreprise: string, description: string, stack: string, date: string}[] = [
    {
      entreprise: 'Morabe Innovation Technology (MIT)',
      description: 'Stage for six month',
      stack: 'Vue.js, laravel, Ionic, MySql, Node.js, Angular, Tailwind, Git & Bitbucket',
      date: 'Mars 2024'
    },
    {
      entreprise: 'Karoka.net',
      description: 'Stage for two month',
      stack: 'Ionic, Angular, Node.js, SQLite, HTML, CSS',
      date: 'February 2023'
    },
    {
      entreprise: 'Nordine Collect',
      description: 'Development of an application for managing fish entry and exit',
      stack: 'PHP, Bootstrap, Javascript, MySql',
      date: 'June 2023'
    },
    {
      entreprise: 'DevFest Majunga',
      description: 'Participation in the hackathon, 3rd place',
      stack: 'PHP, HTML, CSS',
      date: 'December 2022'
    },
    {
      entreprise: 'Express in Code',
      description: 'Hackathon Participation and Certification',
      stack: 'PHP, HTML, CSS',
      date: 'October 2022'
    }
  ]
}
