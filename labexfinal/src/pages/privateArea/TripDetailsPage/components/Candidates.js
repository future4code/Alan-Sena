import { CandidateCard } from '../style'

const Candidates = (props) => {
  return (
    <>
      {props.candidates === undefined ? 
      <></> : 
      props.candidates.map((candidate, i) => {
        return (
          <CandidateCard key={i}>
            <h3>{candidate.name}</h3>
            <h4>{candidate.profession}</h4>
            <p>{candidate.applicationText}</p>

            <button>Aceitar</button>
            <button>Negar</button>
          </CandidateCard>
        )
      })}
    </>
  )
}

export default Candidates
