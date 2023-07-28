import { NgModule } from "@angular/core";
import { AdmiistrationCatalogRouterModule } from "./administration-catalog-route.module";
import { AdministrationCatalogComponent } from "./administration-catalog.component";
import { SharedModule } from "../shared/shared.module";



@NgModule({
    imports: [AdmiistrationCatalogRouterModule,SharedModule],
    declarations:[AdministrationCatalogComponent],
    exports: [AdministrationCatalogComponent],
  })

  export class AdministrationCatalogModule {}