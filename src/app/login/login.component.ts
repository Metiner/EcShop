import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {RoutingService} from "../../services/routing.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private aut_service: AuthenticationService,
              private router_service: RoutingService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm){
    let email = f.value.email;
    let password= f.value.password;
    this.aut_service.login(email,password).subscribe(
      (logged_in: any) => {
        if(logged_in){
          this.router_service.route('/items')
        }
      },
      (error) => {
        alert(error.error);
      }
    )
  }
}
