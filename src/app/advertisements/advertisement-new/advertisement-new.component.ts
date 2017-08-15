import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './../categories/categories.service';

@Component({
    selector: 'app-advertisement-new',
    templateUrl: './advertisement-new.component.html',
    styleUrls: ['./advertisement-new.component.css']
})
export class AdvertisementNewComponent implements OnInit {

    categories;
    selectedCategory;
    subCategories;

    constructor(private categoriesService: CategoriesService) { }

    ngOnInit() {
        this.categories = this.categoriesService.getCategories();
        console.log(this.categories);
    }

    onCategoryChange(category) {
        this.selectedCategory = category;
        console.log(this.selectedCategory); 
    }

}
