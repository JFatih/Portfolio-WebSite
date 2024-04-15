import { useState } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [data, setData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem(key));
    if (storedData === null) {
      return defaultValue;
    } else {
      return storedData;
    }
  });

  const setLocalStorage = (newData) => {
    localStorage.setItem(key, JSON.stringify(newData));
    setData(newData);
  };
  return [data, setLocalStorage];
}
