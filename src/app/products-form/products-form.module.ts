import { NgModule } from "@angular/core";
import { ProductFormRouteModule } from "./products-form-route.module";
import { ProductsFormComponent } from "./products-form.component";
import { SharedModule } from "../shared/shared.module";




@NgModule({
    imports: [ProductFormRouteModule,SharedModule],
    declarations:[ProductsFormComponent],
    exports: [ProductsFormComponent],
  })

  export class ProductFormModule{}