// src/app/image-upload/image-upload.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { cloudinary } from '../../cloudinary.config'
@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {
  @Output() imageUploaded = new EventEmitter<string>();
  imageUrl: string | undefined;

  handleFileInput(event: any) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'CaliArmy'); // Ensure you set up an unsigned upload preset in Cloudinary

    fetch(`https://api.cloudinary.com/v1_1/dvgnpeias/upload`, {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      this.imageUrl = data.secure_url;
      this.imageUploaded.emit(this.imageUrl);
    })
    .catch(err => console.error(err));
  }
}
