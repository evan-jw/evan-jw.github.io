import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import {isNumeric} from "rxjs/util/isNumeric";

@Injectable()
export class BuildingService {

  private goldMineSource = new Subject<string>();
  private woodCutterSource = new Subject<string>();
  private oreMineSource = new Subject<string>();

  goldMineSourceSub = this.goldMineSource.asObservable();
  woodCutterSourceSub = this.woodCutterSource.asObservable();
  oreMineSourceSub = this.oreMineSource.asObservable();

  buildGoldMine(total: string){
    if(isNumeric(total))
      this.goldMineSource.next(total);
  }

  buildWoodCutterHut(total: string){
    if(isNumeric(total))
      this.woodCutterSource.next(total);
  }

  buildOreMine(total:string){
    if(isNumeric(total))
      this.oreMineSource.next(total);
  }
}
