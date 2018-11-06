import {Injectable} from "@angular/core";
import {Item} from "../models/item";
import {SubjectService} from "./subject.service";

@Injectable()
export class CheckoutService{

  shopping_cart: { item: Item, quantity: number}[] = [];

  constructor(private subject_service: SubjectService){
    // check if there is already shopping-cart in localStorage
    if(localStorage.getItem('shopping-cart')){
      this.shopping_cart = JSON.parse(localStorage.getItem('shopping-cart'));
    }
  }

  add_to_cart(item: Item, quantity: number){
    //check if same item already added to cart
    if(this.shopping_cart.length > 0){
      for(let i=0;i<this.shopping_cart.length;i++){
        if(this.shopping_cart[i].item.id == item.id){
          this.shopping_cart[i].quantity += quantity;
          break;
        }else{
          this.shopping_cart.push({item, quantity});
          break;
        }
      }
    }else{
      this.shopping_cart.push({item, quantity});
    }

    alert('item added to cart');
    localStorage.setItem('shopping-cart', JSON.stringify(this.shopping_cart));

    // increase item count which in header.
    this.subject_service.shopping_card_item_count.next(1);
  }

  remove_from_cart(item: Item){
    for(let i=0;i<this.shopping_cart.length;i++){
      if(this.shopping_cart[i].item.id == item.id){
        this.shopping_cart.splice(i,1);
        break;
      }
    }
    localStorage.setItem('shopping-cart', JSON.stringify(this.shopping_cart));
    // decrease item count which in header.
    this.subject_service.shopping_card_item_count.next(2);
  }

  checkout(){
    this.shopping_cart.length = 0;
    localStorage.setItem('shopping-cart', JSON.stringify(this.shopping_cart));
    // set 0 to item count which in header.
    this.subject_service.shopping_card_item_count.next(0);
    alert("Successfully, checked out");
  }

  get_item_count(){
    return this.shopping_cart.length;
  }

  get_items(){
    return this.shopping_cart;
  }

  get_total_price(){
    let total_price = 0;
    for(let i=0;i<this.shopping_cart.length;i++){
      total_price += parseFloat(this.shopping_cart[i].item.price) * this.shopping_cart[i].quantity;
    }
    return total_price;
  }

}
