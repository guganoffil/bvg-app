import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { ForgetComponent } from './forget/forget.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   DialogComponentComponent, 
    RegisterpageComponent,
    ForgetComponent,
    DialogExampleComponent,
    
  ],
  entryComponents:[DialogExampleComponent],
  imports: [
    BrowserModule,MatDialogModule,
    AppRoutingModule, MatButtonModule, MatInputModule,
    BrowserAnimationsModule,MatDialogModule  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }

