import { Component } from '@angular/core';
import {NavigationComponent} from './navigation/navigation.component';
import {BuildingService} from './service/building.service';
import {SoldierService} from './service/soldier.service';
import {Soldier} from './model/soldier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BuildingService]
})
export class AppComponent {
  gold = 0;
  goldMine = 0;
  goldMineRate = 0.5;
  goldMineIntervalId: any;

  wood = 0;
  woodHut = 0;
  woodCutRate = 0.5;
  woodHutIntervalId: any;

  ore = 0;
  oreMine = 0;
  oreMineRate = 0.5;
  oreMineIntervalId: any;

  soldier:Soldier = new Soldier();
  
  constructor(private buildingService: BuildingService, private soldierService: SoldierService){
    this.soldier = soldierService.initialiseSoldier();

    buildingService.goldMineSourceSub.subscribe(
      data=>{
        clearInterval(this.goldMineIntervalId);
        this.goldMine += +data;
        this.goldMineIntervalId = setInterval(this.autoGoldMine.bind(this), 1000);
      }
    )

    buildingService.woodCutterSourceSub.subscribe(
      data=>{
        clearInterval(this.woodHutIntervalId);
        this.woodHut += +data;
        this.woodHutIntervalId = setInterval(this.autoWoodCut.bind(this), 1000);
      }
    )

    buildingService.oreMineSourceSub.subscribe(
      data=>{
        clearInterval(this.oreMineIntervalId);
        this.oreMine += +data;
        this.oreMineIntervalId = setInterval(this.autoOreMine.bind(this), 1000);
      }
    )

    soldierService.trainedSpearmanSub.subscribe(
      data=>{
        let totalGoldCost = data * this.soldier.spearman.goldcost;
        let totalWoodCost = data * this.soldier.spearman.woodcost;
        if(this.gold < totalGoldCost || this.wood < totalWoodCost)
          return;
        this.soldier.spearman.total += +data;
        this.gold -= totalGoldCost;
        this.wood -= totalWoodCost;
      }
    );

    soldierService.trainedSwordsmanSub.subscribe(
      data=>{
        let totalGoldCost = data * this.soldier.swordsman.goldcost;
        let totalOreCost = data * this.soldier.swordsman.orecost;
        if(this.gold < totalGoldCost || this.ore < totalOreCost)
          return;
        this.soldier.swordsman.total += +data;
        this.gold -= totalGoldCost;
        this.ore -= totalOreCost;
      }
    );
  }

  autoGoldMine(){
    this.gold += +this.goldMine*+this.goldMineRate;
  }

  autoOreMine(){
    this.ore += +this.oreMine*+this.oreMineRate;
  }

  autoWoodCut(){
    this.wood += +this.woodHut*+this.woodCutRate;
  }

  mineGold(){
    this.gold += 5;
  }

  cutWood(){
    this.wood += 5;
  }

  mineOre(){
    this.ore += 5;
  }
}
