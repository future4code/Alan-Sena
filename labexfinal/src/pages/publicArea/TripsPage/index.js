import { useContext, useEffect } from "react";

import GlobalStateContext from "../../../global/GlobalStateContext";
import { GetTrips } from "../../../services";
import HeaderTrips from "./components/HeaderTrips";
import MainTrips from "./components/MainTrips";

const TripsPage = () => {
  const { states, setters } = useContext(GlobalStateContext)

  useEffect(() => {
    GetTrips(setters)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <>
      <HeaderTrips />
      <MainTrips states={states}/>
    </>
  )
}

export default TripsPage;
