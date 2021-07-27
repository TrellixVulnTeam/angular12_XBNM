import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  fname:string = 'AnGuLaR TeCh';
  val: number = 34.2356895265;
  today:any = new Date();
  user:any = {tech:'angular', exp: 10};

  constructor() { }

  ngOnInit(): void {
  }

}
