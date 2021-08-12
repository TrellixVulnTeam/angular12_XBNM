import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  fname:string = 'suc';
  fruits: string[] = ['kiwi', 'melon', 'berry'];

  constructor() { }

  ngOnInit(): void {
  }

}
