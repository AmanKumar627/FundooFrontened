import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
;import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { TrashComponent } from './trash/trash.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { ArchiveComponent } from './archive/archive.component';
import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';
import { OtpVerficationComponent } from './otp-verfication/otp-verfication.component';
const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: '',component:LoginComponent},
  {path:'archive',component:ArchiveComponent},
  {path: 'forgotpassword',component:ForgotpasswordComponent},
  {path:'otp-verification',component:OtpVerficationComponent},
  {path:'home',component:HomeComponent,
  children:[{
   path:'trash',component:TrashComponent},
   {path:'addNote',component:AddNoteComponent},

  ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
