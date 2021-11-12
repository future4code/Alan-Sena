import axios from "axios";

export const login = async ({ email, password }) => {

    let error;
    let response;
    
    try {
        response = await axios
        .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/alan/login', 
        { 
            email, 
            password 
        });
    } catch (e) {
        console.log(e.response)
        error = e.response;
    }

    return { 
        token: response && response.data.token,
        error
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