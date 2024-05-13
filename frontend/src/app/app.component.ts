import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'; // Import the component
@Component({
  selector: 'app-root',
  standalone: true, // no need t obe declared a module  
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

  // u can import templates
  
})
export class AppComponent {
  title = 'frontend';
}
