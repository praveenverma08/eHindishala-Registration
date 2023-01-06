import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  public form: FormGroup;
  @Output() customEvent = new EventEmitter<{name:string, mobile:string, email:string}>(); 
  onFormSubmit(nameRef: HTMLInputElement,mobileRef: HTMLInputElement,emailRef: HTMLInputElement){
    this.customEvent.emit({name: nameRef.value, mobile: mobileRef.value,email: emailRef.value});
  }

  constructor(private formBuilder:FormBuilder){  
        this.form = this.formBuilder.group({
          name: ['',[Validators.required,Validators.minLength(3)]],
          mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
          email: ['', [Validators.required, Validators.email]]
      }); 
  }

  ngOnInit(){      
  }

  get f() { 
    return this.form.controls; 
  }
  
  onSubmit(){
    console.log(this.form.value);
  }

}
