import Loading from '../../../../components/Loading'

const MainDetails = (props) => {
  const trip = props.states.trip
  console.log(props.states.trip)

  const teste = trip === undefined ? <Loading /> : <h2>{trip.name}</h2>
  return (
    <main>
      {teste}
    </main>
  )
}

export default MainDetails
