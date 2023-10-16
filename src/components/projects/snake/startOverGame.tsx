import { Button } from "@nextui-org/react";
import { useState, useEffect } from "react";

interface IStartOverGame {
    gameEnded: boolean;
    resetBoard: () => void;
}


export default function StartOverGame({ gameEnded, resetBoard }: IStartOverGame) {
    const [pressed, setPressed] = useState<string>('')

    const handleClicked = () => {
        setPressed('clicked')
    }

    useEffect(() => {
        const handleReset = (e: KeyboardEvent) => {
            e.key === 'Enter' && resetBoard();
        }
        gameEnded && window.addEventListener('keydown', handleReset);
        return () => {
            gameEnded && window.removeEventListener('keydown', handleReset);
        }
    }, [gameEnded, resetBoard])

    return <>
        <div className={`absolute inset-0 flex items-center justify-center w-[260px] h-[400px] ${gameEnded ? 'bg-[#05050576]' : 'bg-slate-500'} border-2 border-solid border-sky-500 rounded-md box-content select-none`}>
            <div className="flex flex-col justify-center items-center gap-4 text-center">
                {gameEnded && <h1 className="text-xl font-bold text-danger">Game Over</h1>}
                <div className="flex flex-row leading-none items-center w-max">
                    <div className="flex bg-[#5b5c62a3] w-5 h-5 justify-center rounded-[0.3rem]">
                        ←
                    </div>
                    <div className="flex flex-col gap-5">
                        <div className="flex bg-[#5b5c62a3] w-5 h-5 justify-center rounded-[0.3rem]">
                            ↑
                        </div>
                        <div className="flex bg-[#5b5c62a3] w-5 h-5 justify-center rounded-[0.3rem]">
                            ↓
                        </div>
                    </div>
                    <div className="flex bg-[#5b5c62a3] w-5 h-5 justify-center rounded-[0.3rem]">
                        →
                    </div>
                </div>
                <div>
                    {!pressed && !gameEnded ?
                        <Button
                            radius="full"
                            variant="faded"
                            className=""
                            onClick={gameEnded ? resetBoard : handleClicked}
                        >Start Game</Button> :
                        <span className="font-semibold">
                            Press Enter ↵
                        </span>
                    }
                </div>
            </div>
        </div>
    </>
}