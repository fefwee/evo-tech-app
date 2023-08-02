import { NgModule } from "@angular/core";
import { PersonalAreaRouteModule } from "./personal-area.route.module";
import { PersonalAreaComponent } from "./personal-area.component";
import { SharedModule } from "../../shared/shared.module";



@NgModule({
    imports: [PersonalAreaRouteModule,SharedModule],
    declarations:[PersonalAreaComponent],
    exports: [PersonalAreaComponent],
  })

  export class PersonalAreaModule{}