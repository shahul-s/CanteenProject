import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-studentdropdown',
  templateUrl: './studentdropdown.component.html',
  styleUrls: ['./studentdropdown.component.css']
})
export class StudentdropdownComponent implements OnInit {
  esno : string;
  students = [
    new Student(1,'S','shahul','ctr',9),
    new Student(2,'S','L','DN',10),
    new Student(3,'S','Kira','DL',10),
    new Student(4,'M','Mikasa','AOT',9),
    
  ]
  constructor() {
    this.esno="";
   }

  ngOnInit(): void {
  }

}
