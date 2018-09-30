import { KeyPressed } from "../game/track-keys";
import { State } from "../game/state";

/* Actor is base unit of game that can draw itself and make some logic with itself
    and game state. */
export interface Actor {
    id: string;
    type: string;
    draw(ctx: CanvasRenderingContext2D): void;
    update(state: State, keys?: KeyPressed): void;
}