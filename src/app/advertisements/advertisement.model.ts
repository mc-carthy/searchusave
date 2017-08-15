export class Advertisement {
    title: string;
    price: number;
    description: string;
    contactName: string;
    contactPhone: string;
    contactEmail: string;
    imagePaths: string[];
    location: Coords;
}

export class Coords {
    latitude: number;
    longitude: number;
}