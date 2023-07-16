import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminCatalogService{

  constructor( private http:HttpClient  ) {}

  public saveEditProduct (data:any,id?:any) {
    console.log(data);
    return this.http.put(`https://dummyjson.com/products/${id}`,data)
  }

}
