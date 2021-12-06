const MainTrips = (props) => {

  const testes = props.states.trips === undefined ? <p> Loading... </p> : props.states.trips.map((v, i) => { return <p key={i}> {v.name} </p> })

  return (
    <main>
      {testes}
    </main>
  )
}

export default MainTrips;
 