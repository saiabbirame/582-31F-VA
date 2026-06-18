export class Team {
    constructor(id, name, group, points, played, goalDifference) {
        this.id = id;
        this.name = name;
        this.group = group;
        this.points = points;
        this.played = played;
        this.goalDifference = goalDifference;
    }

    get summary() {
        return `${this.name} - Group ${this.group} - ${this.points} pts`;
    }

    get points() {
        return this.__points;
    }

    set points(value) {
        if (value < 0) {
            throw new Error("Points cannot be negative");
        }

        this.__points = value;
    }

    static fromObject(data) {
        return new Team(
            data.id,
            data.name,
            data.group,
            data.points,
            data.played,
            data.goalDifference,
        );
    }
}