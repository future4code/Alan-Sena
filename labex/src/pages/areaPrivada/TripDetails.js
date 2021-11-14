import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Reset } from './style'
import { useProtectPage } from '../../hooks';

function TripsDetails() {
    useProtectPage()
    return (
        <>
            <Button variant="contained" color='secondary'> <Link to='/admin/trips/list' style={Reset}> VOLTAR </Link> </Button>
            <h1>Details Page</h1>
        </>
    );
}

export default TripsDetails;