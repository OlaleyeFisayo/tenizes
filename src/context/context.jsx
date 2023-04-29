import { createContext } from "react";

const MyContext = createContext();

function ContextProvider({ children }) {
  const [numOfRolls, setNumOfRolls] = useState(0);
  const [lowerNumberOfRolls, setLowerNumberOfRolls] = useState(
    localStorage.getItem("lowest") || 0
  );
  const [tenzies, setTenzies] = useState(false);

  const store = {
    numOfRolls,
    setNumOfRolls,
    lowerNumberOfRolls,
    setLowerNumberOfRolls,
    tenzies,
    setTenzies,
  };
  return <MyContext.Provider value={store}>{children}</MyContext.Provider>;
}

export { MyContext, ContextProvider };
