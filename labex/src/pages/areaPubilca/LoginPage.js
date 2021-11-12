import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { login } from '../../services/services';

import Button from '@mui/material/Button';
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

    const onClickLogin = async () => {
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

            <p>E-mail</p>
            <input value={email} onChange={onChangeEmail}/>
            <p>Senha</p>
            <input value={password} onChange={onChangePassword}/>
            <button onClick={onClickLogin}>Login</button>
        </ComponenteGeralLogin>
    );
}

export default LoginPage;