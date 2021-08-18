import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  fname:string = 'mahesh';
  fruits: string[] = ['kiwi', 'melon', 'berry'];
  counter:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  callMe(){
    console.log(this.counter);
    this.counter++;
  }

  evnetCheck(event:any){
    if(event.ctrlKey && event.keyCode == 67){
      return false;
    } else {
      return true;
    }
  }

  checkFname(){
    this.fruits.push(this.fname);
    this.fname = '';
  }

}
