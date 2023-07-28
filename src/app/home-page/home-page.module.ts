import { NgModule } from "@angular/core";
import { HomePageRouteModule } from "./home-page-route.module";
import { HomePageComponent } from "./home-page.component";
import { SharedModule } from "../shared/shared.module";



@NgModule({
    imports: [HomePageRouteModule,SharedModule],
    declarations:[HomePageComponent],
    exports: [HomePageComponent],
  })

  export class HomePageModule{}