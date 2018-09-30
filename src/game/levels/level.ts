import { Brick } from "../../actors/brick";
import { Actor } from "../../actors/actor";
import { CanvasView } from "../../view/canvas-view";
import { Vector } from "../../common/vector";
import { Rect } from "../../actors/rect";
import { Label } from "../../actors/label";
import { Player } from "../../actors/player";
import { Ball } from "../../actors/ball";

/* Super Level class defines UI actors and main game actors like Player and Ball. */
export abstract class Level {
    actors: Actor[];
    abstract createBricks(): Brick[];

    constructor(public view: CanvasView) {}

    createUI(): Actor[] {
        let borderColor: string = this.view.canvas.style.borderColor;
        return [
            new Rect("topBorder", new Vector(0, 25), new Vector(this.view.canvas.width, 1), borderColor),
            new Label("scoreLabel", new Vector(8, 20)),
        ];
    }

    createPlayer(): Actor {
        return new Player("player", new Vector(20, 465), new Vector(100, 15));
    }

    createBall(): Actor {
        return new Ball("ball", new Vector(50, 450), new Vector(3, 3));
    }
}