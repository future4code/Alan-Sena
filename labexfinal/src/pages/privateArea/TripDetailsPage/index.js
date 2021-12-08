import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import GlobalStateContext from "../../../global/GlobalStateContext";
import { GetTripDetail } from "../../../services";
import HeadersDetails from "./components/HeadersDetails";
import MainDetails from "./components/MainDetails";

const TripDetailsPage = () => {

  const param = useParams()
  const { states, setters } = useContext(GlobalStateContext)

  useEffect(() => {
    GetTripDetail(setters, param.id)
  }, [])

  return (
    <>
     <HeadersDetails />
     <MainDetails states={states}/>
    </>
  )
}

export default TripDetailsPage;
