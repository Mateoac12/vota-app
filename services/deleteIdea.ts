interface Props {
  postId: string
}

export const deleteIdea = async ({ postId }: Props) => {
  const deletedIdea = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/post/deleteIdea`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          postId: postId,
        },
      }),
    }
  )

  return deletedIdea
}
