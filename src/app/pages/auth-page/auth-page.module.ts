import { NgModule } from "@angular/core";
import { AuthPageRouteModule } from "./auth-page-route.module";
import { AuthPageComponent } from "./auth-page.component";
import { SharedModule } from "../../shared/shared.module";



@NgModule({
    imports: [AuthPageRouteModule,SharedModule],
    declarations:[AuthPageComponent],
    exports: [AuthPageComponent],
  })

  export class AuthPageModule{}