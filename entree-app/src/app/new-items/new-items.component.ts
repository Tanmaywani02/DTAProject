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
    this.getList();
    this.getCart();
  }
  newItems = new Array<NewItems>();
  temp:any={}
  cart:any={}
  url = 'http://localhost:3000/recommend';
  urlList = 'http://localhost:3000/list';
  urlCart = 'http://localhost:3000/cart';
  getNewItems(){
    this._http.get<NewItems[]>(this.url)
      .subscribe(response=>this.newItems=response);
  }
  getrecommend(){
    this._http.get<NewItems[]>(this.url)
      .subscribe(response=>this.newItems=response);
  }
  getList(){
    this._http.get<WishList>(`${this.urlList}/${localStorage.getItem("id")}`).subscribe(data=>this.temp=data);
  }
  getCart(){
    this._http.get<WishList>(`${this.urlCart}/${localStorage.getItem("id")}`).subscribe(data=>this.cart=data);
  }
  addToList(id:string){
    var prods = this.temp.products;
    prods.push(id);
    var data={"id":this.temp.id, "products": prods}
    this._http.put(`${this.urlList}/${localStorage.getItem("id")}`,data).subscribe();
    alert("Item added to Wishlist")
  }
  addToCart(id:string){
    console.log("inside")
    var prods = this.cart.products;
    prods.push({"prodid":id, "quant":1});
    var data={"id":this.cart.id, "products": prods};
    console.log(data);

    this._http.put(`${this.urlCart}/${localStorage.getItem("id")}`,data).subscribe();
    alert("Item added to Cart");
  }
}

class NewItems{
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
