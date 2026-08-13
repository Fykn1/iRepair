import { useNavigate } from 'react-router'
import { useAuth } from '../contexts/AuthContext'

export function LogoutButton() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  async function handleLogout() {
    try {
      await logout()
      navigate('/login')
      } catch (error) {
      console.error('Erro ao fazer logout:', error)
    }
  }

  return (
    <button
      onClick={handleLogout}
      className="border-2 m-0.5 p-0.5 cursor-pointer"
    >
      Sair
    </button>
  )
}

export default LogoutButton;