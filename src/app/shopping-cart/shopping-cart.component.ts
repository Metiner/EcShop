import { Component, OnInit } from '@angular/core';
import {CheckoutService} from "../../services/checkout.service";
import {Item} from "../../models/item";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  items_that_gonna_checkout = [];
  constructor(private checkout_service: CheckoutService) { }

  ngOnInit() {
    this.items_that_gonna_checkout = this.checkout_service.get_items();
  }

  total_price(){
    return this.checkout_service.get_total_price();
  }

  delete_item_from_cart(item: Item){
    this.checkout_service.remove_from_cart(item);
    this.items_that_gonna_checkout = this.checkout_service.get_items();
  }

  checkout(){
    this.checkout_service.checkout();
  }
}
