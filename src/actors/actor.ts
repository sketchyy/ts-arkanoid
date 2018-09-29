export interface Actor {
    draw(cxt: CanvasRenderingContext2D): void;
    update(canvas: HTMLCanvasElement): void;
}