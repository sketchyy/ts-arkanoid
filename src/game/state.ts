import { Actor } from "../actors/actor";

export class State {
    constructor(public actors: Actor[]) {
    }

    public update(canvas: HTMLCanvasElement): void {
        this.actors.forEach(actor => actor.update(canvas));
    }
}