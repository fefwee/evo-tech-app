import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PersonalAreaComponent } from "./personal-area.component";


const routes = [
    { path: '', component: PersonalAreaComponent},
    
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })

  export class PersonalAreaRouteModule{
  }