import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SigninComponent } from './signin/signin.component';
import { SignupSuccessComponent } from './signup-success/signup-success.component';
import { TestPageComponent } from './test-page/test-page.component';
import { TestSubmittedComponent } from './test-submitted/test-submitted.component';

const routes: Routes = [

  {
    path:'home',
    component: HomeComponent
  },

  {
    path:'signin',
    component: SigninComponent
  },

  {
    path:'register',
    component: RegisterComponent
  },

  {
    path:'signup-success',
    component: SignupSuccessComponent
  },

  {
    path:'contact-us',
    component: ContactUsComponent
  },

  {
    path:'test-page',
    component: TestPageComponent
  },

  {
    path:'test-submitted',
    component:TestSubmittedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
