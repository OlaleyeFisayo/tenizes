import { createContext, useState } from "react";

const MyContext = createContext();

function ContextProvider({ children }) {
  const [numOfRolls, setNumOfRolls] = useState(0);
  const [lowerNumberOfRolls, setLowerNumberOfRolls] = useState(
    localStorage.getItem("lowest") || 0
  );
  const [tenzies, setTenzies] = useState(false);
  const [dice, setDice] = useState(allNewDice);

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }

  function allNewDice() {
    let newDice = [];
    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function rollDice() {
    if (!tenzies) {
      setNumOfRolls((prevNumOfRolls) => prevNumOfRolls + 1);
      setDice((prevDice) =>
        prevDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      setNumOfRolls(0);
      setTenzies(false);
      setDice(allNewDice());
    }
  }
  function holdDice(dieId) {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.id === dieId ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const store = {
    numOfRolls,
    setNumOfRolls,
    lowerNumberOfRolls,
    setLowerNumberOfRolls,
    tenzies,
    setTenzies,
    dice,
    setDice,
    generateNewDie,
    allNewDice,
    rollDice,
    holdDice,
  };
  return <MyContext.Provider value={store}>{children}</MyContext.Provider>;
}

export { MyContext, ContextProvider };
