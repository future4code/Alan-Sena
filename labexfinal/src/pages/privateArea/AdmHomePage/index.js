import { useContext, useEffect } from "react";

import { GetTrips } from "../../../services";
import MainAdmHome from "./components/MainAdmHome";
import HeaderAdmHome from "./components/HeadrAdmHome";
import GlobalStateContext from "../../../global/GlobalStateContext";

const AdmHomePage = () => {

  const { states, setters } = useContext(GlobalStateContext)

  useEffect(() => {
    GetTrips(setters)
  }, [])

  return (
    <>
      <HeaderAdmHome />
      <MainAdmHome states={states}/>
    </>
  )
}

export default AdmHomePage;
