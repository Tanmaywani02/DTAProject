import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistComponent } from '../wishlist/wishlist.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {
  constructor(private _router:Router){

  }
  isVisible = false;

  openWishlist(){
    
    this._router.navigateByUrl('wishlist');
  }
  openCart(){
    this._router.navigateByUrl('cart');
  }
  openButton() {
    this.isVisible = true;
  }

  closeButton() {
    this.isVisible = false;
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
