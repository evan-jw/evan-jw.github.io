import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import { NgModel } from '@angular/forms';
import { BuildingService } from '../service/building.service';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})

export class BuildingComponent implements OnInit {
  goldMine :string ;
  woodHut :string ;
  oreMine :string ;
  constructor(private buildingService: BuildingService) { }

  ngOnInit() {
  }

  buildGoldMine(){
    this.buildingService.buildGoldMine(this.goldMine);
  }

  buildLumberjackHut(){
    this.buildingService.buildWoodCutterHut(this.woodHut);
  }

  buildOreMine(){
    this.buildingService.buildOreMine(this.oreMine);
  }
}
