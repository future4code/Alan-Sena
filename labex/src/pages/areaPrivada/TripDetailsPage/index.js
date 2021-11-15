import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Reset } from '../style'
import { useProtectPage } from '../../../hooks';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';

function TripsDetails() {
    useProtectPage()

    const param = useParams()
    const [trip, setTrip] = useState()

    useEffect(() => {
        getTrip()
    }, [])

    const getTrip = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/alan/trip/${param.tripid}`, {
            headers: {
                auth: window.localStorage.getItem('token')
            }
        })
        .then((res) => setTrip(res.data.trip))
        .catch((err) => {console.log(err)})
    }

    const decision = async (permission, candidate) => {
        console.log(permission, candidate)
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/alan/trips/${param.tripId}/candidates/${candidate.id}/decide`
        const body = {
            approve: permission
        }

        try {
            const response = await axios.put(url, body, {
                headers: {
                    auth: window.localStorage.getItem('token')
                }
            })
            alert('Deu certo')
            getTrip()
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    const render = () => {
        if(trip) {
            return (<div>
                <section>
                    <h2>Descrição</h2>
                    <p><strong>Nome: </strong>{trip.name}</p>
                    <p><strong>Planeta: </strong>{trip.planet}</p>
                    <p><strong>Data: </strong>{trip.date}</p>
                    <p><strong>Descrição: </strong>{trip.description}</p>
                    <p><strong>Duração em dias: </strong>{trip.durationInDays}</p>
                </section>
                <section>
                    <h2>Candidatos</h2>
                    {trip.candidates.map((v, i) => {
                        return (
                            <div key={i}>
                                <p>{v.name}</p>
                                <Button variant="contained" color='primary' onClick={() => decision(true, v)}>Aceitar</Button>
                                <Button variant="contained" color='primary' onClick={() => decision(false, v)}>Negar</Button>
                            </div>
                        )
                    })}
                </section>
            </div>)
        } else {
            return <p>Carregando...</p>
        }
    }

    return (
        <div>
            <Button variant="contained" color='primary'> <Link to='/admin/trips/list' style={Reset}> VOLTAR </Link> </Button>
            <h1>Details Page</h1>
            {render()}
        </div>
    );
}

export default TripsDetails;