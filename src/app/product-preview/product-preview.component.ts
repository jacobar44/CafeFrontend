import { Component, Input,OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProducrService } from '../producr.service';
import { ActiveProductService } from '../active-product.service';
import { ActiveProduct } from '../active-product';


@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit {

  @Input() product!:Product;
  @Input() activeProduct!:ActiveProduct;
  quantity:number = 0;
  constructor(
    private routes: ActivatedRoute,
    private producrService: ProducrService,
    private fb: FormBuilder,
    private router: Router,
    private activeProductService:ActiveProductService,
  ) {}

  // ngOnInit(): void {
  //   this.producrService
  //     .getProductById(parseInt(this.routes.snapshot.paramMap.get('id')!))
  //     .subscribe((response) => (this.product = response));
  //     console.log(this.product+"+");
  // }

  addToCart() :void{
console.log("adding to cart");

this.activeProductService.addToCart(new ActiveProduct(this.product.pid,0,0,this.quantity)).subscribe((response) => (this.activeProduct = response));
console.log(this.activeProduct);
  }

  addToQuantity() :void{
    console.log("adding to quantity");
    this.quantity++;
      }

      subToQuantity():void{
        console.log("adding to cart");
        if(this.quantity!=0){
          this.quantity--;
        }
        
          }

  ngOnInit(): void {
    console.log(this.product+"list view");
  }

}
