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
    },
    {
      img: 'typescript',
      label: 'Typescript'
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
    },
    {
      img: 'bitbucket',
      label: 'Bitbucket'
    },
    {
      img: 'render',
      label: 'Render'
    },
    {
      img: 'netlify',
      label: 'Netlify'
    },
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

  public web_utils: {img: string, label: string}[] = [
    {
      img: 'three',
      label: 'Three.js'
    },
    {
      img: 'bootstrap',
      label: 'Bootstrap'
    },
    {
      img: 'vue',
      label: 'Vue.js'
    },
    {
      img: 'jquery',
      label: 'JQuery'
    },
    {
      img: 'capacitor',
      label: 'Capacitor'
    },
  ] 
}
