import { CallEffect, PutEffect, delay, put, takeLatest } from "redux-saga/effects";
import {
    MOVE_RIGHT,
    MOVE_DOWN,
    MOVE_LEFT,
    MOVE_UP,
    LEFT,
    RIGHT,
    UP,
    DOWN,
    ISnakeCoord,
    setDisDirection,
    STOP_GAME,
    RESET
} from '../actions/actions';



export function* moveSaga(params: {
    type: string,
    payload: ISnakeCoord
}): Generator<
    | PutEffect<{ type: string; payload: ISnakeCoord }>
    | PutEffect<{ type: string; payload: string }>
    | CallEffect<true>
> {
    while (params.type !== RESET && params.type !== STOP_GAME) {
        yield put({ type: params.type.split("_")[1], payload: params.payload });

        switch (params.type.split("_")[1]) {
            case RIGHT:
                yield put(setDisDirection(LEFT))
                break;
            case LEFT:
                yield put(setDisDirection(RIGHT))
                break;
            case UP:
                yield put(setDisDirection(DOWN))
                break;
            case DOWN:
                yield put(setDisDirection(UP))
                break;
            default:
                break;
        }
        yield delay(100);
    }
}


function* watcherSagas() {
    yield takeLatest(
        [MOVE_RIGHT, MOVE_DOWN, MOVE_LEFT, MOVE_UP, RESET, STOP_GAME],
        moveSaga
    )
};

export default watcherSagas;