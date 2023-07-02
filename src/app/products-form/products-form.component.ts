import { ProductGet } from './../models/ProductGetModel';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { AppState } from '../states/product.state';
import { GetProductsAction } from '../actions/app.action';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {

    
    @Select(AppState.getProductSelector) products$!:Observable<ProductGet[]>

    constructor (private store:Store){

    }

    public ngOnInit(): void {
      this.store.dispatch( new GetProductsAction())
    }
    
}
