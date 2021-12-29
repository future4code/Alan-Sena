import { useNavigate } from "react-router";

const HeaderLogin = () => {

  let navigate = useNavigate()

  const goHome = () => {
    navigate("/")
  }

  return (
    <header>
      <button onClick={goHome}> Home </button>
      <h1> Login </h1>
    </header>
  )
}

export default HeaderLogin;
 