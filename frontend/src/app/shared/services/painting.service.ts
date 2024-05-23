// Painting.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
 
interface Painting {
  name: string;
  description: string;
  poem: string;
  price: number;
  image: any; // Replace with appropriate image type
}



@Injectable({
  providedIn: 'root'
})
export class PaintingService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:4000/api/painting';

  getPaintings(): Observable<any> {
    return this.http.get<any>('http://localhost:4000/api/painting');
     // Adjust the URL to match your server endpoint
    
    }


  getPantingById(id: string): Observable<any> {
    const url = `http://localhost:4000/api/painting/${id}`;
    return this.http.get<any>(url);
  }



  deletePainting(paintingId: string): Observable<any> {
    const deleteUrl = `${this.apiUrl}/${paintingId}`;
    return this.http.delete(deleteUrl);
  }

  createPainting(painting: Painting): Observable<Painting> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<Painting>(this.apiUrl, painting, { headers })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error occurred. Handle it accordingly.
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
