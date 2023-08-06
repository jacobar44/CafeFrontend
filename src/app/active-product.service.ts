import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { ActiveProduct } from './active-product';

@Injectable({
  providedIn: 'root'
})
export class ActiveProductService {

  
  activeProducts!: ActiveProduct[];
  baseURL: string = 'http://localhost:8088/ActiveProducts/';

  constructor(private httpClient: HttpClient) { }
  postHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  addToCart(newActiveProduct: ActiveProduct){
    newActiveProduct.aid = 0;
    console.log(newActiveProduct);
    return this.httpClient.post<ActiveProduct>(
      this.baseURL + 'addOne',
      newActiveProduct,
      this.postHeader
    );
  }


}
