import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  url='http://localhost:3000/recommend';
  urlcart = 'http://localhost:3000/cart';
  recommend = new Array<Recommend>();
  temp:any={}
  cartdetails = new Array<CartDetails>();
  constructor(private _http: HttpClient){
    this.getrecommend();
    this.getCartDetails();
    
  }

  async sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  getrecommend(){
    this._http.get<Recommend[]>(this.url)
      .subscribe(response=>this.recommend=response);
  }
  getCart(){
    this._http.get<Cart>(`${this.urlcart}/${localStorage.getItem("id")}`).subscribe(data=>this.temp=data);

  }

  async getCartDetails(){
    this.getCart();
    await this.sleep(50);
    var tempList = this.temp.products;
    for(var i of tempList){
      this._http.get<CartDetails>(`${this.url}/${i.prodid}`).subscribe(data=>this.cartdetails.push(data))
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
class Cart{
  id:string='';
  products:any=[];
}

class CartDetails{
  image:string='';
  title:string='';
  price:number=0;
  quantity:number = 0;
}