import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/entity/Account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-profiles-page',
  templateUrl: './profiles-page.component.html',
  styleUrls: ['./profiles-page.component.css']
})
export class ProfilesPageComponent implements OnInit {

  accounts: Account[] = [];
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getAllPublicAccounts().subscribe((accounts) => {
      this.accounts = accounts;
      console.log(this.accounts);
    })
  }

}
