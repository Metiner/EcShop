import { Component, OnInit } from '@angular/core';
import {ItemsService} from "../../services/items.service";
import {Item} from "../../models/item";
import {SubjectService} from "../../services/subject.service";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  items = [];
  visible_items = [];

  constructor(private items_service: ItemsService,
              private subject_service: SubjectService) {

    this.subject_service.filter_items.subscribe(search_param=>{
      this.visible_items = this.items.filter( item => item.title.toLowerCase().includes(search_param.toLowerCase()));
    });
  }

  ngOnInit() {
    this.items_service.get_items().subscribe(
      items => {
        this.items = items.map(item => {
          return new Item(item.id,item.category.name,item.image_url,item.details,item.price, item.title);
        });
        this.visible_items = this.items;
      },
      error => {
        alert(error)
      }
    )
  }

}
