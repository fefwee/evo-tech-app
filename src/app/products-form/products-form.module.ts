import { NgModule } from "@angular/core";
import { ProductFormRouteModule } from "./products-form-route.module";
import { ProductsFormComponent } from "./products-form.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";




@NgModule({
    imports: [ProductFormRouteModule,SharedModule,CommonModule],
    declarations:[ProductsFormComponent],
    exports: [ProductsFormComponent,CommonModule],
  })

  export class ProductFormModule{}