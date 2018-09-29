import { Vector } from "../common/vector";
import { Actor } from "./actor";
import { State } from "../game/state";

export class Ball implements Actor {
    public size: Vector;
    public radius: number;

    constructor(public pos: Vector, public speed: Vector) {
        this.radius = 10;
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI*2);
        ctx.fillStyle = "lightblue";
        ctx.fill();
        ctx.closePath();
    }

    public update(state: State): void {
        let canvas: HTMLCanvasElement = state.view.canvas;

        if (this.pos.x + this.speed.x < this.radius || this.pos.x + this.speed.x > canvas.width - this.radius) {
            this.speed.x = -this.speed.x;
        }
        if (this.pos.y + this.speed.y < this.radius || this.pos.y + this.speed.y > canvas.height - this.radius) {
            this.speed.y = -this.speed.y;
        }
    
        this.pos.x += this.speed.x;
        this.pos.y += this.speed.y;
    }
}