import { useNavigate } from "react-router-dom";

const MainHome = () => {

  let navigate = useNavigate()

  const goPage = (route) => {
    navigate(route)
  }

  return (
    <main>
        <button onClick={() => goPage('/login')}> Login </button>
        <button onClick={() => goPage('/trips')}> Trips </button>
      </main>
  )
}

export default MainHome;
