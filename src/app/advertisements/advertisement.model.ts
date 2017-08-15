export class Advertisement {
    constructor(
        public id: number,
        public title: string,
        public price: number,
        public description: string,
        public contactName: string,
        public contactPhone: string,
        public contactEmail: string,
        public imagePaths: string[],
        public location: Coords
    ) {}
}

export class Coords {
    constructor(
        public latitude: number,
        public longitude: number
    ) {}
}