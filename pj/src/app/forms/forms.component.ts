import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  fname:string = "";
  lname:string = "";
  contact:string = "";
  pwd:string = "";
  
  passType:string = "password"
  passLabel:string = "show";
  toggleFlag:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  togglePass(){
    this.toggleFlag = !this.toggleFlag;
    if(this.toggleFlag){
      this.passType = 'text';
      this.passLabel = 'hide';
    } else {
      this.passType = 'password';
      this.passLabel = 'show';
    }
  }

  reg(){
    alert('form submitted successfully')
  }

}
