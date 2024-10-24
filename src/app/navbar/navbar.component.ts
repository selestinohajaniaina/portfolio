import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  public pdp: string = 'assets/pdp.jpg';
  public pdc: string = 'assets/pdc.jpg';
}
