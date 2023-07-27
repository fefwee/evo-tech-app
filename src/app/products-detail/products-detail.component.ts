import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css'],
})
export class ProductsDetailComponent implements OnInit {
  private productId!: number;
  public paramDetail!: any;

  constructor(
    private store: Store,
    protected route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) {
   /*  routed.queryParams.subscribe((m: any) => {
      this.productId = m.id;
    }); */
  }

  ngOnInit(): void {
    this.productService.getProductsId(this.productId).subscribe((item: any) => {
      this.paramDetail = item;
    });
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
