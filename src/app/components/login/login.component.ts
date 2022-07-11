import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateRequest } from 'src/app/entity/AuthenticateRequest';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title: string = 'Login';
  form!: FormGroup;

  constructor(private formBuilder: UntypedFormBuilder,
    private accountService: AccountService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])]
    });
  }

  onSubmit() {  
    var user = new AuthenticateRequest(this.form.value.username, this.form.value.password);  
    this.authService.login(user).subscribe((token) => {
      this.accountService.getMyInfo().subscribe((res) => {
        this.router.navigate(['/myProfile']);
      })
    }
    );
  }

}
