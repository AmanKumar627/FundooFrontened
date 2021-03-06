import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{CustomMaterialModule} from '../material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddNoteComponent } from './add-note/add-note.component';
import { TrashComponent } from './trash/trash.component';
import { ArchiveComponent } from './archive/archive.component';
import {MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule,MatSnackBarModule} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { RemindersComponent } from './reminders/reminders.component';
import { UserserviceService } from './user-service.service';
import {login} from './models/login.model';
import {HttpClientModule} from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { OtpVerficationComponent } from './otp-verfication/otp-verfication.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AddNoteComponent,
    TrashComponent,
    ArchiveComponent,
    RemindersComponent,
    ForgotpasswordComponent,
    OtpVerficationComponent,
    
    
    
    
    

  
    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    HttpClientModule,
    MatSnackBarModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
