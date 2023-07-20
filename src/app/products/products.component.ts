import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { ProductGet} from '../models/ProductGetModel';
import { Location } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})

export class ProductsComponent implements OnInit{
  
 
  @Input() products$!: Observable<ProductGet[]>;

  constructor(private location:Location){}

  ngOnInit(): void {
    
  }
  goBack(): void {
    this.location.back();
  }
  
}
