import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProductsFormComponent } from "./products-form.component";
import { ProductsDetailComponent } from "../products-detail/products-detail.component";


const routes = [
    { path: '', component: ProductsFormComponent,
    children: [{ path: ':id/',compыonent: ProductsDetailComponent }] },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

  export class ProductFormRouteModule{
  }