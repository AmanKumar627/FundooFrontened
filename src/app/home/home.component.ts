import { Component, OnInit } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  logout():void{

    this.router.navigate([""])
  }
  note():void{
    this.router.navigate(["addNote"])
  }
  remainder():void{
    this.router.navigate(["remainder"])
  }
  archive():void{
    this.router.navigate(["archive"])
  }
  trash():void{
    this.router.navigate(["trash"])
  }
}




