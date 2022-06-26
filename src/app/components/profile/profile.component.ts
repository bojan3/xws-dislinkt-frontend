import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/entity/Account';
import { Gender } from 'src/app/entity/Gender';
import { Post } from 'src/app/entity/Post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input()
  account!: Account;

  constructor() { }

  ngOnInit(): void {

  }

  getGender() {
    switch (this.account.gender) {
      case Gender.MALE:
        return 'M';
      case Gender.FEMALE:
        return 'F';
    }
  }

}
