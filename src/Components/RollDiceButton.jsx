import { useContext } from "react";
import { MyContext } from "../context/context";

export default function RollDiceButton() {
  const { tenzies, rollDice } = useContext(MyContext);
  return (
    <button className="btn" onClick={rollDice}>
      {tenzies ? "New Game" : "Roll"}
    </button>
  );
}
