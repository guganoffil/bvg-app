import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})

export class RegisterpageComponent implements OnInit {

  constructor( private router: Router, private SnackBar: MatSnackBar) { }
  
  ngOnInit(): void {
  }
  registerpage(){
    this.router.navigate(['/registerpage'])
    
  }
  openSnackBar(message: any): void{
    this.SnackBar.open(message);
  }
}
