import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CardTrips from "../../../components/CardTrips";
import GlobalStateContext from "../../../global/GlobalStateContext";
import { GetTrips } from "../../../services";
import { Header } from "./style";

const TripsPage = () => {
  const { setters } = useContext(GlobalStateContext)

  useEffect(() => {
    GetTrips(setters)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }
  
  return (
    <>
      <Header>
        <h1> Trips </h1>
        <button onClick={goBack}> Voltar </button>
      </Header>

      
      <main>
        <CardTrips redirect={'application'}/>
      </main>
    </>
  )
}

export default TripsPage;
