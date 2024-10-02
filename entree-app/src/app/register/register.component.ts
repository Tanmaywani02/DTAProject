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
    url:string='http://localhost:3000/users';
    name:string='';
    email:string='';
    password:string='';
    psw_repeat:string='';
    code:string='';
    constructor(private _http:HttpClient,private _router:Router){
      this.getusers();
    }

    getusers(){
      this._http.get<register[]>(this.url).subscribe(x=>this.users=x);
    }


    isEmailAvailable(){
      var u =this.users.find(x=>x.email===this.email);
      if(u!= undefined){
        return false;
      }
      else{
        return true;
      }
    }
    signup(){
      if(this.name.length>0 && this.email.length>0 && this.password.length>0 && this.code.length==4){
        if(!this.isEmailAvailable()){
          alert("Email is already registered");
          this._router.navigateByUrl("/login");
        }
        else{
          if(this.password === this.psw_repeat){
            var obj={"name":this.name, "email":this.email, "code":this.code, "password":this.password};
            this._http.post(this.url,obj).subscribe();
            alert("Account Created Successfully!!!");
            this._router.navigateByUrl("/login");
          }
          else{
            alert("Password does not match!!");
          }
        }
      }
      else{
        alert("Validation Failed!!!");
      }
    } 
  }
class register{
  name:string='';
  email:string='';
  password:string='';
  psw_repeat:string='';
  security_code:string='';
}
