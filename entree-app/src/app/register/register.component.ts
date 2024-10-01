import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
  export class RegisterComponent {
    constructor(private _http:HttpClient,private _router:Router){

  }
  dashboard(){
this._router.navigateByUrl('/dashboard');
  }
}
