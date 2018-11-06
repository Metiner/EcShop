import {Component, Input, OnInit} from '@angular/core';
import {Item} from "../../../models/item";
import {CheckoutService} from "../../../services/checkout.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;
  quantity = 0;
  constructor(private checkout_service: CheckoutService) { }

  ngOnInit() {
  }

  add_to_cart(){
    if(this.quantity > 0){
      this.checkout_service.add_to_cart(this.item,this.quantity);
    }
    else{
      alert("Quantity must be at least 1");
    }
  }
}
