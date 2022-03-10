import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  public static userloggedin :User = new User();

  constructor(private http: HttpClient) { 
    if (localStorage.getItem('token')) {
      LoginServiceService.userloggedin.token = localStorage.getItem('token')!;
    }
    this.http.post("http://localhost:8000/api/check", {
      token: LoginServiceService.userloggedin.token,
      withCredentials : true
    }).subscribe((data:any) => {
      LoginServiceService.userloggedin.email = data.email;
      LoginServiceService.userloggedin.name = data.name;
      //console.log(data);
    });
  }

  login(user:User) {
    return this.http.post("http://localhost:8000/api/login", {
      email:user.email,
      password:user.password,
      withCredentials : true
    }).subscribe((data:any) => {
      LoginServiceService.userloggedin.name = data.name;
      LoginServiceService.userloggedin.email = data.email;
      LoginServiceService.userloggedin.token = data.token;
      localStorage.setItem('token', data.token);
      //console.log(LoginServiceService.userloggedin);
    });
  }

  logout() {
    if (localStorage.getItem('token')) {
      LoginServiceService.userloggedin.token = localStorage.getItem('token')!;
    }

    
    this.http.post("http://localhost:8000/api/logout", {
      token: LoginServiceService.userloggedin.token,  
      withCredentials : true
    }).subscribe(() => {
      LoginServiceService.userloggedin = new User();
      localStorage.removeItem('token');
    }
    );
  }

  fontos():Observable<string> {

    console.log("asd");
    return this.http.post<string>("http://localhost:8000/api/fontos", {
        token: LoginServiceService.userloggedin.token,  
        withCredentials : true
      });
  }
}
