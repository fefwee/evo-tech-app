import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProductsFormComponent } from "./products-form.component";


const routes = [
    { path: '', component: ProductsFormComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

  export class ProductFormRouteModule{
  }