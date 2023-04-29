import { useEffect } from "react";

function useWinState(
  dice,
  lowerNumberOfRolls,
  setLowerNumberOfRolls,
  numOfRolls,
  setTenzies,
) {
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
}

export { useWinState };
