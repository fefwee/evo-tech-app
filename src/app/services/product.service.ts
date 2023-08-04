import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct, StateProductsModel } from '../models/ProductGetModel';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private domain: string | undefined;
  constructor(private http: HttpClient) {
    this.domain = environment.domainProducts;
  }

  getProducts(limit?: number): Observable<StateProductsModel> {
    const url = limit ? `${this.domain}?limit=${limit}` : `${this.domain}`;
    return this.http.get<StateProductsModel>(url);
  }

  getProductsId(id:number): Observable<Iproduct> {
    return this.http.get<Iproduct>(`${this.domain}${id}`);
  }

  productUpdate(updateObj: any, id: number): Observable<Iproduct> {
    return this.http.put<any>(`${this.domain}${id}`, updateObj);
  }
}
