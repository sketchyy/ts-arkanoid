import { Vector } from "../common/vector";
import { Actor } from "./actor";

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

    public update(canvas: HTMLCanvasElement): void {
        if (this.pos.x + this.speed.x < 0 || this.pos.x + this.speed.x > canvas.width) {
            this.speed.x = -this.speed.x;
        }
        if (this.pos.y + this.speed.y < 0 || this.pos.y + this.speed.y > canvas.height) {
            this.speed.y = -this.speed.y;
        }
    

        console.log(this.speed.x + ' ' + this.speed.y)
        this.pos.x += this.speed.x;
        this.pos.y += this.speed.y;
    }
}