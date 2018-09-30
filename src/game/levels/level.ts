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
        return [
            new Rect("topBorder", new Vector(0, 25), new Vector(this.view.canvas.width, 1), "#3a3a39"),
            new Label("scoreLabel", new Vector(8, 20), "#4c9cff"),
        ];
    }

    createPlayer(): Actor {
        let x = this.view.canvas.width / 2 - 50;
        return new Player("player", new Vector(x, 465), new Vector(100, 15));
    }

    createBall(): Actor {
        let x = Math.random() * (this.view.canvas.width - 50);
        let y = 200;
        let speed = new Vector((Math.random() > 0.5 ? 3 : -3), 3);
        return new Ball("ball", new Vector(x, y), new Vector(3, 3));
    }
}