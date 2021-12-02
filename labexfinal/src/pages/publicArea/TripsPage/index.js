import { useEffect } from "react";
import { getTrips } from "../../../services";

const TripsPage = () => {
  useEffect(() => {
    getTrips()
  },[])
  
  return (
    <>
      trips
    </>
  )
}

export default TripsPage;
