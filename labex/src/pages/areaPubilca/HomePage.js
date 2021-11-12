import { useNavigate } from 'react-router';
import Button from '@mui/material/Button';

function HomePage() {
    const navigate = useNavigate()

    const change = (rota) => {
        navigate(rota)
    }

    return (
        <div>
            <h1> Home </h1>

            <Button variant="contained" color='secondary' onClick={() => change('/trips/list')}> Lista de Viagens  </Button>
            <Button variant="contained" color='secondary' onClick={() => change('/login')}> Área Privada  </Button>
        </div>
    )
}

export default HomePage;