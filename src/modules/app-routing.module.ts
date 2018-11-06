import {NgModule} from "@angular/core";
import {LoginComponent} from "../app/login/login.component";
import {RouterModule} from "@angular/router";
import {ListItemComponent} from "../app/list-item/list-item.component";
import {ShoppingCartComponent} from "../app/shopping-cart/shopping-cart.component";


const app_routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'items', component: ListItemComponent},
  { path: 'shopping-cart', component: ShoppingCartComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
