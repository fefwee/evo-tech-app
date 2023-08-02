import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxsModule } from '@ngxs/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersState } from './states/auth-user.state';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsResetPluginModule } from 'ngxs-reset-plugin';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    NgxsModule.forRoot([ UsersState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    NgxsModule.forRoot([UsersState]),NgxsResetPluginModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
