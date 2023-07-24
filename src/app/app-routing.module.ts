import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: '', loadChildren:async () => {
    return (await import (
      './home-page/home-page.module'
    )).HomePageModule
  }},
  { path: 'catalog', loadChildren:async () => {
    return (await import (
      './products-form/products-form.module'
    )).ProductFormModule
  }},
  {
    path: 'product',
    loadChildren: async () => {
      return (await import (
        './products/products.module'
      )).ProductsModule
    },
  },
  { path: 'sign-in', loadChildren:async () => {
    return (await import (
      './auth-page/auth-page.module'
    )).AuthPageModule
  }},
  {
    path: 'app-personal-area',
    loadChildren:async () => {
      return (await import (
        './personal-area/personal-area.module'
      )).PersonalAreaModule
    },
    canActivate: [authGuard],
  },
  { path: 'app-administration-page', loadChildren:async () => {
    return (await import (
      './administration-page/administration-page.module'
    )).AdministrationPageModule
  }},
  {
    path: 'administration-catalog',
    loadChildren: async () => {
      return (await import(
        './administration-catalog/administration-catalog.module'
      )).AdministrationCatalogModule
    },
  },
  {
    path: 'app-administration-edit-detail',
    loadChildren:async()=>{
      return (await import(
        './administration-edit-detail/administration-edit-detail.module'
      )).AdministrationEditDetailModule
    },
  },
  { path: 'page-error', loadChildren:async () => {
    return (await import (
      './page-error/page-error.module'
    )).PageErrorModule
  } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
