import Loading from '../../../../components/Loading'
import { StyleMain, StyleSection } from '../style'
import Candidates from './Candidates'

const MainDetails = (props) => {
  const trip = props.states.trip

  const teste = trip === undefined ? 
  <Loading /> : 
  <>
    <h2 > {trip.name} </h2>
    <StyleSection>
      <Candidates candidates={trip.candidates}/>
    </StyleSection>
  </>
  
  return (
    <StyleMain>
      {teste}
    </StyleMain>
  )
}

export default MainDetails
