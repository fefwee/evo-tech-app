import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { PageErrorComponent } from './page-error/page-error.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () =>
      import('./home-page/home-page.module').then((m) => m.HomePageModule),
  },
  {
    path: 'catalog',
    loadChildren: () =>
      import('./products-form/products-form.module').then(
        (m) => m.ProductFormModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth-page/auth-page.module').then((m) => m.AuthPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./personal-area/personal-area.module').then(
        (m) => m.PersonalAreaModule
      ),
      canActivate: [authGuard],
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./administration-page/administration-page.module').then(
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
