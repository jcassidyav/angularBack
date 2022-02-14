import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { RouterExtensions } from '@nativescript/angular'

import { Item } from './item'
import { ItemService } from './item.service'

@Component({
  selector: 'ns-details',
  templateUrl: './item-detail.component.html',
})
export class ItemDetailComponent implements OnInit {
  item: Item

  constructor(private itemService: ItemService, private route: ActivatedRoute, private router: RouterExtensions) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params.id
    this.item = this.itemService.getItem(id)
  }
  
  goBack(): void {
    this.router.back();
  }

  goForward(): void {
    this.router
                .navigate(["something"], {
                  transition: {
                      name: "slideLeft",
                      duration: 500,
                      curve: "linear"
                  },
                  clearHistory: false
              });
  }
}
