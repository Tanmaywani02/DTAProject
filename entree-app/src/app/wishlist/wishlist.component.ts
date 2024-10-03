import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {
  url='http://localhost:3000/recommend';
  urlList = 'http://localhost:3000/list';
  recommend = new Array<Recommend>();
  temp:any={}
  wishlistdetails = new Array<WishListDetails>();
  constructor(private _http: HttpClient){
    this.getrecommend();
    this.getListDetails();
  }

  
 
  getrecommend(){
    this._http.get<Recommend[]>(this.url)
      .subscribe(response=>this.recommend=response);
  }

  async sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  getList(){
    this._http.get<WishList>(`${this.urlList}/${localStorage.getItem("id")}`).subscribe(data=>this.temp=data);
  }

  async getListDetails(){
    this.getList();
    await this.sleep(50);
    var tempList = this.temp.products;
    for(var i of tempList){
      this._http.get<WishListDetails>(`${this.url}/${i}`).subscribe(data=>this.wishlistdetails.push(data))
    }
  }

  isVisible = true;

  openButton() {
    this.isVisible = true;
  }

  closeButton() {
    this.isVisible = true;
  }

  count:number = 0;
  increase(){
    this.count++;
  }
  decrease(){
    if(this.count > 0 ){
      this.count--;
    }
   
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

class WishListDetails{
  image:string='';
  title:string='';
  price:number=0;
}