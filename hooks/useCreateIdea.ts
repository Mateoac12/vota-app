import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { postIdea } from 'services/postIdea'
import { TargetProp } from 'types/target'

interface Content {
  title: string
  description: string
  date: string
}

export const useCreateIdea = () => {
  const [posts, setPosts] = useState([] as TargetProp[])
  const { data } = useSession()

  const id = data?.user?.id || ''

  const handleSubmitIdea = async (content: Content) => {
    const { title, date, description } = content

    const { newPost } = await postIdea({
      paramsOfPost: {
        title,
        description,
        date,
        id,
      },
    })

    setPosts([...posts, await newPost.json()])
  }

  return {
    handleSubmitIdea,
    posts,
  }
}
