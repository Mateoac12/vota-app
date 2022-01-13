import Head from 'next/head'

import type { NextPage } from 'next'
import { useSession, signOut } from 'next-auth/react'
import LoginButton from 'components/LoginButton'

const Home: NextPage = () => {
  const { data: session } = useSession()

  return (
    <>
      <Head>
        <title>Vota app! 📊 | No sabes que elegir?</title>
      </Head>
      <div className='grid place-content-center h-screen'>
        <h1 className='text-3xl font-bold'>
          Bienvenido a la app para votar las mejores ideas del grupo!
        </h1>
        <section>
          {session ? (
            <button onClick={() => signOut()}>Cerrar sesion</button>
          ) : (
            <LoginButton />
          )}
        </section>
      </div>
    </>
  )
}

export default Home
