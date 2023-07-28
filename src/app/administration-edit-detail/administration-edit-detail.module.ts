import { NgModule } from "@angular/core";
import { AdmiistrationEditDetailRouteModule } from "./administration-edit-detail-route.module";
import { AdministrationEditDetailComponent } from "./administration-edit-detail.component";
import { SharedModule } from "../shared/shared.module";



@NgModule({
    imports: [AdmiistrationEditDetailRouteModule,SharedModule],
    declarations:[AdministrationEditDetailComponent],
    exports: [AdministrationEditDetailComponent],
  })

  export class AdministrationEditDetailModule {}