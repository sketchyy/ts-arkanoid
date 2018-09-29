import { State } from "./state";
import { CanvasView } from "../view/canvas-view";
import { Player } from "../actors/player";
import { Vector } from "../common/vector";
import { Brick } from "../actors/brick";
import { Ball } from "../actors/ball";
import { trackKeys, KeyPressed } from "./track-keys";

export class ArkanoidGame {
    public state: State;
    public view: CanvasView;
    public keys: KeyPressed;

    constructor() {
        let actors = [
            new Player(new Vector(20, 485)),
            new Ball(new Vector(50, 450), new Vector(2, 2)),
            ...this.createBricks()
        ]

        this.view = new CanvasView(<HTMLCanvasElement> document.getElementById('gameCanvas'))
        this.state = new State(actors, this.view);
        this.keys = trackKeys(["ArrowLeft", "ArrowRight"]);
    }

    public start(): void {
        setInterval(() => {
            this.view.draw(this.state.actors);
            this.state.update(this.keys);
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
}