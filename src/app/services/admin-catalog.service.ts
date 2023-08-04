import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Iproduct } from '../models/ProductGetModel';

@Injectable({
  providedIn: 'root',
})
export class AdminCatalogService {
  private domain: string | undefined;

  constructor(private http: HttpClient) {
    this.domain = environment.domainProducts;
  }

  public saveEditProduct(data: Iproduct[], id?: number) {
    return this.http.put(`${this.domain}${id}`, data);
  }
}
