import { Actor } from "../../actors/actor";
import { CanvasView } from "../../view/canvas-view";
import { Vector } from "../../common/vector";
import { Level } from "./level";
import { Brick } from "../../actors/brick";


/* Each level defines it's own set of actors */
export class BaseLevel extends Level {
    public actors: Actor[];
    
    constructor(view: CanvasView) {
        super(view);
        this.actors = [
            this.createPlayer(),
            this.createBall(),
            ...this.createUI(),
            ...this.createBricks()
        ]
    }

    public createBricks(): Brick[] {
        let bricks: Brick[] = [];
        let rows = 5;
        let cols = 6;
        let pad = 5;
        let padTop = 30;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {

                let b = new Brick("brick#" + i + j, new Vector(
                    (pad + Brick.prototype.size.x) * j + pad, 
                    padTop + (pad + Brick.prototype.size.y) * i + pad
                ));
                bricks.push(b);
            }
        }

        return bricks;
    }
}