import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  user: User = new User();

  getLoggedUser(): User {
    
    while(JSON.parse(localStorage.getItem('logged_user')) == null){

    }

    this.user = JSON.parse(localStorage.getItem('logged_user'));

    return this.user;
    
  }
}
