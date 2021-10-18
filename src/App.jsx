import { Display } from "./components/Display";
import { PauseButton } from "./components/PauseButton";
import { PlayerScore } from "./components/PlayerScore";
import { PointScoredButton } from "./components/PointScoredButton";
import { ResetButton } from "./components/ResetButton";

export function App() {
  return (
    <div>
      <h1>Tennis Score</h1>

      <Display />

      <PlayerScore playerId="player1" />
      <PlayerScore playerId="player2" />

      <div className="btn-row">
        <PointScoredButton playerId="player1">
          Point pour joueur 1
        </PointScoredButton>

        <PointScoredButton playerId="player2">
          Point pour joueur 2
        </PointScoredButton>
      </div>

      <div className="btn-row">
        <PauseButton />

        <ResetButton />
      </div>
    </div>
  );
}
