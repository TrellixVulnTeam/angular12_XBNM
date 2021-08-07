import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  regFormGroup:FormGroup = this.fb.group({});
  
  constructor(private fb:FormBuilder) {
  }
  

  ngOnInit(): void {

    this.regFormGroup = this.fb.group({
      //fieldName: [initailValue, [validation1, validation2, validation3]]
      fname: [null, [Validators.required, Validators.maxLength(10), Validators.minLength(5)]],
      lname: ['', [Validators.required]],
      age: [null, [Validators.required, Validators.min(18), Validators.max(40)]],
      email: [null, [Validators.required,Validators.email]],
      contact: [[null, Validators.required, Validators.pattern('[6789][0-9]{9}')]],
      dob: [null, [Validators.required]]
    })
  }

  get fc(){
    return this.regFormGroup.controls;
  }
  reg(){
    if(this.regFormGroup.valid){
      alert('validations success')
      console.log(this.regFormGroup.value);
    } else {
      alert('validations failed')
    }
  }
}
