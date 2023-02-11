import { Component, OnInit } from '@angular/core';
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'ngx-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})
export class SalaryComponent{

  loggedUser: any = {};
  user: any = {};

  constructor(
    private userService: UserService,
    private authService: NbAuthService,
  ) {
    this.authService.onTokenChange()
    .subscribe((token: NbAuthJWTToken) => {
    
      if (token.isValid()) {
        this.loggedUser = token.getPayload(); // here we receive a payload from the token and assigns it to our `user` variable 
      }
      
    });
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.userService.getByEmail(this.loggedUser.email).subscribe((resp: any) => {
      this.user = resp.data;
    });
  }

  updateUser(){
    this.userService.put(this.user).subscribe((resp: any) => {
      this.user = resp.data;
    });
  }

}
