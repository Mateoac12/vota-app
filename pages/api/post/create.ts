import { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'prisma/index'

export default async function create(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body
  const newPost = await prisma.post.create(body)

  return res.status(200).json(newPost)
}
