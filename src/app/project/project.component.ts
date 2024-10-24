import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  public pdp: string = 'pdp.jpg';
  public name: string = 'Selestino Hajaniaina';
  public projects: {title: string, content: string, stack: string, img: string | null, date: string, link: string | null, code: string}[] = [
    {
      title: 'LPC Besakoa',
      content: 'Website for a private high school in Mahajanga',
      stack: 'HTML, CSS',
      img: 'lpc.png',
      date: 'Jan 2023',
      link: 'https://lpc-boeny.netlify.app/',
      code: 'https://github.com/selestinohajaniaina/lycee.mousquetaire'
    },
    {
      title: 'Weather',
      content: 'Web application for weather updates in Madagascar.',
      stack: 'HTML, CSS',
      img: 'weather.png',
      date: 'Jan 2023',
      link: 'https://weather-mada.netlify.app/',
      code: 'https://github.com/selestinohajaniaina/weatherAPI'
    },
    {
      title: 'World\'s news',
      content: 'Mobile application for news journals around the world.',
      stack: 'Angular, Ionic',
      img: 'world_news.jpg',
      date: 'Jul 2023',
      link: 'https://www.facebook.com/selestino.hajaniain/posts/134902502989540',
      code: 'https://github.com/selestinohajaniaina/openActivity'
    },
    {
      title: 'Awesome-Team',
      content: 'Integration of the proposed design.',
      stack: 'Angular, Tailwind',
      img: 'awesome.png',
      date: 'Dec 2023',
      link: null,
      code: 'https://github.com/selestinohajaniaina/awesome-team'
    },
    {
      title: 'Mother-Earth',
      content: 'Template integration exercise.',
      stack: 'HTML, Tailwind',
      img: 'mother.png',
      date: 'Dec 2023',
      link: 'https://selestinohajaniaina.github.io/mother-earth',
      code: 'https://github.com/selestinohajaniaina/mother-earth'
    },
    {
      title: 'BUS-MJ',
      content: 'Bus Traffic API for Mahajanga.',
      stack: 'Node.js',
      img: 'bus-mj.png',
      date: 'Dec 2023',
      link: 'https://www.npmjs.com/package/bus-mj',
      code: 'https://github.com/selestinohajaniaina/bus-mahajanga-api/'
    },
    {
      title: 'BUS-MJ',
      content: 'Web application for displaying the Earth globe in 3D.',
      stack: 'Three.js',
      img: 'world_3d.png',
      date: 'Jan 2024',
      link: 'https://world-3d.netlify.app/',
      code: 'https://github.com/selestinohajaniaina/world3d'
    },
    {
      title: 'ToDoList',
      content: 'Web application for taking note of to-do lists.',
      stack: 'php, mysql, Jquery, ajax, tailwind',
      img: null,
      date: 'Jan 2024',
      link: null,
      code: 'https://github.com/selestinohajaniaina/ToDoList'
    },
    {
      title: 'BUS-MJ',
      content: 'Mobile application for Bus Traffic in Mahajanga.',
      stack: 'Angular, Ionic',
      img: 'bus.png',
      date: 'Jan 2024',
      link: 'https://web.facebook.com/selestino.hajaniain/posts/232517403228049',
      code: 'https://github.com/selestinohajaniaina/ToDoList'
    },
    {
      title: 'Scan hand GAME',
      content: 'Snake control with one hand.',
      stack: 'Javascript',
      img: 'snake.png',
      date: 'Mai 2023',
      link: 'https://web.facebook.com/oli123.oli/videos/5933550693417146',
      code: 'https://github.com/selestinohajaniaina/scan_hand'
    },
    {
      title: 'Scan hand GAME',
      content: 'Dino control with one hand.',
      stack: 'Python',
      img: 'dino.png',
      date: 'Oct 2023',
      link: 'https://web.facebook.com/selestino.hajaniain/videos/1362358501365334',
      code: 'https://github.com/selestinohajaniaina/dino-handpy'
    },
    {
      title: 'Cuisine',
      content: 'Saving receipe app.',
      stack: 'Angular, Ionic, SQLite',
      img: 'cuisine.jpg',
      date: 'Aou 2023',
      link: 'https://web.facebook.com/selestino.hajaniain/posts/137171556095968',
      code: 'https://github.com/selestinohajaniaina/i-cuisine'
    },
  ]

}
