import { Component ,OnInit} from '@angular/core';
import { PaintingService } from '../../shared/services/painting.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit{

  images = [
    { url: '/assets/head1.jpg', alt: 'about-me', caption: ' Welcome to My Gallery! ' },
    { url: '/assets/head2.jpg', alt: 'about-me', caption: ' Middilism art style ' },
    { url: '/assets/head3.jpg', alt: 'about-me', caption: ' Free palestine ' }
  ];

  getRouterLink(alt: string): string {
    switch (alt) {
      case 'home':
        return '/';
      case 'about-me':
        return '/about-me';
      case 'shop':
        return '/shop';
      default:
        return '/';
    }
  }

  ngOnInit(): void {

  }
  
 

}
