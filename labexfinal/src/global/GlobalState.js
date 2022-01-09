import { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {

  const [ trips, setTrips ] = useState()
  const [ trip, setTrip ] = useState()

  const states = { trips, trip }
  const setters = { setTrips, setTrip }

  return (
    <GlobalStateContext.Provider value={{ states, setters }} >
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState;
