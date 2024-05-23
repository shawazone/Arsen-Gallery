import { Component ,OnInit,Input} from '@angular/core';
import { Observable } from 'rxjs';

import { PaintingService } from '../../shared/services/painting.service';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrl: './painting.component.css'
})
export class PaintingComponent  implements OnInit{
  @Input() showButtons: boolean = false;
  @Input() showPrice: boolean = false;
  @Input() paintings: any[] = [];




  painting$: Observable<any[]>|undefined;

  constructor(private paintingService: PaintingService) { }

  ngOnInit(): void {
    this.getPaintings();
  }


  getPaintings(): void {
    this.paintingService.getPaintings().subscribe((data: any) => {
      console.log(data);
      this.painting$ = this.paintingService.getPaintings();

    })
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


}