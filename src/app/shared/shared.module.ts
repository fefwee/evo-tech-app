import { NgModule } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { PageErrorComponent } from '../page-error/page-error.component';
import { HeaderLinksComponent } from '../header-links/header-links.component';
import { ProductsDetailComponent } from '../products-detail/products-detail.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { AdministrationEditDetailComponent } from '../administration-edit-detail/administration-edit-detail.component';

@NgModule({
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  declarations: [
    ProductsComponent,
    ButtonComponent, 
    FooterComponent,
    HeaderComponent,
    PageErrorComponent,
    HeaderLinksComponent,
    ProductsDetailComponent,
    AdministrationEditDetailComponent
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
    RouterModule
  ],
})
export class SharedModule {}
