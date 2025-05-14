import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [NgIf,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularDirectives';
  show=true;
students=["Chinmay", "Prabhakar","Gaurav","Lokesh","Abhishek","Sam"];

studentDetails=[
  {
    roll_no:1,
    name:"Chinmay",
    course:"B.Tech",

  },
  {
    roll_no:2,
    name:"Prabhakar",
    course:"B.Tech",

  },{
    roll_no:3,
    name:"Abhimshek",
    course:"B.Tech",

  },{
    roll_no:4,
    name:"Lokesh",
    course:"B.Tech",

  }
]
}
