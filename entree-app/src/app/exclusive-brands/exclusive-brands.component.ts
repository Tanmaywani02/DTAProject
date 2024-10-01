import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-exclusive-brands',
  templateUrl: './exclusive-brands.component.html',
  styleUrls: ['./exclusive-brands.component.css']
})
export class ExclusiveBrandsComponent {
  constructor(private _http:HttpClient){
    this.getNewItems();
  }
  exbrand = new Array<ExclusiveBrands>();
  url='http://localhost:3000/recommend';
  getNewItems(){
    this._http.get<ExclusiveBrands[]>(this.url)
      .subscribe(response=>this.exbrand=response);
  }
}

class ExclusiveBrands{
  id:number=0;
  title:string='';
  image:string='';
  description:string='';
  price:number=0;
  isavailable:boolean=false;
  quantity:number=0;
}
