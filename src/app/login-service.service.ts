import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  public static userloggedin :User = new User();

  constructor(private http: HttpClient) { 
    this.http.get("//localhost:8000/api/user", {
      withCredentials : true
    }).subscribe((data) => {
      console.log(data);
    });
  }

  login(user:User) {
    

    return this.http.post("//localhost:8000/api/login", {
      email:user.email,
      password:user.password,
      withCredentials : true
    }).subscribe((data:any) => {
      LoginServiceService.userloggedin.Id = data.id;
      LoginServiceService.userloggedin.name = data.name;
      LoginServiceService.userloggedin.email = data.email;
      console.log(LoginServiceService.userloggedin);
    });
  }

  logout() {
    LoginServiceService.userloggedin = new User();
    return this.http.post("//localhost:8000/api/logout", {
      withCredentials : true
    }).subscribe();


  }
}
