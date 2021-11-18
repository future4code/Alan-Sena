import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { getTrips } from '../../../services'
import { useForm } from '../../../hooks/useForm'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';

function ApplicationFormPage() {
    const navigate = useNavigate()

    const [trips, setTrips ] = useState([])
    const [form, onChange] = useForm({
        name: '',
        age: 0,
        applicationText: '',
        profession: '',
        country: '',
        trip: ''
    })

    useEffect(() => {
        const fetch = async () => {
            const tripsLists = await getTrips()
            setTrips(tripsLists.response.data.trips)
        }
        fetch()
    },[])

    const onSubmit = (e) => {
        e.preventDefault()
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/alan/trips/${form.trip.id}/apply`
        const body = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }

        axios.post(url, body)
    }

    const changePage = (e) => {
        navigate(e)
    }

    return (
        <section>
            <Button variant="contained" color='primary' onClick={() => {changePage(-1)}}> Voltar </Button>
            <h1> Application Form Page </h1>
            <form onSubmit={onSubmit}>
                <TextField
                    label="Nome"
                    id="outlined-required"
                    onChange={onChange}
                    value={form['name']}
                    name={'name'}
                    required
                />
                <TextField
                    label="Idade"
                    type="number"
                    id="outlined-required"
                    onChange={onChange}
                    value={form['age']}
                    name={'age'}
                    required
                />
                <TextField
                    label="Texto de candidatura"
                    id="outlined-required"
                    onChange={onChange}
                    value={form['applicationText']}
                    name={'applicationText'}
                    multiline
                    required
                />
                <TextField
                    label="Profissão"
                    id="outlined-required"
                    onChange={onChange}
                    value={form['profision']}
                    name={'profission'}
                    required
                />
                <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="select-paises">Países</InputLabel>
                    <Select
                        labelId="select-paises"
                        onChange={onChange}
                        value={form['country']}
                        name={'country'}
                        required
                    >
                    <MenuItem value={'Brasil'}>Brasil</MenuItem>
                    
                    </Select>
                </FormControl>
                <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="select-viagens"> Viagens </InputLabel>
                    <Select
                        labelId="select-viagens"
                        onChange={onChange}
                        value={form['trip']}
                        name={'trip'}
                        required
                    >
                        {trips.map((trip, i) => {
                            return (
                                <MenuItem value={trip} key={i}>{trip.name}</MenuItem>
                            )
                        })}
                    <MenuItem value={1}>Marte</MenuItem>
                    
                    </Select>
                </FormControl>
                <Button variant="contained" color='primary' type={'submit'}> Candidatar </Button>
            </form>
        </section>
    );
}

export default ApplicationFormPage;