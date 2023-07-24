import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthPageComponent } from "./auth-page.component";


const routes = [
    { path: '', component: AuthPageComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

  export class AuthPageRouteModule{
  }