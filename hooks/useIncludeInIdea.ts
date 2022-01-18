import { includeInIdea } from 'services/includeInIdea'

interface Props {
  postId: string
  userToInclude: string | undefined
}

export const useIncludeInIdea = () => {
  const handleInluce = async ({ postId, userToInclude }: Props) => {
    const ideaInclude = await includeInIdea({ postId, userToInclude })
    console.log({ ideaInclude })
  }

  return {
    handleInluce,
  }
}
