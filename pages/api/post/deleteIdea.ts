import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'prisma/index'

export default async function deleteIdea(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { postId } = req.body.data

  console.log(postId)

  const deletedIdea = await prisma.post.delete({
    where: {
      id: postId,
    },
  })

  return res.status(200).json(deletedIdea)
}
