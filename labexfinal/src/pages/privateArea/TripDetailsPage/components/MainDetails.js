import Loading from '../../../../components/Loading'
import Candidates from './Candidates'

const MainDetails = (props) => {
  const trip = props.states.trip

  const teste = trip === undefined ? 
  <Loading /> : 
  <>
    <h2> {trip.name} </h2>
    <Candidates candidates={trip.candidates}/>
  </>
  
  return (
    <main>
      {teste}
    </main>
  )
}

export default MainDetails
