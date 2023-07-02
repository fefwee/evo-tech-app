import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { ProductGet} from '../models/ProductGetModel';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})

export class ProductsComponent{
 
  @Input() products$!: Observable<ProductGet[]>;
}
