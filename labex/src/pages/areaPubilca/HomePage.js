import { Link } from 'react-router-dom';
import { Reset } from './style';
import Button from '@mui/material/Button';

function HomePage(props) {

    return (
        <div>
            <h1> Home </h1>
            <Button variant="contained" color='secondary'> <Link to='/trips/list' style={Reset}> Ver lista de viagens </Link> </Button>
            <Button variant="contained" color='secondary'> <Link to='/login' style={Reset}> Área Privada </Link> </Button>
        </div>
    )
}

export default HomePage;