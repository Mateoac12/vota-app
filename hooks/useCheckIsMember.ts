import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { User } from 'types/user'

interface MembersType {
  members: {
    users: User[]
  }
}

export const useCheckIsMember = ({ members }: MembersType) => {
  const [isMember, setIsMember] = useState<boolean>(false)
  const { data } = useSession()

  const userId = data?.user?.id

  useEffect(() => {
    if (userId) {
      const isMember = members.users.some((user) => user.id === userId)
      setIsMember(isMember)
    }
  }, [members.users, userId])

  return {
    isMember,
    userId,
  }
}
