import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string='';
  password:string='';
  users=new Array<Users>();
  url:string='http://localhost:3000/users';

  constructor(private _http:HttpClient, private _router:Router){
    this.getusers();
  }

  getusers(){
    this._http.get<Users[]>(this.url).subscribe(response=>this.users=response);
  }

  login(){
    var u=this.users.find(x=>x.email===this.email);
    if(u?.email===this.email && u.password===this.password){
      // alert("Login successful");
      localStorage.setItem("id",u.id);
      localStorage.setItem("name",u.name);
      console.log(localStorage.getItem("id"))
      this._router.navigateByUrl("/dashboard");

    }
    else{alert("Login unsuccessful");
      this._router.navigateByUrl("/signup");
    }
  }
}
class Users{
  id:string='';
  name:string='';
  email:string='';
  password:string='';
}
