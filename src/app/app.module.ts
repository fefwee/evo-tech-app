import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './product.service';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { ButtonComponent } from './button/button.component';
import { HeaderLinksComponent } from './header-links/header-links.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { AuthPageComponent } from './auth-page/auth-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { UsersState } from './states/auth-user.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { PersonalAreaComponent } from './personal-area/personal-area.component';
import { AdministrationPageComponent } from './administration-page/administration-page.component';
import { AdministrationCatalogComponent } from './administration-catalog/administration-catalog.component';
import { AdministrationEditDetailComponent } from './administration-edit-detail/administration-edit-detail.component';
import { PageErrorComponent } from './page-error/page-error.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    ProductsDetailComponent,
    ButtonComponent,
    HeaderLinksComponent,
    ProductsFormComponent,
    AuthPageComponent,
    PersonalAreaComponent,
    AdministrationPageComponent,
    AdministrationCatalogComponent,
    AdministrationEditDetailComponent,
    PageErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([ UsersState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [ProductService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
