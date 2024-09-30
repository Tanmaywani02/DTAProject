import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-my-account-activity',
  templateUrl: './my-account-activity.component.html',
  styleUrls: ['./my-account-activity.component.css']
})

export class MyAccountActivityComponent {
  activityorders = new Array<ActivityOrders>();

  constructor(private _http:HttpClient){
    this.getOrders();
  }
  url = "http://localhost:3000/orders";
  getOrders(){
    this._http.get<ActivityOrders[]>(this.url)
      .subscribe(response=>this.activityorders=response);
  }
}
class ActivityOrders{
  id:string='';
  date:string='';
  status:string='';
}
