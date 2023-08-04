import { ProductService } from '../../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { Iproduct } from 'src/app/models/ProductGetModel';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css'],
})
export class ProductsDetailComponent implements OnInit {
  public paramDetail!:Iproduct;

  constructor(
    protected route: ActivatedRoute,
    private productService: ProductService,
    private location: Location,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService
      .getProductsId(Number(id))
      .subscribe((productsId:Iproduct) => {
        this.titleService.setTitle(productsId.title);
        this.paramDetail = productsId;
      });
  }

  goBack(): void {
    this.location.back();
  }
}
