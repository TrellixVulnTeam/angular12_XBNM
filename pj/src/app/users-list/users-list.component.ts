import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  @Input() usesList:any = [];
  @Output() sendIndex = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  selectUser(index:number){
    this.sendIndex.emit(index);
  }

}
