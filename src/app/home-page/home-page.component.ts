import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GetProductsAction } from '../actions/app.action';
import { AppState } from '../states/product.state';
import { Observable } from 'rxjs';
import { ProductGet } from '../models/ProductGetModel';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  title = 'Основные товары';
  @Select(AppState.getProductSelector) products$!: Observable<ProductGet[]>;

  constructor(private store: Store) {}

  public ngOnInit(): void {
    this.store.dispatch(new GetProductsAction(10));
  }
}
