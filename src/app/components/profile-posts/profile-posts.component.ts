import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/entity/Account';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-profile-posts',
  templateUrl: './profile-posts.component.html',
  styleUrls: ['./profile-posts.component.css']
})
export class ProfilePostsComponent implements OnInit {

  accounts: Account[] = [];
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getAllPublicAccounts().subscribe((accounts) => {
      this.accounts = accounts;
      console.log(this.accounts);
    })
  }

}
