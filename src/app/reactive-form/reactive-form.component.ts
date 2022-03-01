import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { student } from '../Student';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  studentModel:student={
    FirstName:"",
    LastName:""
    };

  frmReg= new FormGroup({
    FirstName:new FormControl(this.studentModel.FirstName,[Validators.required, Validators.maxLength(2)]),
    LastName:new FormControl(this.studentModel.LastName,[Validators.required])
});


  constructor(private fb:FormBuilder) 
  {

   }

  ngOnInit(): void {
  }

  SaveRecord()
  {

  }

}
