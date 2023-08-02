import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Iproduct } from '../../models/ProductGetModel';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css'],
})
export class ProductsFormComponent implements OnInit {
  public title = 'Каталог товаров';
  public products: Iproduct[] = [];
  constructor(private service: ProductService, private titleService: Title) {}
  public ngOnInit(): void {
    this.getProduct(50);
  }
  getProduct(limit: number): void {
    this.titleService.setTitle(this.title);
    this.service
      .getProducts(limit)
      .subscribe((products) => (this.products = products.products));
  }
}
