import { useNavigate } from "react-router";

const HeaderLogin = () => {

  let navigate = useNavigate()

  const goHome = () => {
    navigate("/")
  }

  return (
    <header>
      <h1> Login </h1>
      <button onClick={goHome}> Home </button>
    </header>
  )
}

export default HeaderLogin;
 