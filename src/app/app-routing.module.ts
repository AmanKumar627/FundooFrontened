import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { TrashComponent } from './trash/trash.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { ArchiveComponent } from './archive/archive.component';
import {ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';
const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login',component:LoginComponent},
  {path: 'home',component:HomeComponent},
  {path: 'trash',component:TrashComponent},
  {path:'add-note',component:AddNoteComponent},
  {path:'archive',component:ArchiveComponent},
  {path: 'forgotpassword',component:ForgotpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
