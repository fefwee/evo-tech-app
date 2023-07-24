import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PageErrorComponent } from "./page-error.component";


const routes = [
    { path: '', component: PageErrorComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

  export class PageErrorRouteModule{
  }