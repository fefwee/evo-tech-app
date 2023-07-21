import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StateProductsModel } from './models/ProductGetModel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private domain:string | undefined
  constructor(private http: HttpClient) {
    this.domain = environment.domainProducts
  }

  getProducts(limit?: number): Observable<StateProductsModel> {
    console.log(limit);
    
    const url = limit
    
      ? `${this.domain}?limit=${limit}`
      : `${this.domain}`;
    return this.http.get<StateProductsModel>(url);
  }
  
  getProductsId(id:number):Observable<StateProductsModel> {
    return this.http.get<StateProductsModel>(`${this.domain}${id}`)
  }
}
