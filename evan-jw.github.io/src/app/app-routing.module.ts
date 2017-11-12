import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { BuildingComponent } from './building/building.component';
import { MilitaryComponent } from './military/military.component';
import { OptionsComponent } from './options/options.component';

const routes: Routes =[
  {path:"building", component:BuildingComponent},
  {path:"military", component:MilitaryComponent},
  {path:"options", component:OptionsComponent},
  {path:'', redirectTo: '/', pathMatch:'full'}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
