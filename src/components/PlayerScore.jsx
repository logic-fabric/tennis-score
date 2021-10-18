import { useSelector } from "react-redux";

export function PlayerScore({ playerId }) {
  const score = useSelector((state) => state[playerId]);
  const hasAdvantage = useSelector((state) => state.advantage === playerId);

  return (
    <div className="player-score">
      <p>Joueur {playerId[playerId.length - 1]}</p>
      <p>{(hasAdvantage ? "Avantage " : "") + score}</p>
    </div>
  );
}
