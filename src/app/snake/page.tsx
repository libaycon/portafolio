'use client';
import CanvasBoard from "./canvasBoard";
import { Provider } from "react-redux";
import store from "./store/store";
import ScoreCard from "./scoreCard";


function Page(): JSX.Element {
    return (
        <Provider store={store}>
            <div className="absolute left-0 right-0 min-h-[calc(100vh-60px)] z-[+1]">
                <h1 className="text-5xl text-center">Snake Game</h1>
                <ScoreCard />
                <div className="max-w-max max-h-max m-auto">
                    <CanvasBoard width={260} height={400} />
                </div>
            </div>
        </Provider>
    )
}

export default Page;
