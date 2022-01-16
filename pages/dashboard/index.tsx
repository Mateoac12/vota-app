import { PanelCreateIdea } from 'components/PanelCreatIdea'
import { PanelIncludeIdea } from 'components/PanelIncludeIdea'
import { Target } from 'components/Target'
import { useSaveGlobalIdeas } from 'hooks/useSaveGlobalIdeas'
import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/react'
import Head from 'next/head'
import { prisma } from 'prisma/index'
import { useEffect } from 'react'
import { TargetProp } from 'types/target'

interface Props {
  listPosts: TargetProp[]
}

const Dashboard: NextPage<Props> = ({ listPosts }) => {
  const { ideas, setIdeas } = useSaveGlobalIdeas()

  useEffect(() => setIdeas(listPosts))

  return (
    <>
      <Head>
        <title>Vota app! 📊 | Mis ideas</title>
        <meta
          name='description'
          content='Crea ideas y compartelas con tus amigos. ¡Ellos se pueden sumar a ellas y ser aún más! Solo con un click'
        />
      </Head>
      <main className='max-w-screen-lg mx-auto'>
        <h1 className='text-4xl sm:text-6xl font-bold max-w-4xl text-center mx-auto mt-40 leading-tight'>
          ¡Lista de todas tus ideas!
        </h1>
        <p className='text-lg text-center mt-8 opacity-90'>
          ¡Compártelas con tus amigos enviando el link y sean más!
        </p>
        <div className='flex flex-col items-center gap-8 sm:flex-row sm:gap-4 justify-center mt-8 mb-16'>
          <PanelCreateIdea />
          <PanelIncludeIdea />
        </div>

        <section className='mt-10 flex justify-center gap-4 flex-wrap mb-40 px-4'>
          {ideas &&
            ideas.map((post) => <Target key={post.id} content={post} />)}
        </section>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  const listPosts = await prisma.post.findMany({
    where: {
      ownerId: session?.user?.id,
      /* members: {
        usersId: {
          has: session?.user?.id,
        },
      }, */
    },
    include: {
      // members: true,
      owner: true,
      members: {
        include: {
          users: true,
        },
      },
    },
  })

  if (!session)
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }

  return {
    props: {
      listPosts: JSON.parse(JSON.stringify(listPosts)),
    },
  }
}

export default Dashboard
