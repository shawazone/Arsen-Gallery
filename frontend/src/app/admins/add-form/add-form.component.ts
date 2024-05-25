// add-form.component.ts
import { Component, OnInit } from '@angular/core';
import { PaintingService } from '../../shared/services/painting.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  paintingForm: FormGroup;
  errorMessage: string = '';
  paintingId: string | null = null;
  formTitle: string = 'Add Painting';
  submitButtonText: string = 'Add Painting';

  constructor(
    private formBuilder: FormBuilder,
    private paintingService: PaintingService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.paintingForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      poem: ['', Validators.required],
      price: [0, Validators.required],
      image: ['', Validators.required]
    });
  }

  onImageUploaded(url: string) {
    this.paintingForm.patchValue({ image: url });
  }


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.paintingId = params.get('id');
      if (this.paintingId) {
        this.formTitle = 'Edit Painting';
        this.submitButtonText = 'Update Painting';
        this.paintingService.getPaintingById(this.paintingId).subscribe(
          painting => {
            this.paintingForm.patchValue(painting);
          },
          error => {
            this.errorMessage = error.message;
          }
        );
      }
    });
  }

  onSubmit() {
    if (this.paintingForm.invalid) {
      return; // Prevent submission if form is invalid
    }

    const painting: any = this.paintingForm.value;
    console.log('Painting:', painting);

    if (this.paintingId) {
      this.paintingService.updatePainting(this.paintingId, painting).subscribe(
        updatedPainting => {
          console.log('Painting updated successfully:', updatedPainting);
          this.paintingForm.reset();
          this.errorMessage = '';
          this.router.navigate(['/admin']); // Navigate after success
        },
        error => {
          this.errorMessage = error.message;
        }
      );
    } else {
      this.paintingService.createPainting(painting).subscribe(
        createdPainting => {
          console.log('Painting created successfully:', createdPainting);
          this.paintingForm.reset();
          this.errorMessage = '';
          this.router.navigate(['/admin/paintings']); // Navigate after success
        },
        error => {
          this.errorMessage = error.message;
        }
      );
    }
  }
}