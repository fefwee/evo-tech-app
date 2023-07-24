import { AdministrationEditDetailComponent } from './administration-edit-detail.component';
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";


const routes = [
    { path: '', component: AdministrationEditDetailComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

  export class AdmiistrationEditDetailRouteModule {
  }