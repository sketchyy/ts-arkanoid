import { State } from "./state";
import { CanvasView } from "../view/canvas-view";
import { trackKeys, KeyPressed } from "./track-keys";
import { BaseLevel } from "./levels/base-level";
import { Level } from "./levels/level";

export class ArkanoidGame {
    public state: State;
    public view: CanvasView;
    public keys: KeyPressed;

    constructor() {
        this.view = new CanvasView(<HTMLCanvasElement>document.getElementById('gameCanvas'));

        let level: Level = new BaseLevel(this.view);
        this.state = new State(level, this.view);
        this.keys = trackKeys(["ArrowLeft", "ArrowRight"]);
    }

    /* Main game loop implemented with setInterval() */
    public start(): void {
        let gameLoopId: number = setInterval(() => {
            this.view.draw(this.state.actors);
            this.state.update(this.keys);

            if (this.state.isGameWin) {
                this.view.draw(this.state.actors);
                clearInterval(gameLoopId);
                setTimeout(this.gameWin, 100);
            }
            if (this.state.isGameOver) {
                this.view.draw(this.state.actors);
                clearInterval(gameLoopId);
                setTimeout(this.gameOver, 100);
            }

        }, 10);
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