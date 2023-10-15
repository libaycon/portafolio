const MOVE_RIGHT = "MOVE_RIGHT";
const MOVE_LEFT = "MOVE_LEFT";
const MOVE_UP = "MOVE_UP";
const MOVE_DOWN = "MOVE_DOWN";

const RIGHT = "RIGHT";
const LEFT = "LEFT";
const UP = "UP";
const DOWN = "DOWN";

const SET_DIS_DIRECTION = "SET_DIS_DIRECTION";
const INCREASE_SNAKE = "INCREASE_SNAKE";
const INCREMENT_SCORE = "INCREMENT_SCORE";
const STOP_GAME = "STOP_GAME";
const RESET_SCORE = "RESET_SCORE";
const RESET = "RESET";

export interface ISnakeCoord {
    x: number,
    y: number
}

export const increaseSnake = () => ({ type: INCREASE_SNAKE });
export const scoreUpdates = (type: string) => ({ type });
export const stopGame = () => ({ type: STOP_GAME });
export const resetGame = () => ({ type: RESET });

export const setDisDirection = (direction: string) => ({
    type: SET_DIS_DIRECTION,
    payload: direction
});

export const makeMove = (dx: number, dy: number, move: string) => ({
    type: move,
    payload: [dx, dy]
});

export {
    MOVE_RIGHT,
    MOVE_LEFT,
    MOVE_UP,
    MOVE_DOWN,

    RIGHT,
    LEFT,
    UP,
    DOWN,

    RESET,
    RESET_SCORE,
    STOP_GAME,

    SET_DIS_DIRECTION,
    INCREASE_SNAKE,
    INCREMENT_SCORE
}