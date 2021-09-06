import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  fname : string = 'AnGuLaR TeCh';
  today:any = new Date();
  age:number = 45;
  num:number = 23.56;
  user:any = {fname: 'Angular', exp:5};

  ngOnInit(): void {
  }

}
