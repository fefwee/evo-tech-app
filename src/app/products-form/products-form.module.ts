import { NgModule } from "@angular/core";
import { ProductFormRouteModule } from "./products-form-route.module";



@NgModule({
    imports: [ProductFormRouteModule],
    exports: [ProductFormRouteModule],
  })

  export class ProductFormModule{}