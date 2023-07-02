import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'catalog',component:ProductsFormComponent},
  {path:'product',component:ProductsComponent,children:[
    {path:'product-detail',component:ProductsDetailComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
