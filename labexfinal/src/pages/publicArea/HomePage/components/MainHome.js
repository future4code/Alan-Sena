import { useNavigate } from "react-router-dom";
import { ButtonStyle } from "../style";

const MainHome = () => {

  let navigate = useNavigate()

  const goPage = (route) => {
    navigate(route)
  }

  return (
    <main>
      <ButtonStyle onClick={() => goPage('/trips')}> Trips </ButtonStyle>
      <ButtonStyle onClick={() => goPage('/login')}> Login </ButtonStyle>
    </main>
  )
}

export default MainHome;
