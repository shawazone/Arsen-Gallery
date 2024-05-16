// Painting.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaintingService {

  constructor(private http: HttpClient) { }

  getPaintings(): Observable<any> {
    return this.http.get<any>('http://localhost:4000/api/painting'); // Adjust the URL to match your server endpoint
  }
}
