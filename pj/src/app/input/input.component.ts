import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputsssss',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  @Input() asdf:any;
  @Input() abc:any;
  @Input() xyz:any;
  @Input() cc:any;
  @Input() type:any; //primary & secondary
  constructor() { }

  ngOnInit(): void {
  }

}
