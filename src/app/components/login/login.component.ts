import { Component, OnInit } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title: string = 'Login';
  selected: Date = new Date("2022-06-03");

  constructor() { }

  ngOnInit(): void {
  }

  /*dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      console.log(date.toDateString());
      if (date.getDate() === 1 || date.getDate() === 15) {
        return 'special-date';
      } else {
        return '';
      }
    };
  }*/

}
