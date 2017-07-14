import {Component, EventEmitter, Output} from '@angular/core';
import {DataDbService} from '../Shared/data.db.service';
import {Response} from "@angular/http";
import {AuthService} from "../userauth/auth.service";

@Component({
  selector: 'app-headerdata',
  templateUrl: './headerdata.component.html'})
export class HeaderComponent {

  constructor(private datadbservice: DataDbService,
  private authServ: AuthService) {
  }

  onSaveData() {
    this.datadbservice.storeRecipes()
      .subscribe(
        (resp: Response) => {
          console.log(resp)
        }
      )
  }

  onLogout() {
    this.authServ.logOut();
  }

  onFetchData() {
    this.datadbservice.fetchRecipes();
  }
}
