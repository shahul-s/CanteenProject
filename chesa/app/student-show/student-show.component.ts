import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-show',
  templateUrl: './student-show.component.html',
  styleUrls: ['./student-show.component.css']
})
export class StudentShowComponent implements OnInit {

  students = [
    new Student(1,'S','shahul','ctr',9),
    new Student(2,'S','L','DN',10),
    new Student(3,'S','Kira','DL',10),
    new Student(4,'M','Mikasa','AOT',9),
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
