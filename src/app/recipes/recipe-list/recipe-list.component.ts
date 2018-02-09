import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter();
  recipes: Recipe[] = [
    new Recipe('test1', 'description', 'http://3.bp.blogspot.com/-6QlF3ZR-0XE/U-lDstyuNNI/AAAAAAAADh4/0dDWixZgAVw/s640/Socca+with+lamb+and+feta+topping.jpg'),
    new Recipe('test2', 'description 2', 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/5/20/0/CCTUL104_Ultimate-Paella_s4x3.jpg.rend.hgtvcom.616.462.suffix/1384541152950.jpeg'),
  ];
  currentItem: Recipe;
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(item: Recipe) {
    this.recipeWasSelected.emit(item);
  }

}
