/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";

import { GetTrips } from "../../../services";
import MainAdmHome from "./components/MainAdmHome";
import GlobalStateContext from "../../../global/GlobalStateContext";
import HeaderAdm from "../../../components/HeaderAdm";
import useProtect from "../../../hooks/useProtect";

const AdmHomePage = () => {
  useProtect()

  const { states, setters } = useContext(GlobalStateContext)

  useEffect(() => {
    GetTrips(setters)
  }, [])

  return (
    <>
      <HeaderAdm redirect={'Criar viagem'}/>
      <MainAdmHome states={states}/>
    </>
  )
}

export default AdmHomePage;
