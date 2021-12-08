import Loading from "../../../../components/Loading"
import { useNavigate } from "react-router"

const MainAdmHome = (props) => {

  let navigate = useNavigate()

  const viagens = props.states.trips === undefined ? 
  <Loading /> : 
  props.states.trips.map((v, i) => {
    return (
      <section key={i}>
        <p> {v.name} </p> 
        <button onClick={() => navigate(`/adm/trip-detail/${v.id}`)}> Candidatar </button>
      </section>
    )
  })
  return (
    <main>
      {viagens}
    </main>
  )
}

export default MainAdmHome
