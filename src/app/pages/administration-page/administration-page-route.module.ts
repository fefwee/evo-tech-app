import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationPageComponent } from './administration-page.component';
import { AdministrationCatalogComponent } from './administration-catalog/administration-catalog.component';
import { AdministrationEditDetailComponent } from '../../shared/components/administration-edit-detail/administration-edit-detail.component';

const routes: Routes = [
  { path: '', component: AdministrationPageComponent },
  { path: 'items', component: AdministrationCatalogComponent },
  { path: 'items/:id', component: AdministrationEditDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdmiistrationPageRouteModule {}
