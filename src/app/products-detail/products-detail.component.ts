import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})


export class ProductsDetailComponent implements OnInit{

  private productId!:number
  public paramDetail!:any

  constructor(private store:Store, protected routed:ActivatedRoute,
    private productService:ProductService){

    routed.queryParams.subscribe((m:any)=>{
      this.productId = m.id
      
    })
  }

  ngOnInit(): void {
    this.productService.getProductsId(this.productId).subscribe((item:any)=>{
      this.paramDetail = item
      console.log(item);
      
      
    })

  }
  
}
