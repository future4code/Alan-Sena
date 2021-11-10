import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Reset } from './style'

function AdminHome() {
    

    return (
        <div>
            
            <Button variant="contained" color='secondary'> <Link to='/login' style={Reset}> LOGOUT </Link> </Button>
            <Button variant="contained" color='secondary'> <Link to='/admin/trips/create' style={Reset}> CRIAR VIAGEM </Link> </Button>
            <Button variant="contained" color='secondary'> <Link to='/admin/trips/details' style={Reset}> DETALHES DA VIAGEM  </Link> </Button>

            <h1>Home Adm</h1>
        </div>
    );
}

export default AdminHome;