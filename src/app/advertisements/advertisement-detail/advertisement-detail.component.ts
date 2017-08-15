import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AdvertisementsService } from './../advertisements.service';
import { Advertisement } from './../advertisement.model';

@Component({
    selector: 'app-advertisement-detail',
    templateUrl: './advertisement-detail.component.html',
    styleUrls: ['./advertisement-detail.component.css']
})
export class AdvertisementDetailComponent implements OnInit {

    id: number;
    advertisement: Advertisement;

    constructor(
        private route: ActivatedRoute,
        private advertisementService: AdvertisementsService
    ) { }

    ngOnInit() {
        this.id = +this.route.snapshot.params['id'];
        this.advertisement = this.advertisementService.getAdvertisement(this.id);
    }

}
