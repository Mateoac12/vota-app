import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import { prisma } from 'prisma/index'

export default async function list(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req })

  const listPost = await prisma.post.findMany({
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

  return res.status(200).json(listPost)
}
