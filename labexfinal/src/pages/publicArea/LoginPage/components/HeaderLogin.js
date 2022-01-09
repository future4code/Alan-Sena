import { useNavigate } from "react-router";

import { StyleHeader } from "../style";

const HeaderLogin = () => {

  let navigate = useNavigate()

  const goHome = () => {
    navigate("/")
  }

  return (
    <StyleHeader>
      <h1> Login </h1>
      <button onClick={goHome}> Home </button>
    </StyleHeader>
  )
}

export default HeaderLogin;
 