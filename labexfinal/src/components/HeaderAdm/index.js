import { useNavigate } from "react-router"

const HeaderAdm = (props) => {

  const navigate = useNavigate()

  const go = () => {
    props.redirect === 'Home' ? navigate('/adm/home') : navigate('/adm/create-trip')
  }

  const logout = () => {
    navigate('/login')
  }

  return (
    <header>
      <h1> Area Administrativa </h1>
      <nav>
        <button onClick={go}>{props.redirect}</button>
        {props.redirect === 'Criar viagem' ? <button onClick={logout}> Logout </button> : <></> }
      </nav>
    </header>
  )
}

export default HeaderAdm
