import { GetProductsAction } from './../actions/app.action';
import { Injectable } from '@angular/core';
import { ProductService } from '../product.service';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { StateProductsModel } from '../models/ProductGetModel';

@State<StateProductsModel>({
  name: 'appstate',
  defaults: {
    products: [],
    limit: 0,
    skip: 0,
    total: 0,
  },
})
@Injectable()
export class AppState {
  constructor(private servive: ProductService) {}
  @Selector()
  static getProductSelector(state: StateProductsModel) {
    return state.products;
  }

  @Action(GetProductsAction)
  getProductStateAction(ctx: StateContext<StateProductsModel>,action:GetProductsAction) {
    return this.servive.getProducts(action.limit).pipe(
      tap((res) => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          products: res.products,
          limit: res.limit,
          skip: res.skip,
          total: res.total,
        }
        );
      }
      )
      
    );
    
  }


 
  }
  
  
  
  
  
  
  
  
  
  
   


