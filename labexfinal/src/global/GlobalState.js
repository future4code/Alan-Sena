import { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {

  const [value, setValue] = useState('Olá')

  const states = { value }
  const setters = { setValue }

  return (
    <GlobalStateContext.Provider value={{ states, setters }} >
        {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState;
