import { Advertisement, Coords } from './advertisement.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AdvertisementsService {

    private advertisements: Advertisement[] = [
        new Advertisement(
            'Car for sale',
            5000,
            'Generic car description',
            'Test contact name',
            '0000000',
            'car@test.com',
            ['http://i.imgur.com/TPaUdg8.jpg'],
            {
                latitude: -6.0161106215821,
                longitude: 54.564733186409
            }
            
        ),
        new Advertisement(
            'Fridge for sale',
            250,
            'Generic fridge description',
            'Fridge seller contact name',
            '11232332',
            'fridge@test.com',
            ['http://i.imgur.com/bkrMq.jpg'],
            {
                latitude: -6.00395371425456,
                longitude: 54.5511994585784
            }
        ),
    ];

    constructor() { }

    getAdvertisement(index: number) {
        return this.advertisements[index];
    }

    getAdvertisements() {
        return this.advertisements.slice();
    }

}
