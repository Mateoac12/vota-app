import LoginButton from 'components/LoginButton'
import { UserMenu } from 'components/UserMenu'
import { useSession } from 'next-auth/react'

export const HandleLoginButton: React.FC = () => {
  const { data, status } = useSession()
  const user = data?.user as any

  if (!status || status === 'loading') return <p>Cargando...</p>
  if (status === 'authenticated') return <UserMenu user={user} />
  if (status === 'unauthenticated') return <LoginButton />

  return <p>Cargando...</p>
}
