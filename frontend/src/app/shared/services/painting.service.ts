import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from './auth.service'; // Import AuthService

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
  private apiUrl = 'http://localhost:4000/api/painting';

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  getPaintings(): Observable<any> {
    return this.http.get<any>(this.apiUrl, { headers: this.getHeaders() });
  }

  getPaintingById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`, { headers: this.getHeaders() });
  }

  updatePainting(id: string, painting: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${id}`, painting, { headers: this.getHeaders() });
  }

  deletePainting(paintingId: string): Observable<any> {
    const deleteUrl = `${this.apiUrl}/${paintingId}`;
    return this.http.delete(deleteUrl, { headers: this.getHeaders() });
  }

  createPainting(painting: Painting): Observable<Painting> {
    return this.http.post<Painting>(this.apiUrl, painting, { headers: this.getHeaders() })
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
