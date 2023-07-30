import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css'],
})
export class ProductsDetailComponent implements OnInit {
  public paramDetail!: any;

  constructor(
    protected route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts():void{
   const id = Number(this.route.snapshot.paramMap.get('id'))   
   this.productService.getProductsId(id).subscribe((productsId)=>{
    this.paramDetail = productsId
   })
  }

  goBack(): void {
    this.location.back();
  }
}
