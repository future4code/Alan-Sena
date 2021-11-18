import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { login } from '../../../services';
import { useForm } from '../../../hooks/useForm';
import { useNavigate } from 'react-router';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Reset, ComponenteGeralLogin } from '../style';

function LoginPage() {
    const navigate = useNavigate()

    const [form, onChange] = useForm({
        email: '',
        password: ''
    })

    const submit = async (e) => {
        e.preventDefault()
        const response = await login({ email: form.email, password: form.password });
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
            <form onSubmit={submit}>
                <TextField
                    required
                    id="outlined-required"
                    label="E-mail"
                    value={form.email}
                    onChange={onChange}
                    name={'email'}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Senha"
                    type="password"
                    value={form.password}
                    onChange={onChange}
                    name={'password'}
                />
                <Button variant="contained" color='secondary' type={'submit'}> Entrar </Button>
            </form>
            
        </ComponenteGeralLogin>
    );
}

export default LoginPage;