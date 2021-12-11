import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import HeaderAdm from "../../../components/HeaderAdm";
import GlobalStateContext from "../../../global/GlobalStateContext";
import { GetTripDetail } from "../../../services";
import MainDetails from "./components/MainDetails";

const TripDetailsPage = () => {

  const param = useParams()
  const { states, setters } = useContext(GlobalStateContext)

  useEffect(() => {
    GetTripDetail(setters, param.id)
  }, [])

  return (
    <>
     <HeaderAdm redirect={'Home'}/>
     <MainDetails states={states}/>
    </>
  )
}

export default TripDetailsPage;
