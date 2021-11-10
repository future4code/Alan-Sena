import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Reset } from './style'
// import { getTrips } from '../../settings/request';

function ListTrips() {

    const [trips, setTrips] = useState('')

    useEffect(() => {
        getTrips()
    }, [])

    const getTrips = () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/alan/trips'
    
        axios.get(url)
        .then((res) => setTrips(res.data.trips))
        .catch((err) => console.log(err))
    }

    const render = () => {
        if(trips) {
            const tripsList = trips.map((v, i) => {
                return <h2 key={i}>{v.planet}</h2>
            })

            return tripsList
        } else {
            return <p>...carregando</p>
        }
    }

    return (
        <div>
            <Button variant="contained" color='secondary'> <Link to='/login' style={Reset}> ENTRAR </Link> </Button>
            <Button variant="contained" color='secondary'> <Link to='/' style={Reset}> VOLTAR </Link> </Button>
            <h1>Lista de viagens</h1>
            {render()}
        </div>
    );
}

export default ListTrips;