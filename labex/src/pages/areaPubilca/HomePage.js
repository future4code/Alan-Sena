import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div>
            <Link to='/publica'>Área Pública</Link>
            <Link to='/privada'>Área Privada</Link>
        </div>
    )
}

export default HomePage;