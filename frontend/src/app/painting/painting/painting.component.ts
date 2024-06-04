import { Component ,OnInit,Input} from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { PaintingService } from '../../shared/services/painting.service';
import { CartService } from '../../shared/services/cart.service';
 
import { map, startWith } from 'rxjs/operators';

interface Painting {
  name: string;
  description: string;
  poem: string;
  price: number;
  image: any; // Replace with appropriate image type
}


@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrl: './painting.component.css'
})



export class PaintingComponent  implements OnInit{
  @Input() showButtons: boolean = false;
  @Input() showPrice: boolean = false;
  @Input()  showAddToCart: boolean = false;
  @Input() paintings: any[] = [];




  searchQuery = '';
  filteredPaintings: Observable<Painting[]> | undefined;
  painting$: Observable<any[]>|undefined;

  constructor(private paintingService: PaintingService, private router: Router,private cartService: CartService) { }

  ngOnInit(): void {
    this.getPaintings();
  }


  getPaintings(): void {
    this.paintingService.getPaintings().subscribe((data: any) => {
      console.log(data);
      this.painting$ = this.paintingService.getPaintings();

    })
  }

  addToCart(painting: Painting): void {
    this.cartService.addToCart(painting.name);
  }



  async deletePainting(paintingId: string): Promise<void> {
    try {
      await this.paintingService.deletePainting(paintingId).toPromise();
      // Refresh paintings after deletion
      this.getPaintings();
    } catch (error) {
      console.error('Error deleting painting:', error);
    }
  }

  navigateToEdit(id: string): void {
    this.router.navigate(['/admin/edit', id]);
    console.log('Navigating to edit page:', id)
  }




}