import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";
import {User} from "../models/user";

@Injectable()
export class AuthenticationService {

  api_address = 'https://benimfirsatim.com';

  constructor(private http: Http) { }

  silent_login(){
    if(localStorage.getItem('user')){
      return true;
    }else{
      return false;
    }
  }

  login(email:string, password:string){
    let user = {
      user: {
        email: email,
        password: password
      }
    };
    return this.http.post(this.api_address+'/users/sign_in.json', user)
      .map(
        (response: any) => {
          const response_json_data = response.json();
          let user = new User(response_json_data.id, response_json_data.email, response.headers.get('authorization'));
          this.set_user_to_local_storage(user);
          return true
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw(error.json());
        }
      )
  }

  logout(){
    localStorage.removeItem('user');
    return true;
  }

  set_user_to_local_storage(user: User){
    localStorage.setItem('user', JSON.stringify(user));
  }
}
