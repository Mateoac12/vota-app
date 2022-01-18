import Link from 'next/link'
import { HandleLoginButton } from 'components/HandleLoginButton'
import { TopHeader } from 'components/TopHeader'

export const Header: React.FC = () => {
  return (
    <>
      <TopHeader />
      <header className='flex justify-between w-full max-w-screen-lg mx-auto py-2 px-4 items-center'>
        <Link href='/'>
          <a className='font-semibold relative text-xl before:content-["Alfa"] before:px-2 before:py-1 before:text-xs before:absolute before:top-0 before:-right-10 before:bg-green-200 before:rounded-full'>
            Vota.app
          </a>
        </Link>
        <HandleLoginButton />
      </header>
    </>
  )
}
