import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('ingredientName') nameInputRef: ElementRef;
  @ViewChild('ingredientAmount') amountInputRef: ElementRef;
  @Output() newIngredient = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }
  addIngredient() {
   const nameInp = this.nameInputRef.nativeElement.value;
   const amountInp = this.amountInputRef.nativeElement.value;
   const newIng = new Ingredient(nameInp, amountInp);
   this.newIngredient.emit(newIng);
  }
}
