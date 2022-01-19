import { Alert } from 'components/Alert'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { outIdea } from 'services/outIdea'
import { TargetProp } from 'types/target'
import { TrashIcon } from './TrashIcon'
import { UserMinusIcon } from './UserMinusIcon'

interface Props {
  content: TargetProp
  falseInformation?: boolean
}

export const ButtonOutIdea: React.FC<Props> = ({
  content,
  falseInformation = false,
}) => {
  const router = useRouter()
  const { data } = useSession()
  const [alertMessage, setAlertMessage] = useState<string | null>(null)

  const userId = data?.user?.id
  const ownerIdea = content.ownerId
  const postId = content.id

  const handleOutIdea = async () => {
    setAlertMessage('Saliendo de la idea...')
    await outIdea({ postId, userId })
    router.push('/')
  }

  if (
    falseInformation ||
    !content.members.users.some((user) => user.id === userId)
  )
    return null

  if (userId === ownerIdea)
    return (
      <>
        <button className='px-2 py-2 rounded-full text-white bg-red-400 shadow-md shadow-red-200 hover:shadow-lg hover:shadow-red-200 transition-shadow'>
          <TrashIcon />
        </button>
        {alertMessage && <Alert>{alertMessage}</Alert>}
      </>
    )

  return (
    <>
      <button
        onClick={handleOutIdea}
        className='px-2 py-2 rounded-full text-white bg-red-400 shadow-md shadow-red-200 hover:shadow-lg hover:shadow-red-200 transition-shadow'
      >
        <UserMinusIcon />
      </button>
      {alertMessage && <Alert>{alertMessage}</Alert>}
    </>
  )
}
