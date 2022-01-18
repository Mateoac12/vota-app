import { Target } from 'components/Target'
import { useSaveGlobalIdeas } from 'hooks/useSaveGlobalIdeas'
import { useEffect } from 'react'
import { TargetProp } from 'types/target'

interface Props {
  listPosts: TargetProp[]
}

export const ListOfIdeas: React.FC<Props> = ({ listPosts }) => {
  const { ideas, setIdeas } = useSaveGlobalIdeas()

  useEffect(() => setIdeas(listPosts))

  return (
    <section className='mt-10 flex justify-center gap-4 flex-wrap mb-40 px-4'>
      {ideas && ideas.map((post) => <Target key={post.id} content={post} />)}
    </section>
  )
}
