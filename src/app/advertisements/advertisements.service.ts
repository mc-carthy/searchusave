import { Advertisement, Coords } from './advertisement.model';
import { Injectable } from '@angular/core';

@Injectable()
export class AdvertisementsService {

    private advertisements: Advertisement[] = [
        new Advertisement(
            0,
            'Car for sale',
            5000,
            "Generic car description, this one has been drawn out a bit too much in order to show the effect of having a long description. Consider imposing a limit of description length on the advertisement listing page in order to prevent this advertisement taking up way too much room. Doesn't seem fair on the dog in the fridge below...",
            'Test contact name',
            '02890------',
            'car@test.com',
            ['https://i.imgur.com/TPaUdg8.jpg'],
            {
                latitude: -6.0161106215821,
                longitude: 54.564733186409
            }
            
        ),
        new Advertisement(
            1,
            'Fridge for sale',
            250,
            'Generic fridge description. This one is short.',
            'Fridge seller contact name',
            '02890------',
            'fridge@test.com',
            ['https://i.imgur.com/bkrMq.jpg'],
            {
                latitude: -6.00395371425456,
                longitude: 54.5511994585784
            }
        ),
    ];

    constructor() { }

    getAdvertisement(id: number) {
        return this.advertisements.find(
            x => x.id == id
        );
    }

    getAdvertisements() {
        return this.advertisements.slice();
    }

    createAdvertisement(newAd: Advertisement) {
        this.advertisements.push(newAd)
    }

}
