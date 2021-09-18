import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  constructor(private fb:FormBuilder, private r:Router) { }

  regFormGroup:FormGroup = this.fb.group({})

  ngOnInit(): void {

    this.regFormGroup = this.fb.group({
      fname: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      lname: [null, [Validators.required]],
      phone: [null, [Validators.pattern('[6789][0-9]{9}')]],
      age:   [null, [Validators.min(18), Validators.max(40)]],
      gender: [null ]
    })
  }

  get fc(){
    return this.regFormGroup.controls;
  }

  reg(){
    if(this.regFormGroup.valid){
      console.log(this.regFormGroup.value);
      //callAPI -> goto some page
      this.r.navigate(['/intro'])
    }
}
}
