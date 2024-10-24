import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {
  public dev: {img: string, label: string}[] = [
    {
      img: 'html',
      label: 'HTML'
    },
    {
      img: 'css',
      label: 'css'
    },
    {
      img: 'bootstrap',
      label: 'Bootstrap'
    },
    {
      img: 'tailwind',
      label: 'Tailwind'
    },
    {
      img: 'javascript',
      label: 'Javascript'
    },
    {
      img: 'angular',
      label: 'Angular'
    },
    {
      img: 'vue',
      label: 'Vue.js'
    },
    {
      img: 'node',
      label: 'Node.js'
    },
    {
      img: 'php',
      label: 'PHP'
    },
    {
      img: 'ionic',
      label: 'Ionic'
    }
  ];

  public database: {img: string, label: string}[] = [
    {
      img: 'mysql',
      label: 'MySql'
    },
    {
      img: 'sqlite',
      label: 'SQLite'
    }
  ];

  public tools: {img: string, label: string}[] = [
    {
      img: 'vscode',
      label: 'VS Code'
    },
    {
      img: 'git',
      label: 'Git'
    },
    {
      img: 'github',
      label: 'Github'
    }
  ]

  public env: {img: string, label: string}[] = [
    {
      img: 'linux',
      label: 'Linux'
    },
    {
      img: 'windows',
      label: 'Windows'
    }
  ] 
}
