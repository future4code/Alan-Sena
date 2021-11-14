import { useNavigate } from 'react-router';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function ApplicationFormPage() {
    const navigate = useNavigate()

    const changePage = (e) => {
        navigate(e)
    }

    return (
        <section>
            <Button variant="contained" color='secondary' onClick={() => {changePage(-1)}}> Voltar </Button>
            <h1> Application Form Page </h1>
            <form>
            <TextField
                required
                id="outlined-required"
                label="Nome"
            />
            <TextField
                required
                id="outlined-required"
                label="Idade"
            />
            <TextField
                required
                id="outlined-required"
                label="Texto de candidatura"
            />
            </form>
        </section>
        
    );
}

export default ApplicationFormPage;