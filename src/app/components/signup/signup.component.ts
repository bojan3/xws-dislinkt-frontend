import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from 'src/app/entity/Account';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  account !: Account;
  form!: FormGroup;
  title: string = 'Update account';
  isMale: boolean = false;
  selected = false;

  constructor(private accountService: AccountService,
    private formBuilder: FormBuilder,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.accountService.getMyInfo().subscribe((account) => {
      this.account = account;
      console.log(account);
      this.selected = account.isPublic;
    });

    this.form = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])],
      email: [''],
      phoneNumber: [''],
      gender: [0],
      biography: [''],
      isPublic: [''],
      job: [''],
      education: ['']
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.accountService.updateAccount(this.form.value).subscribe();
  }

}
