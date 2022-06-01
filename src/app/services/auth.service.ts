import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { AccountService } from './account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenName: string = "jwt";

  constructor(
    private accountService: AccountService,
    private router: Router,
    private http: HttpClient,
    private apiService: ApiService
  ) { }

  login(user: any) {
    const loginHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    const body = {
      'username': user.username,
      'password': user.password
    };

    return this.apiService.post("http://localhost:8081/auth/login", JSON.stringify(body), loginHeaders)
      .pipe(map((res) => {
        console.log('Login success');
        localStorage.setItem(this.tokenName, res.body.accessToken);
      }));
  }

  signup(user: any) {
    const signupHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.apiService.post("http://localhost:8081/auth/signup", JSON.stringify(user), signupHeaders)
      .pipe(map(() => {
        console.log('Sign up success');
      }));
  }

  logout() {
    this.accountService.currentUser = null;
    localStorage.removeItem(this.tokenName);
    this.router.navigate(['/logIn']);
  }

  tokenIsPresent() {
    var token = localStorage.getItem(this.tokenName);
    return token != undefined && token != null;
  }

  getToken() {
    return localStorage.getItem(this.tokenName)
  }
}
