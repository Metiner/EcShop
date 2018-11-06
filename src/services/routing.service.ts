import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
@Injectable()
export class RoutingService {


  constructor(private router: Router) { }

  route(to: string){
    this.router.navigate([to]);
  }
}
