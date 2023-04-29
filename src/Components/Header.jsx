import { useContext } from "react";
import { MyContext } from "../context/context";

export default function Header() {
  const { lowerNumberOfRolls, numOfRolls } = useContext(MyContext);

  return (
    <>
      <h1 className="header">Tenzies</h1>
      <p className="description">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="stats">
        <p>Lowest Numbers of rolls: {lowerNumberOfRolls}</p>
        <p className="rolls">No. of Rolls: {numOfRolls}</p>
      </div>
    </>
  );
}
