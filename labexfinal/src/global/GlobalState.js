import { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {

  const [ trips, setTrips ] = useState()

  const states = { trips }
  const setters = { setTrips }

  return (
    <GlobalStateContext.Provider value={{ states, setters }} >
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState;
