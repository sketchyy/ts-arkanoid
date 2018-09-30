import { KeyPressed } from "../game/track-keys";
import { State } from "../game/state";

export interface Actor {
    id: string;
    type: string;
    draw(ctx: CanvasRenderingContext2D): void;
    update(state: State, keys?: KeyPressed): void;
}