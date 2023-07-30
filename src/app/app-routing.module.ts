import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { PageErrorComponent } from './page-error/page-error.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: async () => {
      return (await import('./home-page/home-page.module')).HomePageModule;
    },
  },
  {
    path: 'catalog',
    loadChildren: async () => {
      return (await import('./products-form/products-form.module'))
        .ProductFormModule;
    },
  },
  {
    path: 'auth',
    loadChildren: async () => {
      return (await import('./auth-page/auth-page.module')).AuthPageModule;
    },
  },
  {
    path: 'profile',
    loadChildren: async () => {
      return (await import('./personal-area/personal-area.module'))
        .PersonalAreaModule;
    },
    canActivate: [authGuard],
  },
  {
    path: 'admin',
    loadChildren: async () => {
      return (await import('./administration-page/administration-page.module'))
        .AdministrationPageModule;
    },
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
