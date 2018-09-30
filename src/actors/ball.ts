import { Vector } from "../common/vector";
import { Actor } from "./actor";
import { State } from "../game/state";
import { Rect } from "./rect";

export class Ball implements Actor {
    public type: string = "ball";
    public size: Vector;
    public radius: number;

    constructor(public id: string, public pos: Vector, public speed: Vector) {
        this.radius = 10;
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#ff4284";
        ctx.fill();
        ctx.closePath();
    }

    public update(state: State): void {
        let canvas: HTMLCanvasElement = state.view.canvas;
        let topBorderY = (<Rect> state.findActor("topBorder")).pos.y;
        let x = this.pos.x;
        let y = this.pos.y;
        let player = state.getPlayer();

        // Collide with left and right border
        if (x < this.radius || x > canvas.width - this.radius) {
            this.speed.x = -this.speed.x;
        }

        // Collide with bricks
        if (state.isCollidesWithBricks(this)) {
            this.speed.y = -this.speed.y;
        }

        // Collide wih upper border
        if (y < topBorderY + this.radius) {
            this.speed.y = -this.speed.y;
        }

        // Collide with player's paddle
        if (y > player.pos.y - this.radius && y < player.pos.y && 
            x + this.radius > player.pos.x && x - this.radius < player.pos.x + player.size.x) {
            this.speed.y = -this.speed.y
        }

        // Collide with floor = game over
        if (y > canvas.height) {
            state.isGameOver = true;
        }

        // Calculate new position
        this.pos.x += this.speed.x;
        this.pos.y += this.speed.y;
    }
}