import { IGlobalState } from "./store/reducers/reducers"
import { useSelector } from "react-redux"

export default function ScoreCard() {
    const score = useSelector((state: IGlobalState) => state.score);
  return (
    <div><span>Score: <strong>{score}</strong></span></div>
  )
}
