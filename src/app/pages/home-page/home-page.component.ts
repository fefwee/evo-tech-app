import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Iproduct } from '../../models/ProductGetModel';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  title = 'Основные товары';
  public products: Iproduct[] = [];
  constructor(private service: ProductService, private titleService: Title) {}

  public ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.service
      .getProducts(10)
      .subscribe((products) => (this.products = products.products));
  }
}
