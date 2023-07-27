import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Iproduct } from '../models/ProductGetModel';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  title = 'Основные товары';
  public products:Iproduct[] = []
  constructor(private service:ProductService) {}

  public ngOnInit(): void {
    this.service.getProducts(10).subscribe((products)=>this.products = products.products)
  }

}
