import { useSession } from 'next-auth/react'
import { postIdea } from 'services/postIdea'

interface Content {
  title: string
  description: string
  date: string
}

export const useCreateIdea = () => {
  const { data } = useSession()

  const id = data?.user?.id || ''

  const handleSubmitIdea = async (content: Content) => {
    const { title, date, description } = content

    await postIdea({
      paramsOfPost: {
        title,
        description,
        date,
        id,
      },
    })
  }

  return {
    handleSubmitIdea,
  }
}
