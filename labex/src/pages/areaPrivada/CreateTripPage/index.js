import { useNavigate } from 'react-router';
import { useProtectPage } from '../../../hooks';
import { useForm } from '../../../hooks/useForm';
import React, { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';

function CreateTripPage() {
    useProtectPage()
    const [form, onChange] = useForm()
    
    const navigate = useNavigate()
    
    const changePage = () => {
        navigate('/admin/trips/list')
    }

    const submit = () => {

    }

    return (
        <>
            <h1>Criar Trip</h1>      
            <form onSubmit={submit}>
                <TextField
                    required
                    id="outlined-required"
                    label="Nome"
                    name={'name'}
                    onChange={onChange}
                    value={form['name']}
                />
                <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="select-viagens"> Planeta </InputLabel>
                    <Select
                        labelId="select-viagens"
                        id="demo-simple-select-filled"
                        name={'planet'}
                        onChange={onChange}
                        value={form['planet']}
                        >
                    <MenuItem value={1}>Marte</MenuItem>
                    
                    </Select>
                </FormControl>

                {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Basic example"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    renderInput={(params) => <TextField {...params} />}
                />
                </LocalizationProvider> */}
                <TextField
                    required
                    id="outlined-required"
                    label="Descrição"
                    name={'description'}
                    onChange={onChange}
                    value={form['description']}
                />
                <TextField
                    required
                    id="outlined-required"
                    label="Duração em dias"
                    type="number"
                    name={'durationInDays'}
                    onChange={onChange}
                    value={form['durationInDays']}
                />
                
                <Button variant="contained" color='secondary' type={'submit'}> Criar  </Button>
            </form>      
                <Button variant="contained" color='secondary' onClick={changePage}> VOLTAR  </Button>   
        </>
    );
}

export default CreateTripPage;