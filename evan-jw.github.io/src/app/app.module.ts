import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { AlertModule } from 'ngx-bootstrap';
import { NavigationComponent } from './navigation/navigation.component';
import { BuildingComponent } from './building/building.component';
import { BuildingService } from './service/building.service';
import { SoldierService } from './service/soldier.service';
import { MilitaryComponent } from './military/military.component';
import { OptionsComponent } from './options/options.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BuildingComponent,
    MilitaryComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    FormsModule
  ],
  providers: [BuildingService, SoldierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
