import { IdeasContext } from 'context/IdeasContext'
import { useContext, useEffect } from 'react'
import { TargetProp } from 'types/target'

export const useSaveGlobalIdeas = () => {
  const { ideas, setIdeas }: { ideas: TargetProp[]; setIdeas: any } =
    useContext(IdeasContext)

  return {
    ideas,
    setIdeas,
  }
}
