import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obj-forms',
  templateUrl: './obj-forms.component.html',
  styleUrls: ['./obj-forms.component.scss']
})
export class ObjFormsComponent implements OnInit {
  user:any = {}

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
    alert('form submitted successfully');
    console.log(this.user);
  }

}
