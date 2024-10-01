import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:RegisterComponent},
  {path:'forgetpassword', component:ForgetpassComponent},
  {path:'cart', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
