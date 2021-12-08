import { useNavigate } from "react-router"
import Loading from "../../../../components/Loading"
import { CardTrip } from "../style"

const MainTrips = (props) => {

  const navigate = useNavigate()

  const viagens = props.states.trips === undefined ? 
  <Loading /> : 
  props.states.trips.map((v, i) => {
    return (
      <CardTrip key={i}>
        <p> {v.name} </p> 
        <button onClick={() => navigate(`/trips/application/${v.id}`)}> Candidatar </button>
      </CardTrip>
    )
  })

  return (
    <main>
      {viagens}
    </main>
  )
}

export default MainTrips;
 