import { Component, OnInit } from '@angular/core';
import { Employ } from '../employ';

@Component({
  selector: 'app-employ-show',
  templateUrl: './employ-show.component.html',
  styleUrls: ['./employ-show.component.css']
})
export class EmployShowComponent implements OnInit {
  company: string;
  employs = [
    new Employ(1,'Shahul','Java','Programmer',53334),
    new Employ(2,'Erwen','Angular','Programmer',94455),
    new Employ(3,'L','Java','Programmer',90334),
    new Employ(4,'Kira','Angular','Programmer',89044),
    new Employ(5,'Ryuk','Java','Programmer',67755),
    new Employ(6,'Mikasa','Java','Programmer',90455),
    new Employ(7,'Neir','Angular','AppDeveloper',90111),
    new Employ(8,'Yagami','Sql','Developer',99322),
  ]
  
  
  constructor() {
    this.company=localStorage.getItem("company").toString();

   
   }

  ngOnInit(): void {
  }

}
