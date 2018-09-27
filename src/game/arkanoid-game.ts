import { State } from "./state";
import { CanvasView } from "../view/canvas-view";
import { Player } from "../actors/player";
import { Vector } from "../common/vector";
import { Brick } from "../actors/brick";
import { Ball } from "../actors/ball";

export class ArkanoidGame {
    public state: State;
    public view: CanvasView;

    constructor() {
        let actors = [
            new Player(new Vector(20, 460)),
            new Ball(new Vector(50, 450), new Vector(11, 11)),
            ...this.createBricks()
        ]
        this.state = new State(actors);
        this.view = new CanvasView(<HTMLCanvasElement> document.getElementById('gameCanvas'))
    }

    public start() {
        setInterval(() => this.view.draw(this.state.actors), 10);
    }

    public update(): void {

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