import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-administration-edit-detail',
  templateUrl: './administration-edit-detail.component.html',
  styleUrls: ['./administration-edit-detail.component.css'],
})
export class AdministrationEditDetailComponent implements OnInit {
  private productId!: number;
  public detailProduct: any;
  public title = 'Администрирование - Редактирование товара';
  public form!: FormGroup;

  constructor(
    protected route: ActivatedRoute,
    private service: ProductService,
    private router: Router,
    private location: Location,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.titleService.setTitle(this.title);
    this.productId = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getProductsId(this.productId).subscribe((item: any) => {
      this.detailProduct = item;
    });
    this.form = new FormGroup({
      title: new FormControl('', [
        Validators.minLength(1),
        Validators.required,
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]),
      price: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]),
      brand: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]),
      rating: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]),
    });
  }

  public saveEditConfig(data: any) {
    this.service.productUpdate(data, this.productId).subscribe((res) => {
      console.log(res);
    });
    this.router.navigate(['admin/items']);
  }
  goBack(): void {
    this.location.back();
  }
}
