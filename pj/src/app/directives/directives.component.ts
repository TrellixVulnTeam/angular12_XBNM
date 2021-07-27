import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  fname = 'plj'
  fruits:string[] = ['kiwi', 'melon', 'berry'];

  counter:number = 0;
  constructor() { }

  ngOnInit(): void {
    // var let const
    for(var i=0; i<10; i++){
      console.log(i);
    }

    this.fruits.forEach(function(itm){
      console.log(itm);
    })
  }

  callMe(){
    console.log(this.counter);
    this.counter++;
  }

}
