import Head from 'next/head'
import type { NextPage } from 'next'

import { homeTargets } from 'data/initTargets'
import { TargetProp } from 'types/target'
import { Target } from 'components/Target'

interface Props {
  targets: TargetProp[]
}

const Home: NextPage<Props> = ({ targets }) => {
  return (
    <>
      <Head>
        <title>Vota app! 📊 | No sabes que elegir?</title>
      </Head>
      <h1 className='text-6xl font-bold max-w-4xl text-center mx-auto mt-40 leading-tight'>
        ¡Bienvenido a la app para votar las mejores ideas del grupo!
      </h1>
      <p className='text-lg text-center mt-8 opacity-90'>
        ¿No pueden decidir qué hacer? ¡Hagan una encuesta y voten!
      </p>

      <main className='flex max-w-screen-xl mx-auto mt-20 gap-4 justify-center'>
        {targets.map(({ content }) => (
          <Target content={content} key={content.id} />
        ))}
      </main>
    </>
  )
}

export function getStaticProps() {
  const targets = homeTargets

  return {
    props: { targets },
  }
}

export default Home
