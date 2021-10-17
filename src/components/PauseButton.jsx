import { useDispatch } from "react-redux";

import { playPause } from "../redux/actions";

export function PauseButton() {
  const dispatch = useDispatch();

  return (
    <button className="btn" onClick={() => dispatch(playPause())}>
      Pause / Reprendre
    </button>
  );
}
