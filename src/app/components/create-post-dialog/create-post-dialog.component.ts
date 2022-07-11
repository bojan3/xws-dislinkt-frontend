import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post-dialog',
  templateUrl: './create-post-dialog.component.html',
  styleUrls: ['./create-post-dialog.component.css']
})
export class CreatePostDialogComponent implements OnInit {

  text: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.text);
  }

}
