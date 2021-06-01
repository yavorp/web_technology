import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  isAuthenticated(token: string) {
    localStorage.getItem('auth-token') !== null;
  }

  login(username: string, password: string) {
    this.httpClient.post(`${this._baseUrl}/auth`, {
      username,
      password
    });
  }

  logout() {
    localStorage.removeItem('auth-token');
  } 
}
