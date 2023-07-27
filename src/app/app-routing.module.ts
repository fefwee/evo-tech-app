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
  { path: 'auth', loadChildren:async () => {
    return (await import (
      './auth-page/auth-page.module'
    )).AuthPageModule
  }},
  {
    path: 'profile',
    loadChildren:async () => {
      return (await import (
        './personal-area/personal-area.module'
      )).PersonalAreaModule
    },
    canActivate: [authGuard],
  },
  { path: 'admin', loadChildren:async () => {
    return (await import (
      './administration-page/administration-page.module'
    )).AdministrationPageModule
  }},
  {
    path: 'items',
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
