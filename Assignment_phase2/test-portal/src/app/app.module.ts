import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SignupSuccessComponent } from './signup-success/signup-success.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TestPageComponent } from './test-page/test-page.component';
import { TestSubmittedComponent } from './test-submitted/test-submitted.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent,
    HomeComponent,
    SignupSuccessComponent,
    ContactUsComponent,
    TestPageComponent,
    TestSubmittedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
