import {head, body, fruits} from "./svgVar";


export interface IObjectBody {
    x: number;
    y: number;
}

export interface IObjectBody {
    x: number;
    y: number;
}

export const clearBoard = (context: CanvasRenderingContext2D | null) => {
    if (context) {
        context.clearRect(0, 0, 260, 400);
    }
};

export const drawObject = (
    context: CanvasRenderingContext2D | null,
    objectBody: IObjectBody[],
    fruit: string
) => {
    if (context) {
        objectBody.forEach((object: IObjectBody) => {
            context.font = `10px Arial`;
            const textWidth = context.measureText(fruit).width;
            context.fillText(fruit, object.x, object.y + 10);
        });
    }
};

export const snakeBodyDraw = (
    context: CanvasRenderingContext2D | null,
    objectBody: IObjectBody[],
) => {
    if (context) {
        objectBody.forEach((object: IObjectBody, index: number) => {
            const image = new Image();

            image.onload = () => {
                context.drawImage(image, object.x, object.y, 10, 10);
            };
            image.src = 'data:image/svg+xml,' + encodeURIComponent(!index? head: body)
        });
    }
}

export function randomFood():string {
    const randomIndex = Math.floor(Math.random() * fruits.length);
    return fruits[randomIndex];
}

function randomNumber(min: number, max: number): number {
    let random = Math.random() * max;
    return random - (random % 20)
}

export const generationRandomPosition = (width: number, height: number): IObjectBody => {
    return {
        x: randomNumber(0, width),
        y: randomNumber(0, height),
    };
}

export const hasSnakeCollision = (snake: IObjectBody[], currentHeadPos: IObjectBody): boolean => {
    let flag = false;
    snake.forEach((pos: IObjectBody, index: number) => {
        if (
            pos.x === currentHeadPos.x &&
            pos.y === currentHeadPos.y &&
            index !== 0
        ) {flag = true;}
    });
    return flag;
}