import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './product.service';
import { AppState } from './states/product.state';
import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { ButtonComponent } from './button/button.component';
import { HeaderLinksComponent } from './header-links/header-links.component';
import { ProductsFormComponent } from './products-form/products-form.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([AppState]),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
