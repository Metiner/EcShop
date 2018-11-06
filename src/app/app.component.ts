import { Component } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {RoutingService} from "../services/routing.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private aut_service: AuthenticationService,
              private router_service: RoutingService){

  }
  ngOnInit(){
    if(this.aut_service.silent_login()){
      this.router_service.route('/items');
    }else{
      this.router_service.route('/login');
    }
  }
}
