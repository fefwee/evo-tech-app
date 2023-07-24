import { NgModule } from "@angular/core";
import { AdministrationCatalogComponent } from "./administration-catalog.component";
import { RouterModule } from "@angular/router";


const routes = [
    { path: '', component: AdministrationCatalogComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

  export class AdmiistrationCatalogRouterModule {
  }