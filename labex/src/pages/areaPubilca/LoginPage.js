import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { login } from '../../services';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Reset, ComponenteGeralLogin } from './style';

function LoginPage() {

    const navigate = useNavigate()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const onClickLogin = async (e) => {
        e.preventDefault()
        const response = await login({ email, password });
        if(response.token) {
            localStorage.setItem("token", response.token);
            navigate("/admin/trips/list");
        } else {
            alert(response.error.data.message);
        }
    }
    
    return (
        <ComponenteGeralLogin>
            <Button variant="contained" color='secondary'> <Link to='/' style={Reset}> Voltar </Link> </Button>
            <h1>Login</h1>
            <form>
                <TextField
                    required
                    id="outlined-required"
                    label="E-mail"
                    value={email}
                    onChange={onChangeEmail}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Senha"
                    type="password"
                    value={password}
                    onChange={onChangePassword}
                />
                <Button variant="contained" color='secondary' onClick={onClickLogin}> Voltar </Button>
            </form>
            
        </ComponenteGeralLogin>
    );
}

export default LoginPage;