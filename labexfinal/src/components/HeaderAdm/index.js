import { useContext } from "react"
import { useNavigate } from "react-router"

import GlobalStateContext from "../../global/GlobalStateContext"
import { StyleHeader } from "../../pages/privateArea/AdmHomePage/style"

const HeaderAdm = (props) => {

  const navigate = useNavigate()
  const { setters } = useContext(GlobalStateContext)

  const go = () => {
    setters.setTrip({})
    props.redirect === 'Home' ? navigate('/adm/home') : navigate('/adm/create-trip')
  }

  const logout = () => {
    window.localStorage.clear('token')
    navigate('/login')
  }

  return (
    <StyleHeader>
      <h1> Area Administrativa </h1>
      <nav>
        <button onClick={go}>{props.redirect}</button>
        {props.redirect === 'Criar viagem' ? <button onClick={logout}> Logout </button> : <></> }
      </nav>
    </StyleHeader>
  )
}

export default HeaderAdm
