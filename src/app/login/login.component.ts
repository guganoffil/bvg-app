import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private dialog:MatDialog) { }

  ngOnInit(): void {
  }
 login(){
   this.router.navigate(['/login'])
 }
 openDialog(){
  let dialogref=this.dialog.open(DialogExampleComponent,{data: {name:'gugan'}});
  dialogref.afterClosed().subscribe(result => {
    console.log('Dialog result: ${result}')
  });
 }
 
}
