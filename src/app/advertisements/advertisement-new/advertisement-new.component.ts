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

    onSubmit() {
        console.log(this.newAdForm);
        var adToPush: Advertisement = new Advertisement(
            this.advertisementsService.getNextId(),
            this.newAdForm.value.adInfo.title,
            this.newAdForm.value.adInfo.price,
            this.newAdForm.value.adInfo.description,
            this.newAdForm.value.contactInfo.name,
            this.newAdForm.value.contactInfo.phone,
            this.newAdForm.value.contactInfo.email,
            [this.newAdForm.value.adInfo.imagePath],
            
            {
                latitude: -6.00395371425456,
                longitude: 54.5511994585784
            }
        );
        this.advertisementsService.createAdvertisement(adToPush);
    }

    onPopulateForm() {
        this.newAdForm.setValue({
            adInfo: {
                title: 'Lotus Elan Sprint (1972)',
                price: 35000,
                description: 'Lotus Elan Sprint FHC. This Elan is a genuine two owner vehicle and has been subject of a substantial rebuild onto a Tony Thompson 26R spec chassis. The engine was rebuilt and has Tony Thompson Racing driveshaft, rear adjustable suspension, new wiring loom, and dashboard, stainless steel exhaust and much more. It has done only a very small mileage since completion.',
                imagePath: 'https://farm1.static.flickr.com/296/31891746881_ab711a3a59.jpg'
            },
            contactInfo: {
                name: 'Mick McCarthy',
                phone: '02890******',
                email: 'mick@********.com'
            }
        });
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
            ['https://i.imgur.com/bS7eD'],
            
            {
                latitude: -6.00395371425456,
                longitude: 54.5511994585784
            }
        );
        this.advertisementsService.createAdvertisement(adToPush);
    }
}
