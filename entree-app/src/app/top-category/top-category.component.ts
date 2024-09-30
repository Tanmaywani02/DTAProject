import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-top-category',
  templateUrl: './top-category.component.html',
  styleUrls: ['./top-category.component.css']
})
export class TopCategoryComponent {
  constructor(private _http:HttpClient){
    this.getTopCategory();
  }
  topcat = new Array<TopCategory>();
  url='http://localhost:3000/recommend';
  getTopCategory(){
    this._http.get<TopCategory[]>(this.url)
      .subscribe(response=>this.topcat=response);
  }
}

class TopCategory{
  id:number=0;
  title:string='';
  image:string='';
  description:string='';
  price:number=0;
  isavailable:boolean=false;
  quantity:number=0;
}
