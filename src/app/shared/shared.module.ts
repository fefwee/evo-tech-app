import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { AdministrationEditDetailComponent } from './components/administration-edit-detail/administration-edit-detail.component';
import { ProductsDetailComponent } from './components/products-detail/products-detail.component';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageErrorComponent } from './components/page-error/page-error.component';
import { HeaderLinksComponent } from './components/header-links/header-links.component';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [
    ProductsComponent,
    ButtonComponent,
    FooterComponent,
    HeaderComponent,
    PageErrorComponent,
    HeaderLinksComponent,
    ProductsDetailComponent,
    AdministrationEditDetailComponent,
  ],
  exports: [
    ProductsComponent,
    ButtonComponent,
    FooterComponent,
    HeaderComponent,
    PageErrorComponent,
    HeaderLinksComponent,
    ProductsDetailComponent,
    AdministrationEditDetailComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
})
export class SharedModule {}
