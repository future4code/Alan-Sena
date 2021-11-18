import { useEffect } from "react"
import { useNavigate } from "react-router"

export const useProtectPage = () => {
    const navigate = useNavigate()

    useEffect(() =>{
        const token = localStorage.getItem('token')
        if(!token) navigate('/login')
    }, [])
}

export const Change = (rota) => {
    const navigate = useNavigate()
    navigate(rota)
}