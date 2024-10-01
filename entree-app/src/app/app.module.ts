import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    ForgetpassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
