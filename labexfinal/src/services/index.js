import axios from "axios";

export const GetTrips = async (setters) => {
  
  try {
    const response = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/alan-banu/trips`)
    console.log(response.data.trips)
    setters.setTrips(response.data.trips)
  } catch (error) {
    console.log(error)
  }
}

export const login = async ({ email, password }) => {

  let error
  let response
  console.log(email, password)
  
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

    setters.setTrip(response.data.trip)
  } catch (error) {
    console.log(error)
  }
}
