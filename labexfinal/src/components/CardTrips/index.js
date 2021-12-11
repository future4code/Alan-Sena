import { useContext } from "react"
import { useNavigate } from "react-router"
import GlobalStateContext from '../../global/GlobalStateContext'
import Loading from "../Loading"

const CardTrips = (props) => {

  const { states } = useContext(GlobalStateContext)
  const navigate = useNavigate()

  const buttons = (id) => {
    if(props.redirect === 'application') {
      navigate(`/trips/application/${id}`)
    } else {
      navigate(`/adm/trip-detail/${id}`)
    }
  }

  const tripsList = states.trips === undefined ? 
  <Loading /> : 
  states.trips.map((v, i) => {
    return (
      <section key={i}>
        <p> {v.name} </p> 
        <button 
          onClick={() => buttons(v.id)}
        >{props.redirect === 'application' ? 'Candidatar' : 'Detalhes'}</button>
      </section>
    )
  })

  return (
    <>
      {tripsList}
    </>
  )
}

export default CardTrips
