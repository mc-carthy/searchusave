import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './../categories.service';

@Component({
    selector: 'app-view-categories',
    templateUrl: './view-categories.component.html',
    styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {

    categories;

    constructor(private categoriesService: CategoriesService) { }

    ngOnInit() {
        this.categories = this.categoriesService.getCategories();
        console.log(this.categories);
    }

}
