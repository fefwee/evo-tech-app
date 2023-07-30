import { AdministrationCatalogComponent } from './../administration-catalog/administration-catalog.component';
import { NgModule } from "@angular/core";
import { AdmiistrationPageRouteModule } from "./administration-page-route.module";
import { AdministrationPageComponent } from "./administration-page.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from '@angular/common';



@NgModule({
    imports: [AdmiistrationPageRouteModule,SharedModule,CommonModule],
    declarations:[AdministrationPageComponent,AdministrationCatalogComponent],
    exports: [AdministrationPageComponent,CommonModule],
  })

  export class AdministrationPageModule {}