import { useContext } from "react";
import { MyContext } from "../context/context";

export default function RollDiceButton(props) {
  const { tenzies } = useContext(MyContext);
  return (
    <button className="btn" onClick={props.rollDice}>
      {tenzies ? "New Game" : "Roll"}
    </button>
  );
}
