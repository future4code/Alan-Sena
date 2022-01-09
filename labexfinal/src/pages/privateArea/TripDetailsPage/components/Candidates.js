import { useContext } from 'react'
import { useParams } from 'react-router'
import GlobalStateContext from '../../../../global/GlobalStateContext'
import { decide } from '../../../../services'
import { CandidateCard } from '../style'

const Candidates = (props) => {
  
  const param = useParams()
  const { setters } = useContext(GlobalStateContext)

  return (
    <>
      {props.candidates === undefined ? 
      <></> : 
      props.candidates.map((candidate, i) => {
        return (
          <CandidateCard key={i}>
            <h3>{candidate.name}</h3>
            <h4>{candidate.profession} - {candidate.country}</h4>
            <p>{candidate.applicationText}</p>

            <button onClick={() => decide(candidate.id, param.id, true, setters)}> Aceitar </button>
            <button onClick={() => decide(candidate.id, param.id, false, setters)}> Negar </button>
          </CandidateCard>
        )
      })}
    </>
  )
}

export default Candidates
