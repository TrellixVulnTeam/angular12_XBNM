import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.scss']
})
export class VariablesComponent implements OnInit {

  a:number = 2;
  b:number = 3;
  fname:string = 'pj';
  lname:string = "pj";
  age:number = 34;
  interest:null = null;
  gender:boolean = true;
  fruits:string[] = ['kiwi', 'melon', 'berry'];
  user:any = {tech:'angular', exp: 10};
  undf:any;

  constructor() { }

  ngOnInit(): void {
  }

}
