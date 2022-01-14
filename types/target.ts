import { User } from './user'

export interface TargetProp {
  content: {
    id: string
    owner: string
    title: string
    date: string
    description?: string | null
    members: User[]
  }
}
