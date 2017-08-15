import { Component, OnInit } from '@angular/core';
import { AdvertisementsService } from './../advertisements.service';
import { Advertisement } from './../advertisement.model';

@Component({
  selector: 'app-advertisement-list',
  templateUrl: './advertisement-list.component.html',
  styleUrls: ['./advertisement-list.component.css']
})
export class AdvertisementListComponent implements OnInit {

    advertisements;

    constructor(
        private advertisementService: AdvertisementsService
    ) { }

    ngOnInit() {
        this.advertisements = this.advertisementService.getAdvertisements();
    }

}
