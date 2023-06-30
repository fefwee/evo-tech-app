import { AppState } from '../states/product.state';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { GetProductsAction } from '../actions/app.action';
import { Select, Store } from '@ngxs/store';
import { ProductGet} from '../models/ProductGetModel';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})

export class ProductsComponent implements OnInit {
  @Select(AppState.getProductSelector) products$!: Observable<ProductGet[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.store.dispatch(new GetProductsAction());
  }
}
