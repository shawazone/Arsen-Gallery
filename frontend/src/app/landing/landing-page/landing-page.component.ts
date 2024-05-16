import { Component ,OnInit} from '@angular/core';
import { PaintingService } from '../../painting.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {

  images = [
    { url: 'https://wallpapers.com/images/featured/art-dajgwkpkb3im2q3u.jpg', alt: 'Image 1', caption: 'Caption 1' },
    { url: 'https://marketplace.canva.com/EAFubN5TNIo/1/0/1600w/canva-art-desktop-wallpaper-vx0lqyCMPfQ.jpg', alt: 'Image 2', caption: 'Caption 2' },
    { url: 'https://i.pinimg.com/1200x/23/03/c1/2303c19caac178b6ce29768470ad7feb.jpg', alt: 'Image 3', caption: 'Caption 3' }
  ];

  painting$: Observable<any[]>|undefined;

  constructor(private paintingService: PaintingService) { }

  ngOnInit(): void {
    this.paintingService.getPaintings().subscribe((data: any) => {
      console.log(data);
      this.painting$ = this.paintingService.getPaintings();

    })
  }
  
 

}