import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginpage1',
  templateUrl: './loginpage1.component.html',
  styleUrls: ['./loginpage1.component.scss']
})
export class Loginpage1Component implements OnInit {

  constructor(private fb:FormBuilder) { }

  loginform:FormGroup=this.fb.group({
    email:[,[Validators.required,Validators.email]],
    passward:[,[Validators.required]]
  });

  ngOnInit(): void {
  }

  login(){
    console.log(this.loginform);
    if(this.loginform.valid)
    {

      //call to service and subscribe if any error 
      //make if passward id incorrect this.loginform.controls.passard.seterrors{ passwardError : true}
      //make if email id incorrect this.loginform.controls.emai.seterrors{ emails : true}

    }
  }

}
