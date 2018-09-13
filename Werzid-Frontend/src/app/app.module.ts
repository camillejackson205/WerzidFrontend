import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Components:
import { AppComponent } from './app.component';
import { RegistrationComponent } from './component/registration/registration.component';
// Services
import { AuthService } from './services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ AuthService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
