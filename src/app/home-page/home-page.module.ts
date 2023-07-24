import { NgModule } from "@angular/core";
import { HomePageRouteModule } from "./home-page-route.module";



@NgModule({
    imports: [HomePageRouteModule],
    exports: [HomePageRouteModule],
  })

  export class HomePageModule{}