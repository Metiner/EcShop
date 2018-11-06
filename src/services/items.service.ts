import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

@Injectable()
export class ItemsService {

  api_address = 'https://benimfirsatim.com';

  constructor(private http: Http) { }

  get_items(){
    return this.http.get(this.api_address+'/deals/fresh.json?page=1')
      .map(
        (response: any) => {
          return response.json();
        }
      )
      .catch(
        (error: Response) => {
          return Observable.throw(error.json());
        }
      )
  }
}
