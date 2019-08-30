import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Categories } from '../services/categories';
import {Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  categories: Categories[] = null;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private router: Router, private categoriesservice: CategoriesService ) {
   this.getCategories();
  }
  sendCategorie(cat) {
    const navigationExtras: NavigationExtras = {
      state: {
        categori: cat
      }
    };
    this.router.navigate(['pannneaux'], navigationExtras);
  }
  ngOnInit() {
  }
  getCategories() {
    this.categories = this.categoriesservice.getAllCatgories();
  }
}
