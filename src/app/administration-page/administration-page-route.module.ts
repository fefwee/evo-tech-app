import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdministrationPageComponent } from "./administration-page.component";


const routes = [
    { path: '', component: AdministrationPageComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

  export class AdmiistrationPageRouteModule{
  }