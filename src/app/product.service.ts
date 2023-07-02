import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StateProductsModel } from './models/ProductGetModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(limit?: number): Observable<StateProductsModel> {
    console.log(limit);
    
    const url = limit
    
      ? `https://dummyjson.com/products?limit=${limit}`
      : 'https://dummyjson.com/products';
    return this.http.get<StateProductsModel>(url);
  }
}
