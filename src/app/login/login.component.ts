import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material'
import { UserserviceService } from '../user-service.service';
import { MatSnackBar} from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { login } from '../models/login.model';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private userservice:UserserviceService,private snackBar:MatSnackBar, private formbuild:FormBuilder ) { }
  loginn : login = new login();
  loginForm : FormGroup
  ngOnInit() {
    this.loginForm=this.formbuild.group(
      {
       'email' : [this.loginn.email,
        [
            Validators.required,
            Validators.email
        ]
      ],
      'password' : [this.loginn.password,
        [
          Validators.required
        ]
      ]
      }
    );
  }
  


  
  login() : void
    {
      console.log(this.loginn)
      this.userservice.verifyLogin(this.loginn).subscribe(

        (response :any) =>{
          
      
          if(response.body.statusCode ==166)
          {
            this.snackBar.open(response.body.statusMessage,"",{
              duration:2000,})
              console.log(response)
             
              localStorage.setItem('jwtToken',response.headers.get('jwttokenxxx')); 
              this.router.navigate(['/home'])           
          }
  
          else{
            this.snackBar.open(response.statusMessage,"Invalid User",{
              duration:2000,})
            }},
  
            error =>{
              
              console.log("Error",error);
            }
      );
    }

    forgotPassword() : void
    {
      this.router.navigate(["forgotPassword"]);

    }
    register() : void
    {
      this.router.navigate(["register"]);
    }
    }



    












    

