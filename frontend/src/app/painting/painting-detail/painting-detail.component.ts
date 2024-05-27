import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaintingService } from '../../shared/services/painting.service';
import { CartService } from '../../shared/services/cart.service';



interface Painting {
  name: string;
  description: string;
  poem: string;
  price: number;
  image: any; // Replace with appropriate image type
}



@Component({
  selector: 'app-painting-detail',
  templateUrl: './painting-detail.component.html',
  styleUrls: ['./painting-detail.component.css']
})
export class PaintingDetailComponent implements OnInit {
  painting: any;

  constructor(
    private route: ActivatedRoute,
    private paintingService: PaintingService,
    private cartService: CartService,
  ) { }




  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {  // Ensure id is not null
      this.getPaintingDetails(id);
    } else {
      console.error('No painting ID provided in route.');
    }
  }

  getPaintingDetails(id: string): void {
    this.paintingService.getPaintingById(id).subscribe((data: any) => {
      this.painting = data;
    });
  }

  addToCart(painting: Painting): void {
    this.cartService.addToCart(painting.name);
  }
}
