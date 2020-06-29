import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PROJECT';


  recipes: boolean = true;
  shoppingList: boolean = true;

  changeDisplay(event){
    if(event === "Recipes"){
      this.recipes = true;
      this.shoppingList = false; 
      console.log("recipes");
    }else{
      this.shoppingList = true;
      this.recipes = false;
      console.log("shopping");
    }
  } 
}
