import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { ProductService } from '../product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminCatalogService } from '../admin-catalog.service';
import { AdminUpdateAction } from '../actions/admin-update.action';
import { Location } from '@angular/common';
@Component({
  selector: 'app-administration-edit-detail',
  templateUrl: './administration-edit-detail.component.html',
  styleUrls: ['./administration-edit-detail.component.css'],
})
export class AdministrationEditDetailComponent implements OnInit {
  private productId!: number;
  public detailProduct: any;
  public title = 'Администрирование - Редактирование товара';
  public form!:FormGroup

  constructor(
    private store: Store,
    protected routed: ActivatedRoute,
    private service: ProductService,
    private adminServive:AdminCatalogService,
    private router:Router,
    private location:Location

  ) {
    routed.queryParams.subscribe((m: any) => {
      this.productId = m.id;
    });
  }

  ngOnInit(): void {
    this.service.getProductsId(this.productId).subscribe((item: any) => {
      this.detailProduct = item;
    });
    this.form = new FormGroup({
      title: new FormControl('',
      [Validators.minLength(3),Validators.required]),
      description: new FormControl('',
      [Validators.required,Validators.minLength(1)]),
      price: new FormControl('',
      [Validators.required,Validators.minLength(1)]),
      brand: new FormControl('',
      [Validators.required,Validators.minLength(1)]),
      rating: new FormControl('',
      [Validators.required,Validators.minLength(1)]),
    }
    );
  }

  public saveEditConfig (data:any) {
    this.store.dispatch(new AdminUpdateAction(data,this.productId))
    this.router.navigate(['items']) 

  }
  goBack(): void {
    this.location.back();
  }


}
