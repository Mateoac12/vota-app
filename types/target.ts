import { User } from './user'

export interface TargetProp {
  id: string
  owner: User
  ownerId: string
  title: string
  date: string
  description?: string | null
  members: {
    users: User[]
  }
}
