import { useRouter } from 'next/router'

import { Alert } from 'components/Alert'
import { TargetProp } from 'types/target'

import { useCheckIsMember } from 'hooks/useCheckIsMember'
import { useIncludeInIdea } from 'hooks/useIncludeInIdea'
import { useAlert } from 'hooks/useAlert'

import { WhatsappIcon } from './WhatsappIcon'
import LoginButton from 'components/LoginButton'

interface Props {
  content: TargetProp
  falseInformation?: boolean
}

export const ButtonTarget: React.FC<Props> = ({
  content,
  falseInformation,
}) => {
  const { handleInluce } = useIncludeInIdea()
  const { isMember, userId } = useCheckIsMember({ members: content.members })
  const router = useRouter()
  const { alert, setAlert } = useAlert()

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

  if (typeof userId === 'undefined' && !falseInformation)
    return (
      <div className='my-4'>
        <p className='my-1 text-sm'>Inicia sesión para unirte</p>
        <LoginButton />
      </div>
    )

  return (
    <>
      {userId === content.owner.id ? (
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
      {alert && <Alert>{alert}</Alert>}
    </>
  )
}
