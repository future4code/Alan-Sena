import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useProtectPage } from '../../../hooks';

import { getTrips } from '../../../services';

import Button from '@mui/material/Button';
import { CardTrip } from '../style'

function AdminHome() {
    useProtectPage()
    
    const [trips, setTrips] = useState('')
    
    let navigate = useNavigate()

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

    const deleteTrip = (e) => {
        
    }

    const render = () => {
        if(trips) {
            const tripsList = trips.map((v, i) => {
                return (
                    <CardTrip key={i}>
                        <h2>{v.name}</h2>
                        <p>Destino: {v.planet}</p>
                        <Button variant="contained" color='primary' onClick={() => {changePage(`/admin/trips/details/${v.id}`)}}> Detalhes </Button>
                        <Button variant="contained" color='primary' onClick={() => {deleteTrip(v)}}> Apagar </Button>
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
            <Button variant="contained" color='primary' onClick={() => {changePage('/login')}}> LOGOUT </Button>
            <Button variant="contained" color='primary'onClick={() => {changePage('/admin/trips/create')}}>  CRIAR VIAGEM </Button>
            {render()}

        </div>
    );
}

export default AdminHome;