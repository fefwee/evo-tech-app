import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { ProductService } from './product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import { UsersState } from './states/auth-user.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
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
