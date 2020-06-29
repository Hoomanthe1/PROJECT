import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit { 
  
  @Output() transferMethod = new EventEmitter

  recipes: Recipe[] = [
    new Recipe('A Test Recipe1', 'This is a simply test1', 'https://bit.ly/2Z4Q4Kh'),
    new Recipe('A Test Recipe2', 'This is a simply test2', 'https://bit.ly/3dIdTwA')
    
  ];

  chooseRecipe(event: Recipe){
    let transferVariable: Recipe = event;
    this.transferMethod.emit(transferVariable);
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
