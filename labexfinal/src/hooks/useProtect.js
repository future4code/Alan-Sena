import { useEffect } from "react"
import { useNavigate } from "react-router"

const useProtect = () => {

  const navigate = useNavigate()
  useEffect(() => {
    const token = window.localStorage.getItem('token')

    if (!token) navigate('/login')
  }, [])
}

export default useProtect
