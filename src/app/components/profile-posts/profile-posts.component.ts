import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/app/entity/Account';
import { Post } from 'src/app/entity/Post';
import { AccountService } from 'src/app/services/account.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-profile-posts',
  templateUrl: './profile-posts.component.html',
  styleUrls: ['./profile-posts.component.css']
})
export class ProfilePostsComponent implements OnInit {

  posts: Post[] = [];
  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.postService.getPostsByAccount(param.id).subscribe((posts) => {
        this.posts = posts;
        console.log(posts);
      })
    })
  }

}
