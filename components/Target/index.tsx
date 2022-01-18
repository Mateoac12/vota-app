import { Alert } from 'components/Alert'
import { useAlert } from 'hooks/useAlert'
import { useCheckIsMember } from 'hooks/useCheckIsMember'
import { useIncludeInIdea } from 'hooks/useIncludeInIdea'
import { useRouter } from 'next/router'
import { TargetProp } from 'types/target'

import { WhatsappIcon } from './WhatsappIcon'

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

  const router = useRouter()
  const { alert, setAlert } = useAlert()
  const { handleInluce } = useIncludeInIdea()
  const { isMember, userId } = useCheckIsMember({ members })

  const handleCopyText = () => {
    navigator.clipboard.writeText(
      `${window.location.origin}/idea/${content.id}`
    )
    setAlert('Link copiado correctamente 😁')
  }

  const handleSendInclude = async () => {
    if (falseInformation) return
    setAlert('¡Ya estas dentro! 🙌🏻')
    await handleInluce({ postId: content.id, userToInclude: userId })
    router.push(`/idea/${content.id}`)
  }

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
          {userId === owner.id ? (
            <button
              onClick={handleCopyText}
              className='px-4 py-1 my-4 bg-green-600 text-white rounded-full shadow-md shadow-green-200 hover:shadow-lg hover:shadow-green-200 transition-shadow flex items-center gap-1'
            >
              <WhatsappIcon />
              Copiar link
            </button>
          ) : (
            <button
              onClick={handleSendInclude}
              disabled={isMember}
              className={`px-8 py-1 my-4 bg-green-600 text-white rounded-full shadow-md shadow-green-200 hover:shadow-lg hover:shadow-green-200 transition-shadow ${
                isMember &&
                'opacity-50 cursor-not-allowed hover:shadow-md hover:shadow-green-200'
              }`}
            >
              {isMember ? '¡Unido!' : '¡Unirse!'}
            </button>
          )}
          <div className='flex items-center'>
            <span className='mr-6 font-semibold text-green-600'>
              +{users.length}
            </span>
            {users &&
              users.map((user) => (
                <img
                  key={user.id}
                  src={user.image}
                  className='rounded-full w-8 h-8 outline outline-2 outline-white -ml-4'
                />
              ))}
          </div>
        </div>
      </article>
      {alert && <Alert>{alert}</Alert>}
    </>
  )
}
