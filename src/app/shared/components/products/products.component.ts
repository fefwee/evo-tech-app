import { Component, Input, OnInit } from '@angular/core';
import { Iproduct, } from '../../../models/ProductGetModel';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Input() productsArr!:any;

  constructor() {

    
  }

  ngOnInit(): void {}
}
