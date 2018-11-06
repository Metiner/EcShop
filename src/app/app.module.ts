import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from "../modules/app-routing.module";
import {AuthenticationService} from "../services/authentication.service";
import {HttpModule} from "@angular/http";
import { HeaderComponent } from './header/header.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ItemComponent } from './list-item/item/item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import {ItemsService} from "../services/items.service";
import {SubjectService} from "../services/subject.service";
import {CheckoutService} from "../services/checkout.service";
import {RoutingService} from "../services/routing.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    ListItemComponent,
    ItemComponent,
    ShoppingCartComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthenticationService, ItemsService, SubjectService, CheckoutService, RoutingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
