export class Artist {
    constructor(id, name, genre, stage, time, country, headliner) {
        this.id = id;
        this.name = name;
        this.genre = genre;
        this.stage = stage;
        this.time = time;
        this.country = country;
        this.headliner = headliner;
    }

    get summary() {
        return `${this.name} - ${this.genre} - ${this.stage}`
    }

    get headliner() {
        return this.__headliner;
    }

    set headliner(value) {
        if (typeof value !== "boolean") {
            throw new Error("Headliner must be true or false.");
        }

        this.__headliner = value;
    }

    static fromObject(data) {
        return new Artist(
            data.id,
            data.name,
            data.genre,
            data.stage,
            data.time,
            data.country,
            data.headliner
        );
    }
}