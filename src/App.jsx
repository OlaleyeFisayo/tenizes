import { useContext } from "react";
import Die from "./Components/Die";
import RollDiceButton from "./Components/RollDiceButton";
import Header from "./Components/Header";
import Confetti from "react-confetti";
import { MyContext } from "./context/context";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { useWinState } from "./hooks/useWinState";

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

  useWinState(
    dice,
    lowerNumberOfRolls,
    setLowerNumberOfRolls,
    numOfRolls,
    setTenzies
  );

  useLocalStorage(lowerNumberOfRolls, tenzies);

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
