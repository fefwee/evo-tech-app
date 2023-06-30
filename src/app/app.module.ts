import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './product.service';
import { AppState } from './states/product.state';


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
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
