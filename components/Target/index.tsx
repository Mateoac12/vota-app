import { ButtonOutIdea } from 'components/ButtonOutIdea'
import { ButtonTarget } from 'components/ButtonTarget'
import { TargetProp } from 'types/target'
interface Props {
  content: TargetProp
  falseInformation?: boolean
}

export const Target: React.FC<Props> = ({
  content,
  falseInformation = false,
}) => {
  const { title, date, description, owner, members } = content
  const { users } = members

  return (
    <>
      <article className='border px-2 py-2 rounded-md w-full sm:w-80'>
        <span className='text-slate-400'>{owner.name}</span>
        <h2 className='text-2xl font-bold mb-2'>{title}</h2>
        <span className='bg-green-100 px-2 py-1 rounded-full text-xs'>
          {new Intl.DateTimeFormat('es-ES', {
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          }).format(new Date(date))}
        </span>
        <hr className='my-4' />
        <p>{description || 'Sin descripción...'}</p>
        <div className='flex justify-between items-center sticky top-full'>
          <div className='flex items-center gap-2'>
            <ButtonTarget
              content={content}
              falseInformation={falseInformation}
            />
            <ButtonOutIdea
              content={content}
              falseInformation={falseInformation}
            />
          </div>
          <div className='flex items-center'>
            <span className='mr-6 font-semibold text-green-600'>
              +{users.length}
            </span>
            {users &&
              users
                .slice(0, 5)
                .map((user) => (
                  <img
                    key={user.id}
                    src={user.image}
                    className='rounded-full w-8 h-8 outline outline-2 outline-white -ml-4'
                  />
                ))}
          </div>
        </div>
      </article>
    </>
  )
}
