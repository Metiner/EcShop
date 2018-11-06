import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class SubjectService {

  filter_items = new Subject<any>();
  shopping_card_item_count = new Subject<any>();

  constructor() {

  }


}
