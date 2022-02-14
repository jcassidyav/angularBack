import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular'

import { Item } from './item'
import { ItemService } from './item.service'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: Array<Item>

  constructor(private itemService: ItemService,  private router: RouterExtensions) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems()
  }
  goForward(id): void {
    console.log("id",id)
    this.router
                .navigate(["item", id], {
                  transition: {
                      name: "slideLeft",
                      duration: 500,
                      curve: "linear"
                  },
                  clearHistory: false
              });
  }
}
