import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent {
  constructor(private _http:HttpClient){
    this.getrecommend();
  }
  recommend = new Array<Recommend>();
  url='http://localhost:3000/recommend';
  getrecommend(){
    this._http.get<Recommend[]>(this.url)
      .subscribe(response=>this.recommend=response);
  }
}

class Recommend{
  id:number=0;
  title:string='';
  image:string='';
  description:string='';
  price:number=0;
  isavailable:boolean=false;
  quantity:number=0;
}
