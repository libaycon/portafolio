import {
    UP, 
    DOWN, 
    LEFT, 
    RIGHT, 
    INCREMENT_SCORE, 
    INCREASE_SNAKE, 
    RESET, 
    RESET_SCORE, 
    SET_DIS_DIRECTION 
} from "../actions/actions";

interface ISnakeCoord {
    x: number,
    y: number
}

export interface IGlobalState {
    snake: ISnakeCoord[] | [];
    disallowedDirection: string;
    score: number;
}


const globalState: IGlobalState = {
    snake: [
        { x: 140, y: 200 },
        { x: 130, y: 200 },
        { x: 120, y: 200 },
        { x: 110, y: 200 },
    ],
    disallowedDirection: "",
    score: 0
}

const gameReducer = (state = globalState, action: any) => {

    switch (action.type) {
        case RIGHT:
        case LEFT:
        case UP:
        case DOWN: {
            let newSnake = [...state.snake];
            newSnake = [{
                x: state.snake[0].x + action.payload[0],
                y: state.snake[0].y + action.payload[1],
            }, ...newSnake];
            newSnake.pop();
            
            return {
                ...state,
                snake: newSnake,
            };
        }
        case RESET:
            return {
                ...state,
                snake: [
                    { x: 140, y: 200 },
                    { x: 130, y: 200 },
                    { x: 120, y: 200 },
                    { x: 110, y: 200 },
                ],
                disallowedDirection: "",
            }
        case SET_DIS_DIRECTION:
            return {...state, disallowedDirection: action.payload}
        case INCREASE_SNAKE:
            const snakeLen = state.snake.length;
            return {
                ...state,
                snake: [
                    ...state.snake,
                    {
                        x: state.snake[snakeLen - 1].x,
                        y: state.snake[snakeLen - 1].y
                    },
                ]
            }
        case INCREMENT_SCORE:
            return {
                ...state,
                score: state.score + 1
            }
        case RESET_SCORE:
            return { ...state, score: 0 }
        default:
            return state;
    }

}

export default gameReducer;