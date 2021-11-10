import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Reset } from './style'

function CreateTripPage() {
    return (
        <>
            <Button variant="contained" color='secondary'> <Link to='/admin/trips/list' style={Reset}> VOLTAR </Link> </Button>

            <h1>Criar Trip</h1>

            
        </>
    );
}

export default CreateTripPage;