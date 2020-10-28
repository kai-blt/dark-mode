import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  //Value storage. useState can accept a callback instead of hardcoding initial value!
  const [storedValue, setStoredValue] = useState(() => {
    //Determine if key exists (returns null if not available)
    const item = window.localStorage.getItem(key);
    //Return the parsed JSON item if key exists, else use initial value passed in
    return item ? JSON.parse(item) : initialValue;
  });

  //Setter 
  const setValue = value => {
    //Set stored value in state
    setStoredValue(value);
    //Save to local storage as a stringified version (required!)
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};