// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';

import Button from '@mui/material/Button';
import { useProtectPage } from '../../hooks';

function CreateTripPage() {
    useProtectPage()

    const navigate = useNavigate()

    const changePage = () => {
        navigate('/admin/trips/list')
    }

    return (
        <>
            <Button variant="contained" color='secondary' onClick={changePage}> VOLTAR  </Button>
            <h1>Criar Trip</h1>            
        </>
    );
}

export default CreateTripPage;