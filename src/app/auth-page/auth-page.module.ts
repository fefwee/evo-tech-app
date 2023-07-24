import { NgModule } from "@angular/core";
import { AuthPageRouteModule } from "./auth-page-route.module";



@NgModule({
    imports: [AuthPageRouteModule],
    exports: [AuthPageRouteModule],
  })

  export class AuthPageModule{}