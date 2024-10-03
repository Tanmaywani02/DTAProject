import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent {
  constructor(private _http:HttpClient){
    this.getrecommend();
    this.getList();
  }
  recommend = new Array<Recommend>();
  temp:any={}
  url='http://localhost:3000/recommend';
  urlList = 'http://localhost:3000/list';
  getrecommend(){
    this._http.get<Recommend[]>(this.url)
      .subscribe(response=>this.recommend=response);
  }
  getList(){
    this._http.get<WishList>(`${this.urlList}/${localStorage.getItem("id")}`).subscribe(data=>this.temp=data);

  }
  addToList(id:string){
    var prods = this.temp.products;
    prods.push(id);
    var data={"id":this.temp.id, "products": prods}
    this._http.put(`${this.urlList}/${localStorage.getItem("id")}`,data).subscribe();
  }


}

class Recommend{
  id:string='';
  title:string='';
  image:string='';
  description:string='';
  price:number=0;
  isavailable:boolean=false;
  quantity:number=0;
}
class WishList{
  id:string='';
  products:any=[];
}
