import {Component, OnInit} from '@angular/core';
import {Items} from '../../Shared/items.model';
import {ShoppingService} from '../shopping.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private Serv: ShoppingService) {}

  ngOnInit() {
  }

  onAddItems(form: NgForm ) {
    const value = form.value;
    const itemsAdded = new Items(value.name, value.amount);
    this.Serv.addIngredients(itemsAdded);
  }

}
