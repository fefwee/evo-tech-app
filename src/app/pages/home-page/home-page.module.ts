import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomePageRouteModule } from './home-page-route.module';
import { HomePageComponent } from './home-page.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [HomePageRouteModule, SharedModule, CommonModule],
  declarations: [HomePageComponent],
  exports: [HomePageComponent, CommonModule],
})
export class HomePageModule {}
