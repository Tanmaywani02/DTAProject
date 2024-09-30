import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-new-items',
  templateUrl: './new-items.component.html',
  styleUrls: ['./new-items.component.css']
})
export class NewItemsComponent {
  constructor(private _http:HttpClient){
    this.getNewItems();
  }
  newItems = new Array<NewItems>();
  url='http://localhost:3000/recommend';
  getNewItems(){
    this._http.get<NewItems[]>(this.url)
      .subscribe(response=>this.newItems=response);
  }
}

class NewItems{
  id:number=0;
  title:string='';
  image:string='';
  description:string='';
  price:number=0;
  isavailable:boolean=false;
  quantity:number=0;
}

