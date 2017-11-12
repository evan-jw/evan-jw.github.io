import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { isNumeric } from "rxjs/util/isNumeric";
import {Soldier} from '../model/soldier';

@Injectable()
export class SoldierService {
  private trainedSpearman = new Subject<number>();
  private trainedSwordsman = new Subject<number>();
  private soldier:Soldier;

  trainedSpearmanSub = this.trainedSpearman.asObservable();
  trainedSwordsmanSub = this.trainedSwordsman.asObservable();

  constructor() { }

  trainSpearman(total:number){
    if(isNumeric(total))
      this.trainedSpearman.next(total);
  }

  trainSwordsman(total: number){
    if(isNumeric(total))
      this.trainedSwordsman.next(total);
  }

  initialiseSoldier():Soldier{
    this.soldier = new Soldier();
    this.soldier.spearman = {
      total: 0,
      woodcost: 5,
      goldcost: 10
    };
    this.soldier.swordsman = {
      total: 0,
      orecost: 5,
      goldcost: 20
    };
    return this.soldier;
  }
}
