import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../../../models/ProductGetModel';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @Input() productsArr!:Iproduct[];

  constructor(protected router:Router) {}

  public navigateToDetail(id:number){
    
    this.router.navigateByUrl(`catalog/${id}`)
  }
  ngOnInit(): void {}
}
