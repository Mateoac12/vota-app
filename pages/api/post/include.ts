import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'prisma/index'

export default async function include(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { postId, userToInclude } = req.body.data

  const updateIdea = await prisma.memberOfPost.update({
    where: {
      postId: postId,
    },
    data: {
      users: {
        connect: [{ id: userToInclude }],
      },
      usersId: [userToInclude],
    },
  })

  return res.status(200).json(updateIdea)
}
