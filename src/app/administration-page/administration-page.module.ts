import { NgModule } from "@angular/core";
import { AdmiistrationPageRouteModule } from "./administration-page-route.module";
import { AdministrationPageComponent } from "./administration-page.component";
import { SharedModule } from "../shared/shared.module";



@NgModule({
    imports: [AdmiistrationPageRouteModule,SharedModule],
    declarations:[AdministrationPageComponent],
    exports: [AdministrationPageComponent],
  })

  export class AdministrationPageModule {}