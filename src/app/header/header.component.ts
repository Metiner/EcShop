import { Component, OnInit } from '@angular/core';
import {SubjectService} from "../../services/subject.service";
import {CheckoutComponent} from "../checkout/checkout.component";
import {CheckoutService} from "../../services/checkout.service";
import {AuthenticationService} from "../../services/authentication.service";
import {RoutingService} from "../../services/routing.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  search_param = "";
  shopping_cart_item_count = 0;
  constructor(private subject_service: SubjectService,
              private checkout_service: CheckoutService,
              private aut_service: AuthenticationService,
              private router_service: RoutingService) {
    this.subject_service.shopping_card_item_count.subscribe( what_to_do => {
      // if what_to_do => 1, increase the number,
      // elseif => 0, make it 0
      // else decrease
      if(what_to_do === 1){
        this.shopping_cart_item_count++;
      }else if(what_to_do === 0){
        this.shopping_cart_item_count=0;
      }else{
        this.shopping_cart_item_count--;
      }
    })
  }

  ngOnInit() {
    this.shopping_cart_item_count = this.checkout_service.get_item_count();
  }

  filter_items(){
    this.subject_service.filter_items.next(this.search_param);
  }

  on_logout(){
    if(this.aut_service.logout()){
      this.router_service.route('/login');
    }
  }
}
