import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { AccountService } from './account.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  basePath = 'https://localhost:5002/account/';

  constructor(
    private accountService: AccountService,
    private router: Router,
    private http: HttpClient,
    private apiService: ApiService
  ) { }

  login(user: any) {
    console.log(this.basePath + user.username + ", " + user.password);

    return this.apiService.get(this.basePath + user.username + ", " + user.password)
      .pipe(map((res) => {
        console.log('Login success');
        localStorage.setItem(environment.tokenName, res.id);
      }));

  }

  signup(user: any) {
    const signupHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    return this.apiService.post(this.basePath + 'CreateAccount', user, signupHeaders)
      .pipe(map(() => {
        console.log('Sign up success');
      }));
  }

  logout() {
    this.accountService.currentUser = null;
    localStorage.removeItem(environment.tokenName);
    this.router.navigate(['/']);
  }

  tokenIsPresent() {
    var token = localStorage.getItem(environment.tokenName);
    return token != undefined && token != null;
  }

  getToken() {
    return localStorage.getItem(environment.tokenName)
  }
}
