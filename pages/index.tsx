import Head from 'next/head'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vota app! 📊 | No sabes que elegir?</title>
      </Head>
      <h1 className='text-6xl font-bold max-w-4xl text-center mx-auto mt-40 leading-tight'>
        Bienvenido a la app para votar las mejores ideas del grupo!
      </h1>
      <p className='text-lg text-center mt-8 opacity-90'>
        ¿No pueden decidir qué hacer? ¡Hagan una encuesta y voten!
      </p>

      <main className='flex max-w-screen-xl mx-auto mt-20 gap-4 justify-center'>
        <article className='border px-2 py-2 rounded-md w-80'>
          <span className='text-slate-400'>Mateo Alvarez</span>
          <h2 className='text-2xl font-bold mb-2'>Ir a un restaurant</h2>
          <span className='bg-green-100 px-2 py-1 rounded-full text-xs'>
            Mar. 18:00hs
          </span>
          <hr className='my-4' />
          <p>
            Unas pizzas en Panda bar y despues nos vamos para la casa de Pedro!
          </p>
          <div className='flex justify-between items-center'>
            <button className='px-8 py-1 my-4 bg-green-600 text-white rounded-full shadow-md shadow-green-200 hover:shadow-lg hover:shadow-green-200 transition-shadow'>
              ¡Unirse!
            </button>
            <div className='flex items-center'>
              <span className='mr-6 font-semibold text-green-600'>+4</span>
              <img
                src='http://placehold.it/40'
                alt='avatar'
                className='rounded-full w-8 h-8 outline outline-2 outline-white -ml-4'
              />
              <img
                src='http://placehold.it/40'
                alt='avatar'
                className='rounded-full w-8 h-8 outline outline-2 outline-white -ml-4'
              />
              <img
                src='http://placehold.it/40'
                alt='avatar'
                className='rounded-full w-8 h-8 outline outline-2 outline-white -ml-4'
              />
            </div>
          </div>
        </article>
        <article className='border px-2 py-2 rounded-md w-80 relative'>
          <span className='text-slate-400'>Mateo Alvarez</span>
          <h2 className='text-2xl font-bold mb-2'>Noche de Overwatch</h2>
          <span className='bg-green-100 px-2 py-1 rounded-full text-xs'>
            Mar. 22:00hs
          </span>
          <hr className='my-4' />
          <div className='flex flex-col content-between'>
            <p className='mb-auto'>Unas partidas cortas</p>
            <div className='flex justify-between items-center'>
              <button className='px-8 py-1 my-4 bg-green-600 text-white rounded-full shadow-md shadow-green-200 hover:shadow-lg hover:shadow-green-200 transition-shadow'>
                ¡Unirse!
              </button>
              <div className='flex items-center'>
                <span className='mr-6 font-semibold text-green-600'>+6</span>
                <img
                  src='http://placehold.it/40'
                  alt='avatar'
                  className='rounded-full w-8 h-8 outline outline-2 outline-white -ml-4'
                />
                <img
                  src='http://placehold.it/40'
                  alt='avatar'
                  className='rounded-full w-8 h-8 outline outline-2 outline-white -ml-4'
                />
                <img
                  src='http://placehold.it/40'
                  alt='avatar'
                  className='rounded-full w-8 h-8 outline outline-2 outline-white -ml-4'
                />
              </div>
            </div>
          </div>
        </article>
        <article className='border px-2 py-2 rounded-md w-80'>
          <span className='text-slate-400'>Mateo Alvarez</span>
          <h2 className='text-2xl font-bold mb-2'>Ir a un restaurant</h2>
          <span className='bg-green-100 px-2 py-1 rounded-full text-xs'>
            Mar. 18:00hs
          </span>
          <hr className='my-4' />
          <p>
            Unas pizzas en Panda bar y despues nos vamos para la casa de Pedro!
          </p>
          <div className='flex justify-between items-center'>
            <button className='px-8 py-1 my-4 bg-green-600 text-white rounded-full shadow-md shadow-green-200 hover:shadow-lg hover:shadow-green-200 transition-shadow'>
              ¡Unirse!
            </button>
            <div className='flex items-center'>
              <span className='mr-6 font-semibold text-green-600'>+4</span>
              <img
                src='http://placehold.it/40'
                alt='avatar'
                className='rounded-full w-8 h-8 outline outline-2 outline-white -ml-4'
              />
              <img
                src='http://placehold.it/40'
                alt='avatar'
                className='rounded-full w-8 h-8 outline outline-2 outline-white -ml-4'
              />
              <img
                src='http://placehold.it/40'
                alt='avatar'
                className='rounded-full w-8 h-8 outline outline-2 outline-white -ml-4'
              />
            </div>
          </div>
        </article>
      </main>
    </>
  )
}

export default Home
