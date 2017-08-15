export class Advertisement {
    constructor(
        title: string,
        price: number,
        description: string,
        contactName: string,
        contactPhone: string,
        contactEmail: string,
        imagePaths: string[],
        location: Coords
    ) {}
}

export class Coords {
    constructor(
        latitude: number,
        longitude: number
    ) {}
}