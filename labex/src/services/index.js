import axios from "axios";

export const login = async ({ email, password }) => {

    let error
    let response
    
    try {
        response = await axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/alan/login', 
        { 
            email, 
            password 
        })
    } catch (e) {
        console.log(e.response)
        error = e.response
    }

    return { 
        token: response && response.data.token,
        error
    }
}

export const tripDelete = async (id) => {
    let response
    let error

    try {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/alan/trips/${id}`
        response = await axios.delete(url, {
            headers: {
                auth: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ilp3N0tNUEp2RmFqRmtmUlE4N3RBIiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE2MTc5MDE4NDd9.yKi2emMJ-Ln3fNigx09HNZIDWPEhF8e_WnbYAAd1r2k'
            }
        })
    } catch (e) {
        error = e.response
    }

    return {

    }
}

export const getTrips = async () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/alan/trips'
    let response
    let error

    try {
        response = await axios.get(url)
    } catch (e) {
        error = e.response
    }

    return {
        response,
        error
    }
}