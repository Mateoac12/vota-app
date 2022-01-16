import { Target } from 'components/Target'
import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { prisma } from 'prisma/index'
import type { TargetProp } from 'types/target'

interface Props {
  post: TargetProp
}

const Idea: NextPage<Props> = ({ post }) => {
  if (!post)
    return (
      <>
        <Head>
          <title>Vota app! 📊 | No encontramos esa idea</title>
          <meta
            name='description'
            content='Crea ideas y compartelas con tus amigos. ¡Ellos se pueden sumar a ellas y ser aún más! Solo con un click'
          />
        </Head>
        <h1 className='text-4xl font-bold max-w-4xl text-center mx-auto mt-40 leading-tight'>
          No hay resultados de esta idea 👀
        </h1>
      </>
    )

  return (
    <>
      <Head>
        <title>Vota app! 📊 | Idea de {post.owner.name}</title>
        <meta
          name='description'
          content={`Únete a la idea de ${post.owner.name} y sean más! Nombre de la idea: ${post.title}. Descripción: ${post.description}`}
        />
      </Head>
      <main className='max-w-screen-lg mx-auto'>
        <h1 className='text-4xl font-bold max-w-4xl text-center mx-auto mt-40 leading-tight'>
          ¡Únete a la idea de {post.owner.name}!
        </h1>
        <section className='mt-20 flex gap-4 flex-wrap justify-center px-4'>
          <Target content={post} />
        </section>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const postId = params?.id as string

  const idea = await prisma.post.findFirst({
    where: {
      id: postId,
    },
    include: {
      owner: true,
      members: {
        include: {
          users: true,
        },
      },
    },
  })

  return {
    props: {
      post: JSON.parse(JSON.stringify(idea)),
    },
  }
}

export default Idea
