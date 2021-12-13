/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { useParams } from "react-router";

import MainDetails from "./components/MainDetails";
import HeaderAdm from "../../../components/HeaderAdm";
import GlobalStateContext from "../../../global/GlobalStateContext";
import { GetTripDetail } from "../../../services";
import useProtect from "../../../hooks/useProtect";

const TripDetailsPage = () => {
  useProtect()

  const param = useParams()
  const { states, setters } = useContext(GlobalStateContext)

  useEffect(() => {
    GetTripDetail(param.id, setters)
  }, [])

  return (
    <>
     <HeaderAdm redirect={'Home'}/>
     <MainDetails states={states}/>
    </>
  )
}

export default TripDetailsPage;
