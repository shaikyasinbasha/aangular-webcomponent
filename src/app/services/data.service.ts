import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  signupInfo = {};

  constructor() { }

  updateFieldValues(data) {
    this.signupInfo[data.name] = data.value
  }
}
