import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
  export class RegisterComponent {
    users=new Array<register>();
    url:string='http://localhost:3000/logins';
    email:string='';
    password:string='';
    psw_repeat:string='';
    security_code:string='';
    constructor(private _http:HttpClient,private _router:Router){
      this._http.get<register[]>(this.url).subscribe(x=>this.users=x);
    }
    getdata(email:string,password:string){
      var u=this.users.find(x=>x.email===email);
    }
    createAccount(email:string,password:string,psw_repeat:string,security_code:string){
      var u=this.users.find(x=>x.email===email);
        if(u?.email===email){
          alert("Account already exists");
          this._router.navigateByUrl("/login");
        }
        else if(u?.email!=email && password!=psw_repeat){
          alert("Passwords didn't Match");
        }
        else
        {
          var obj={"email":email,"password":password,"security_code":security_code};
          this._http.post(this.url,obj).subscribe();
          alert("Account Created Successfully!...");
          this._router.navigateByUrl("/login");
        }
    }
  }
class register{
  email:string='';
  password:string='';
  psw_repeat:string='';
  security_code:string='';
}
