import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:4000/api/user'; // Replace with your API URL
  private userSubject = new BehaviorSubject<{ email: string, role: string } | null>(null); // Use BehaviorSubject
  public user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) {
    
   }

  signup(email: string, password: string, role: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/signup`, { email, password, role })
      .pipe(
        tap(response => {
          this.storeTokenAndUser(response.token, response.email, response.role); // Handle token and user data
        })
      );
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, password })
      .pipe(
        tap(response => {
          this.storeTokenAndUser(response.token, response.email, response.role);
        })
      );
  }

  logout() {
    // Clear tokens from secure storage
    this.removeTokenAndUser();
  }

  private storeTokenAndUser(token: string, email: string, role: string) {
    // Use secure storage library or browser-provided mechanism
    localStorage.setItem('token', token); // For demonstration purposes (replace with secure storage)
    this.userSubject.next({ email, role });
  }

  private removeTokenAndUser() {
    localStorage.removeItem('token');
    this.userSubject.next(null);
  }

  getUser() {
    return this.userSubject.value;
  }

  // Optional: Token refresh logic
  refreshToken() {
    // Implement refresh token logic as needed
  }
}
