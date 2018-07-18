import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdunitService } from '../../adunit.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private adunitservice: AdunitService, private fb: FormBuilder) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      first_name: ['', Validators.required ],
	  surname: ['', Validators.required ],
	email: ['', Validators.required],
      password: ['', Validators.required ]
   });
   
  }

  addAdUnit(first_name, surname, email, password) {
    this.adunitservice.addAdUnit(first_name, surname, email, password);
  }
  ngOnInit() {

  }

}
