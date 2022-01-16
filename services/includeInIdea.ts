interface Props {
  postId: string
  userToInclude: string | undefined
}

export const includeInIdea = async ({ postId, userToInclude }: Props) => {
  const idea = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/post/include`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          postId: postId,
          userToInclude: userToInclude,
        },
      }),
    }
  )

  return {
    idea,
  }
}
