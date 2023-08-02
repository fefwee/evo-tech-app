import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Iproduct } from '../../../models/ProductGetModel';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-administration-catalog',
  templateUrl: './administration-catalog.component.html',
  styleUrls: ['./administration-catalog.component.css'],
})
export class AdministrationCatalogComponent {
  public title = 'Администрирование - Товары';

  public products: Iproduct[] = [];

  constructor(private service: ProductService, private titleService: Title) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.getProducts(50);
  }
  getProducts(limit: number): void {
    this.service.getProducts(limit).subscribe((products) => {
      this.products = products.products;
    });
  }
}
