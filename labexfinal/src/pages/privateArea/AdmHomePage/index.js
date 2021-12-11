import { useContext, useEffect } from "react";

import { GetTrips } from "../../../services";
import MainAdmHome from "./components/MainAdmHome";
import GlobalStateContext from "../../../global/GlobalStateContext";
import HeaderAdm from "../../../components/HeaderAdm";

const AdmHomePage = () => {

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
