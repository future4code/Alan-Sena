import React, { useState, useEffect } from 'react';
import { getTrips } from '../../services';
import { useNavigate } from 'react-router';

import Button from '@mui/material/Button';
import { CardTrip, GeralListTrips } from './style'


function ListTrips() {

    const [trips, setTrips] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        const fetch = async () => {
            const tripsLists = await getTrips()
            setTrips(tripsLists.response.data.trips)
        }
        fetch()
    }, [])

    const changePage = (e) => {
        navigate(e)
    }

    const render = () => {
        if(trips) {
            const tripsList = trips.map((v, i) => {
                return (
                    <CardTrip key={i}>
                        <h2>{v.name}</h2>
                        <p>Destino: {v.planet}</p>
                        <p>Descrição: {v.description}</p>
                        <p>Duração: {v.durationInDays}</p>
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
            <Button variant="contained" color='secondary' onClick={() => {changePage('/')}}> VOLTAR </Button>
            <Button variant="contained" color='secondary' onClick={() => {changePage('/trips/application')}}> Candidatar </Button>
            <h1>Lista de viagens</h1>
            {render()}
        </GeralListTrips>
    );
}

export default ListTrips;