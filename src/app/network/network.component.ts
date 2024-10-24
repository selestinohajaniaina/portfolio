import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-network',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './network.component.html',
  styleUrl: './network.component.css'
})
export class NetworkComponent {
  public networks: {link: string, img: string, label: string}[] = [
    {
      link: 'https://www.linkedin.com/in/selestino-hajaniaina',
      img: 'linkdin',
      label: 'LinkdIn'
    },
    {
      link: 'https://github.com/selestinohajaniaina',
      img: 'github',
      label: 'Github'
    },
    {
      link: 'https://www.facebook.com/selestino.hajaniain',
      img: 'facebook',
      label: 'Facebook'
    },
    {
      link: 'https://stackoverflow.com/users/21479493/selestino-hajaniaina',
      img: 'stackoverflow',
      label: 'StackOverflow'
    },
    {
      link: 'https://www.youtube.com/@Hselestino',
      img: 'youtube',
      label: 'Youtube'
    },
    {
      link: 'https://app.daily.dev/selestinohajaniaina',
      img: 'daily',
      label: 'Daily.dev'
    },
    {
      link: 'https://x.com/selestino_h',
      img: 'twitter',
      label: 'Twitter'
    }
  ]
}
