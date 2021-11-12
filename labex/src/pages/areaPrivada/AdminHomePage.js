import React, { useState, useEffect } from 'react';
import { getTrips } from '../../services/services';

import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Reset } from './style'
import {CardTrip} from '../areaPubilca/style'
import { useProtectPage } from '../../hooks';

function AdminHome() {
    useProtectPage()

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
                        <Button variant="contained" color='secondary'> <Link to='/admin/trips/details' style={Reset}> Detalhes </Link> </Button>
                    </CardTrip>
                )
            })
            return tripsList
        } else {
            return <p>...carregando</p>
        }
    }

    return (
        <div>
            
            <h1>Home Adm</h1>
            <Button variant="contained" color='secondary'> <Link to='/login' style={Reset}> LOGOUT </Link> </Button>
            <Button variant="contained" color='secondary'> <Link to='/admin/trips/create' style={Reset}> CRIAR VIAGEM </Link> </Button>
            <Button variant="contained" color='secondary'> <Link to='/admin/trips/details' style={Reset}> DETALHES DA VIAGEM  </Link> </Button>
            {render()}

        </div>
    );
}

export default AdminHome;