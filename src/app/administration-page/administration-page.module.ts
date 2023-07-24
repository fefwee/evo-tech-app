import { NgModule } from "@angular/core";
import { AdmiistrationPageRouteModule } from "./administration-page-route.module";



@NgModule({
    imports: [AdmiistrationPageRouteModule],
    exports: [AdmiistrationPageRouteModule],
  })

  export class AdministrationPageModule {}