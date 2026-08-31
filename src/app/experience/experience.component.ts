import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css',
})
export class ExperienceComponent {
  public experiences: {
    entreprise: string;
    description: string;
    stack: string;
    date: string;
  }[] = [
    {
      entreprise: 'Osmosis Business Solutions Océan Indien',
      description: 'Lead Developer – Mahajanga',
      stack: 'Omnis Studio, PostgreSQL, DBeaver',
      date: 'August 2025 – August 2026',
    },
    {
      entreprise: 'SOMMET DigitAfrica',
      description: 'Hackathon participant – 2nd place',
      stack: 'PHP, Bootstrap, MySQL',
      date: 'February 2025',
    },
    {
      entreprise: 'Morabe Innovation Technology (MIT)',
      description: 'Six-month internship as a Web & Mobile Developer',
      stack:
        'Vue.js, Laravel, Ionic, MySQL, Node.js, Angular, Tailwind CSS, Git, Bitbucket',
      date: 'March – August 2024',
    },
    {
      entreprise: 'Karoka.net',
      description: 'Two-month internship as a Web & Mobile Developer',
      stack: 'Ionic, Angular, Node.js, SQLite, MySQL',
      date: 'February – March 2023',
    },
    {
      entreprise: 'Nordine Collect',
      description: 'Development of a fish inventory management application',
      stack: 'PHP, Bootstrap, JavaScript, MySQL',
      date: 'June 2023',
    },
    {
      entreprise: 'DevFest Majunga',
      description: 'Hackathon participant – 3rd place',
      stack: 'PHP, HTML, CSS, MySQL',
      date: 'December 2022',
    },
    {
      entreprise: 'Express in Code',
      description: 'Hackathon participant and certified participant',
      stack: 'PHP, HTML, CSS, MySQL',
      date: 'October 2022',
    },
  ];
}
