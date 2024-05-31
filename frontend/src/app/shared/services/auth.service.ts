// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:4000/api/user'; // Replace with your API URL
  private userSubject = new BehaviorSubject<any>(null);
  public user$ = this.userSubject.asObservable();

  constructor(private http: HttpClient) { }

  signup(email: string, password: string, role: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/signup`, { email, password, role }).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        this.userSubject.next({ email: response.email, role: response.role });
        
      })
    );
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, { email, password }).pipe(
      tap(response => {
        localStorage.setItem('token', response.token);
        this.userSubject.next({ email: response.email, role: response.role });
        console.log("da response ",response);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.userSubject.next(null);
  }

  getUser() {
    return this.userSubject.value;
  }
}
