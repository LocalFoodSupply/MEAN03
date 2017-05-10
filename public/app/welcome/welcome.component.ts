/*
 * Angular Imports
 */
import {Component,OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
/*
 * Components
 */
import {Category, CategoryService} from '../category/category.service';

@Component({
  selector: 'db-welcome',
  templateUrl: './app/welcome/welcome.component.html'
})
export class WelcomeComponent implements OnInit {
  // Slide Categories
  slideCategories: Category[]=[];

  // Card categories
  cardCategories: Observable<Category[]>;

  constructor(private categoryServics:CategoryService) {



  }
  // 在模板中的cardCategories后面加|async
  ngOnInit(): void{
    this.cardCategories = this.categoryServics.getCategories();
    this.cardCategories.subscribe((categories: Category[]) => {
      this.slideCategories = [
        categories[0],
        categories[1],
        categories[2]
      ];
    });
  }
  selectCategory(category: Category) {
    console.log('Selected category', category.title);
  }


}

