import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MyAccountActivityComponent } from './my-account-activity/my-account-activity.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { RecommendComponent } from './recommend/recommend.component';
import { TopCategoryComponent } from './top-category/top-category.component';
import { NewItemsComponent } from './new-items/new-items.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    MyAccountActivityComponent,
    FooterComponent,
    RegisterComponent,
    RecommendComponent,
    TopCategoryComponent,
    NewItemsComponent,
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
