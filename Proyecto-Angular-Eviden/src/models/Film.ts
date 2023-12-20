export class Film {
    id: number;
    title: string;
    director: string;
    available: boolean;

    constructor() {
        this.id = 0;
        this.title = "";
        this.director = "";
        this.available = true;
    }
}