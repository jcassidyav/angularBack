import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from '@nativescript/angular';


@Component({
  selector: 'something',
  templateUrl: './something.component.html',
})
export class SomethingComponent implements OnInit {


  constructor(private router: RouterExtensions) {}

  ngOnInit(): void {
  
  }

  goBack(): void {
    this.router.back();
  }
}
