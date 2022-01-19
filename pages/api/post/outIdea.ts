import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'prisma/index'

export default async function outIdea(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { userId, postId } = req.body.data

  const post = await prisma.memberOfPost.update({
    where: {
      postId: postId,
    },
    data: {
      users: {
        disconnect: { id: userId },
      },
    },
  })

  return res.status(200).json(post)
}
