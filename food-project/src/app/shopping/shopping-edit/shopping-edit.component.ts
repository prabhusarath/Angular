import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Items} from '../../Shared/items.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('namelocal') nameelement: ElementRef;
  @ViewChild('amountlocal') amountelement: ElementRef;

  @Output() IngredientsAdded = new EventEmitter<Items>();

  constructor() { }

  ngOnInit() {
  }

  onAddItems() {
    const itemsAdded = new Items(this.nameelement.nativeElement.value, this.amountelement.nativeElement.value);
    this.IngredientsAdded.emit(itemsAdded);
  }

}
