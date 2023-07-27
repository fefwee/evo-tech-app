/* import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProductsComponent } from "./products.component";
import { ProductsDetailComponent } from "../products-detail/products-detail.component";


const routes = [
    { path: '', component: ProductsComponent, 
    children: [{ path: '/:id/',compыonent: ProductsDetailComponent }],},
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

  export class ProductsRouteModule{
  } */