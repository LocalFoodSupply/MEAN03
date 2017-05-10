/*
 * Angular Imports
 */
import {Component,OnInit} from '@angular/core';

/*
 * Components
 */
import {Category, CategoryService} from '../category/category.service';

@Component({
  selector: 'db-welcome',
  templateUrl: './app/welcome/welcome.component.html'
})
export class WelcomeComponent{
  // Slide Categories
  slideCategories: Category[];

  // Card categories
  cardCategories: Category[];

  constructor(private categoryServics:CategoryService) {
    this.categoryServics.getCategories();
    this.cardCategories =this.categoryServics.categories;
    this.slideCategories = [
      this.categoryServics.categories[0],
      this.categoryServics.categories[1],
      this.categoryServics.categories[2]
    ];


  }

  selectCategory(category: Category) {
    console.log('Selected category', category.title);
  }


}

