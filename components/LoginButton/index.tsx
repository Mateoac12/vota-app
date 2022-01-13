import { signIn } from 'next-auth/react'

const LoginButton: React.FC = () => {
  return (
    <button
      className='bg-violet-600 text-white py-2 px-6 rounded-full shadow-xl shadow-violet-200'
      onClick={() => signIn('google')}
    >
      Iniciar sesión
    </button>
  )
}

export default LoginButton
