import { useNavigate } from "react-router";

const HeaderLogin = () => {

  let navigate = useNavigate()

  const goHome = () => {
    navigate(-1)
  }

  return (
    <header>
      <h1> Login </h1>
      <button onClick={goHome}> Voltar </button>
    </header>
  )
}

export default HeaderLogin;
 