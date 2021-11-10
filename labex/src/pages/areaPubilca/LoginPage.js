import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Reset, ComponenteGeralLogin } from './style';

function LoginPage() {
    return (
        <ComponenteGeralLogin>
            <Button variant="contained" color='secondary'> <Link to='/' style={Reset}> Voltar </Link> </Button>
            <h1>Login</h1>

            <TextField id="outlined-basic" label="E-mail" variant="outlined" size='small'/>
            <TextField id="outlined-basic" label="Senha" variant="outlined" size='small'type={'password'}/>
            
            <Button variant="contained" color='secondary'> <Link to='/admin/trips/list' style={Reset}> ENTRAR </Link> </Button>
        </ComponenteGeralLogin>
    );
}

export default LoginPage;