import axios from "axios";

export const getTrips = (props) => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/alan/trips'

    axios.get(url)
    .then((res) => console.log('deu certo'))
    .catch((err) => console.log('erro'))
}
   