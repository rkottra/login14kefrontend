import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User = new User();
  

  constructor(private loginService:LoginServiceService) { 
    this.user.email = "a@a.hu";
    this.user.password = "12345678";

    
  }

  ngOnInit(): void {
  }

  get loggedin() {
    return LoginServiceService.userloggedin.Id != 0;
  }

  login() {
    this.loginService.login(this.user);
  }

  logout() {
    this.loginService.logout();
  }

}
