import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { PageErrorComponent } from './shared/components/page-error/page-error.component';

const routes: Routes = [
 {
    path: '',
    loadChildren: () =>
      import('./pages/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },

  {
    path: 'catalog',
    pathMatch:"full",
    loadChildren: () =>
      import('./pages/products-form/products-form.module').then(
        (m) => m.ProductFormModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth-page/auth-page.module').then(
        (m) => m.AuthPageModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/personal-area/personal-area.module').then(
        (m) => m.PersonalAreaModule
      ),
    canActivate: [authGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/administration-page/administration-page.module').then(
        (m) => m.AdministrationPageModule
      ),
    canActivate: [authGuard],
  },
  {
    path: '**',
    component: PageErrorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
