import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:4000/api/user'; // Replace with your API URL
  private userSubject = new BehaviorSubject<{ email: string, role: string } | null>(this.getStoredUser()); // Use BehaviorSubject
  public user$ = this.userSubject.asObservable();

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
) { }

  signup(email: string, password: string, role: "user"): Observable<any> {
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
    this.router.navigate(['/']); 
  }

  private storeTokenAndUser(token: string, email: string, role: string) {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('token', token);
      localStorage.setItem('email', email);
      localStorage.setItem('role', role);
    }
    this.userSubject.next({ email, role });
  }

  private removeTokenAndUser() {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      localStorage.removeItem('role');
    }
    this.userSubject.next(null);
  }

  getUser() {
    return this.userSubject.value;
  }

  private getStoredUser(): { email: string, role: string } | null {
    if (typeof localStorage !== 'undefined') {
      const token = localStorage.getItem('token');
      const email = localStorage.getItem('email');
      const role = localStorage.getItem('role');
      if (token && email && role) {
        return { email, role };
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
