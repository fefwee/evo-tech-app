import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Iproduct } from '../models/ProductGetModel';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css'],
})
export class ProductsFormComponent implements OnInit {
  public products:Iproduct[] = []
  constructor(private service:ProductService) {}
  public ngOnInit(): void {
    this.getProduct(50)
    
  }
  getProduct(limit:number):void{
    this.service.getProducts(limit).subscribe((products)=> this.products = products.products)
  }
}
