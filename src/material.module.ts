import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'
import {
  MatButtonModule, MatCardModule, MatDialogModule, MatInputModule, MatTableModule,
  MatToolbarModule, MatMenuModule, MatProgressSpinnerModule,MatListModule,MatExpansionModule,MatSnackBarModule,
} from '@angular/material';
@NgModule({
  imports: [
  CommonModule, 
  MatToolbarModule,
  MatButtonModule, 
  MatCardModule,
  MatInputModule,
  MatDialogModule,
  MatTableModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatSidenavModule,
  MatExpansionModule,
  BrowserAnimationsModule,
  MatSnackBarModule
  ],
  exports: [
  CommonModule,
   MatToolbarModule, 
   MatButtonModule, 
   MatCardModule, 
   MatInputModule, 
   MatDialogModule, 
   MatTableModule, 
   MatMenuModule,
   MatIconModule,
   MatProgressSpinnerModule,
   MatSidenavModule,
   MatListModule,
   MatExpansionModule,
   BrowserAnimationsModule,
   MatSnackBarModule
   ],
})
export class CustomMaterialModule { }