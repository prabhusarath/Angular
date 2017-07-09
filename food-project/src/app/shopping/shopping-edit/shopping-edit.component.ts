import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Items} from '../../Shared/items.model';
import {ShoppingService} from "../shopping.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('namelocal') nameelement: ElementRef;
  @ViewChild('amountlocal') amountelement: ElementRef;

  constructor(private Serv: ShoppingService) {}

  ngOnInit() {
  }

  onAddItems() {
    const itemsAdded = new Items(this.nameelement.nativeElement.value, this.amountelement.nativeElement.value);
    this.Serv.addIngredients(itemsAdded);
  }

}
