import Link from 'next/link'
import { HandleLoginButton } from 'components/HandleLoginButton'

export const Header: React.FC = () => {
  return (
    <header className='flex justify-between w-full max-w-screen-lg mx-auto py-2'>
      <Link href='/'>
        <a className='font-semibold text-xl'>Vota.app</a>
      </Link>
      <HandleLoginButton />
    </header>
  )
}
