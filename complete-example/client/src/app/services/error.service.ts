import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() { }

  logError(error: Error) {
    console.error(error.message);
  }
}
