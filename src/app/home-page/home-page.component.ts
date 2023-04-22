import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ProducrService} from '../producr.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  products!:Product[];
  constructor(private productService: ProducrService) { }

  

  ngOnInit(): void {
    this.productService
      .getProductAll()
      .subscribe((response) => (this.products=response));
    console.log(this.products+" here");
  }

}
