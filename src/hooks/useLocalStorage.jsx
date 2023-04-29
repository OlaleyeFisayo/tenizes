import { useEffect } from "react";

function useLocalStorage(lowerNumberOfRolls, tenzies) {
  useEffect(() => {
    if (lowerNumberOfRolls !== 0) {
      localStorage.setItem("lowest", lowerNumberOfRolls);
    }
    if (lowerNumberOfRolls < localStorage.getItem("lowest")) {
      localStorage.setItem("lowest", lowerNumberOfRolls);
    }
  }, [tenzies]);
}

export { useLocalStorage };
