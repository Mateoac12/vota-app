import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useState } from 'react'

import googleSvg from './google-icon.svg'

const LoginButton: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleLogin = () => {
    setIsLoading(true)
    signIn('google')
  }

  return (
    <button
      className={`border font-semibold py-1 px-4 rounded-md hover:opacity-95 flex items-center gap-2 hover:shadow-sm ${
        isLoading && 'opacity-60 hover:cursor-not-allowed hover:opacity-60'
      }`}
      disabled={isLoading}
      onClick={handleLogin}
    >
      <Image src={googleSvg} alt='google icon' className='w-2' />
      Iniciar sesión
    </button>
  )
}

export default LoginButton
