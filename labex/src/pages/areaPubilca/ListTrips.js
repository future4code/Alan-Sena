import React, { useState, useEffect } from 'react';
import { getTrips } from '../../services/services';
// import axios from 'axios';

import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Reset, CardTrip, GeralListTrips } from './style'


function ListTrips() {

    const [trips, setTrips] = useState('')

    useEffect(() => {
        const fetch = async () => {
            const tripsLists = await getTrips()
            setTrips(tripsLists.response.data.trips)
        }
        fetch()
    }, [])

    const render = () => {
        if(trips) {
            const tripsList = trips.map((v, i) => {
                return (
                    <CardTrip key={i}>
                        <h2>{v.name}</h2>
                        <p>Destino: {v.planet}</p>
                        <p>Descrição: {v.description}</p>
                        <p>Duração: {v.durationInDays}</p>
                        <Button variant="contained" color='secondary'> <Link to='/login' style={Reset}> CANDIDATAR </Link> </Button>
                    </CardTrip>
                )
            })
            return tripsList
        } else {
            return <p>...carregando</p>
        }
    }

    return (
        <GeralListTrips>
            <Button variant="contained" color='secondary'> <Link to='/login' style={Reset}> ENTRAR </Link> </Button>
            <Button variant="contained" color='secondary'> <Link to='/' style={Reset}> VOLTAR </Link> </Button>
            <h1>Lista de viagens</h1>
            {render()}
        </GeralListTrips>
    );
}

export default ListTrips;