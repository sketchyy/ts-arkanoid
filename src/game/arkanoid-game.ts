import { State } from "./state";
import { CanvasView } from "../view/canvas-view";
import { Player } from "../actors/player";
import { Vector } from "../common/vector";
import { Brick } from "../actors/brick";
import { Ball } from "../actors/ball";
import { trackKeys, KeyPressed } from "./track-keys";
import { Label } from "../actors/label";
import { Rect } from "../actors/rect";

export class ArkanoidGame {
    public state: State;
    public view: CanvasView;
    public keys: KeyPressed;

    constructor() {
        this.view = new CanvasView(<HTMLCanvasElement> document.getElementById('gameCanvas'));

        let borderColor = this.view.canvas.style.borderColor;
        let actors = [
            new Rect(new Vector(0, 25), new Vector(this.view.canvas.width, 1), borderColor),
            new Label("scoreLabel", new Vector(8, 20)),
            new Player(new Vector(20, 465), new Vector(100, 15)),
            new Ball(new Vector(50, 450), new Vector(3, 3)),
            ...this.createBricks()
        ]
        this.state = new State(actors, this.view);
        this.keys = trackKeys(["ArrowLeft", "ArrowRight"]);
    }

    public start(): void {
        setInterval(() => {
            this.view.draw(this.state.actors);
            this.state.update(this.keys);
            
            if (this.state.isGameWin) {
                this.view.draw(this.state.actors);
                this.state.isGameWin = false;
                setTimeout(this.gameWin, 100);
            }
            if (this.state.isGameOver) {
                this.view.draw(this.state.actors);
                this.state.isGameOver = false;
                setTimeout(this.gameOver, 100);
            }

        }, 10);
    }

    private createBricks(): Brick[] {
        let bricks: Brick[] = [];
        let rows = 5;
        let cols = 6;
        let pad = 5;
        let padTop = 30;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {

                let b = new Brick(new Vector(
                    (pad + Brick.prototype.size.x) * j + pad, 
                    padTop + (pad + Brick.prototype.size.y) * i + pad
                ));
                bricks.push(b);
            }
        }

        return bricks;
    }

    private gameWin(): void {
        alert("Victory! You have destroyed all bricks!");
        document.location.reload();
    }

    private gameOver(): void {
        alert("GAME OVER");
        document.location.reload();
    }
}