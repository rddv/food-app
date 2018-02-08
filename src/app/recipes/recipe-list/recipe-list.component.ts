import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('test', 'description', 'http://3.bp.blogspot.com/-6QlF3ZR-0XE/U-lDstyuNNI/AAAAAAAADh4/0dDWixZgAVw/s640/Socca+with+lamb+and+feta+topping.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
