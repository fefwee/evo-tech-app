import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsFormComponent } from './products-form.component';
import { ProductsDetailComponent } from '../../shared/components/products-detail/products-detail.component';

const routes: Routes = [
  { path: '', component: ProductsFormComponent,},
  { path: ':id', component: ProductsDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductFormRouteModule {}
