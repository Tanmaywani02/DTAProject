import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent {
  email:string='';
  security_code:string='';
  users=new Array<Users>();
  url:string='http://localhost:3000/logins';

  constructor(private _http:HttpClient,private _router:Router){
    this.readdata();
  }

  readdata(){
    this._http.get<Users[]>(this.url).subscribe(response=>this.users=response);
}
getdata(email:string,security_code:string){
  var u=this.users.find(x=>x.email===email);
  
if(u?.email===email && u.security_code===this.security_code){
  alert(`Your Password is ${u.password}`);
  this._router.navigateByUrl("/login");
}
else{alert("Invalid Credentials");
  this._router.navigateByUrl("/signup");
}
}
}
class Users{
  email:string='';
  security_code:string='';
  password:string='';
}