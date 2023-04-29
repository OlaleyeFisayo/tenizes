import { useContext, useEffect, useState } from "react";
import Die from "./Components/Die";
import RollDiceButton from "./Components/RollDiceButton";
import Header from "./Components/Header";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import { MyContext } from "./context/context";

function App() {
  const {
    lowerNumberOfRolls,
    setLowerNumberOfRolls,
    numOfRolls,
    tenzies,
    setTenzies,
    dice,
    holdDice,
  } = useContext(MyContext);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      if (lowerNumberOfRolls === 0) {
        setLowerNumberOfRolls(numOfRolls);
      } else if (numOfRolls < localStorage.getItem("lowest")) {
        setLowerNumberOfRolls(numOfRolls);
      }
      setTenzies(true);
    }
  }, [dice]);

  useEffect(() => {
    if (lowerNumberOfRolls !== 0) {
      localStorage.setItem("lowest", lowerNumberOfRolls);
    }
    if (lowerNumberOfRolls < localStorage.getItem("lowest")) {
      localStorage.setItem("lowest", lowerNumberOfRolls);
    }
  }, [tenzies]);

  const dieElements = dice.map((die) => {
    return (
      <Die
        key={die.id}
        value={die.value}
        isHeld={die.isHeld}
        holdDice={() => holdDice(die.id)}
      />
    );
  });

  return (
    <main>
      {tenzies && <Confetti width={320} height={379} />}
      <Header />
      <div className="die-container">{dieElements}</div>
      <RollDiceButton />
    </main>
  );
}

export default App;
