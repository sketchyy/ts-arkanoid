import { Actor } from "../actors/actor";
import { KeyPressed } from "./track-keys";
import { CanvasView } from "../view/canvas-view";

export class State {
    constructor(public actors: Actor[], public view: CanvasView) {
    }

    public update(keys: KeyPressed): void {
        this.actors.forEach((actor: Actor) => actor.update(this, keys));
    }
}