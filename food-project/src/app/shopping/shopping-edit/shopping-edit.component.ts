import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Items} from '../../Shared/items.model';
import {ShoppingService} from '../shopping.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') SlForm: NgForm;

  subsc: Subscription;
  edits = false;
  editsIndex: number;
  editItem: Items;

  constructor(private Serv: ShoppingService) {}

  ngOnInit() {
    this.subsc = this.Serv.editchanged
      .subscribe(
        (index: number) => {
          this.editsIndex = index;
          this.edits = true;
          this.editItem = this.Serv.getIngindexs(index);
          this.SlForm.setValue({
            name: this.editItem.name,
            quantity: this.editItem.quantity
          })
        }
      );
  }



  addItemsCheck(newforms: NgForm ) {
    const val = newforms.value;
    const itemsAdded = new Items( val.name, val.quantity);
  if (this.edits) {
      this.Serv.updates(this.editsIndex, itemsAdded );
    } else {
      this.Serv.addIngredients(itemsAdded);
    }
    this.edits = false;
  newforms.reset();
  }

  onClear() {
    this.SlForm.reset();
    this.edits = false;
  }

  onDelete() {
    this.Serv.delIngreds(this.editsIndex);
    this.onClear();
  }

  ngOnDestroy() {
    this.subsc.unsubscribe();
  }

}



