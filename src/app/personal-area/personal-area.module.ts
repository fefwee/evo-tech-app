import { NgModule } from "@angular/core";
import { PersonalAreaRouteModule } from "./personal-area.route.module";



@NgModule({
    imports: [PersonalAreaRouteModule],
    exports: [PersonalAreaRouteModule],
  })

  export class PersonalAreaModule{}