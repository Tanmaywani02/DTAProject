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
  url:string='http://localhost:3000/logins';

  constructor(private _http:HttpClient,private _router:Router){
    this.readdata();
  }

  readdata(){
    this._http.get<Users[]>(this.url).subscribe(response=>this.users=response);
}
getdata(email:string,password:string){
  var u=this.users.find(x=>x.email===email);
  
if(u?.email===email && u.password===password){
  alert("Login successful");
  this._router.navigateByUrl("/");
}
else{alert("Login unsuccessful");
  this._router.navigateByUrl("/signup");
}
}
}
class Users{
  email:string='';
  password:string='';
}
