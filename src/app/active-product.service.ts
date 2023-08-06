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

  getProductById(): Observable<number>{
    
    return this.httpClient.get<number>(`${this.baseURL}count`).pipe(
      map((response) => {
        return response;
      }),
      catchError(this.handleError<any>())
    );
  }

  private handleError<T>(result?: T) {
    console.log('some errors happened... '+result);
    return result;
  }

}
