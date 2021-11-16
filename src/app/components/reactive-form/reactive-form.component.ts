
import { Component, OnInit,  } from '@angular/core';
import { AbstractControl, FormControl,FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  isSubmitted:boolean= true;
  invalid :boolean=true;


  constructor() { }

  ngOnInit(): void {
  
  }



  

  registerForm= new FormGroup({
    userName:new FormControl('gobinathan',[Validators.required,this.validateUserName],),
    email:new FormControl('gobinathan@gmailcom',Validators.required),
    password:new FormControl(''),
    confirmPassword:new FormControl('')
  });


  validateUserName(control:AbstractControl):ValidationErrors | null{
    if(control.value.toString().startsWith('a')){
      return{invalid:true};
    }
    else{
      return null;
    }
  }
}
