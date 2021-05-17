import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customershow',
  templateUrl: './customershow.component.html',
  styleUrls: ['./customershow.component.css']
})
export class CustomershowComponent implements OnInit {
  customers = [
    new Customer(1,'shahaul','Java',21999),
    new Customer(2,'Amrit','Angular',94455),
    new Customer(3,'Manas','C++',90334),
    new Customer(4,'Priyanka','SPRING',89044),
    
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
