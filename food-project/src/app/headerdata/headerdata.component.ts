import {Component, EventEmitter, Output} from '@angular/core';
import {DataDbService} from '../Shared/data.db.service';
import {Response} from "@angular/http";

@Component({
  selector: 'app-headerdata',
  templateUrl: './headerdata.component.html'})
export class HeaderComponent {

  constructor(private datadbservice: DataDbService) {
  }

  onSaveData() {
    this.datadbservice.storeRecipes()
      .subscribe(
        (resp: Response) => {
          console.log(resp)
        }
      )
  }

  onFetchData() {
    this.datadbservice.fetchRecipes();
  }
}
