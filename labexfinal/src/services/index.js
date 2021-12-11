/* eslint-disable no-unused-vars */
import axios from "axios";

export const GetTrips = async (setters) => {
  
  try {
    const response = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/alan-banu/trips`)
    setters.setTrips(response.data.trips)
  } catch (error) {
    console.log(error)
  }
}

export const login = async ({ email, password }) => {

  let error
  let response
  
  try {
    response = await axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/alan-banu/login', 
    { 
      email, 
      password 
    })
  } catch (e) {
    alert(e.response.data.message)
    error = e.response
  }

  return { 
    token: response && response.data.token,
    error
  }
}

export const GetTripDetail = async (setters, id) => {
  try {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/alan-banu/trip/${id}`

    const response = await axios.get(url, {
      headers: {
      auth: window.localStorage.getItem('token')
    }})
    console.log(response.data)
    setters.setTrip(response.data.trip)
  } catch (error) {
    console.log(error)
  }
}

export const CreateTripRequest = async ({ form }) => {
  const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/alan-banu/trips`
  const headers = {
    headers: {
      auth: window.localStorage.getItem('token')
    }
  }

  const body = {
    name: form.name,
    planet: form.planet,
    date: form.date,
    description: form.description,
    durationInDays: form.durationInDays
  }
  
  try {
    const response = await axios.post(url, body, headers)
    alert('viagem criada')
  } catch (error) {
    console.log(error)
  }
}

export const ApplyToTrip = async ( form, id ) => {
  const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/alan-banu/trips/${id}/apply`
  const body = {
    name: form.name,
    age: form.age,
    applicationText: form.applicationText,
    profession: form.profession,
    country: form.country
  }

  try {
    const response = await axios.post(url, body)
    alert('Candidatura feita!')
  } catch (error) {
    console.log(error)
  }
}
