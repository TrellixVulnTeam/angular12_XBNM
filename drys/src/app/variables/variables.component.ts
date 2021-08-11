import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent implements OnInit {

  fname:string = 'angular tech';
  age:number = 35;
  gender:boolean = true;
  interest:null = null;
  fruits:string[] = ['kiwi', 'melon', 'berry'];
  user:any = {name:'angular', exp: 5};
  undf:any;

  a:number = 2;
  b:number = 3; 
  constructor() { }

  ngOnInit(): void {

    var c = 'angular' + this.age + 'tech';
  }

}
