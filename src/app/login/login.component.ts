import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { LoginServiceService } from '../login-service.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User = new User();
  public fontosdolog :string = "";
  

  constructor(private loginService:LoginServiceService) { 
    this.user.email = "nagy@domain.com";
    this.user.password = "asd";
  }

  ngOnInit(): void {
  }

  get loginuser() {
    return LoginServiceService.userloggedin.name;
  }

  get loggedin() {
    return LoginServiceService.userloggedin.email != "";
  }

  login() {
    this.loginService.login(this.user);
  }

  logout() {
    this.loginService.logout();
  }

  fontos() {
    this.loginService.fontos().subscribe((data)  => 
    {
      this.fontosdolog = data;
    });
  }

}
