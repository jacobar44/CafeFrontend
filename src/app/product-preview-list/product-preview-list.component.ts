import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-preview-list',
  templateUrl: './product-preview-list.component.html',
  styleUrls: ['./product-preview-list.component.css']
})
export class ProductPreviewListComponent implements OnInit {
  @Input() public products!:Product[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.products+"list level");
  }

}
