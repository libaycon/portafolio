'use client';
import CanvasBoard from "./canvasBoard";
import { Provider } from "react-redux";
import store from "./store/store";
import ScoreCard from "./scoreCard";


function SnakeGame(): JSX.Element {
    return (
        <Provider store={store}>
            <div className="bg-[#ef772b] p-8 rounded-md">
                <h1 className="text-xl font-bold text-center">Snake Game</h1>
                <ScoreCard />
                <div className="relative max-w-max max-h-max m-auto">
                    <CanvasBoard width={260} height={400} />
                </div>
            </div>
        </Provider>
    )
}

export default SnakeGame;
