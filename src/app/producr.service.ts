import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProducrService {

  products!: Product[];
  baseURL: string = 'http://localhost:8088/products/';

  constructor(private httpClient: HttpClient) { }

  getProductById(productId: number): Observable<Product>{
    return this.httpClient.get<Product[]>(this.baseURL + 'find?id='+ productId).pipe(
      map((response) => {
        this.products = response;
        return response;
      }),
      catchError(this.handleError<any>())
    );
  }

  private handleError<T>(result?: T) {
    console.log('some error happened...');
    return result;
  }

}
