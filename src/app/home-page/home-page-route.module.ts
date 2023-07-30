import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { ProductsDetailComponent } from '../products-detail/products-detail.component';

const routes: Routes = [
  { path: '', component: HomePageComponent},
  {path:':id',component:ProductsDetailComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRouteModule {}
