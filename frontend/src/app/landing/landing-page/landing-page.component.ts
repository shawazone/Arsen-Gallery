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
    { url: '/assets/head1.jpg', alt: 'Image 1', caption: 'Caption 1' },
    { url: '/assets/head2.jpg', alt: 'Image 2', caption: 'Caption 2' },
    { url: '/assets/head3.jpg', alt: 'Image 3', caption: 'Caption 3' }
  ];


  ngOnInit(): void {

  }
  
 

}
