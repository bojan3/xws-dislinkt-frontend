import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public accountService: AccountService, private authService: AuthService, private router: Router,) { }

  ngOnInit(): void {
    this.accountService.getMyInfo().subscribe();
  }

  logout() {
    this.accountService.currentUser = null;
    this.authService.logout().subscribe(() => {
      this.accountService.currentUser = null;
      localStorage.clear();
      this.router.navigate(['/']);
    });
  }

}
