import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obj-forms',
  templateUrl: './obj-forms.component.html',
  styleUrls: ['./obj-forms.component.scss']
})
export class ObjFormsComponent implements OnInit {

  user:any = {};
  constructor() { }

  ngOnInit(): void {
    this.user.mahesh = 'perla'
  }
  login(){
    alert('login invoked')
    console.log(this.user);
    //calling an API here.
  }

}
