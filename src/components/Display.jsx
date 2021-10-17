import { useSelector } from "react-redux";

export function Display() {
  const player1Score = useSelector((state) => state.player1);
  const player2Score = useSelector((state) => state.player2);
  const advantage = useSelector((state) => state.advantage);
  const winner = useSelector((state) => state.winner);
  const isPlaying = useSelector((state) => state.playing);

  let message;

  if (winner) {
    message = `Joueur ${winner === "player1" ? "1" : "2"} gagne`;
  } else if (!isPlaying) {
    message = "C'est la pause";
  } else {
    message = `Le score est : ${player1Score} - ${player2Score}`;

    if (advantage) {
      message += ` | avantage joueur ${advantage === "player1" ? "1" : "2"}`;
    }
  }

  return <p className="display-score">{message}</p>;
}
