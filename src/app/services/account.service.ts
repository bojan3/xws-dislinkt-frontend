import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  basePath = 'http://localhost:8081/api/registration/whoami'
  currentUser: any;

  constructor(
    private apiService: ApiService,
  ) {
  }

  getMyInfo() {
    return this.apiService.get(this.basePath)
      .pipe(map(user => {
        this.currentUser = user;
        return user;
      }));
  }


  updateAccount(account: any) {
    console.log("updating account...");
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });
    return this.apiService.post("http://localhost:8081/api/account/update", JSON.stringify(account), headers);
  }

}
