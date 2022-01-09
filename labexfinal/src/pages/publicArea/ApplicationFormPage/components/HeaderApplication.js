import { useNavigate } from 'react-router-dom'
import { Header } from '../style'

const HeaderApplication = (props) => {
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
  }
  
  return (
    <Header>
      <h1> Candidatura a viagem </h1>
      <button onClick={goBack}> Voltar </button>
    </Header>
  )
}

export default HeaderApplication;
