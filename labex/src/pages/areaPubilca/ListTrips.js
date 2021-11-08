import { useNavigate } from 'react-router-dom'

function ListTrips() {
    const navigate = useNavigate()

    const home = () => {
        navigate('/')
    }

    const voltar = () => {
        console.log('voltei')
    }
    return (
        <div>
            <button onClick={home}>Home</button>
            <button onClick={voltar}>Voltar</button>
            <h1>Area Publica</h1>
        </div>
    );
}

export default ListTrips;