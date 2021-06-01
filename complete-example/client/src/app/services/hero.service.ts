import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Hero } from '../types/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private baseUrl = 'http://localhost:3000';
  constructor(private http: HttpClient, private socket: Socket) { }

  getAll() {
    return this.http.get<Hero[]>(`${this.baseUrl}/hero`);
  }

  getOne(id: number) {
    return this.http.get<Hero | null>(`${this.baseUrl}/hero/${id}`);
  }
  
  pingWithSockets() {
    this.socket.emit('ping');
  }
}
