import { useContext } from "react"
import { useNavigate } from "react-router"
import GlobalStateContext from '../../global/GlobalStateContext'
import { Card } from "./style"
import { del } from "../../services"
import Loading from "../Loading"

const CardTrips = (props) => {

  const { states, setters } = useContext(GlobalStateContext)
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
      <Card key={i}>
        <h3> {v.name} </h3>
        <p> {v.description} </p> 

        <button 
          onClick={() => buttons(v.id)}
        >{props.redirect === 'application' ? 'Candidatar' : 'Detalhes'}</button>
        {props.adm === true ? <button onClick={() => del(v.id, setters)}> Deletar </button> : <></>}
      </Card>
    )
  })
  console.log(states.trips)
  return (
    <>
      {tripsList}
    </>
  )
}

export default CardTrips
