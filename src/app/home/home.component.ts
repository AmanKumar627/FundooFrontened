import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public headerName = "Fundoo Notes";


  constructor(
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  logout(){
    this.router.navigateByUrl('/login');
this.snackBar.open('Logout Successful', 'Okay', { duration: 3000 })
  }
}


