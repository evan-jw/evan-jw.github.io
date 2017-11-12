import { Component, OnInit } from '@angular/core';
import {NgModel} from '@angular/forms';
import {SoldierService} from '../service/soldier.service';
import {Soldier} from '../model/soldier';

@Component({
  selector: 'app-military',
  templateUrl: './military.component.html',
  styleUrls: ['./military.component.css']
})
export class MilitaryComponent implements OnInit {
  soldier:Soldier = new Soldier();
  constructor(private soldierService: SoldierService) { 
    this.soldier = soldierService.initialiseSoldier();
  }

  ngOnInit() {
  }

  trainSpearman(){
    this.soldierService.trainSpearman(this.soldier.spearman.total);
  }

  trainSwordsman(){
    this.soldierService.trainSwordsman(this.soldier.swordsman.total);
  }

}
