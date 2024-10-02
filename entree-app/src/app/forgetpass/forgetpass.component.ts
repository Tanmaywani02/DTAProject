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
  code:string='';
  password:string='';
  psw_repeat:string='';
  users=new Array<Users>();
  url:string='http://localhost:3000/users';

  constructor(private _http:HttpClient,private _router:Router){
    this.getusers();
  }

  getusers(){
    this._http.get<Users[]>(this.url).subscribe(response=>this.users=response);
  }
  resetPassword(){
    var u=this.users.find(x=>x.email===this.email);
    if(u?.email===this.email && u.code===this.code){
      if(this.password === this.psw_repeat){
        var newpass = {"id": u.id, "name":u.name,"email":u.email,"code":u.code, "password":this.password};
        this._http.put(`${this.url}/${u.id}`,newpass)
        alert("Password Updated");
        this._router.navigateByUrl("/login");
      }
      else{
        alert("Password does not match!!");
      }
    }
    else{
      alert("Wrong Security Code");
      this._router.navigateByUrl("/signup");
    }
  }
}
class Users{
  id:string='';
  name:string='';
  email:string='';
  code:string='';
}