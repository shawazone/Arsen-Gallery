import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse ,HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:4000/api/user'; // my local backend URL
  private userSubject = new BehaviorSubject<{username:string, email: string, role: string,id:string } | null>(this.getStoredUser()); // Use BehaviorSubject
  public user$ = this.userSubject.asObservable();

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
) { }



  signup(username:string ,email: string, password: string, role: "user"): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/signup`, {username, email, password, role })
      .pipe(
        tap(response => {
         
          this.storeTokenAndUser(response.username,response.token, response.email, response.role,response.id); // Handle token and user data
        }),
        catchError(this.handleError)
      );
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, password })
      .pipe(
        tap(response => {
          console.log("the uwu response",response);
          this.storeTokenAndUser(response.username,response.token, response.email, response.role,response.id);
        }),
        catchError(this.handleError)
      );
  }

  updateUser(id:string,username:string ,email: string, password: string): Observable<any> {
    console.log("the id",id); // Remove the comma here
    return this.http.patch<any>(`${this.baseUrl}/${id}`, {username, email, password })
   
      .pipe(
        tap(response => {
          this.storeTokenAndUser(response.username,response.token, response.email, response.role,response.id);
        }),
        catchError(this.handleError)
      );
  }

  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}`, { headers: this.getHeaders() });
  }

  private getHeaders(): HttpHeaders {
    const token = this.getToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  

  logout() {
    // Clear tokens from secure storage
    this.removeTokenAndUser();
    this.router.navigate(['/']); 
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.message || error.statusText}`;
    }
    return throwError(errorMessage);
  }

  private storeTokenAndUser(username: string, token: string, email: string, role: string, id: any) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('username', username);
      localStorage.setItem('token', token);
      localStorage.setItem('email', email);
      localStorage.setItem('role', role);
      localStorage.setItem('id', id);
    }
    this.userSubject.next({username, email, role,id });
  }

  private removeTokenAndUser() {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('username');
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      localStorage.removeItem('role');
      localStorage.removeItem('id');
    }
    this.userSubject.next(null);
  }

  getUser() {
    return this.userSubject.value;
  }

  private getStoredUser(): {username: string, email: string, role: string ,id:string} | null {
    if (typeof localStorage !== 'undefined') {
      const username = localStorage.getItem('username');
      const token = localStorage.getItem('token');
      const email = localStorage.getItem('email');
      const role = localStorage.getItem('role');
      const id = localStorage.getItem('id');
      if (username && token && email && role && id) {
        return { username, email, role,id }; // Add the 'username' property
      }
    }
    return null;
  }

  getToken(): string | null {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  }

  // Optional: Token refresh logic
  refreshToken() {
    // Implement refresh token logic as needed
  }
}
