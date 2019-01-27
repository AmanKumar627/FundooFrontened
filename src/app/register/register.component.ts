import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar} from '@angular/material'
import { register } from '../models/register.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserserviceService } from '../user-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: register=new register();
  registerForm : FormGroup
  

  constructor(private router:Router, private formBuilder: FormBuilder,private userService : UserserviceService,private snackBar : MatSnackBar){}

  ngOnInit() {
  this.registerForm=this.formBuilder.group(
    {
      'email' :[this.user.email,
      [
        Validators.required,
        Validators.email
      ]],
      'password': [this.user.password,
        [
          Validators.required,
          Validators.maxLength(10),
          Validators.minLength(6)
        ]
      ],
      'name' : [this.user.name,
        [
          Validators.required
        ]
      ],
      'phoneNumber' : [this.user.phoneNumber,
        [
          Validators.required,
          Validators.maxLength(10)
        ] 
      ]
    }
  );

}
register() : void {
  
  
  console.log(this.user);
  
  (this.userService.createUser(this.user)).subscribe(
  
    data => { 
      console.log(data.statusMessage,data.statusCode)
      if(data.statusCode== 200)
      {
          this.snackBar.open('Successfully Register Please Confirm Your Email Address', 'otpVerfify', {
            duration: 2000,});
            this.router.navigate(['/otpVerify']);
      }
      else if(data.statusCode==404)
      {
        console.log(data.statusMessage)
      this.snackBar.open(data.statusMessage,"Register Fails",{
        duration:2000,})
      }},
      
     error => {
      this.snackBar.open("alreadyEisxt","Register Fails",{
        duration:2000,})
         console.log("Error", error);
     }

    );
     
}


}