import Head from 'next/head'
import { getSession } from 'next-auth/react'
import type { GetServerSideProps, NextPage } from 'next'

import { TargetProp } from 'types/target'

import { Target } from 'components/Target'

import { homeTargets } from 'data/initTargets'
import LoginButton from 'components/LoginButton'

interface Props {
  targets: TargetProp[]
}

const Home: NextPage<Props> = ({ targets }) => {
  return (
    <>
      <Head>
        <title>Vota app! 📊 | No sabes que elegir?</title>
        <meta
          name='description'
          content='Crea ideas y compartelas con tus amigos. ¡Ellos se pueden sumar a ellas y ser aún más! Solo con un click'
        />
      </Head>
      <h1 className='sm:text-6xl text-4xl font-bold max-w-4xl text-center mx-auto mt-40 leading-tight'>
        ¡Bienvenido a la app para votar las mejores ideas del grupo!
      </h1>
      <p className='text-lg text-center mt-8 opacity-90'>
        ¿No pueden decidir qué hacer? ¡Hagan una encuesta y voten!
      </p>
      <div className='flex justify-center mt-8 flex-col items-center'>
        <LoginButton />
        <p className='mt-2 text-slate-400 text-sm'>Comienza ahora</p>
      </div>

      <main className='flex max-w-screen-xl mx-auto mt-20 gap-4 justify-center flex-wrap px-4 mb-40'>
        {targets.map((content) => (
          <Target content={content} key={content.id} falseInformation={true} />
        ))}
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const targets = homeTargets
  const session = await getSession(context)

  if (session)
    return {
      redirect: {
        destination: '/dashboard',
        permanent: false,
      },
    }

  return {
    props: {
      targets,
      session: await getSession(context),
    },
  }
}

export default Home
