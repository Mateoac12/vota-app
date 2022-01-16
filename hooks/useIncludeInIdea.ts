import { includeInIdea } from 'services/includeInIdea'
import { User } from 'types/user'

interface Props {
  postId: string
  userToInclude: string | undefined
}

export const useIncludeInIdea = () => {
  const handleInluce = async ({ postId, userToInclude }: Props) => {
    const ideaInclude = await includeInIdea({ postId, userToInclude })
  }

  return {
    handleInluce,
  }
}
