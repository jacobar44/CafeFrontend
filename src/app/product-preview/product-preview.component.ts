import { Component, Input,OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProducrService } from '../producr.service';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit {

  @Input() product!:Product;
  constructor(
    private routes: ActivatedRoute,
    private producrService: ProducrService,
    private fb: FormBuilder,
    private router: Router
    
  ) {}

  // ngOnInit(): void {
  //   this.producrService
  //     .getProductById(parseInt(this.routes.snapshot.paramMap.get('id')!))
  //     .subscribe((response) => (this.product = response));
  //     console.log(this.product+"+");
  // }

  ngOnInit(): void {
    console.log(this.product+"list view");
  }

}
