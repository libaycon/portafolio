import React, { useRef, useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IObjectBody, clearBoard, drawObject, generationRandomPosition, hasSnakeCollision, snakeBodyDraw, randomFood } from "./utils";
import { IGlobalState } from "./store/reducers/reducers";
import { 
    MOVE_DOWN, 
    MOVE_LEFT, 
    MOVE_RIGHT, 
    MOVE_UP,

    INCREMENT_SCORE,

    increaseSnake,
    makeMove,
    scoreUpdates,
    stopGame
} from "./store/actions/actions";


export interface ICanvasBoard {
    height: number;
    width: number;
}

const CanvasBoard = ({ height, width }: ICanvasBoard) => {
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
    const [currentFruit, setCurrentFruit] = useState<string>(randomFood())
    const [pos, setPos] = useState<IObjectBody>(generationRandomPosition(width - 10, height - 10));
    const [isConsumed, setIsConsumed] = useState<boolean>(false);
    const [gameEnded, setGameEnded] = useState<boolean>(false);

    const dispatch = useDispatch();
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const snake = useSelector((state: IGlobalState) => state.snake);
    const disallowedDirection = useSelector((state: IGlobalState) => state.disallowedDirection);

    const moveSnake = useCallback(
        (dx = 0, dy = 0, ds: string) => {
            if (dx > 0 && dy === 0 && ds !== "RIGHT") {
                dispatch(makeMove(dx, dy, MOVE_RIGHT))
            }

            if (dx < 0 && dy === 0 && ds !== "LEFT") {
                dispatch(makeMove(dx, dy, MOVE_LEFT))
            }

            if (dx === 0 && dy < 0 && ds !== "UP") {
                dispatch(makeMove(dx, dy, MOVE_UP))
            }

            if (dx === 0 && dy > 0 && ds !== "DOWN") {
                dispatch(makeMove(dx, dy, MOVE_DOWN))
            }
        }, [dispatch]
    );

    const handleKeyEvents = useCallback((e: KeyboardEvent) => {
        if (disallowedDirection) {
            switch (e.key) {
                case "ArrowUp":
                    moveSnake(0, -10, disallowedDirection);
                    break;
                case "ArrowDown":
                    moveSnake(0, 10, disallowedDirection);
                    break;
                case "ArrowLeft":
                    moveSnake(-10, 0, disallowedDirection);
                    break;
                case "ArrowRight":
                    e.preventDefault();
                    moveSnake(10, 0, disallowedDirection);
                    break;
            };
        } else {
            if (
                disallowedDirection !== "LEFT" &&
                disallowedDirection !== "UP" &&
                disallowedDirection !== "DOWN" &&
                e.key === "Enter"
            )
                moveSnake(10, 0, disallowedDirection);
        }
    }, [disallowedDirection, moveSnake]);

    const resetBoard = useCallback(() => {
        window.removeEventListener("keydown", handleKeyEvents);
        dispatch(stopGame());
        clearBoard(context);
        drawObject(context, snake, "#91C483");
        drawObject(context, [generationRandomPosition(width - 10, height - 10)], randomFood());
        window.addEventListener("keydown", handleKeyEvents);
    }, [context, snake, width, height, dispatch, handleKeyEvents]);

    useEffect(() => {
        setContext(canvasRef.current && canvasRef.current.getContext("2d"));
        clearBoard(context);
        snakeBodyDraw(context, snake);
        drawObject(context, [pos], currentFruit);
        if (!isConsumed && snake[0].x === pos?.x && snake[0].y === pos?.y) setCurrentFruit(randomFood()),setIsConsumed(true);
        
        if (
            hasSnakeCollision(snake, snake[0]) ||
            snake[0].x >= width ||
            snake[0].x < 0 ||
            snake[0].y < 0 ||
            snake[0].y >= height
        ) {
            setGameEnded(true);
            dispatch(stopGame());
            window.removeEventListener("keydown", handleKeyEvents);
        } else setGameEnded(false);
    }, [context, pos, snake, width, height, dispatch, handleKeyEvents]);

    useEffect(() => {
        if (isConsumed) {
            const posi = generationRandomPosition(width - 10, height - 10);
            setPos(posi);
            setIsConsumed(false);

            dispatch(increaseSnake());

            dispatch(scoreUpdates(INCREMENT_SCORE));
        }
    }, [isConsumed, pos, dispatch, width, height]);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyEvents);
        return () => {
            window.removeEventListener("keydown", handleKeyEvents);
        }
    }, [disallowedDirection, handleKeyEvents]);

    return (
        <canvas
            className="bg-slate-500 border-2 border-solid border-sky-500 rounded-md"
            ref={canvasRef}
            height={height}
            width={width}
        />
    );
};

export default CanvasBoard;