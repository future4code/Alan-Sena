import axios from "axios"

export const getTrips = async () => {
  let response
  let erro
  try {
    response = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/alan-banu/trips`)
    console.log(response)
  } catch (error) {
    erro = error
    console.log(erro)
  }
}
