import { Actor } from "../actors/actor";
import { KeyPressed } from "./track-keys";
import { CanvasView } from "../view/canvas-view";
import { Player } from "../actors/player";
import { Brick } from "../actors/brick";
import { Ball } from "../actors/ball";
import { Label } from "../actors/label";
import { Level } from "./levels/level";

/* State contains all game actors and manipulates with them. */
export class State {
    public isGameWin: boolean = false;
    public isGameOver: boolean = false;
    public actors: Actor[];
    private bricks: Brick[];
    private scoreLabel: Label;
    private score: number = 0;

    constructor(public level: Level, public view: CanvasView) {
        this.actors = level.actors;
        this.bricks = <Brick[]> level.actors.filter((actor: Actor) => actor.type === "brick");
        this.scoreLabel = <Label> this.actors.filter((actor: Actor) => actor.id === "scoreLabel")[0];
        this.updateScore();
    }

    public update(keys: KeyPressed): void {
        if (!this.isGameOver) {
            this.actors.forEach((actor: Actor) => actor.update(this, keys));
        }
    }

    public isCollidesWithBricks(ball: Ball): boolean {
        let removedBrick: Brick = null;
        let result = false;

        for (let i = 0; i < this.bricks.length; i++) {
            let b: Brick = this.bricks[i];
            let isOverlapX = ball.pos.x + ball.radius > b.pos.x && ball.pos.x - ball.radius < b.pos.x + b.size.x;
            let isOverlapY = ball.pos.y + ball.radius > b.pos.y && ball.pos.y - ball.radius < b.pos.y + b.size.y;
            if (isOverlapX && isOverlapY) {
                result = true;
                removedBrick = b;
                break;
            }
        }

        if (removedBrick) {
            this.score++;
            this.updateScore();
            this.actors = this.actors.filter((a: Actor) => a !== removedBrick);
            this.bricks = this.bricks.filter((b: Brick) => b !== removedBrick);

            if (this.bricks.length === 0) {
                this.isGameWin = true;
            }
        }

        return result;
    }

    public updateScore(): void {
        this.scoreLabel.text = "Score: " + this.score;
    }

    public getPlayer(): Player {
        return <Player> this.actors.filter((actor: Actor) => actor.type === "player")[0];
    }

    public findActor(id: string): Actor {
        return this.actors.filter((actor: Actor) => actor.id === id)[0]
    }
}