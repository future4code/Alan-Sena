import { useContext, useEffect } from "react";

import CardTrips from "../../../components/CardTrips";
import GlobalStateContext from "../../../global/GlobalStateContext";
import { GetTrips } from "../../../services";

const TripsPage = () => {
  const { setters } = useContext(GlobalStateContext)

  useEffect(() => {
    GetTrips(setters)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <>
      <header>
        <h1> Trips </h1>
      </header>
      <main>
        <CardTrips redirect={'application'}/>
      </main>
    </>
  )
}

export default TripsPage;
