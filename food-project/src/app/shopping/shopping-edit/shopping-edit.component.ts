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

  @ViewChild('f') RefForm: NgForm;

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
          this.RefForm.setValue({
            name: this.editItem.name,
            amount: this.editItem.quantity })
        }
      );
  }

  ngOnDestroy() {
    this.subsc.unsubscribe();
  }

  onAddItems(form: NgForm ) {
    const value = form.value;
    const itemsAdded = new Items(value.name, value.amount);
    if(this.edits){
      this.Serv.updates(this.editsIndex, itemsAdded );
    }else {
      this.Serv.addIngredients(itemsAdded);
    }
  }
}
