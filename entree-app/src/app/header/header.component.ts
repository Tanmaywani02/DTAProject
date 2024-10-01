import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isVisible = false;

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
