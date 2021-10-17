import { useDispatch } from "react-redux";

import { resetGame } from "../redux/actions";

export function ResetButton() {
  const dispatch = useDispatch();

  return (
    <button className="btn" onClick={() => dispatch(resetGame())}>
      Remettre à zéro
    </button>
  );
}
