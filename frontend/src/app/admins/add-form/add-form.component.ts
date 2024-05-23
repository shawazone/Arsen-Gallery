// add-form.component.ts
import { Component, OnInit } from '@angular/core';
import { PaintingService } from '../../shared/services/painting.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {

  paintingForm: FormGroup;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private paintingService: PaintingService) {
    this.paintingForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      poem: ['', Validators.required],
      price: [0, Validators.required],
      image: ['', Validators.required] // Adjust validation if necessary
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.paintingForm.invalid) {
      return; // Prevent submission if form is invalid
    }

    const painting: any = this.paintingForm.value; // Assuming your backend expects any type
    console.log('Painting:', painting);
     this.paintingService.createPainting(painting).subscribe(
       (createdPainting) => {
          //  Handle successful creation (e.g., display success message, navigate)
          console.log('Painting created successfully:', createdPainting);
          this.paintingForm.reset(); // Reset form after successful submission
          this.errorMessage = '';
        },
      (error) => {
         this.errorMessage = error.message; 
        }
      );
  }
  }



