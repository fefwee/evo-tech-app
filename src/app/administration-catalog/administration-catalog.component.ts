import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { ProductGet } from '../models/ProductGetModel';
import { AppState } from '../states/product.state';
import { GetProductsAction } from '../actions/app.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-administration-catalog',
  templateUrl: './administration-catalog.component.html',
  styleUrls: ['./administration-catalog.component.css'],
})
export class AdministrationCatalogComponent {
  public title = 'Администрирование - Товары';

  @Select(AppState.getProductSelector) productsAdmin$!: Observable<
    ProductGet[]
  >;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new GetProductsAction());
  }

}
