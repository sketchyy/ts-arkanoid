import { KeyPressed } from "../game/track-keys";
import { State } from "../game/state";

export interface Actor {
    type: string;
    draw(cxt: CanvasRenderingContext2D): void;
    update(state: State, keys?: KeyPressed): void;
}