import { Component, OnInit } from '@angular/core';
import { AdvertisementsService } from './../advertisements.service';
import { Advertisement } from './../advertisement.model';

@Component({
    selector: 'app-advertisement-detail',
    templateUrl: './advertisement-detail.component.html',
    styleUrls: ['./advertisement-detail.component.css']
})
export class AdvertisementDetailComponent implements OnInit {

    advertisement: {};

    constructor(private advertisementService: AdvertisementsService) { }

    ngOnInit() {
        this.advertisement = this.advertisementService.getAdvertisement(0);
    }

}
