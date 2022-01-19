interface Props {
  postId: string
  userId: string | undefined
}

export const outIdea = async ({ postId, userId }: Props) => {
  const postUpdated = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/post/outIdea`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          postId: postId,
          userId: userId,
        },
      }),
    }
  )

  return postUpdated
}
