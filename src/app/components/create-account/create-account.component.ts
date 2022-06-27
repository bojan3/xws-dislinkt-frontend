import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  title: string = 'Create account';
  form!: FormGroup;

  constructor(private accountService: AccountService, 
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
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
    this.accountService.signUp(this.form.value).subscribe((res) => {
      console.log(res);
    })
  } 

}
