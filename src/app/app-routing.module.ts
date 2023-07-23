import { AdministrationPageComponent } from './administration-page/administration-page.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { ProductsComponent } from './products/products.component';
import { ButtonComponent } from './button/button.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { PersonalAreaComponent } from './personal-area/personal-area.component';
import { authGuard } from './auth.guard';
import { AdministrationCatalogComponent } from './administration-catalog/administration-catalog.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { AdministrationEditDetailComponent } from './administration-edit-detail/administration-edit-detail.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'catalog', component: ProductsFormComponent },
  {
    path: 'product',
    component: ProductsComponent,
    children: [{ path: 'product-detail', component: ProductsDetailComponent }],
  },
  { path: 'sign-in', component: AuthPageComponent },
  {
    path: 'app-personal-area',
    component: PersonalAreaComponent,
    canActivate: [authGuard],
  },
  { path: 'app-administration-page', component: AdministrationPageComponent },
  { path: 'items', component: AdministrationCatalogComponent },
  {
    path: 'app-administration-edit-detail',
    component: AdministrationEditDetailComponent,
  },
  { path: 'page-error', component: PageErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
