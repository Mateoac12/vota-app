interface Props {
  paramsOfPost: {
    title: string
    description: string
    date: string
    id: string
  }
}

export const postIdea = async ({ paramsOfPost }: Props) => {
  const { title, description, date, id } = paramsOfPost

  const newPost = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/post/create`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          title: title,
          date: new Date(date),
          description: description,
          members: {
            create: {
              usersId: [id],
              users: {
                connect: [{ id: id }],
              },
            },
          },
          ownerId: id,
        },
      }),
    }
  )

  return {
    newPost,
  }
}
