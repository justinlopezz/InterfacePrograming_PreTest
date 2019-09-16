export class MovieInfoComp {

    constructor(
        public title: string, 
        public rating: number, 
        public shortDescription: string, 
        public runtime: number, 
        public releaseDate: string
        ){}

    public get_title(): string {
        return this.title;
    }

    public get_rating(): number {
        return this.rating;
    }

    public get_shortDescription(): string {
        return this.shortDescription;
    }

    public get_runtime(): number {
        return this.runtime;
    }

    public get_releasedate(): string {
        return this.releaseDate;
    }
}