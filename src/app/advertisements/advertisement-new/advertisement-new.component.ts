import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoriesService } from './../categories/categories.service';
import { AdvertisementsService } from './../advertisements.service';
import { Advertisement } from './../advertisement.model';

@Component({
    selector: 'app-advertisement-new',
    templateUrl: './advertisement-new.component.html',
    styleUrls: ['./advertisement-new.component.css']
})
export class AdvertisementNewComponent implements OnInit {

    @ViewChild('f') newAdForm: NgForm;
    
    categories;
    selectedCategory;
    subCategories;

    constructor(
        private categoriesService: CategoriesService,
        private advertisementsService: AdvertisementsService
    ) { }

    ngOnInit() {
        this.categories = this.categoriesService.getCategories();
    }

    onCategoryChange(category) {
        this.selectedCategory = category;
        console.log(this.selectedCategory); 
    }

    onFakeSubmit() {
        var adToPush: Advertisement = new Advertisement(
            5,
            'Test title',
            99999,
            'Ad description',
            'Contact name test',
            '01203214124213123',
            'test@test.com',
            ['https://imgur.com/bS7eD'],
            
            {
                latitude: -6.00395371425456,
                longitude: 54.5511994585784
            }
        );
        this.advertisementsService.createAdvertisement(adToPush);
    }
}
