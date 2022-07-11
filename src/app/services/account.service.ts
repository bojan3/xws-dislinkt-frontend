import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Account } from '../entity/Account';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  basePath = 'https://localhost:5002/account/';
  currentUser: any;

  constructor(
    private apiService: ApiService,
  ) {
  }

  getMyInfo() {
    return this.apiService.get(this.basePath + localStorage.getItem(environment.id))
      .pipe(map(user => {
        this.currentUser = user;
        return user;
      }));
  }

  updateAccount(account: any) {
    console.log("updating account...");
    console.log(account);
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    return this.apiService.post(this.basePath+'UpdateAccount', account, headers);
  }

  getAllPublicAccounts(): Observable<Account[]> {
    return this.apiService.get(this.basePath + 'GetAllAccounts');
  }

  isLogged() {
    return !!this.currentUser;
  }

}
